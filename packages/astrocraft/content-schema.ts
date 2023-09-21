import { HeadConfigSchema } from './schemas';
import { z } from 'astro/zod';

export default function contentSchema() {
  return () =>
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
      head: HeadConfigSchema,
    });
}