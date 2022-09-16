import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
    },
  },
});