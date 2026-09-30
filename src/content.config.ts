import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: file('src/content/publications.yaml'),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    venue: z.string(),
    short: z.string(),
    year: z.number().int(),
    type: z.enum(['Paper', 'Short paper', 'Poster', 'Article']).default('Paper'),
    status: z.string().optional(),
    award: z.string().optional(),
    doi: z.string().optional(),
    arxiv: z.string().optional(),
    pdf: z.url().optional(),
    projects: z.array(z.string()).default([]),
  }),
});

const news = defineCollection({
  loader: file('src/content/news.yaml'),
  schema: z.object({
    date: z.string().regex(/^\d{4}-\d{2}$/, 'Use YYYY-MM, e.g. "2026-07"'),
    text: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      period: z.string(),
      order: z.number(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      imageCaption: z.string().optional(),
      // Image for the home page card, if the main image doesn't suit a small thumbnail.
      thumb: image().optional(),
      role: z.string().optional(),
      funding: z.string().optional(),
      people: z.array(z.string()).default([]),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
    }).refine((p) => !p.image || p.imageAlt, { message: 'imageAlt is required when image is set', path: ['imageAlt'] }),
});

export const collections = { publications, news, projects };
