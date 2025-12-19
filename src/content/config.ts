import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        metaTitle: z.string().optional(),
        description: z.string(),
        pubDate: z.string().or(z.date()).transform((val) => new Date(val)),
        updatedDate: z.string().optional().transform((str) => (str ? new Date(str) : undefined)),
        heroImage: z.string().optional(),
        category: z.string().default('Uncategorized'),
        tags: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        keyTakeaways: z.array(z.string()).optional(),
    }),
});


export const collections = {
    'blog': blogCollection,
};
