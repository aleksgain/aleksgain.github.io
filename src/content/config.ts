import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Dev', 'Sec', 'Ops', 'Infra', 'Cloud', 'AI']),
    source: z.string(),
    sourceUrl: z.string().url(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
