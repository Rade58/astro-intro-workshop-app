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
  // check it on /rss.xml (we named endpoint like that inside pages folder)
  site: 'https://radedev.com',

  // this is the part of configuration where we say
  // that our site should be statically rendered (which is default)
  // but we need to set this if we want to be able to opt in into
  // ssr for certain pages we want
  output: 'hybrid',
  // I think this is not experimental anymore
  // so I'm going to ommit this
  /* experimental: {
    hybridOutput: true,
  }, */
});
