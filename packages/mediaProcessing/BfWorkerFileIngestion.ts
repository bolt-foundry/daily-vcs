import { getLogger, rxjs } from "deps.ts";
import { BfWorkerObservable } from "packages/bfWorker/BfWorker.ts";
import { BfError } from "lib/BfError.ts";
import { MP4Box } from "packages/deps.ts";

const { map, Subject } = rxjs;

const logger = getLogger(import.meta);

export class ErrorOpfsGenericError extends BfError {
  constructor(message = "Opfs had an unexpected issue") {
    super(message);
  }
}

export class ErrorOpfsNotSupported extends ErrorOpfsGenericError {
  constructor(message = "Opfs is not supported on this platform") {
    super(message);
  }
}

export type FileMetadata = {
  name: string;
  size: number;
};

type OpfsProgressEvent = {
  type: "progress";
  file: FileMetadata;
  bytesWritten: number;
  totalBytesWritten: number;
  data?: Uint8Array;
};

type OpfsCompletionEvent = {
  type: "completion";
  file: FileMetadata;
  message: string;
};

type OpfsErrorEvent = {
  type: "error";
  file: FileMetadata;
  error: ErrorOpfsGenericError;
};

export type OpfsEvent =
  | OpfsProgressEvent
  | OpfsCompletionEvent
  | OpfsErrorEvent;

export type IngestionProgress = {
  type: "audio" | "opfs" | "upload";
  progress: number;
};

export type UploadEvent = {
  type: "uploading";
  progress: number;
  bytesUploaded: number;
  totalBytesToUpload: number;
};

export type AudioStreamOutput =
  | {
    type: "encodedAudioChunk";
    data: EncodedAudioChunk;
    progress: number;
    totalBytesExpected: number;
  }
  | { type: "info"; info: string }
  | { type: "parsing" };

export class BfWorkerFileIngestion extends BfWorkerObservable {
  static {
    this.registerWorker(
      this,
      "/packages/mediaProcessing/BfWorkerFileIngestion.ts",
    );
  }

  ingest = (file: File, name: string): rxjs.Observable<IngestionProgress> => {
    const copyObservable = this.copyToOpfs(file, name);
    const progressCopyObservable = copyObservable.pipe(
      map((event): IngestionProgress => {
        let progress = 0;
        if (event.type === "progress") {
          progress = event.totalBytesWritten / file.size;
        } else if (event.type === "completion") {
          progress = 1;
        }
        return {
          type: "opfs",
          progress,
        };
      }),
    );

    const audioObservable = this.extractAudioFromStream(copyObservable);
    const progressAudioObservable = audioObservable.pipe(
      map((event): IngestionProgress => {
        let progress = 0;
        if (event.type === "encodedAudioChunk") {
          progress = event.progress;
        }
        return {
          type: "audio",
          progress,
        };
      }),
    );

    const uploadableObservable = this.uploadFileFromStream(audioObservable);
    const progressUploadableObservable = uploadableObservable.pipe(
      map((event): IngestionProgress => ({
        type: "upload",
        progress: event.progress,
      })),
    );

    const mergedObservable = rxjs.merge(
      progressAudioObservable,
      progressCopyObservable,
      progressUploadableObservable,
    );

    return mergedObservable;
  };

  private copyToOpfs(file: File, name: string): rxjs.Observable<OpfsEvent> {
    const subject = new Subject<OpfsEvent>();
    const fileMetadata: FileMetadata = { name, size: file.size };

    (async () => {
        let totalWritten = 0;
      try {
        const opfsDirectory = await navigator.storage.getDirectory();
        const opfsFile = await opfsDirectory.getFileHandle(name, {
          create: true,
        });

        const writableStream = await opfsFile.createWritable();
        const reader = file.stream().getReader();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          await writableStream.write(value);
          totalWritten += value.length;

          subject.next({
            type: "progress",
            file: fileMetadata,
            bytesWritten: value.length,
            totalBytesWritten: totalWritten,
          });
        }

        await writableStream.close();
        logger.log("File successfully written to Opfs");

        subject.next({
          type: "completion",
          file: fileMetadata,
          message: "File successfully written to Opfs",
        });
        subject.complete();
      } catch (error) {
        logger.error(error);
        logger.error(totalWritten)
        subject.error({
          type: "error",
          file: fileMetadata,
          error: new ErrorOpfsGenericError(error.message),
        });
      }
    })();

