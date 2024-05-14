import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/FranPerezFolgado',
  base: 'portfolio',
  integrations: [tailwind()]
});