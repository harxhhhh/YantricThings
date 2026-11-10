/**
 * Every call the browser makes to the VehicleIQ API (/api/**) lives here.
 *
 * Each function resolves with the parsed JSON body and rejects with an ApiError whose
 * `message` is the server's `error` text (or a sensible default), so callers only need
 * try/catch. Pages and scripts should not call fetch() on /api themselves.
 */
import { getApiBase, getToken } from './session.js';

export class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

/** Paths of the portal's table tabs, keyed by tab name. */
const TABLE_ENDPOINTS = {
  vehicles: '/vehicles',
  ecu: '/ecu',
  did: '/did',
  dtc: '/dtc',
  routine: '/routine',
  uds: '/uds-service',
  live: '/logs',
  reports: '/reports'
};

/**
 * @param {string} path  e.g. "/vehicles"
 * @param {object} [options]
 * @param {string} [options.method]
 * @param {object} [options.body]          sent as JSON
 * @param {boolean} [options.auth]         send the bearer token (default true)
 * @param {string} [options.baseUrl]       override the stored API base
 * @param {*} [options.emptyValue]         result when the body isn't valid JSON
 * @param {string} options.errorMessage    used when the server sends no `error`
 */
async function request(path, { method = 'GET', body, auth = true, baseUrl, emptyValue = {}, errorMessage }) {
  const headers = {};
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (auth) headers.Authorization = 'Bearer ' + getToken();

  const response = await fetch((baseUrl ?? getApiBase()) + path, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body)
  });

  const data = await response.json().catch(() => emptyValue);
  if (!response.ok) {
    throw new ApiError(data.error || errorMessage, response.status);
  }
  return data;
}

/** The sign-in form always talks to this site's own /api. */
export function defaultApiBase() {
  return window.location.origin + '/api';
}

/** POST /auth/login → { token, username, role } */
export function login(username, password) {
  return request('/auth/login', {
    method: 'POST',
    body: { username, password },
    auth: false,
    baseUrl: defaultApiBase(),
    errorMessage: 'Login failed'
  });
}

/** GET /dashboard → record counts */
export function getDashboard() {
  return request('/dashboard', { errorMessage: 'Could not load dashboard' });
}

/** GET the rows of a table tab ("vehicles", "ecu", "did", "dtc", "routine", "uds", "live", "reports"). */
export function getTable(key) {
  return request(TABLE_ENDPOINTS[key], { emptyValue: [], errorMessage: 'Failed to load ' + key });
}

/** GET /vehicles */
export function getVehicles() {
  return request('/vehicles', { emptyValue: [], errorMessage: 'Failed to load vehicles' });
}

/** POST /vehicles */
export function createVehicle(vehicle) {
  return request('/vehicles', { method: 'POST', body: vehicle, errorMessage: 'Failed to save vehicle.' });
}

/** PUT /vehicles/{id} */
export function updateVehicle(id, vehicle) {
  return request('/vehicles/' + encodeURIComponent(id), {
    method: 'PUT',
    body: vehicle,
    errorMessage: 'Failed to update vehicle.'
  });
}

/** DELETE /vehicles/{id} */
export function deleteVehicle(id) {
  return request('/vehicles/' + encodeURIComponent(id), {
    method: 'DELETE',
    errorMessage: 'Failed to delete vehicle.'
  });
}