    return subject.asObservable();
  }

  private extractAudioFromStream(
    opfsObservable: rxjs.Observable<OpfsEvent>,
  ): rxjs.Observable<AudioStreamOutput> {
    logger.info("initializing_subject");
    const subject = new Subject<AudioStreamOutput>();
    const mp4boxFile = MP4Box.createFile();
    let totalSamples = 0;
    let extractedSamples = 0;
    let totalBytesExpected = 0;
    logger.info("mp4box_file_created");
    mp4boxFile.onError = function (e) {
      logger.info("Received Error Message " + e);
    };

    opfsObservable.subscribe({
      next: (event) => {
        if (event.type === "progress") {
          const data: Uint8Array | undefined = event.data;
          if (data) {
            // @ts-expect-error MP4box wants this property weirdly
            data.buffer.fileStart = totalBytesExpected;
            mp4boxFile.appendBuffer(data.buffer);
            totalBytesExpected += data.length;
          }
        }
      },
      complete: () => {
        logger.info("file_completed");
        mp4boxFile.flush();
      },
      error: (err) => {
        subject.error({
          type: "info",
          info: `Error extracting audio: ${err.message}`,
        });
      },
    });

    mp4boxFile.onMoovStart = (info) => {
      subject.next({
        type: "parsing",
      });
    };

    mp4boxFile.onReady = (info) => {
      logger.info("mp4box_file_ready");
      subject.next({
        type: "info",
        info,
      });

      const firstAudioTrack = info.tracks.find((track) =>
        track.type === "audio"
      );
      const audioTracksCount =
        info.tracks.filter((track) => track.type === "audio").length;
      if (audioTracksCount > 1) {
        logger.warn("More than one audio track found, using first one");
      }
      if (!firstAudioTrack) {
        throw new BfError("No audio track found");
      }
      totalSamples = firstAudioTrack.nb_samples;
      logger.info(`Total samples: ${totalSamples}`);
      mp4boxFile.setExtractionOptions(firstAudioTrack.id, firstAudioTrack, {});
      mp4boxFile.start();
    };

    mp4boxFile.onSamples = (id, user, samples) => {
      logger.info("i got samplez");

      for (const sample of samples) {
        const timestamp = sample.dts;
        const data = sample.data;
        const encodedAudioChunk = new EncodedAudioChunk({
          data,
          timestamp,
          type: "key",
        });
        extractedSamples += 1;
        subject.next({
          type: "encodedAudioChunk",
          data: encodedAudioChunk,
          progress: extractedSamples / totalSamples,
          totalBytesExpected,
        });
      }
    };

    return subject.asObservable();
  }

  private uploadFileFromStream(
    audioObservable: rxjs.Observable<AudioStreamOutput>,
  ): rxjs.Observable<UploadEvent> {
    const replaySubject = new rxjs.Subject<UploadEvent>();
    let bytesUploaded = 0;
    let totalBytesToUpload = 0;

    audioObservable.subscribe({
      next: async (audioChunkEvent) => {
        if (audioChunkEvent.type !== "encodedAudioChunk") {
          return;
        }

        const audioChunk = audioChunkEvent.data;
        totalBytesToUpload = audioChunkEvent.totalBytesExpected;
        logger.debug(
          `Uploading ${audioChunk.byteLength} bytes of ${audioChunkEvent.totalBytesExpected}`,
        );
        bytesUploaded += audioChunk.byteLength;
        replaySubject.next({
          type: "uploading",
          progress: audioChunkEvent.progress,
          bytesUploaded,
          totalBytesToUpload,
        });

        // try {
        //   const response = await fetch('/upload-endpoint', {
        //     method: 'POST',
        //     body: audioChunk, // Assuming audioChunk is the appropriate format
        //   });

        //   if (response.ok) {
        //     bytesUploaded += audioChunk.byteLength;
        //     const progress = bytesUploaded / totalBytesToUpload;

        //     replaySubject.next({
        //       type: "uploading",
        //       progress,
        //       bytesUploaded,
        //       totalBytesToUpload
        //     });
        //   } else {
        //     replaySubject.error(new Error("Failed to upload chunk"));
        //   }
        // } catch (error) {
        //   replaySubject.error(error);
        // }
      },
      complete: () => {
        replaySubject.complete();
      },
      error: (err) => {
        replaySubject.error(err);
      },
    });

    return replaySubject.asObservable();
  }
}
