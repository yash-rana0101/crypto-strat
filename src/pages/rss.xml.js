import rss from '@astrojs/rss';
import { fetchBlogs } from '@/services/content';
import { cryptoBlogs } from '@/services/cryptoContent';

export const prerender = false;

export async function GET(context) {
  const posts = cryptoBlogs(await fetchBlogs()).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const response = await rss({
    title: 'Strat AI Blog — Crypto Market Research & Insights',
    description:
      'Crypto market analysis and quantitative research from the Trading and Research Wing.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.excerpt,
      pubDate: new Date(post.publishedAt),
      link: `/blog/${post.slug}`,
      categories: [post.category, ...(post.tags || [])],
      author: post.author,
    })),
    customData: `<language>en</language>`,
    stylesheet: false,
  });

  response.headers.set('Cache-Control', 'no-store');
  return response;
}
