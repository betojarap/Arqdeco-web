// Las listas se generan al compilar en astro.config.mjs a partir de /public/img.
declare const __SITE_IMAGES__: { logo: string | null; galeria: string[]; clientes: string[] };

export function listImages(folder: 'galeria' | 'clientes'): string[] {
  return __SITE_IMAGES__[folder];
}

export function findLogo(): string | undefined {
  return __SITE_IMAGES__.logo ?? undefined;
}
