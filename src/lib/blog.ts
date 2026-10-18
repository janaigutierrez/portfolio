import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  hidden?: boolean;
}

// Articles visibles al llistat. Els marcats amb `hidden: true` (temes tècnics, fora de
// l'audiència) no surten a la llista però la seva URL es continua generant.
export function getAllPosts(): PostMeta[] {
  return getAllPostsIncludingHidden().filter((post) => !post.hidden);
}

export function getAllPostsIncludingHidden(): PostMeta[] {
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf-8");
      const { data } = matter(raw);
      return { slug, ...data } as PostMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } {
  const filepath = path.join(POSTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  return { meta: { slug, ...data } as PostMeta, content };
}
