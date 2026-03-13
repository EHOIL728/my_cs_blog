import Link from "next/link";
import { FolderKanban } from "lucide-react";
import { ProjectCard } from "@/app/components/ProjectCard";
import { getAllProjects } from "@/lib/posts";

export const metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="mb-10 rounded-[2rem] border border-sky-200 bg-white/80 p-8 dark:border-zinc-700 dark:bg-zinc-900/80">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400">
            <FolderKanban className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-mono text-blue-600 dark:text-blue-400">
              Projects
            </p>
            <h1 className="text-3xl text-zinc-900 dark:text-zinc-100">
              프로젝트 목록
            </h1>
          </div>
        </div>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          MDX 글에 적어둔 프로젝트 이름을 기준으로 관련 포스트를 묶어 보여줍니다.
        </p>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
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
      ) : (
        <div className="rounded-[2rem] border border-dashed border-sky-300 bg-sky-50/60 px-8 py-16 text-center dark:border-zinc-700 dark:bg-zinc-900/40">
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            아직 프로젝트로 묶인 글이 없습니다.
          </p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
            MDX frontmatter에 `project`, `projectSummary`, `projectRepo`를 추가해보세요.
          </p>
          <div className="mt-6">
            <Link
              href="/posts"
              className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-700"
            >
              글 먼저 보러가기
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
