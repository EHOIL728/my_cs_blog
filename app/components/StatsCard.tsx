import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export function StatsCard({ title, value, icon: Icon }: StatsCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-sky-200 bg-white p-6 transition-colors hover:border-sky-300 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-600">
      <div className="flex items-start justify-between">
        <div>
          <p className="mb-1 text-sm text-zinc-600 dark:text-zinc-400">{title}</p>
          <p className="font-mono text-3xl text-zinc-900 dark:text-zinc-100">{value}</p>
        </div>
        <div className="rounded-xl bg-sky-100 p-3 dark:bg-zinc-700">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
    </div>
  );
}
