// content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    contributor: z.string(),
    ingredients: z.array(z.string()),
    instructions: z.array(z.string()),
    story: z.string().optional(),
    photo: z.string().optional(),
  }),
});

export const collections = { recipes };
