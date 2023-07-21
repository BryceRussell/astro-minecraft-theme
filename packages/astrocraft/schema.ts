import { z } from 'astro/zod';
import { HeadConfigSchema } from './schemas/head';

type ImageFunction = () => z.ZodObject<{
  src: z.ZodString;
  width: z.ZodNumber;
  height: z.ZodNumber;
  format: z.ZodUnion<
    [
      z.ZodLiteral<'png'>,
      z.ZodLiteral<'jpg'>,
      z.ZodLiteral<'jpeg'>,
      z.ZodLiteral<'tiff'>,
      z.ZodLiteral<'webp'>,
      z.ZodLiteral<'gif'>,
      z.ZodLiteral<'svg'>
    ]
  >;
}>;

export function pageSchema() {
  return ({ image }: { image: ImageFunction }) =>
    z.object({
      /** The title of the current page. Required. */
      title: z.string(),

      /**
       * A short description of the current page’s content. Optional, but recommended.
       * A good description is 150–160 characters long and outlines the key content
       * of the page in a clear and engaging way.
       */
      description: z.string().optional(),

      content: z.boolean().default(true),

      /** Set custom `<head>` tags just for this page. */
      head: HeadConfigSchema(),
    });
}