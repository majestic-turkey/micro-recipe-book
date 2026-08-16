# NCH Microbiology Recipe Book
A collection of recipes with stories from the Clinical Microbiology team at Nationwide Children's Hospital

## Tech Stack
Very simple: React on Astro, served statically.

## Installing
Just clone the repo
```bash
npm install
npm run build
```
It's not rocket science, but don't tell that to the branding team over at Astro. They seem attached to the metaphor.

Deployable on Netlify or anywhere else you can slap a static site.

## Recipe shape
Recipes are JSON files loaded into Astro via Zod. The data contract:
```JSON
{
  title: string,             name of recipe
  ingredients: string[],     list of ingredients
  instructions: string[],    list of instructions (a line ending in a colon is read as a subheading, eg 'For the crust:')
  contributor: string,       name of the recipe submitter/author
  story: string,             the story blurb
  photo: string              image filename (starts with /, reads from /public)
}
```
