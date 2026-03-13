import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  trendUp,
}: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 border border-sky-200 dark:border-zinc-700 rounded-lg p-6 hover:border-sky-300 dark:hover:border-zinc-600 transition-colors">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-1">
            {title}
          </p>
          <p className="text-3xl text-zinc-900 dark:text-zinc-100 font-mono">
            {value}
          </p>
          {trend && (
            <p
              className={`text-sm mt-2 ${trendUp ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
            >
              {trendUp ? "↑" : "↓"} {trend}
            </p>
          )}
        </div>
        <div className="bg-sky-100 dark:bg-zinc-700 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </div>
  );
}
