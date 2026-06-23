import { defineCollection, z } from 'astro:content';

// A journal post. Fill the frontmatter at the top of each .md file.
const journal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),            // shown in lists + used for SEO/social
    date: z.coerce.date(),
    pillar: z.enum(['Life', 'Wellness', 'Books', 'Career']),
    draft: z.boolean().default(false),  // set true to hide from the live site
    cover: z.string().optional(),       // optional image path in /public
  }),
});

// A Growth Lab experiment write-up.
const lab = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    result: z.enum(['won', 'lost', 'inconclusive', 'ongoing']).default('ongoing'),
    metric: z.string().optional(),      // headline number, e.g. "+62 subscribers"
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal, lab };
