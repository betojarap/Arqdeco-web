# Web de Arqdeco Perú

Sitio web de [www.arqdeco.com.pe](https://www.arqdeco.com.pe), hecho con [Astro](https://astro.build) como sitio estático (sin base de datos ni panel de administración) y publicado gratis en Cloudflare Workers (configuración en `wrangler.jsonc`).

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

## Publicar en Cloudflare Workers (gratis)

El sitio está conectado a Cloudflare Workers Builds. `wrangler.jsonc` le dice a Cloudflare que publique la carpeta `dist/`.

- **Cada rama o PR** genera una vista previa con su propia dirección `*.workers.dev`. El enlace aparece en el PR de GitHub, en la revisión "Workers Builds". Úsala para revisar los cambios antes de publicarlos.
- **Al fusionar en `main`** el cambio se publica en el sitio principal.
- En Cloudflare (**Settings → Build → Previews Base**) el *Preview command* debe ser `npx wrangler versions upload`. El antiguo `npx wrangler preview` ya no existe y hace fallar las vistas previas.
- Formulario de contacto: usa Web3Forms (https://web3forms.com). La clave está en `src/data/site.ts` (`web3formsKey`); el correo que recibe los mensajes se cambia desde el panel de Web3Forms.
- Analítica: Cloudflare → Analytics & Logs → Web Analytics → Add a site. Copia el token en `src/data/site.ts` (`cfAnalyticsToken`).
- Dominio: en el Worker, **Settings → Domains & Routes** → añadir `www.arqdeco.com.pe` y `arqdeco.com.pe`, y redirigir `arqdeco.com.pe` a `www`. Antes de cambiar el DNS, copiar los registros de correo (MX, SPF, DKIM) del hosting actual.

## Google y búsqueda con IA

- Cada página tiene su título, descripción, imagen para compartir (`public/img/og-arqdeco.jpg`) y datos estructurados de Schema.org (en `src/layouts/Base.astro`).
- `sitemap.xml` se genera solo a partir del menú; `public/robots.txt` lo anuncia.
- `public/llms.txt` resume la empresa para asistentes de IA. Actualízalo si cambian los servicios o el contacto.
- Tras publicar, dar de alta el sitio en Google Search Console y enviar `https://www.arqdeco.com.pe/sitemap.xml`.

## Seguridad

- `public/_headers` define cabeceras de seguridad (CSP, HSTS, etc.).
- `public/_redirects` redirige las direcciones antiguas de WordPress.
