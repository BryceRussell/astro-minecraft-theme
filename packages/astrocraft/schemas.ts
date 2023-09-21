import { z } from 'astro/zod';

export const LogoConfigSchema = z.object({
  /** Source of the image file to use. */
  src: z.string(),
  /** Alternative text description of the logo. */
  alt: z.string().default(''),
  /** Set to `true` to hide the site title text and only show the logo. */
  replacesTitle: z.boolean().default(false),
}).optional()

export const HeadConfigSchema = z
  .array(
    z.object({
      /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
      tag: z.enum([
        'title',
        'base',
        'link',
        'style',
        'meta',
        'script',
        'noscript',
        'template',
      ]),
      /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
      attrs: z
        .record(z.union([z.string(), z.boolean(), z.undefined()]))
        .default({}),
      /** Content to place inside the tag (optional). */
      content: z.string().default(''),
    })
  ).default([])

export const AstrocraftConfigSchema = z.object({

  lang: z.string().default('en'),

  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: z
    .string()
    .describe(
      'Title for your website. Will be used in metadata and as browser tab title.'
    ),

  /** Description metadata for your website. Can be used in page metadata. */
  description: z
    .string()
    .optional()
    .describe(
      'Description metadata for your website. Can be used in page metadata.'
    ),

  /** The tagline for your website. */
  tagline: z.string().optional().describe('The tagline for your website.'),

  /** Set a logo image to show in the navigation bar alongside or instead of the site title. */
  logo: LogoConfigSchema,

  favicon: z.object({
    type: z.enum(['block', 'item']),
    name: z.string(),
  }).optional().default({
    type: 'block',
    name: 'grass-side'
  }),

  /** Optional details about the social media accounts for this site. */
  social: z
    .object({
      /** Link to the main Twitter profile for this site, e.g. `'https://twitter.com/astrodotbuild'`. */
      twitter: z.string().url().optional(),
      /** Link to the main Mastodon profile for this site, e.g. `'https://m.webtoo.ls/@astro'`. */
      mastodon: z.string().url().optional(),
      /** Link to the main GitHub org or repo for this site, e.g. `'https://github.com/withastro/starlight'`. */
      github: z.string().url().optional(),
      /** Link to the Discord server for this site, e.g. `'https://astro.build/chat'`. */
      discord: z.string().url().optional(),
    })
    .optional(),

  /**
   * Add extra tags to your site’s `<head>`.
   *
   * Can also be set for a single page in a page’s frontmatter.
   *
   * @example
   * // Add Fathom analytics to your site
   * MinecraftTheme({
   *  head: [
   *    {
   *      tag: 'script',
   *      attrs: {
   *        src: 'https://cdn.usefathom.com/script.js',
   *        'data-site': 'MY-FATHOM-ID',
   *        defer: true,
   *      },
   *    },
   *  ],
   * })
   */
  head: HeadConfigSchema,

  /** Size of a block in pixels, all assets are sized relative to this value */
  blockSize: z.number().optional(),

  /**
   * Provide CSS files to customize the look and feel of your site.
   *
   * Supports local CSS files relative to the root of your project,
   * e.g. `'/src/custom.css'`, and CSS you installed as an npm
   * module, e.g. `'@fontsource/roboto'`.
   *
   * @example
   * MinecraftTheme({
   *  customCss: ['/src/custom-styles.css', '@fontsource/roboto'],
   * })
   */
  customCss: z.string().array().optional().default([]),
});