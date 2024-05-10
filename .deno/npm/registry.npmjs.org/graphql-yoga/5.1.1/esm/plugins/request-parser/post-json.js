import { createGraphQLError } from '@graphql-tools/utils';
import { isContentTypeMatch } from './utils.js';
export function isPOSTJsonRequest(request) {
    return (request.method === 'POST' &&
        (isContentTypeMatch(request, 'application/json') ||
            isContentTypeMatch(request, 'application/graphql+json')));
}
export async function parsePOSTJsonRequest(request) {
    let requestBody;
    try {
        requestBody = await request.json();
    }
    catch (err) {
        const extensions = {
            http: {
                spec: true,
                status: 400,
            },
        };
        if (err instanceof Error) {
            extensions.originalError = {
                name: err.name,
                message: err.message,
            };
        }
        throw createGraphQLError('POST body sent invalid JSON.', {
            extensions,
        });
    }
    if (requestBody == null) {
        throw createGraphQLError(`POST body is expected to be object but received ${requestBody}`, {
            extensions: {
                http: {
                    status: 400,
                },
            },
        });
    }
    const requestBodyTypeof = typeof requestBody;
    if (requestBodyTypeof !== 'object') {
        throw createGraphQLError(`POST body is expected to be object but received ${requestBodyTypeof}`, {
            extensions: {
                http: {
                    status: 400,
                },
            },
        });
    }
    return requestBody;
}
