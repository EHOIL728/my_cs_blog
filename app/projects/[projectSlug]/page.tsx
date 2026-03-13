import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github } from "lucide-react";
import { BlogPost } from "@/app/components/BlogPost";
import { getProjectBySlug } from "@/lib/posts";

type ProjectDetailPageProps = {
  params: Promise<{ projectSlug: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { projectSlug } = await params;
  const project = await getProjectBySlug(projectSlug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        <ArrowLeft className="h-4 w-4" />
        프로젝트 목록으로 돌아가기
      </Link>

      <div className="mt-8 rounded-[2rem] border border-sky-200 bg-white/80 p-8 dark:border-zinc-700 dark:bg-zinc-900/80">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-mono text-blue-600 dark:text-blue-400">
              Project
            </p>
            <h1 className="mt-2 text-4xl text-zinc-900 dark:text-zinc-100">
              {project.name}
            </h1>
            <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
              {project.summary}
            </p>
          </div>
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm text-zinc-700 transition-colors hover:border-sky-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              <Github className="h-4 w-4" />
              GitHub 보기
            </a>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs text-zinc-800 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5">
        {project.posts.map((post) => (
          <BlogPost
            key={post.slug}
            href={`/posts/${post.slug}`}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            readTime={post.readTime ?? "5 min"}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
}
