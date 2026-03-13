import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>뒤로 가기</span>
      </Link>

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="mb-4">
          {meta.category && (
            <span className="text-sm px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded border border-blue-500/20 font-mono">
              {meta.category}
            </span>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
          {meta.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-8 not-prose">
          {meta.author && (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-lg">
                👨‍💻
              </div>
              <span>{meta.author}</span>
            </div>
          )}

          {meta.date && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{meta.date}</span>
            </div>
          )}

          {meta.readTime && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{meta.readTime} 읽기</span>
            </div>
          )}

          <div className="flex-1" />
          <button className="p-2 hover:bg-sky-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-sky-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>

        {meta.tags?.length ? (
          <div className="flex flex-wrap gap-2 mb-12 not-prose">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-sky-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-300 rounded border border-sky-200 dark:border-zinc-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}

        <hr className="border-sky-200 dark:border-zinc-700 mb-12" />

        <div
          className="prose-headings:text-zinc-900 dark:prose-headings:text-zinc-100
                     prose-p:text-zinc-700 dark:prose-p:text-zinc-300
                     prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100
                     prose-code:text-blue-600 dark:prose-code:text-blue-400
                     prose-code:bg-sky-100 dark:prose-code:bg-zinc-800
                     prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                     prose-pre:bg-zinc-900 dark:prose-pre:bg-zinc-950
                     prose-pre:border prose-pre:border-zinc-700
                     prose-a:text-blue-600 dark:prose-a:text-blue-400
                     prose-li:text-zinc-700 dark:prose-li:text-zinc-300"
        >
          <MDXRemote source={content} />
        </div>
      </article>
    </div>
  );
}
