// content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { recipeSchema } from './lib/schema';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/recipes' }),
  schema: recipeSchema,
});

export const collections = { recipes };
