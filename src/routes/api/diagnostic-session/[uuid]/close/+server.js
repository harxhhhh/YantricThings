import { closeSession } from '#lib/server/handlers/sessions.js';
import { endpoint, segmentFromEnd, fallback, trailingSlash } from '#lib/server/http/endpoint.js';
import { urlDecode } from '#lib/server/utils/php.js';

export const PUT = endpoint((event) => closeSession(urlDecode(segmentFromEnd(event, 1))));
export { fallback, trailingSlash };
