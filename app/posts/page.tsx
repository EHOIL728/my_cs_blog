import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { BlogPost } from "@/app/components/BlogPost";

export const metadata = {
  title: "All Posts",
};

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-mono text-blue-600 dark:text-blue-400">
            Archive
          </p>
          <h1 className="text-4xl text-zinc-900 dark:text-zinc-100">
            모든 글
          </h1>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            데이터, 개발, 학습 기록을 한곳에서 둘러볼 수 있습니다.
          </p>
        </div>
        <div className="rounded-2xl border border-sky-200 bg-white/80 px-4 py-3 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-400">
          총 {posts.length}개의 글
        </div>
      </div>

      <div className="grid gap-5">
        {posts.map((post) => (
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

      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-sky-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
