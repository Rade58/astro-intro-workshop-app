import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), solidJs()],
  // this is required for rss feed
  // when you purchase domain of your site
  // don't forget to set this up to valid url
  //
  site: '',
});
