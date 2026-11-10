import { reportById } from '#lib/server/handlers/reports.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';
import { intval } from '#lib/server/utils/php.js';

export const GET = endpoint(({ params }) => reportById(intval(params.id)));
export { fallback, trailingSlash };
