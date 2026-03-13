"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", posts: 4, views: 1200 },
  { month: "Feb", posts: 6, views: 2400 },
  { month: "Mar", posts: 5, views: 2100 },
  { month: "Apr", posts: 8, views: 3200 },
  { month: "May", posts: 7, views: 2800 },
  { month: "Jun", posts: 9, views: 3600 },
];

export function ActivityChart() {
  return (
    <div className="bg-white dark:bg-zinc-800 border border-sky-200 dark:border-zinc-700 rounded-lg p-6">
      <h3 className="text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
        <span className="text-blue-600 dark:text-blue-400 font-mono">&gt;</span>
        Activity Overview
      </h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" />
          <XAxis
            dataKey="month"
            stroke="#71717a"
            style={{ fontSize: "12px" }}
          />
          <YAxis stroke="#71717a" style={{ fontSize: "12px" }} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#27272a",
              border: "1px solid #52525b",
              borderRadius: "8px",
              color: "#e4e4e7",
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
            dataKey="views"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: "#10b981", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex items-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-zinc-400">Posts</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-zinc-400">Views (×100)</span>
        </div>
      </div>
    </div>
  );
}
