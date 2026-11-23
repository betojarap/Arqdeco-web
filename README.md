# Web de Arqdeco Perú

Sitio web de [www.arqdeco.com.pe](https://www.arqdeco.com.pe), hecho con [Astro](https://astro.build) como sitio estático (sin base de datos ni panel de administración) y publicado gratis en Cloudflare Pages.

## Cómo editar el contenido

| Qué cambiar | Dónde |
|---|---|
| Teléfono, correo, dirección, redes sociales | `src/data/site.ts` |
| Lista de servicios y su detalle | `src/data/site.ts` (`services`) |
| Textos de cada página | `src/pages/*.astro` |
| Fotos de la galería | Subir a `public/img/galeria/` (aparecen solas, en orden alfabético). Mejor en formato `.webp` |
| Descripción (alt) de cada foto o logo | `src/data/captions.ts` |
| Título y descripción para Google de cada página | Atributos `title` y `description` de `<Base>` en `src/pages/*.astro` |
| Logos de clientes | Subir a `public/img/clientes/` |
| Logo | Subir `public/img/logo.png` (o `logo.svg`) |
| Colores y estilos | `src/styles/global.css` (variables al inicio) |

Puedes editar los archivos directamente en GitHub. Cada cambio en `main` se publica automáticamente.

## Trabajar en tu computadora

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev      # vista previa en http://localhost:4321
npm run build    # genera el sitio en dist/
```

## Publicar en Cloudflare Pages (gratis)

1. Crear una cuenta en https://dash.cloudflare.com.
2. **Workers & Pages → Create → Pages → Connect to Git** y elegir este repositorio.
3. Configuración de compilación:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Variable de entorno `NODE_VERSION` = `22`
4. Formulario de contacto: usa Web3Forms (https://web3forms.com). La clave está en `src/data/site.ts` (`web3formsKey`); para cambiar el correo que recibe los mensajes, se gestiona desde el panel de Web3Forms.
5. Revisar la dirección de prueba `*.pages.dev`.
6. Cuando todo esté aprobado: **Custom domains** → añadir `www.arqdeco.com.pe` y `arqdeco.com.pe`, y actualizar el DNS según indique Cloudflare. Hasta ese paso la web de WordPress sigue funcionando.

## Google y búsqueda con IA

- Cada página tiene su título, descripción, imagen para compartir (`public/img/og-arqdeco.jpg`) y datos estructurados de Schema.org (en `src/layouts/Base.astro`).
- `sitemap.xml` se genera solo a partir del menú; `public/robots.txt` lo anuncia.
- `public/llms.txt` resume la empresa para asistentes de IA. Actualízalo si cambian los servicios o el contacto.
- Tras publicar, dar de alta el sitio en Google Search Console y enviar `https://www.arqdeco.com.pe/sitemap.xml`.

## Seguridad

- `public/_headers` define cabeceras de seguridad (CSP, HSTS, etc.).
- `public/_redirects` redirige las direcciones antiguas de WordPress.
