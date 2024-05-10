import { isAsyncIterable } from '@envelop/core';
import { getResponseInitByRespectingErrors } from '../../error.js';
import { jsonStringifyResultWithoutInternals } from './stringify.js';
export function getSSEProcessor() {
    return function processSSEResult(result, fetchAPI) {
        let pingIntervalMs = 12000;
        // for testing the pings, reduce the timeout
        if (globalThis.process?.env?.NODE_ENV === 'test') {
            pingIntervalMs = 300;
        }
        const headersInit = {
            'Content-Type': 'text/event-stream',
            Connection: 'keep-alive',
            'Cache-Control': 'no-cache',
            'Content-Encoding': 'none',
        };
        const responseInit = getResponseInitByRespectingErrors(result, headersInit, true);
        let iterator;
        let pingInterval;
        const textEncoder = new fetchAPI.TextEncoder();
        const readableStream = new fetchAPI.ReadableStream({
            start(controller) {
                // always start with a ping because some browsers dont accept a header flush
                // causing the fetch to stall until something is streamed through the response
                controller.enqueue(textEncoder.encode(':\n\n'));
                // ping client every 12 seconds to keep the connection alive
                pingInterval = setInterval(() => {
                    if (!controller.desiredSize) {
                        clearInterval(pingInterval);
                        return;
                    }
                    controller.enqueue(textEncoder.encode(':\n\n'));
                }, pingIntervalMs);
                if (isAsyncIterable(result)) {
                    iterator = result[Symbol.asyncIterator]();
                }
                else {
                    let finished = false;
                    iterator = {
                        next: () => {
                            if (finished) {
                                return Promise.resolve({ done: true, value: null });
                            }
                            finished = true;
                            return Promise.resolve({ done: false, value: result });
                        },
                    };
                }
            },
            async pull(controller) {
                const { done, value } = await iterator.next();
                if (value != null) {
                    controller.enqueue(textEncoder.encode(`event: next\n`));
                    const chunk = jsonStringifyResultWithoutInternals(value);
                    controller.enqueue(textEncoder.encode(`data: ${chunk}\n\n`));
                }
                if (done) {
                    controller.enqueue(textEncoder.encode(`event: complete\n\n`));
                    clearInterval(pingInterval);
                    controller.close();
                }
            },
            async cancel(e) {
                clearInterval(pingInterval);
                await iterator.return?.(e);
            },
        });
        return new fetchAPI.Response(readableStream, responseInit);
    };
}
