"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ActivityPoint = {
  month: string;
  posts: number;
  topics: number;
};

interface ActivityChartProps {
  data: ActivityPoint[];
}

export function ActivityChart({ data }: ActivityChartProps) {
  return (
    <div className="rounded-[1.5rem] border border-sky-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800">
      <h3 className="mb-6 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
        <span className="font-mono text-blue-600 dark:text-blue-400">&gt;</span>
        Activity Overview
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid stroke="#cbd5e1" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="#64748b" style={{ fontSize: "12px" }} />
          <YAxis stroke="#64748b" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "1px solid #cbd5e1",
              borderRadius: "12px",
              color: "#0f172a",
            }}
          />
          <Line
            type="monotone"
            dataKey="posts"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: "#3b82f6", r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="topics"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: "#10b981", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="mt-4 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
          <span className="text-zinc-500 dark:text-zinc-400">Posts</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-zinc-500 dark:text-zinc-400">Topics</span>
        </div>
      </div>
    </div>
  );
}
