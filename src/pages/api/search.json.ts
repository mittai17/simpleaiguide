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

    // Extract unique categories
    const categories = [...new Set(blogPosts.map((post: any) => post.data.category).filter(Boolean))];

    // Extract unique tags (flatten array then Set)
    const tags = [...new Set(blogPosts.flatMap((post: any) => post.data.tags || []).filter(Boolean))];

    const searchItems = [
        ...staticPages.map(page => ({
            ...page,
            tags: [],
            category: 'Page'
        })),
        // Add Categories as searchable items
        ...categories.map(cat => ({
            title: `${cat} (Category)`,
            slug: `blog/category/${cat.toString().toLowerCase().replace(/\s+/g, '-')}`,
            type: 'category',
            description: `Browse all articles in the ${cat} category.`,
            tags: [],
            category: 'Category'
        })),
        // Add Tags as searchable items
        ...tags.map(tag => ({
            title: `#${tag} (Tag)`,
            slug: `blog/tags/${tag.toString().toLowerCase().replace(/\s+/g, '-')}`,
            type: 'tag',
            description: `Browse all articles tagged with #${tag}.`,
            tags: [tag],
            category: 'Tag'
        })),
        ...blogPosts.map((post: any) => ({
            title: post.data.title,
            slug: `blog/${post.slug}`,
            type: 'post',
            description: post.data.description,
            tags: post.data.tags || [],
            category: post.data.category || 'Blog'
        })),
        ...learnPosts.map((post: any) => ({
            title: post.data.title,
            slug: `learn/${post.slug}`,
            type: 'lesson',
            description: post.data.description,
            tags: [],
            category: 'Learn'
        }))
    ];

    return new Response(JSON.stringify(searchItems), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
