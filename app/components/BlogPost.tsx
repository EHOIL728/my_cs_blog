import { Calendar, Clock, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  views: string;
  category: string;
  imageUrl?: string;
}

export function BlogPost({
  title,
  excerpt,
  date,
  readTime,
  views,
  category,
  imageUrl,
}: BlogPostProps) {
  return (
    <article className="bg-white dark:bg-zinc-800 border border-sky-200 dark:border-zinc-700 rounded-lg overflow-hidden hover:border-sky-300 dark:hover:border-zinc-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer group">
      <div className="flex gap-6">
        <div className="flex-1 p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded border border-blue-500/20 font-mono">
              {category}
            </span>
          </div>

          <h3 className="text-xl text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2">
            {excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>{views} views</span>
            </div>
          </div>
        </div>

        {imageUrl && (
          <div className="w-48 h-48 flex-shrink-0 hidden sm:block">
            <ImageWithFallback
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </article>
  );
}
