import { MP4Box } from "packages/deps.ts";
import { getLogger, rxjs } from "deps.ts";
import { OpfsEvent } from "lib/opfs.ts";
import { BfError } from "lib/BfError.ts";

const logger = getLogger(import.meta);

export type AudioStreamOutput =
  | {
    type: "encodedAudioChunk";
    data: EncodedAudioChunk;
    progress: number;
    totalBytesExpected: number;
  }
  | { type: "info"; info: string }
  | { type: "parsing" };

export function extractAudioToStream(
  fileObservable: rxjs.Observable<OpfsEvent>,
): rxjs.Observable<AudioStreamOutput> {
  logger.info("initializing_subject");
  const subject = new rxjs.ReplaySubject<AudioStreamOutput>();
  const mp4boxFile = MP4Box.createFile();
  let totalSamples = 0;
  let extractedSamples = 0;
  let totalBytesExpected = 0;
  logger.info("mp4box_file_created");

  mp4boxFile.onError = function (e) {
    logger.info("Received Error Message " + e);
  };

  fileObservable.subscribe({
    next: (event) => {
      if (event.type === "progress") {
        const data: Uint8Array | undefined = event.data;
        if (data) {
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

    const firstAudioTrack = info.tracks.find((track) => track.type === "audio");
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
    mp4boxFile.setExtractionOptions(
      firstAudioTrack.id,
      firstAudioTrack,
      {},
    );
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
