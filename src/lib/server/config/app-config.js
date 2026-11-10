/**
 * Application configuration (replaces config.php), built from environment variables
 * (see .env.example and config/env.js).
 */
import { env } from './env.js';

const DEFAULT_CORS_ORIGINS = [
  'https://yantricthings.com',
  'https://www.yantricthings.com',
  'http://localhost',
  'http://127.0.0.1'
];

export const MISSING_CONFIG_MESSAGE =
  'Missing configuration — set DB_NAME, DB_USER and TOKEN_SECRET (copy .env.example to .env)';

let cachedConfig = null;

/** Returns the configuration, or null when required settings are missing. */
export function loadConfig() {
  if (cachedConfig) return cachedConfig;
  if (!env.DB_NAME || !env.DB_USER || !env.TOKEN_SECRET) return null;

  const origins = (env.CORS_ORIGINS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  cachedConfig = {
    db_host: env.DB_HOST || 'localhost',
    db_port: Number(env.DB_PORT || 3306),
    db_name: env.DB_NAME,
    db_user: env.DB_USER,
    db_pass: env.DB_PASS ?? '',
    db_charset: env.DB_CHARSET || 'utf8mb4',

    token_secret: env.TOKEN_SECRET,
    token_ttl_seconds: Number(env.TOKEN_TTL_SECONDS || 86400 * 7),

    cors_origins: origins.length ? origins : DEFAULT_CORS_ORIGINS,

    service_name: env.SERVICE_NAME || 'VehicleIQ',
    mode: env.APP_MODE || 'experiment'
  };
  return cachedConfig;
}

/** Like loadConfig(), but throws when the configuration is incomplete. */
export function appConfig() {
  const config = loadConfig();
  if (!config) throw new Error(MISSING_CONFIG_MESSAGE);
  return config;
}
