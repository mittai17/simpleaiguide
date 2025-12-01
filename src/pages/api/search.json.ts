import { getCollection } from 'astro:content';

export async function GET() {
    const blogPosts = await getCollection('blog');
    const learnPosts = await getCollection('learn');

    const staticPages = [
        {
            title: 'Home',
            slug: '',
            type: 'page',
            description: 'Learn AI the Simple Way. Simple AI Guide helps you understand AI, Machine Learning, and Deep Learning concepts.'
        },
        {
            title: 'About',
            slug: 'about',
            type: 'page',
            description: 'About Simple AI Guide. Learn AI, Machine Learning, and Deep Learning in a simple way.'
        },
        {
            title: 'Contact',
            slug: 'contact',
            type: 'page',
            description: 'Contact Simple AI Guide for questions or topic requests.'
        },
        {
            title: 'Learn',
            slug: 'learn',
            type: 'page',
            description: 'Start your AI journey. Choose a path to begin learning.'
        },
        {
            title: 'Blog',
            slug: 'blog',
            type: 'page',
            description: 'Read our latest articles, tutorials, and guides on various AI topics.'
        }
    ];

    const searchItems = [
        ...staticPages,
        ...blogPosts.map((post: any) => ({
            title: post.data.title,
            slug: `blog/${post.slug}`,
            type: 'post',
            description: post.data.description
        })),
        ...learnPosts.map((post: any) => ({
            title: post.data.title,
            slug: `learn/${post.slug}`,
            type: 'lesson',
            description: post.data.description
        }))
    ];

    return new Response(JSON.stringify(searchItems), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
