import { didByKey } from '#lib/server/handlers/catalog.js';
import { endpoint, segmentFromEnd, fallback, trailingSlash } from '#lib/server/http/endpoint.js';
import { urlDecode } from '#lib/server/utils/php.js';

export const GET = endpoint((event) => didByKey(urlDecode(segmentFromEnd(event))));
export { fallback, trailingSlash };
