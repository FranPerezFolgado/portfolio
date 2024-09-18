import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://franperezfolgado.netlify.app',
  build: {
    format: 'directory'
  },
  base: 'portfolio',
  integrations: [tailwind()]
});