import adapter from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),

    // SvelteKit 3 is configured here (there is no svelte.config.js any more).
    sveltekit({
      adapter: adapter(),

      // Keep the original markup's whitespace exactly as written (Svelte would otherwise trim
      // it at element edges, which shifts inline text by a fraction of a pixel).
      compilerOptions: { preserveWhitespace: true },

      // The page markup is carried over verbatim from the original static HTML, so don't
      // spam the build with accessibility lint for it (clickable divs, missing labels, …).
      onwarn: (warning, handler) => {
        if (warning.code.startsWith('a11y_')) return;
        handler(warning);
      },

      // The /api endpoints authenticate with a Bearer token (never cookies), and the
      // site has no cookie-based form actions, so SvelteKit's form-origin CSRF check
      // adds nothing here. The PHP API accepted any POST body regardless of the
      // Content-Type header, so keep that behaviour for the Android app.
      csrf: { trustedOrigins: ['*'] }
    })
  ]
});
