import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Luka Kidrič — Blog',
    description: 'Notes on DevOps, Kubernetes, Linux and infrastructure from an SRE engineer and Kubestronaut.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/posts/*.md')),
    customData: `<language>en-us</language>`,
  });
}
