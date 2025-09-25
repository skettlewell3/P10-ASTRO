import {defineCollection, z} from 'astro:content';

const news = defineCollection ({
    type: 'content',
    schema: z.object ({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        heroImage: z.string().optional(),
    }),
});