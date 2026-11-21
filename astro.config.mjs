import { defineConfig } from 'astro/config';
import siteImages from './integrations/site-images.mjs';

export default defineConfig({
  site: 'https://www.arqdeco.com.pe',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [siteImages()],
});
