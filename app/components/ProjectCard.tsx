import Link from "next/link";
import { ExternalLink, FolderOpen, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  postCount?: number;
  updatedAt?: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  href,
  postCount,
  updatedAt,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const titleContent = href ? (
    <Link
      href={href}
      className="transition-colors hover:text-blue-600 dark:hover:text-blue-400"
    >
      {title}
    </Link>
  ) : (
    title
  );

  return (
    <div className="group overflow-hidden rounded-[1.5rem] border border-sky-200 bg-white transition-all hover:border-sky-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600">
      {imageUrl ? (
        <div className="h-48 w-full overflow-hidden">
          <ImageWithFallback
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <FolderOpen className="h-4 w-4" />
            <span>{postCount ? `${postCount} posts` : "Project"}</span>
          </div>
          {updatedAt ? <span>{updatedAt}</span> : null}
        </div>

        <h3 className="mb-2 text-lg text-zinc-900 dark:text-zinc-100">{titleContent}</h3>

        <p className="mb-4 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-200 bg-sky-100 px-2 py-1 text-xs text-zinc-800 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 text-xs">
          {href ? (
            <Link
              href={href}
              className="text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              프로젝트 글 보기
            </Link>
          ) : null}
          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          ) : null}
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
