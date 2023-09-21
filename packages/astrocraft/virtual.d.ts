declare module 'virtual:astrocraft/context' {
  const Config: import('astro').AstroConfig;
	export default Config;
}

declare module 'virtual:astrocraft/config' {
  const Config: import('./types').AstrocraftUserConfig;
  export default Config;
}

declare module 'virtual:astrocraft/components' {
	export const Layout: typeof import('./layouts/Layout.astro').default;
	export const Navbar: typeof import('./components/Navbar.astro').default;
  export const Footer: typeof import('./components/Footer.astro').default;
}

declare module 'virtual:astrocraft/assets' {
  type ImageMetadata = import('astro').ImageMetadata;
  export const logo: ImageMetadata;
  export const blocks: Record<string, ImageMetadata>;
  export const items: Record<string, ImageMetadata>;
  export const paintings: Record<string, ImageMetadata>;
  export const icons: Record<string, ImageMetadata>;
  export const gui: Record<string, ImageMetadata>;
}

declare module 'virtual:astrocraft/css' {}