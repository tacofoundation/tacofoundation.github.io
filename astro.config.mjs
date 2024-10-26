import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import pagefind from 'astro-pagefind';

export default defineConfig({
  integrations: [
    tailwind(),
    pagefind({
      ui: '@pagefind/default-ui', 
      patterns: ['src/content/**/*.md'], 
    }),
  ],
  site: 'https://tacofoundation.github.io',
  outDir: 'dist',
});
