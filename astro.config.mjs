import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.arqdeco.com.pe',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
