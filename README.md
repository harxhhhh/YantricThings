# Yantric Things — SvelteKit + Node.js

The `public_html` PHP/static site converted to **SvelteKit 3** running on **Node.js** (`adapter-node`).
All route names, JSON keys, SQL, class/method/function names and page scripts are the same as before.

```
npm install
cp .env.example .env     # fill in DB_USER / DB_PASS / TOKEN_SECRET
npm run dev              # http://localhost:5173
npm run build && npm start   # production, http://localhost:3000
```

Requires **Node ≥ 22.9** (`npm start` uses `--env-file-if-exists`).

---

## Project structure

```
src/
├── app.html
├── app.d.ts                    # types for event.locals (the signed-in user)
├── hooks.server.js             # resolves the API caller; central error logging
├── params.js                   # route param matchers (the `integer` in [id=integer])
├── lib/
│   ├── api/                    # browser → API
│   │   ├── api.js              #   every fetch() to /api lives here (login, getTable, vehicles CRUD…)
│   │   └── session.js          #   token / username storage (localStorage)
│   ├── scripts/                # page scripts, one per page (home, login, portal, …)
│   ├── styles/                 # app.css — the Tailwind entry (theme, breakpoints, keyframes)
│   └── server/                 # server-only code (never bundled for the browser)
│       ├── config/             #   env.js, app-config.js
│       ├── http/               #   endpoint wrapper, JSON responses, CORS, request context
│       ├── db/                 #   mysql2 pool + PDO-style wrapper, table-helper
│       ├── auth/               #   token.js (sign/verify), session.js (who is calling?), auth.js
│       ├── shell.js            #   <html>/<body> utility classes per route (used by hooks.server.js)
│       ├── handlers/           #   one file per feature: catalog, vehicles, reports, sessions, logs…
│       └── utils/php.js        #   PHP-compatible casts (intval, strval, date('c')…)
└── routes/
    ├── +page.svelte …          # pages — only page / server-endpoint files live here
    └── api/<feature>/+server.js  # thin: `export const GET = endpoint(() => handler())`
static/                         # served as-is (images)
sql/seed_admin.sql              # optional first-user seed
server.js                       # production entry point (adds image hotlink protection)
```

Rules of thumb:

- A `+server.js` under `routes/api` only wires an HTTP method to a handler in `lib/server/handlers`; it contains no SQL or logic.
- The browser never calls `fetch('/api/…')` directly — it uses a function from `lib/api/api.js`.
- Anything that touches the database, secrets or tokens lives under `lib/server/` (SvelteKit refuses to import it into client code).

### Authentication and `hooks.server.js`

The API authenticates with a Bearer token. For every `/api` request `hooks.server.js` calls `resolveUser()` (`lib/server/auth/session.js`) and stores the result in `event.locals.user`; handlers call `requireAuth()`, which reads it and answers `401` when it is `null`.

Page routes can't be guarded in the hook yet: the portal keeps its token in `localStorage`, which the server never sees. **When Keycloak is added** (OIDC login that sets an HttpOnly session cookie), change only `resolveUser()` and `lib/api/session.js`, drop the `/api` condition in the hook, and redirect unauthenticated page requests to the login page there.

---

## Routes (unchanged)

### Pages

| URL | Source |
|---|---|
| `/` | `src/routes/+page.svelte` (was `index.html` + `js/main.js` + `css/styles.css`) |
| `/canvision` | `src/routes/canvision/+page.svelte` |
| `/contact_page` | `src/routes/contact_page/+page.svelte` |
| `/default.php` | `src/routes/default.php/+page.svelte` |
| `/vehicleiq-web/` | redirects to `/vehicleiq-web/login/` (was a meta-refresh page) |
| `/vehicleiq-web/login/` | `src/routes/vehicleiq-web/login/+page.svelte` |
| `/vehicleiq-web/portal/` | `src/routes/vehicleiq-web/portal/+page.svelte` |

`login/` and `portal/` keep their trailing slash (their scripts redirect with `../login/`, `../portal/`).

### API (`api/index.php` router → one `+server.js` per route under `src/routes/api/`)

| Method | Path | Handler |
|---|---|---|
| GET | `/api/health` | `ApiHandlers.health` |
| POST | `/api/auth/login` | `ApiHandlers.login` |
| GET | `/api/dashboard` | `dashboard` |
| GET | `/api/ecu` · `/api/did` · `/api/did/{key}` · `/api/dtc` · `/api/routine` · `/api/flash` | `ecuList` · `didList` · `didByKey` · `dtcList` · `routineList` · `flashList` |
| GET | `/api/freeze-frame` · `/api/uds-service` · `/api/security` · `/api/security-libraries` · `/api/logs` | `freezeFrameList` · `udsServiceList` · `securityList` · `securityLibraryList` · `logs` |
| GET / POST | `/api/vehicles` | `vehicleList` / `vehicleCreate` |
| PUT / DELETE | `/api/vehicles/{id}` | `vehicleUpdate` / `vehicleDelete` |
| POST | `/api/diagnostic-session` | `createSession` |
| PUT | `/api/diagnostic-session/{uuid}/close` | `closeSession` |
| POST / GET | `/api/diagnostic-session/{uuid}/logs` | `appendLogs` / `sessionLogs` |
| POST / GET | `/api/reports` | `generateReport` / `reportsList` |
| GET | `/api/reports/{id}` | `reportById` |
| any | anything else under `/api` | `{"error":"Not found: METHOD /api/..."}` 404 |

