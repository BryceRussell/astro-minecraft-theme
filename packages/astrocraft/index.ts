import type {
  AstroConfig,
  AstroIntegration,
  ViteUserConfig,
} from 'astro';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import mime from 'mime'
import { execSync } from 'child_process'

import tailwind from '@astrojs/tailwind';

const isWindows = process.platform === 'win32'
const joinPath = (isWindows ? path.win32 : path).join

export function MinecraftTheme(opts) : AstroIntegration[] {
  let config: AstroConfig

  const Astrocraft = {
    name: 'astrocraft',
    hooks: {
      'astro:config:setup': ({ config: _config, updateConfig, injectScript, injectRoute, addWatchFile }) => {
        config = _config

        addWatchFile(new URL('./tailwind.config.cjs', config.root))

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
        config = _config
        updateConfig({
          build: {
            inlineStylesheets: 'auto'
          },
          vite: {
            plugins: [vitePluginUserConfig(opts, config)],
          },
          experimental: { assets: true },
        });
      },
      'astro:server:setup': ({ server }) => {
        server.middlewares.use('/assets', (req, res, next) => {
          const assetPath = './node_modules/astrocraft/assets' + req.url;
          fs.readFile(assetPath, (err, data) => {
            if (err) {
              console.error(err);
              res.statusCode = 404;
              res.end();
            } else {
              res.setHeader('Content-Type', mime.getType(req.url));
              res.end(data);
            }
          });
        });
      },
      'astro:build:done': (options) => {
        const assetsDir = joinPath(config.outDir.pathname, 'assets').slice(isWindows ? 1 : 0)
        console.log("ASSETS", assetsDir)
        if (!existsSync(assetsDir)) {
          mkdirSync(assetsDir)
        }

        execSync( isWindows
          ? `xcopy /E /I node_modules\\astrocraft\\assets\\* ${assetsDir}`
          : `cp -n -r node_modules/astrocraft/assets/* ${assetsDir} || true`
        )
      }
    }
  }
  return [Astrocraft, tailwind({ config: { path: './node_modules/astrocraft/tailwind.config.cjs'} })]
}

function resolveVirtualModuleId(id: string) {
  return '\0' + id;
}

function vitePluginUserConfig(
  opts: { customCss: [] },
  { root }: AstroConfig
): NonNullable<ViteUserConfig['plugins']>[number] {
  const modules = {
    'virtual:astrocraft/user-config': `export default ${JSON.stringify(opts)}`,
    'virtual:astrocraft/project-context': `export default ${JSON.stringify({
      root,
    })}`,
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