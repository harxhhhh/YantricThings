/**
 * JSON responses for the API handlers.
 *
 * In PHP, JsonResponse::send() echoed JSON and called exit(). Node has no exit(), so
 * sendJson() / sendError() throw a ResponseSent signal that the endpoint wrapper
 * (endpoint.js) turns into the HTTP response. Anything after a sendJson(...) / sendError(...)
 * call never runs, exactly like the PHP.
 *
 * NOTE for every `catch` block in the handlers: rethrow ResponseSent (see isResponseSent)
 * if the try body can call sendJson / sendError — exit() isn't catchable either.
 */

export class ResponseSent {
  constructor(data, status = 200) {
    this.data = data;
    this.status = status;
  }
}

export function isResponseSent(e) {
  return e instanceof ResponseSent;
}

/** @returns {never} */
export function sendJson(data, status = 200) {
  throw new ResponseSent(data, status);
}

/** @returns {never} */
export function sendError(message, status = 400, extra = {}) {
  return sendJson({ error: message, ...extra }, status);
}
