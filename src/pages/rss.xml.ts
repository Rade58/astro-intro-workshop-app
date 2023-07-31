import rss from '@astrojs/rss';
import type { AstroConfig } from 'astro';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitize from 'sanitize-html';

const parser = new MarkdownIt();

export async function get(ctx: AstroConfig) {
  const blog = await getCollection('blog');

  return rss({
    title: 'The sndwch blog',
    description: 'All Sandwitch news. All the time.',
    site: ctx.site || '',
    items: blog.map(({ data: { title, description, date }, slug, body }) => {
      return {
        title,
        description,
        pubDate: date,
        link: `/blog/${slug}`,
        content: sanitize(parser.render(body)),
      };
    }),
  });
}
