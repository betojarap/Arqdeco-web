// Lee las imágenes que existan en /public/img/<carpeta> al momento de compilar.
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

export function listImages(folder: string): string[] {
  try {
    return readdirSync(join(process.cwd(), 'public', 'img', folder))
      .filter((f) => /\.(jpe?g|png|webp|avif|svg)$/i.test(f))
      .sort()
      .map((f) => `/img/${folder}/${f}`);
  } catch {
    return [];
  }
}

// Devuelve la ruta del logo si existe public/img/logo.(svg|png|webp|jpg).
import { existsSync } from 'node:fs';
export function findLogo(): string | undefined {
  for (const ext of ['svg', 'png', 'webp', 'jpg']) {
    if (existsSync(join(process.cwd(), 'public', 'img', `logo.${ext}`))) return `/img/logo.${ext}`;
  }
  return undefined;
}
