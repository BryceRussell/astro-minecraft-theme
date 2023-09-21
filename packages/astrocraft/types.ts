import { AstrocraftConfigSchema, HeadConfigSchema } from './schemas';
import { z } from 'astro/zod';

export type AstrocraftUserConfig = z.input<typeof AstrocraftConfigSchema>;

export type HeadUserConfig = z.input<typeof HeadConfigSchema>;
export type HeadConfig = z.output<typeof HeadConfigSchema>;