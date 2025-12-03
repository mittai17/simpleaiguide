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

const learnCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        category: z.enum(["ai-basics", "machine-learning", "deep-learning", "math-for-ai", "python-for-ai"]),
        order: z.number().default(0),
        tags: z.array(z.string()).default([]),
        level: z.string().optional(),
        pubDate: z.string().or(z.date()).optional().transform((val) => val ? new Date(val) : undefined),
        keyTakeaways: z.array(z.string()).optional(),
    })
});

export const collections = {
    'blog': blogCollection,
    'learn': learnCollection,
};
