/**
 * Browser-side session storage for the VehicleIQ portal.
 *
 * The API issues a bearer token at sign-in; it is kept in localStorage under the same
 * keys the portal has always used, so existing sessions survive a deploy.
 * When Keycloak is introduced, this is the one module that changes.
 */

const KEYS = {
  apiBase: 'viq_api_base',
  token: 'viq_token',
  username: 'viq_username',
  role: 'viq_role'
};

/** Base URL of the API for the signed-in session ("/api" when none is stored). */
export function getApiBase() {
  return (localStorage.getItem(KEYS.apiBase) || '/api').replace(/\/+$/, '');
}

export function getToken() {
  return localStorage.getItem(KEYS.token);
}

export function getUsername() {
  return localStorage.getItem(KEYS.username) || '';
}

export function saveSession({ apiBase, token, username, role }) {
  localStorage.setItem(KEYS.apiBase, apiBase);
  localStorage.setItem(KEYS.token, token);
  localStorage.setItem(KEYS.username, username);
  localStorage.setItem(KEYS.role, role);
}

/**
 * Also drop the server's session cookie (HttpOnly, so only the server can). `keepalive` lets the
 * request finish even though the caller navigates to the login page straight afterwards.
 */
function endServerSession() {
  try {
    fetch('/api/auth/logout', { method: 'POST', keepalive: true }).catch(() => {});
  } catch {
    /* no fetch available — the cookie simply expires with the browser session */
  }
}

/** Sign out: forget who the user is. */
export function clearSession() {
  localStorage.removeItem(KEYS.token);
  localStorage.removeItem(KEYS.username);
  localStorage.removeItem(KEYS.role);
  endServerSession();
}

/** The server rejected the token: drop it so the next page load goes to sign-in. */
export function clearToken() {
  localStorage.removeItem(KEYS.token);
  endServerSession();
}
