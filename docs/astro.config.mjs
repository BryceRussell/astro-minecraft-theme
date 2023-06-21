import { defineConfig } from 'astro/config';
import { MinecraftTheme } from "astrocraft";

// https://astro.build/config
export default defineConfig({
  integrations: [
    MinecraftTheme({
      title: 'Astrocraft Docs',
      description: 'Show off your server, document your projects, build with blocks, display items and paintings, create game like GUIs, and tons more! This is the Minecraft Theme for Astro ',
      logo: {
        src: '/src/assets/logo.png',
        alt: 'Astrocraft Logo'
      }
    })
  ],
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});