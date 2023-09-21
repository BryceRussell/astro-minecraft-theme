import { defineCollection } from 'astro:content';
import AstroCraftContentSchema from 'astrocraft/schema';

export const collections = {
  pages: defineCollection({ schema: AstroCraftContentSchema() }),
};