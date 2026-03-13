import Link from "next/link";
import { BarChart3, Code2, FileText, Tags } from "lucide-react";
import { AboutCard } from "./components/AboutCard";
import { ActivityChart } from "./components/ActivityChart";
import { BlogPost } from "./components/BlogPost";
import { ProjectCard } from "./components/ProjectCard";
import { StatsCard } from "./components/StatsCard";
import { getAllPosts, slugify } from "@/lib/posts";

function normalizeMonth(date: string) {
  const cleaned = date.replace(/\./g, "-");
  return cleaned.slice(0, 7);
}

function formatMonth(month: string) {
  const [, monthValue] = month.split("-");
  return `${monthValue}월`;
}

export default async function Home() {
  const posts = await getAllPosts();
  const recentPosts = posts.slice(0, 3);
  const featuredPosts = posts.filter((post) => post.meta.featured).slice(0, 2);
  const fallbackFeatured =
    featuredPosts.length > 0 ? featuredPosts : posts.slice(0, 2);
  const categories = new Set(posts.map((post) => post.meta.category));
  const totalTags = new Set(posts.flatMap((post) => post.meta.tags));

  const monthlyMap = new Map<string, { month: string; posts: number; topics: number }>();
  for (const post of posts) {
    const monthKey = normalizeMonth(post.meta.date);
    const current = monthlyMap.get(monthKey) ?? {
      month: formatMonth(monthKey),
      posts: 0,
      topics: 0,
    };
    current.posts += 1;
    current.topics += Math.max(1, post.meta.tags.length);
    monthlyMap.set(monthKey, current);
  }

  const activityData = Array.from(monthlyMap.entries())
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([, value]) => value);

  const projects = [
    {
      title: "Personal Blog Refresh",
      description:
        "MDX 기반 블로그를 정리하면서 라우팅, 검색, 카테고리 탐색 흐름을 다시 설계한 작업입니다.",
      tags: ["Next.js", "MDX", "Tailwind"],
    },
    {
      title: "Study Notes Dashboard",
      description:
        "학습 기록을 글, 태그, 월별 활동으로 한 번에 훑어볼 수 있도록 아카이브 형태로 정리했습니다.",
      tags: ["TypeScript", "Recharts", "UX"],
    },
  ];

  return (
    <div>
      <section className="border-b border-sky-200 bg-white/50 dark:border-zinc-700 dark:bg-zinc-800/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Posts"
              value={String(posts.length)}
              icon={FileText}
              trend="new archive structure"
              trendUp={true}
            />
            <StatsCard
              title="Categories"
              value={String(categories.size)}
              icon={Code2}
              trend="organized from MDX"
              trendUp={true}
            />
            <StatsCard
              title="Total Tags"
              value={String(totalTags.size)}
              icon={Tags}
              trend="connected by topics"
              trendUp={true}
            />
            <StatsCard
              title="Projects"
              value={String(projects.length)}
              icon={BarChart3}
              trend="curated showcase"
              trendUp={true}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-2xl text-zinc-900 dark:text-zinc-100">
                  <span className="font-mono text-blue-600 dark:text-blue-400">
                    &gt;
                  </span>
                  Recent Posts
                </h2>
                <Link
                  href="/posts"
                  className="font-mono text-sm text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  view all
                </Link>
              </div>

              <div className="grid gap-6">
                {recentPosts.map((post) => (
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

            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-2xl text-zinc-900 dark:text-zinc-100">
                  <span className="font-mono text-blue-600 dark:text-blue-400">
                    &gt;
                  </span>
                  Featured Posts
                </h2>
              </div>

              <div className="grid gap-6">
                {fallbackFeatured.map((post) => (
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

            <div id="projects">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-2xl text-zinc-900 dark:text-zinc-100">
                  <span className="font-mono text-blue-600 dark:text-blue-400">
                    &gt;
                  </span>
                  Projects
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <AboutCard />

            <div className="rounded-[1.5rem] border border-sky-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
              <h3 className="mb-4 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                <span className="font-mono text-blue-600 dark:text-blue-400">
                  &gt;
                </span>
                Focus Areas
              </h3>

              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(posts.flatMap((post) => post.meta.tags))).map(
                  (tag) => (
                    <Link
                      key={tag}
                      href={`/category/${slugify(
                        posts.find((post) => post.meta.tags.includes(tag))?.meta
                          .category ?? "general",
                      )}/${slugify(tag)}`}
                      className="cursor-pointer rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs text-zinc-800 transition-colors hover:border-sky-300 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
                    >
                      {tag}
                    </Link>
                  ),
                )}
              </div>
            </div>

            <ActivityChart
              data={
                activityData.length > 0
                  ? activityData
                  : [{ month: "03월", posts: 0, topics: 0 }]
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
}
