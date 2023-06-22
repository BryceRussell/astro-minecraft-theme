import type {
  AstroConfig,
  AstroIntegration,
  ViteUserConfig,
} from 'astro';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import {
  AstrocraftUserConfig,
  AstrocraftConfig,
  AstrocraftConfigSchema,
} from './utils/user-config'
import { errorMap } from './utils/error-map';

export function MinecraftTheme(opts: AstrocraftUserConfig) : AstroIntegration[] {
  let config: AstroConfig

  const parsedConfig = AstrocraftConfigSchema.safeParse(opts, { errorMap });

  if (!parsedConfig.success) {
    throw new Error(
      'Invalid config passed to astrocraft integration\n' +
        parsedConfig.error.issues.map((i) => i.message).join('\n')
    );
  }

  const userConfig = parsedConfig.data;

  const tailwindConfigPath = fileURLToPath(new URL('./tailwind.config.ts', import.meta.url))

  const Astrocraft: AstroIntegration = {
    name: 'astrocraft',
    hooks: {
      'astro:config:setup': ({ config: _config, updateConfig, injectScript, injectRoute, addWatchFile }) => {
        config = _config

        addWatchFile(tailwindConfigPath)

        injectRoute({
          pattern: '404',
          entryPoint: 'astrocraft/404.astro',
        });
        
        injectRoute({
          pattern: '[...slug]',
          entryPoint: 'astrocraft/index.astro',
        });

        injectScript('page-ssr', `
          import "astrocraft/styles/base.css";
          import "astrocraft/styles/minecraft.css";
        `);

        updateConfig({
          vite: {
            plugins: [vitePluginUserConfig(userConfig, config)],
          },
          experimental: { assets: true },
        });
        config = _config
      }
    }
  }

  return [Astrocraft, tailwind({ configFile: tailwindConfigPath, applyBaseStyles: false })]
}

function resolveVirtualModuleId(id: string) {
  return '\0' + id;
}

function vitePluginUserConfig(
  opts: AstrocraftConfig,
  { root }: AstroConfig
): NonNullable<ViteUserConfig['plugins']>[number] {
  const modules = {
    'virtual:astrocraft/user-config': `export default ${JSON.stringify(opts)}`,
    'virtual:astrocraft/project-context': `export default ${JSON.stringify({ root })}`,
    'virtual:astrocraft/user-css': opts.customCss.map((id) => `import "${id}";`).join(''),
    'virtual:astrocraft/user-images': `
      import { transformImageGlob } from 'astrocraft/utils/virtual';
      ${opts?.logo?.src && `import logo from '${opts?.logo?.src}';` || 'const logo = {}'};
      export { logo };
      export const blocks = transformImageGlob(await import.meta.glob('/src/assets/blocks/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
      export const items = transformImageGlob(await import.meta.glob('/src/assets/items/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
      export const paintings = transformImageGlob(await import.meta.glob('/src/assets/paintings/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
      export const icons = transformImageGlob(await import.meta.glob('/src/assets/icons/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
      export const gui = transformImageGlob(await import.meta.glob('/src/assets/gui/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
    `
  };

  const resolutionMap = Object.fromEntries(
    (Object.keys(modules) as (keyof typeof modules)[]).map((key) => [
      resolveVirtualModuleId(key),
      key,
    ])
  );

  return {
    name: 'vite-plugin-astrocraft-user-config',
    resolveId(id): string | void {
      if (id in modules) return resolveVirtualModuleId(id);
    },
    load(id): string | void {
      const resolution = resolutionMap[id];
      if (resolution) return modules[resolution];
    },
  };
}