`{id}` only matches digits (`src/params.js`), like the old `(\d+)`. Trailing slashes are accepted.

---

## Where the PHP went

| PHP | Node |
|---|---|
| `api/index.php` (router) | `src/routes/api/**/+server.js` + `src/lib/server/http/endpoint.js` |
| `includes/bootstrap.php` | `src/lib/server/config/app-config.js` (`appConfig`), `http/request-context.js` (`jsonBody`, `requestPath`), `http/cors.js` |
| `config.php` | `.env` / environment variables (see below) · `src/lib/server/config/env.js` |
| `includes/ApiHandlers.php` | `src/lib/server/handlers/*.js` (one file per feature) |
| `includes/Auth.php` | `src/lib/server/auth/` (`token.js`, `auth.js`; `session.js` is the Keycloak swap point) |
| `includes/Database.php` (PDO) | `src/lib/server/db/` (`connection.js`: mysql2 pool; `pdo.js`: small PDO-style wrapper) |
| `includes/TableHelper.php` | `src/lib/server/db/table-helper.js` |
| `includes/JsonResponse.php` | `src/lib/server/http/json-response.js` (`sendJson`, `sendError`) |
| `.htaccess` hotlink rule | `server.js` |
| `css/*.css`, `*/styles.css`, `contact.css`, `canvision.css` | Tailwind utility classes in the page markup (`src/lib/styles/app.css` is the entry) |
| `js/main.js`, `canvision.js`, `login/app.js`, `portal/app.js`, inline `<script>`s | `src/lib/scripts/` |
| `assets/`, `canvision/assets/` | `static/assets/`, `static/canvision/assets/` (same URLs, except `canvision.png`, now only at `/assets/canvision.png`) |

Notes on how the port stays close to the PHP:

- `sendJson()` / `sendError()` still "exit" — they throw a signal the endpoint wrapper turns into the response, so handlers read line-for-line like the PHP. Any `catch` around code that can call them rethrows it (`isResponseSent`).
- `src/lib/server/utils/php.js` has the PHP casts the handlers relied on (`intval`, `strval`, `boolval`, `isset`, `trim`, `isoDate` = `date('c')`, `urlDecode`, `hashEquals`).
- Per-request state (the table-helper column cache, the database handle) is kept per request, as it was in PHP, so schema changes are picked up immediately.
- Tokens use the same format and secret as the PHP API, so tokens issued by the old server keep working.
- Links between pages are full page loads (`data-sveltekit-reload` in `src/app.html`) — same as the old multi-page site.

---

## Styling (Tailwind CSS v4)

Every page — home, CAN Vision, contact, `default.php`, login and the portal — is styled with **Tailwind utility classes written directly in the markup**; there are no page stylesheets any more. The conversion is pixel-identical: computed styles, pseudo-elements, hover/focus/active states, dark mode and screenshots were compared against the previous CSS at every breakpoint.

How it is wired:

- `vite.config.js` registers `@tailwindcss/vite`. `src/lib/styles/app.css` is the entry; every page imports it (`import '#lib/styles/app.css'`).
- **No Preflight.** `app.css` imports only Tailwind's theme and utilities, not its global reset, because the pages were written against the browser's default styles. The one global rule is `* { box-sizing: border-box }`.
- **Design tokens** (brand colours, font stacks) are in the `@theme` block of `app.css`, e.g. `bg-primary`, `text-navy`, `font-inter`. Change a colour there once.
- **Breakpoints** are the original `max-width` ones, written `lte-767:`, `lte-900:` … (applies at that width **and below**). Tailwind's own `max-*` variants use a strict `<`, which would be off by one. `hover:` is not limited to `(hover: hover)`, so touch devices behave as before.
- **Dark mode (portal):** `portal.js` toggles `dark-ui` on `<body>`; the `dark:` variant means "inside `body.dark-ui`".
- **`<html>` and `<body>` live in `app.html`**, outside any page, so their classes are set per route: `hooks.server.js` fills the placeholders from `src/lib/server/shell.js`. Add a new page → add its entry there.
- **Classes that JavaScript uses stay on the elements** (`open`, `nav-open`, `visible`, `reveal`, `active`, `site-header`, …); Tailwind variants such as `lte-900:[.site-header.open_&]:flex` or `[&.active]:bg-primary` react to them. Don't rename them without updating the matching script in `lib/scripts/`.
- **The portal's data table is drawn by script** (`portal.js` writes `<tr>`, `<th>`, `<td>` and the Edit/Delete buttons with `innerHTML`), so those elements carry no classes. Their styles sit on the static `#tableWrap` section as descendant variants such as `[&_tbody>tr:last-child>td:last-child]:py-[13px]` and `[&_td:last-child>button:first-child:hover]:bg-light-blue`. To restyle the table, edit that class list in `routes/vehicleiq-web/portal/+page.svelte`.
- Tailwind scans `src/routes` and `lib/server/shell.js` only (`@source` in `app.css`). A utility class that exists only inside a string in some other file will not be generated.

