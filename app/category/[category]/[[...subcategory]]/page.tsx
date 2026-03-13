import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/app/components/BlogPost";
import { getAllPosts, slugify } from "@/lib/posts";

type CategoryPageProps = {
  params: Promise<{ category: string; subcategory?: string[] }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category, subcategory = [] } = await params;
  const tagSlug = subcategory[0];
  const posts = await getAllPosts();
  const filtered = posts.filter((post) => {
    const categoryMatches = slugify(post.meta.category) === category;
    const tagMatches = tagSlug
      ? post.meta.tags.some((tag) => slugify(tag) === tagSlug)
      : false;

    return tagSlug ? categoryMatches && tagMatches : categoryMatches;
  });

  if (filtered.length === 0) {
    notFound();
  }

  const pageTitle = tagSlug
    ? `${filtered[0].meta.category} / ${
        filtered[0].meta.tags.find((tag) => slugify(tag) === tagSlug) ?? tagSlug
      }`
    : filtered[0].meta.category;

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        <ArrowLeft className="h-4 w-4" />
        홈으로 돌아가기
      </Link>

      <div className="mt-8 rounded-[2rem] border border-sky-200 bg-white/80 p-8 dark:border-zinc-700 dark:bg-zinc-900/80">
        <p className="text-sm font-mono text-blue-600 dark:text-blue-400">
          Category
        </p>
        <h1 className="mt-2 text-4xl text-zinc-900 dark:text-zinc-100">
          {pageTitle}
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          관련 글 {filtered.length}개를 모았습니다.
        </p>
      </div>

      <div className="mt-8 grid gap-5">
        {filtered.map((post) => (
          <BlogPost
            key={post.meta.slug}
            href={`/posts/${post.meta.slug}`}
            title={post.meta.title}
            excerpt={post.meta.excerpt}
            date={post.meta.date}
            readTime={post.meta.readTime ?? "5 min"}
            category={post.meta.category}
          />
        ))}
      </div>
    </div>
  );
}
