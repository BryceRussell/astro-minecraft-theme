declare module 'virtual:astrocraft/project-context' {
  export default { root: string };
}

declare module 'virtual:astrocraft/user-config' {
  const Config: import('./types').AstrocraftConfig;
  export default Config;
}

declare module 'virtual:astrocraft/user-images' {
  type ImageMetadata = import('astro').ImageMetadata;
  export const blocks: Record<string, ImageMetadata>;
  export const items: Record<string, ImageMetadata>;
  export const paintings: Record<string, ImageMetadata>;
  export const icons: Record<string, ImageMetadata>;
  export const ui: Record<string, ImageMetadata>;
}

declare module 'virtual:astrocraft/user-css' {}