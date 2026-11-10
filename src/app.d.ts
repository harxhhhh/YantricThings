// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
  namespace App {
    interface Locals {
      /** Signed-in API user (token payload), or null. Set in hooks.server.js. */
      user: { u: string; r: string; exp: number; iat: number } | null;
    }
  }
}

export {};
