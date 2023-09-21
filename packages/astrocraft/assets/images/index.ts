const fileName = (path: string) => path.split("/").pop()!.split(".")[0]!;

export function transformImageGlob(
  images: Record<string, { default: ImageMetadata }>
) {
  return Object.entries(images).reduce((acc, [key, val]) => ({
    ...acc,
    [fileName(key)]: val.default,
  }), {});
}

export const blocks = transformImageGlob(await import.meta.glob('/src/assets/blocks/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
export const items = transformImageGlob(await import.meta.glob('/src/assets/items/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
export const paintings = transformImageGlob(await import.meta.glob('/src/assets/paintings/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
export const icons = transformImageGlob(await import.meta.glob('/src/assets/icons/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));
export const gui = transformImageGlob(await import.meta.glob('/src/assets/gui/*.{png,jpg,jpeg,PNG,JPEG,gif}', { eager: true }));