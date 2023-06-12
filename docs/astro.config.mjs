import { defineConfig } from 'astro/config';
import { MinecraftTheme } from "astrocraft";

// https://astro.build/config
export default defineConfig({
  integrations: [
    MinecraftTheme({
      title: 'My Minecraft Mod',
      logo: './src/assets/logo.png',
      // blockSize: 48,
      favicon: {
        type: 'item',
        name: 'beef-cooked'
      },
      customCSS: [],
      head: []
    })
  ]
});