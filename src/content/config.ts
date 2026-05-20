import { defineCollection, z } from 'astro:content';

const artwork = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    medium: z.string(),
    dimensions: z.string().optional(),
    image: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    url: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { artwork, projects };
