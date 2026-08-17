import { z } from 'zod';

export const recipeSchema = z.object({
  title: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  contributor: z.string(),
  story: z.string(),
  photo: z.string().optional(),
});

export type Recipe = z.infer<typeof recipeSchema>;
