// Integración de Astro: lee /public/img al compilar (siempre en Node) y pasa
// las listas de imágenes a las páginas como la constante __SITE_IMAGES__.
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const IMG_RE = /\.(jpe?g|png|webp|avif|svg)$/i;

export default function siteImages() {
  return {
    name: 'site-images',
    hooks: {
      'astro:config:setup': ({ config, updateConfig }) => {
        const imgDir = fileURLToPath(new URL('img/', config.publicDir));
        const list = (folder) => {
          try {
            return readdirSync(imgDir + folder).filter((f) => IMG_RE.test(f)).sort().map((f) => `/img/${folder}/${f}`);
          } catch {
            return [];
          }
        };
        const logo = ['svg', 'png', 'webp', 'jpg'].map((e) => `logo.${e}`).find((f) => existsSync(imgDir + f));
        const images = { logo: logo ? `/img/${logo}` : null, galeria: list('galeria'), clientes: list('clientes') };
        updateConfig({ vite: { define: { __SITE_IMAGES__: JSON.stringify(images) } } });
      },
    },
  };
}
