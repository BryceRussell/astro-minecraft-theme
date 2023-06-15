import { defineCollection } from 'astro:content';
import { pageSchema } from 'astrocraft/schema';

export const collections = {
  pages: defineCollection({ schema: pageSchema() }),
};