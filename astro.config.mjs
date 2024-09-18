import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://franperezfolgado.netlify.app',
  build: {
    format: 'directory',
    assetsInlineLimit: -1,  // Set to -1 to inline all CSS

  },
  base: 'portfolio',
  integrations: [tailwind()]
});