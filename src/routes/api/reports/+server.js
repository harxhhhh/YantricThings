import { generateReport, reportsList } from '#lib/server/handlers/reports.js';
import { endpoint, fallback, trailingSlash } from '#lib/server/http/endpoint.js';

export const POST = endpoint(() => generateReport());
export const GET = endpoint(() => reportsList());
export { fallback, trailingSlash };
