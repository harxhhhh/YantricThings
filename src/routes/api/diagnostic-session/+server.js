import { createSession } from '#lib/server/handlers/sessions.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';

export const POST = endpoint(() => createSession());
export { fallback, trailingSlash };
