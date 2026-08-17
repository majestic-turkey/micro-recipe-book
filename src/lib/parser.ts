import { recipeSchema, type Recipe } from './schema';

export interface SubmissionInput {
  title: string;
  contributor: string;
  ingredients: string;
  instructions: string;
  story: string;
  photo?: string;
}

const LIST_MARKER = /^\s*(?:[-*•]|\d+[.)])\s+/;

function splitLines(text: string): string[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.replace(LIST_MARKER, '').trim())
    .filter((line) => line.length > 0);
}

function normalizeStory(text: string): string {
  return text.replace(/\r\n/g, '\n').trim();
}

export function parseSubmission(input: SubmissionInput): Recipe {
  return recipeSchema.parse({
    title: input.title.trim(),
    contributor: input.contributor.trim(),
    ingredients: splitLines(input.ingredients),
    instructions: splitLines(input.instructions),
    story: normalizeStory(input.story),
    ...(input.photo ? { photo: input.photo } : {}),
  });
}
