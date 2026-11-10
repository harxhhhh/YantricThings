import { login } from '#lib/server/handlers/auth.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';

export const POST = endpoint(() => login());
export { fallback, trailingSlash };
