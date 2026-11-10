/**
 * Utility classes for the <html> and <body> elements, per route.
 *
 * Those two elements live in app.html, shared by every page, so a page cannot style them from
 * its own markup. hooks.server.js looks the route up here and fills the class placeholders.
 */
const SHELLS = {
  '/': {
    html: 'w-full [text-size-adjust:100%] scroll-smooth motion-reduce:scroll-auto',
    body: 'w-full min-w-0 m-0 bg-white text-text font-inter-segoe-ui leading-[1.6] overflow-x-hidden antialiased [&.nav-open]:overflow-y-hidden'
  },
  '/default.php': {
    html: 'scroll-smooth',
    body: 'm-0 bg-paper text-ink font-inter-2 leading-[1.6] overflow-x-hidden'
  },
  '/canvision': {
    html: 'scroll-smooth motion-reduce:scroll-auto',
    body: 'm-0 bg-surface text-text font-inter antialiased'
  },
  '/contact_page': {
    html: 'scroll-smooth motion-reduce:scroll-auto',
    body: 'm-0 bg-white text-text font-inter leading-[1.6] antialiased selection:bg-primary selection:text-white'
  },
  '/vehicleiq-web/login': {
    html: 'min-h-full',
    body: 'min-h-screen m-0 bg-surface text-text font-inter antialiased'
  },
  '/vehicleiq-web/portal': {
    html: 'w-full min-h-full',
    body: 'w-full min-h-full m-0 bg-[#f5f8fc] text-text font-inter-arial-helvetica overflow-x-hidden [&.dark-ui]:bg-navy'
  }
};

const NONE = { html: '', body: '' };

/** @param {string | null} routeId */
export function shellFor(routeId) {
  return SHELLS[routeId?.replace(/\/$/, '') || '/'] ?? SHELLS[routeId ?? ''] ?? NONE;
}
