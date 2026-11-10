/**
 * Production entry point:  npm start   (= node --env-file-if-exists=.env server.js)
 *
 * It starts the stock adapter-node server (./build/index.js — same PORT / HOST / ORIGIN /
 * BODY_SIZE_LIMIT / graceful-shutdown behaviour) and puts one thing in front of it:
 * the image hotlink protection that lived in the PHP site's .htaccess.
 *
 *   # Hotlink protection for images (allow own site + empty referer for apps/bookmarks)
 *   RewriteCond %{HTTP_REFERER} !^$
 *   RewriteCond %{HTTP_REFERER} !^https?://(www\.)?yantricthings\.com/ [NC]
 *   RewriteCond %{HTTP_REFERER} !^https?://localhost [NC]
 *   RewriteCond %{HTTP_REFERER} !^https?://127\.0\.0\.1 [NC]
 *   RewriteRule \.(png|jpe?g|gif|webp|svg|ico)$ - [F,NC,L]
 *
 * This has to sit outside SvelteKit: adapter-node serves /static files itself, before any
 * SvelteKit hook would run. ("Options -Indexes" and the *.bak/.old/.zip blocking from the
 * .htaccess need no equivalent — Node never lists directories and only serves /static.)
 *
 * Extra allowance: a Referer on the same host as the request is never hotlinking, so the
 * site keeps working on staging domains / behind other hostnames.
 * Disable with HOTLINK_PROTECTION=off.
 */
import { server } from './build/index.js';

const IMAGE_REQUEST = /\.(png|jpe?g|gif|webp|svg|ico)$/i;
const ALLOWED_REFERERS = [
  /^https?:\/\/(www\.)?yantricthings\.com\//i,
  /^https?:\/\/localhost/i,
  /^https?:\/\/127\.0\.0\.1/i
];

const enabled = (process.env.HOTLINK_PROTECTION ?? 'on').toLowerCase() !== 'off';
const hostHeader = (process.env.HOST_HEADER ?? 'host').toLowerCase();

function isHotlink(req) {
  const referer = String(req.headers.referer ?? '');
  if (referer === '') return false;
  if (ALLOWED_REFERERS.some((re) => re.test(referer))) return false;
  try {
    if (new URL(referer).host === String(req.headers[hostHeader] ?? '')) return false;
  } catch {
    // unparsable referer -> treat as foreign
  }
  return true;
}

if (enabled) {
  const [adapterHandler] = server.listeners('request');
  server.removeAllListeners('request');
  server.on('request', (req, res) => {
    const pathname = (req.url ?? '/').split('?')[0];
    if (IMAGE_REQUEST.test(pathname) && isHotlink(req)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Forbidden');
      return;
    }
    return adapterHandler.call(server, req, res);
  });
}
