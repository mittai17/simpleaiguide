
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('blog');
    return rss({
        title: 'Simple AI Guide',
        description: 'Learn Artificial Intelligence, Machine Learning, and AI Tools for free.',
        site: context.site,
        stylesheet: '/rss/styles.xsl',
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}
