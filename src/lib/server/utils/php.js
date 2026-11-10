/**
 * Small helpers that reproduce the PHP semantics the original API code relied on
 * ((int) / (string) / (bool) casts, isset, trim, date('c'), urldecode, hash_equals…),
 * so the request handlers return exactly what the PHP API did for odd input.
 */
import { timingSafeEqual } from 'node:crypto';

/** isset($x) — true unless undefined / null */
export function isset(v) {
  return v !== undefined && v !== null;
}

/** (int) $v */
export function intval(v) {
  if (v === null || v === undefined) return 0;
  if (typeof v === 'number') return Number.isFinite(v) ? Math.trunc(v) : 0;
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (typeof v === 'bigint') return Number(v);
  if (typeof v === 'string') {
    const m = /^[ \t\n\r\v\f]*([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?)/.exec(v);
    if (!m) return 0;
    const n = Number(m[1]);
    return Number.isFinite(n) ? Math.trunc(n) : 0;
  }
  if (Array.isArray(v)) return v.length ? 1 : 0;
  if (typeof v === 'object') return Object.keys(v).length ? 1 : 0;
  return 0;
}

/** (string) $v */
export function strval(v) {
  if (v === null || v === undefined) return '';
  if (typeof v === 'string') return v;
  if (typeof v === 'boolean') return v ? '1' : '';
  if (typeof v === 'number' || typeof v === 'bigint') return String(v);
  if (Buffer.isBuffer(v)) return v.toString('utf8');
  return 'Array';
}

/** (bool) $v */
export function boolval(v) {
  if (v === null || v === undefined) return false;
  if (typeof v === 'boolean') return v;
  if (typeof v === 'number' || typeof v === 'bigint') return Number(v) !== 0;
  if (typeof v === 'string') return v !== '' && v !== '0';
  if (Array.isArray(v)) return v.length > 0;
  return true;
}

/** is_array($v) — PHP arrays cover both JSON lists and JSON objects */
export function isPhpArray(v) {
  return Array.isArray(v) || (v !== null && typeof v === 'object' && !Buffer.isBuffer(v));
}

/** array_values($v) — the values of a PHP array, for `foreach ($arr as $v)` */
export function arrayValues(v) {
  return Array.isArray(v) ? v : Object.values(v);
}

/** trim() with PHP's default character list */
export function trim(s) {
  return s.replace(/^[ \t\n\r\0\x0B]+|[ \t\n\r\0\x0B]+$/g, '');
}

/** hash_equals() — constant-time string compare */
export function hashEquals(known, user) {
  const a = Buffer.from(String(known), 'utf8');
  const b = Buffer.from(String(user), 'utf8');
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

/** time() — unix seconds */
export function time() {
  return Math.floor(Date.now() / 1000);
}

/** date('c') — ISO 8601 with numeric offset, e.g. 2026-10-20T09:45:00+00:00 */
export function isoDate(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? '+' : '-';
  const a = Math.abs(off);
  return (
    `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}` +
    `T${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}` +
    `${sign}${p(Math.floor(a / 60))}:${p(a % 60)}`
  );
}

/** urldecode() — like decodeURIComponent but '+' means space */
export function urlDecode(s) {
  const spaced = String(s).replace(/\+/g, ' ');
  try {
    return decodeURIComponent(spaced);
  } catch {
    return spaced.replace(/%([0-9a-fA-F]{2})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
  }
}
