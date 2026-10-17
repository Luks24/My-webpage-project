import type { MarkdownInstance } from "astro";

export interface PostFrontmatter {
  title: string;
  author?: string;
  description?: string;
  pubDate: string;
  image?: { url: string; alt?: string };
  tags?: string[];
  languages?: string[];
}

export interface Post {
  url: string;
  frontmatter: PostFrontmatter;
  readingTime: number;
}

const modules = import.meta.glob<MarkdownInstance<PostFrontmatter>>(
  "../pages/blog/posts/*.md",
  { eager: true }
);

const WORDS_PER_MINUTE = 220;

let cache: Post[] | undefined;

/**
 * All blog posts, newest first. Computed lazily: post pages import the
 * layout that imports this module, so it must not touch the globbed
 * modules at load time.
 */
export const getPosts = (): Post[] => (cache ??= Object.values(modules)
  .filter((mod) => mod.frontmatter?.pubDate && mod.url)
  .map((mod) => {
    const words = mod.rawContent().split(/\s+/).filter(Boolean).length;
    return {
      url: mod.url as string,
      frontmatter: mod.frontmatter,
      readingTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    };
  })
  .sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).getTime() -
      new Date(a.frontmatter.pubDate).getTime()
  ));

const normalize = (url: string) => url.replace(/\/$/, "");

export const findPost = (url: string) =>
  getPosts().find((post) => normalize(post.url) === normalize(url));

export const getTags = () => [
  ...new Set(getPosts().flatMap((p) => p.frontmatter.tags ?? [])),
];

export const getTechs = () => [
  ...new Set(getPosts().flatMap((p) => p.frontmatter.languages ?? [])),
];

export const formatDate = (date: string, month: "long" | "short" = "short") =>
  new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
    day: "numeric",
    month,
    year: "numeric",
  });
