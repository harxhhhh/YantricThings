import { didList } from '#lib/server/handlers/catalog.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';

export const GET = endpoint(() => didList());
export { fallback, trailingSlash };
