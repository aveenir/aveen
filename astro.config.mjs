// @ts-check
import { defineConfig } from 'astro/config';

// Deployment target is decided by environment, never hard-coded.
// Local dev: both unset. GitHub Pages project site:
//   SITE_URL=https://<user>.github.io  BASE_PATH=/<repo>
// See docs/architecture.md#deployment.
const site = process.env.SITE_URL ?? 'http://localhost:4321';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  build: { format: 'directory' },
});
