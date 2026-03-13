import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CopyLinkButton } from "@/app/components/CopyLinkButton";
import { getAllPostSlugs, getPostBySlug, slugify } from "@/lib/posts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/posts"
        className="inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        <ArrowLeft className="h-4 w-4" />
        글 목록으로 돌아가기
      </Link>

      <article className="mt-8 rounded-[2rem] border border-sky-200 bg-white/90 px-8 py-10 shadow-sm dark:border-zinc-700 dark:bg-zinc-900/80">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-mono text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300">
            {meta.category}
          </span>
          {meta.project ? (
            <Link
              href={`/projects/${slugify(meta.project)}`}
              className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sm text-zinc-700 transition-colors hover:border-sky-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              Project: {meta.project}
            </Link>
          ) : null}
        </div>

        <h1 className="text-4xl leading-tight text-zinc-900 dark:text-zinc-100 md:text-5xl">
          {meta.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
            {meta.author}
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {meta.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {meta.readTime}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <CopyLinkButton path={`/posts/${meta.slug}`} />
          </div>
        </div>

        {meta.tags.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <Link
                key={tag}
                href={`/category/${slugify(meta.category)}/${slugify(tag)}`}
                className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs text-zinc-700 transition-colors hover:border-sky-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600"
              >
                #{tag}
              </Link>
            ))}
          </div>
        ) : null}

        <div className="mt-10 border-t border-sky-200 pt-8 dark:border-zinc-700">
          <div className="prose prose-zinc max-w-none prose-headings:text-zinc-900 prose-p:text-zinc-700 prose-strong:text-zinc-900 prose-code:rounded prose-code:bg-sky-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-blue-700 prose-pre:border prose-pre:border-zinc-700 prose-pre:bg-zinc-950 prose-a:text-blue-600 dark:prose-invert dark:prose-headings:text-zinc-100 dark:prose-p:text-zinc-300 dark:prose-strong:text-zinc-100 dark:prose-code:bg-zinc-800 dark:prose-code:text-blue-300">
            <MDXRemote source={content} />
          </div>
        </div>
      </article>
    </div>
  );
}
