import { getLogger, rxjs } from "deps.ts";
import { streamFileIngestion as ogStreamFileIngestion } from "packages/mediaProcessing/fileIngestion.ts";

const logger = getLogger(import.meta);

let isDeno = false;
let isInSharedWorker = false;

if (import.meta.main) {
  if (typeof Deno === "undefined") {
    globalThis.onconnect = function (e) {
      isInSharedWorker = true;
      const port = e.ports[0];
      port.onmessage = () => {
        logger.info('yoooo');
      }
      port.start();
    };
  } else {
    isDeno = true;
  }
}

export function streamFileIngestion(
  file: File,
  fileName: string,
): rxjs.Observable<{ type: string; data: any }> {
  const { sendMessage } = getSharedWorker();
  setTimeout(() => {
    const obs = sendMessage({ type: "ingestFile", data: { file, fileName } });
    obs.subscribe({
      next: (data) => {
        logger.debug(`Received message from shared worker: ${data}`);
      },
      error: (err) => {
        logger.error(err);
      },
      complete: () => {
        logger.debug(`Received complete message from shared worker`);
      },
    });
  });
  return ogStreamFileIngestion(file, fileName);
}

let sharedWorker: SharedWorker;
function getSharedWorker() {
  if (!sharedWorker) {
    sharedWorker = new SharedWorker("/workers/shared/sharedWorker.js", {
      name: "sharedWorker",
      type: "module",
      credentials: "same-origin",
    });

    sharedWorker.port.onmessage = function (e) {
      const message = e.data;
      logger.debug("Message received from SharedWorker:", message);
    };
  }

  // current bug is something to do with the message port cloning
  function sendMessage(
    value: unknown,
    ...transferrables: Transferable[]
  ): rxjs.Observable<any> {
    const subject = new rxjs.Subject<any>();

    const nextChannel = new MessageChannel();
    const completeChannel = new MessageChannel();
    const errorChannel = new MessageChannel();

    const nextPort = nextChannel.port2;
    const completePort = completeChannel.port2;
    const errorPort = errorChannel.port2;

    const incomingNextPort = nextChannel.port1;
    const incomingCompletePort = completeChannel.port1;
    const incomingErrorPort = errorChannel.port1;

    const transferrablesWithChannels = [
      ...transferrables,
      nextPort,
      completePort,
      errorPort,
    ];

    sharedWorker.port.postMessage(
      { value, nextPort, completePort, errorPort },
      transferrablesWithChannels,
    );

    incomingNextPort.onmessage = function (event) {
      const response = event.data;
      logger.debug("Next message received from SharedWorker:", response);
      subject.next(response);
    };

    incomingCompletePort.onmessage = function (event) {
      const response = event.data;
      logger.debug("Complete message received from SharedWorker:", response);
      subject.next(response);
      subject.complete();
    };

    incomingErrorPort.onmessage = function (event) {
      const error = event.data;
      logger.debug("Error message received from SharedWorker:", error);
      subject.error(error);
    };

    return subject.asObservable();
  }

  return { sendMessage };
}
