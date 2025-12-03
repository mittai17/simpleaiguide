import { getCollection } from 'astro:content';

async function debug() {
    const posts = await getCollection('learn');
    console.log('Total posts:', posts.length);
    posts.forEach(p => {
        console.log(`Slug: ${p.slug}, Category: ${p.data.category}, Order: ${p.data.order}`);
    });
}

debug();
