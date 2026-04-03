import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export function StatsCard({ title, value, icon: Icon }: StatsCardProps) {
  return (
    <div className="rounded-[1.25rem] border border-sky-200 bg-white p-4 transition-colors hover:border-sky-300 sm:rounded-[1.5rem] sm:p-6 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600">
      <div className="flex items-start justify-between">
        <div>
          <p className="mb-1 text-xs text-zinc-600 sm:text-sm dark:text-zinc-400">{title}</p>
          <p className="font-mono text-2xl text-zinc-900 sm:text-3xl dark:text-zinc-100">{value}</p>
        </div>
        <div className="rounded-lg bg-sky-100 p-2.5 sm:rounded-xl sm:p-3 dark:bg-zinc-700">
          <Icon className="h-5 w-5 text-blue-600 sm:h-6 sm:w-6 dark:text-blue-400" />
        </div>
      </div>
    </div>
  );
}
