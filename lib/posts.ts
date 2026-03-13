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
  project?: string;
  projectSummary?: string;
  projectRepo?: string;
};

export type Post = {
  meta: PostMeta;
  content: string;
};

export type ProjectGroup = {
  slug: string;
  name: string;
  summary: string;
  repoUrl?: string;
  tags: string[];
  postCount: number;
  updatedAt: string;
  posts: PostMeta[];
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
    project: data.project?.trim(),
    projectSummary: data.projectSummary?.trim(),
    projectRepo: data.projectRepo?.trim(),
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

export async function getAllProjects(): Promise<ProjectGroup[]> {
  const posts = await getAllPosts();
  const projects = new Map<string, ProjectGroup>();

  for (const post of posts) {
    if (!post.meta.project) {
      continue;
    }

    const projectSlug = slugify(post.meta.project);
    const current = projects.get(projectSlug) ?? {
      slug: projectSlug,
      name: post.meta.project,
      summary: post.meta.projectSummary || post.meta.excerpt,
      repoUrl: post.meta.projectRepo,
      tags: [],
      postCount: 0,
      updatedAt: post.meta.date,
      posts: [],
    };

    current.postCount += 1;
    current.updatedAt = current.updatedAt.localeCompare(post.meta.date) > 0
      ? current.updatedAt
      : post.meta.date;
    current.repoUrl = current.repoUrl || post.meta.projectRepo;
    current.summary = current.summary || post.meta.projectSummary || post.meta.excerpt;
    current.tags = Array.from(new Set([...current.tags, ...post.meta.tags]));
    current.posts.push(post.meta);
    projects.set(projectSlug, current);
  }

  return Array.from(projects.values()).sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function getProjectBySlug(projectSlug: string): Promise<ProjectGroup | null> {
  const projects = await getAllProjects();
  return projects.find((project) => project.slug === projectSlug) ?? null;
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}
