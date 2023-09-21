import type { AstroIntegration } from 'astro';
import { AstrocraftConfigSchema } from './schemas';
import { fileURLToPath } from 'node:url';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import ThemeProvider from 'astro-theme-provider';

const tailwindConfigPath = fileURLToPath(new URL('./tailwind.config.ts', import.meta.url))

const AstroCraftProvider = ThemeProvider({
  name: 'astrocraft',
  configSchema: AstrocraftConfigSchema,
  entryPoints: {
    '[...slug]': 'astrocraft/pages/index.astro',
    '404': 'astrocraft/pages/404.astro'
  },
  exports: {
    css: ['astrocraft/styles/base.css'],
    components: {
      Layout: 'astrocraft/layouts/Layout.astro',
      Navbar: 'astrocraft/components/Navbar.astro',
      Footer: 'astrocraft/components/Footer.astro',
    },
    assets: {
      logo: 'astrocraft/assets/images/logo.png'
    }
  }
})

export default function AstroCraft(opts: Parameters<typeof AstroCraftProvider>[0]) : AstroIntegration[] {
  return [
    AstroCraftProvider(opts),
    tailwind({ configFile: tailwindConfigPath, applyBaseStyles: false }),
    mdx()
  ]
}

// const fileName = (path: string) => path.split("/").pop()!.split(".")[0]!;

// export function transformImageGlob(
//   images: Record<string, { default: ImageMetadata }>
// ) {
//   return Object.entries(images).reduce((acc, [key, val]) => ({
//     ...acc,
//     [fileName(key)]: val.default,
//   }), {});
// }

// 'virtual:astrocraft/user-images': `
// import { transformImageGlob } from 'astrocraft/utils/virtual';
// ${opts?.logo?.src && `import logo from '${opts?.logo?.src}';` || 'const logo = {}'};
// export { logo };
// export const blocks = transformImageGlob(await import.meta.glob('/src/assets/blocks/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
// export const items = transformImageGlob(await import.meta.glob('/src/assets/items/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
// export const paintings = transformImageGlob(await import.meta.glob('/src/assets/paintings/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
// export const icons = transformImageGlob(await import.meta.glob('/src/assets/icons/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
// export const gui = transformImageGlob(await import.meta.glob('/src/assets/gui/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
// `