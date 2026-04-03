import Link from "next/link";
import { BookOpen, CalendarDays, FileText, FolderKanban } from "lucide-react";
import { AboutCard } from "./components/AboutCard";
import { ActivityChart } from "./components/ActivityChart";
import { BlogPost } from "./components/BlogPost";
import { ProjectCard } from "./components/ProjectCard";
import { StatsCard } from "./components/StatsCard";
import { getCategoryConfig } from "@/lib/categories";
import { getAllPosts, getAllProjects } from "@/lib/posts";

const focusAreas = [
  "SQL",
  "PostgreSQL",
  "Python",
  "Pandas",
  "ELT Pipeline",
  "ETL Pipeline",
  "Data Engineering",
  "Books",
  "Next.js",
  "MDX",
  "React",
  "Vite",
  "FastAPI",
];

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
  const projects = await getAllProjects();
  const recentPosts = posts.slice(0, 3);
  const booksCount = getCategoryConfig("books")?.subcategories.length ?? 0;
  const latestUpdate = posts[0]?.meta.date ?? "-";

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

  return (
    <div>
      <section className="border-b border-sky-200 bg-white/50 dark:border-zinc-700 dark:bg-zinc-800/30">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard
              title="Total Posts"
              value={String(posts.length)}
              icon={FileText}
            />
            <StatsCard
              title="Projects"
              value={String(projects.length)}
              icon={FolderKanban}
            />
            <StatsCard
              title="Books"
              value={String(booksCount)}
              icon={BookOpen}
            />
            <StatsCard
              title="Latest Update"
              value={latestUpdate}
              icon={CalendarDays}
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

            <div id="projects">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-2xl text-zinc-900 dark:text-zinc-100">
                  <span className="font-mono text-blue-600 dark:text-blue-400">
                    &gt;
                  </span>
                  Projects
                </h2>
                <Link
                  href="/projects"
                  className="font-mono text-sm text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  browse projects
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.slice(0, 4).map((project) => (
                  <ProjectCard
                    key={project.slug}
                    title={project.name}
                    description={project.summary}
                    tags={project.tags}
                    href={`/projects/${project.slug}`}
                    postCount={project.postCount}
                    updatedAt={project.updatedAt}
                    githubUrl={project.repoUrl}
                  />
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
                {focusAreas.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs text-zinc-800 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"
                  >
                    {tag}
                  </span>
                ))}
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
