"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarChart3, Github, Linkedin, Menu, Search } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./ThemeToggle";

const socialLinks = {
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile",
};

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (!searchQuery.trim()) {
      return;
    }

    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-sky-200 bg-sky-50/85 backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-900/95">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex flex-shrink-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-mono text-xl text-zinc-900 dark:text-zinc-100">
                데홍익인간
              </h1>
              <p className="font-mono text-xs text-zinc-600 dark:text-zinc-500">
                데이터로 인간 세상을 널리 이롭게 하다
              </p>
            </div>
          </Link>

          <form onSubmit={handleSearch} className="hidden max-w-md flex-1 md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sky-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="관심 있는 주제를 검색해보세요"
                className="w-full rounded-xl border border-sky-200 bg-white py-2 pr-4 pl-10 text-sm text-zinc-900 transition-colors placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
              />
            </div>
          </form>

          <nav className="flex items-center gap-6">
            <Link
              href="/posts"
              className="hidden text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 lg:block"
            >
              Posts
            </Link>
            <Link
              href="/projects"
              className="hidden text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 lg:block"
            >
              Projects
            </Link>

            <div className="ml-2 hidden items-center gap-2 sm:flex">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-zinc-600 transition-colors hover:bg-sky-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-zinc-600 transition-colors hover:bg-sky-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="ml-2 flex items-center gap-3">
              <ThemeToggle />

              <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild>
                  <button className="rounded-lg p-2 text-zinc-600 transition-colors hover:bg-sky-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100">
                    <Menu className="h-5 w-5" />
                  </button>
                </SheetTrigger>
                <SheetContent className="border-sky-200 bg-sky-50 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
                  <SheetHeader>
                    <SheetTitle className="text-zinc-900 dark:text-zinc-100">
                      Menu
                    </SheetTitle>
                  </SheetHeader>
                  <Sidebar onClose={() => setSidebarOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>

        <form onSubmit={handleSearch} className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sky-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="관심 있는 주제를 검색해보세요"
              className="w-full rounded-xl border border-sky-200 bg-white py-2 pr-4 pl-10 text-sm text-zinc-900 transition-colors placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
            />
          </div>
        </form>
      </div>
    </header>
  );
}
