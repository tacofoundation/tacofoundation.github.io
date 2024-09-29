import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',  
  site: 'https://tacofoundation.github.io',
  outDir: 'dist',
});

