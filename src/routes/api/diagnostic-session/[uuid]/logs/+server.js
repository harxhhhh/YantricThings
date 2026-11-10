import { appendLogs, sessionLogs } from '#lib/server/handlers/logs.js';
import { endpoint, segmentFromEnd, fallback, trailingSlash } from '#lib/server/http/endpoint.js';
import { urlDecode } from '#lib/server/utils/php.js';

export const POST = endpoint((event) => appendLogs(urlDecode(segmentFromEnd(event, 1))));
export const GET = endpoint((event) => sessionLogs(urlDecode(segmentFromEnd(event, 1))));
export { fallback, trailingSlash };
