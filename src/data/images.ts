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
