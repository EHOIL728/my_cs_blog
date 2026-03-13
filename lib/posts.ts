import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const CONTENTS_DIR = path.join(process.cwd(), "contents");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  author?: string;
  readTime?: string;
  featured?: boolean;
};

export type Post = {
  meta: PostMeta;
  content: string;
};

type Frontmatter = Partial<Omit<PostMeta, "slug">>;

async function readPostFile(fileName: string): Promise<Post> {
  const filePath = path.join(CONTENTS_DIR, fileName);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);
  const slug = fileName.replace(/\.mdx?$/, "");
  const meta = normalizeMeta(data as Frontmatter, slug, content);

  return { meta, content };
}

function normalizeMeta(data: Frontmatter, slug: string, content: string): PostMeta {
  const excerpt =
    data.excerpt?.trim() ||
    content
      .replace(/```[\s\S]*?```/g, "")
      .replace(/[#>*_\-\n]/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 140);

  return {
    slug,
    title: data.title?.trim() || slug,
    date: data.date?.trim() || "2026-03-01",
    excerpt,
    category: data.category?.trim() || "General",
    tags: Array.isArray(data.tags) ? data.tags.filter(Boolean) : [],
    author: data.author?.trim() || "Ty",
    readTime:
      data.readTime?.trim() ||
      `${Math.max(3, Math.ceil(content.split(/\s+/).length / 180))} min`,
    featured: Boolean(data.featured),
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const entries = await fs.readdir(CONTENTS_DIR);
  const mdxFiles = entries.filter(
    (file) => file.endsWith(".mdx") || file.endsWith(".md"),
  );
  const posts = await Promise.all(mdxFiles.map(readPostFile));

  return posts.sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.meta.slug);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    return await readPostFile(`${slug}.mdx`);
  } catch {
    try {
      return await readPostFile(`${slug}.md`);
    } catch {
      return null;
    }
  }
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}
