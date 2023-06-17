import { defineConfig } from 'astro/config';
import { MinecraftTheme } from "astrocraft";

// https://astro.build/config
export default defineConfig({
  integrations: [
    MinecraftTheme({
      title: 'Astrocraft Docs',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Astrocraft Logo'
      }
    })
  ],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});