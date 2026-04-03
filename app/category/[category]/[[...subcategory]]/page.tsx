import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/app/components/BlogPost";
import { getCategoryConfig, getSubcategoryConfig } from "@/lib/categories";
import { getAllPosts, slugify } from "@/lib/posts";

type CategoryPageProps = {
  params: Promise<{ category: string; subcategory?: string[] }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category, subcategory = [] } = await params;
  const tagSlug = subcategory[0];
  const categoryConfig = getCategoryConfig(category);
  const subcategoryConfig = tagSlug
    ? getSubcategoryConfig(category, tagSlug)
    : null;

  if (!categoryConfig || (tagSlug && !subcategoryConfig)) {
    notFound();
  }

  const posts = await getAllPosts();
  const filtered = posts.filter((post) => {
    if (post.meta.project) {
      return false;
    }

    const categoryMatches = slugify(post.meta.category) === category;
    const tagMatches = tagSlug
      ? post.meta.tags.some((tag) => slugify(tag) === tagSlug)
      : false;

    return tagSlug ? categoryMatches && tagMatches : categoryMatches;
  });

  const pageTitle = tagSlug
    ? `${categoryConfig.name} / ${subcategoryConfig?.name ?? tagSlug}`
    : categoryConfig.name;

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

      {filtered.length > 0 ? (
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
      ) : (
        <div className="mt-8 rounded-[2rem] border border-dashed border-sky-300 bg-sky-50/60 px-8 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900/40">
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            아직 이 카테고리에는 글이 없습니다.
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            다음 글부터 이 구조에 맞춰 천천히 쌓아가면 됩니다.
          </p>
        </div>
      )}
    </div>
  );
}
