import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPostProps {
  href?: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl?: string;
}

export function BlogPost({
  href,
  title,
  excerpt,
  date,
  readTime,
  category,
  imageUrl,
}: BlogPostProps) {
  const content = (
    <article className="group overflow-hidden rounded-[1.5rem] border border-sky-200 bg-white transition-all hover:border-sky-300 hover:shadow-lg hover:shadow-blue-500/10 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600">
      <div className="flex gap-6">
        <div className="flex-1 p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2 py-1 font-mono text-xs text-blue-600 dark:text-blue-400">
              {category}
            </span>
          </div>

          <h3 className="mb-2 text-xl text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
            {title}
          </h3>

          <p className="mb-4 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {imageUrl ? (
          <div className="hidden h-48 w-48 flex-shrink-0 sm:block">
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block">
      {content}
    </Link>
  );
}
