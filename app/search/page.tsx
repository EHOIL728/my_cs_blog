import Link from "next/link";
import { Search } from "lucide-react";
import { BlogPost } from "@/app/components/BlogPost";
import { getAllPosts, slugify } from "@/lib/posts";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const posts = await getAllPosts();
  const results = posts.filter((post) => {
    const haystack = [
      post.meta.title,
      post.meta.excerpt,
      post.meta.category,
      ...post.meta.tags,
    ]
      .join(" ")
      .toLowerCase();

    return query.length > 0 && haystack.includes(query);
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-10 rounded-[2rem] border border-sky-200 bg-white/80 p-8 dark:border-zinc-700 dark:bg-zinc-900/80">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400">
            <Search className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-mono text-blue-600 dark:text-blue-400">
              Search
            </p>
            <h1 className="text-3xl text-zinc-900 dark:text-zinc-100">
              검색 결과
            </h1>
          </div>
        </div>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          {query
            ? `"${q}"에 대한 결과 ${results.length}건`
            : "검색어를 입력하면 관련 글을 보여드립니다."}
        </p>
      </div>

      {results.length > 0 ? (
        <div className="grid gap-5">
          {results.map((post) => (
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
        <div className="rounded-[2rem] border border-dashed border-sky-300 bg-sky-50/60 px-8 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900/40">
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            일치하는 글을 찾지 못했습니다.
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            다른 키워드로 검색하거나 카테고리 페이지를 둘러보세요.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/posts"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
            >
              전체 글 보기
            </Link>
            <Link
              href={`/category/${slugify("Data Analysis")}`}
              className="rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-sky-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              대표 카테고리 보기
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
