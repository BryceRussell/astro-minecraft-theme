const fileName = (path: string) => path.split("/").pop()!.split(".")[0]!;

export function transformImageGlob(
  images: Record<string, { default: ImageMetadata }>
) {
  return Object.entries(images).reduce((acc, [key, val]) => ({
    ...acc,
    [fileName(key)]: val.default,
  }), {});
}