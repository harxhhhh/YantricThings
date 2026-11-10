import { appConfig } from '#lib/server/config/app-config.js';
import { requestContext } from './request-context.js';

/** Access-Control-* headers for the current API request. */
export function corsHeaders() {
  const { request } = requestContext();
  const config = appConfig();
  const origin = request.headers.get('origin') ?? '';
  const allowed = config.cors_origins ?? [];

  const headers = {};
  if (origin !== '' && allowed.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Vary'] = 'Origin';
  } else {
    headers['Access-Control-Allow-Origin'] = '*';
  }
  headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type';
  // The PHP list omitted DELETE although /api/vehicles/{id} supports it.
  headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
  return headers;
}
