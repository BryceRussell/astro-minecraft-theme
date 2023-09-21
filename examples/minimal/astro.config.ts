import { defineConfig } from 'astro/config';
import MinecraftTheme from "astrocraft";

// https://astro.build/config
export default defineConfig({
  integrations: [
    MinecraftTheme({
      config: {
        title: 'Astrocraft Docs',
        description: 'This is a description'
      }
    })
  ]
});