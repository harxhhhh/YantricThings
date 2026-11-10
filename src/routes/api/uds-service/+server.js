import { udsServiceList } from '#lib/server/handlers/catalog.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';

export const GET = endpoint(() => udsServiceList());
export { fallback, trailingSlash };
