import { defineConfig } from 'astro/config';
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Lee las imágenes de /public/img al compilar (en Node) y las pasa a las páginas.
// Así funciona igual en local y en Cloudflare, donde las páginas se generan en otro entorno.
const imgDir = fileURLToPath(new URL('./public/img/', import.meta.url));
const IMG_RE = /\.(jpe?g|png|webp|avif|svg)$/i;
const list = (folder) => {
  try {
    return readdirSync(imgDir + folder).filter((f) => IMG_RE.test(f)).sort().map((f) => `/img/${folder}/${f}`);
  } catch {
    return [];
  }
};
const logo = ['svg', 'png', 'webp', 'jpg'].map((e) => `logo.${e}`).find((f) => existsSync(imgDir + f));
const images = {
  logo: logo ? `/img/${logo}` : null,
  galeria: list('galeria'),
  clientes: list('clientes'),
};

export default defineConfig({
  site: 'https://www.arqdeco.com.pe',
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: { define: { __SITE_IMAGES__: JSON.stringify(images) } },
});