---

## Configuration (`config.php` → environment)

| Variable | Was | Default |
|---|---|---|
| `DB_HOST` `DB_PORT` `DB_NAME` `DB_USER` `DB_PASS` `DB_CHARSET` | `db_*` | `localhost` · `3306` · — · — · empty · `utf8mb4` |
| `TOKEN_SECRET` | `token_secret` | **required** |
| `TOKEN_TTL_SECONDS` | `token_ttl_seconds` | `604800` |
| `CORS_ORIGINS` (comma-separated) | `cors_origins` | the four original origins |
| `SERVICE_NAME` | `service_name` | `VehicleIQ` |
| `APP_MODE` | hard-coded `'experiment'` in `/api/health` | `experiment` |
| `HOTLINK_PROTECTION` | `.htaccess` | `on` (`off` to disable) |

`DB_NAME`, `DB_USER` and `TOKEN_SECRET` are required; without them the API answers `500 {"error":"Missing configuration …"}` (the old "Missing config.php").
`.env` is read automatically; real environment variables win over it. **`.env` is git-ignored — set the real values on the server.**

`adapter-node` settings go in the same place: `PORT`, `HOST`, `ORIGIN` (set it to `https://yantricthings.com` behind a reverse proxy), and `BODY_SIZE_LIMIT` (adapter default is 512 KB; PHP allowed ~8 MB, so `.env.example` sets `8M` for large report/log uploads).

## Deploying

Any host that runs Node ≥ 22.9:

```
npm ci
npm run build
npm start            # or:  pm2 start server.js --name yantricthings --node-args="--env-file-if-exists=.env"
```

Put nginx/Apache/Hostinger's proxy in front for HTTPS. Start with `npm start` / `server.js`, not `node build` — `server.js` is `build/index.js` plus the image hotlink rule.

---

## Intentional differences from the PHP

1. **No-op vehicle save** — `PUT /api/vehicles/{id}` with unchanged values returned `404 Vehicle not found` in PHP (PDO's `rowCount()` counts *changed* rows); it now returns `200` (mysql2 counts *matched* rows).
2. **CORS** — `Access-Control-Allow-Methods` now lists `DELETE` (the PHP list omitted it although `/api/vehicles/{id}` supports it).
3. **Hotlink rule** — the `.htaccess` rule only lived in `js/.htaccess` in the zip (so it never protected images); it now applies to every image, and a Referer from the site's own host is also allowed.
4. **Contact page** — footer links `../index.hmtl#COMPANY` (typo, 404) now point to `/#COMPANY`.
5. DB-connection error text no longer has PDO's `SQLSTATE[HY000] [1045]` prefix (status and shape are the same).
6. Links to `/contact_page/contact.html` (a URL that never existed in this app) now point to `/contact_page`.
7. `lib/scripts/canvision.js` was reduced to what actually ran on the page (the contact-button toast): the rest was a demo dashboard for panels the page doesn't have, and it threw a `TypeError` on every load. It is in git history if it is ever wanted.
8. `static/canvision/assets/canvision.png` was a byte-identical duplicate of `static/assets/canvision.png`; the page now uses the latter.

## Left exactly as it was (worth knowing)

- **Security:** `admin` / `admin123` still logs in when the `users` table has no matching row, and the login form pre-fills `admin123`. Plain-text passwords in `users` are still accepted. The old `config.php` had the real DB password in clear text — rotate it, and set `TOKEN_SECRET` to a long random value.
- The `<canvas id="canvision3D">` block on `/` has no script behind it ("Loading 3D Model…").
- The portal's inline sidebar script contains an accidental second copy of its own click handler.
- The portal's "live" tab expects `created_at` but `/api/logs` returns `timestamp`, so its Time column is blank.
- Not ported (duplicates/old copies): `production_deploy/`, `experiment_vehicleiq_bridge/`, `vehicleiq-web/` copies, `includes/ApiHandlers_backup.php`, the two `*-upload.zip` files and the empty `portal/api/vehicles.php`. The root-level files (the newest, with the vehicles CRUD) were used. `sql/seed_admin.sql` is carried over.
