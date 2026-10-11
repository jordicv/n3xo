import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3030,
    host: true,
  },
  integrations: [tailwind()],
  site: 'https://n3xo.cl',
  redirects: {
    '/servicios/integracion': '/servicios',
  },
});
