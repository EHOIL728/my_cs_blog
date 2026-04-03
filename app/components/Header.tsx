"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Github, Linkedin, Menu, Search } from "lucide-react";
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
  github: "https://github.com/ehoil-de",
  linkedin: "https://www.linkedin.com/in/tae-in-jeong-20a927400/",
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
        <div className="flex items-start justify-between gap-4">
          <Link href="/" className="flex min-w-0 flex-shrink items-center gap-3">
            <div className="overflow-hidden rounded-xl border border-sky-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800">
              <Image
                src="/dehongikingan_icon.svg"
                alt="데홍익인간 로고"
                width={52}
                height={52}
                className="h-11 w-11 object-cover sm:h-13 sm:w-13"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="mb-1 hidden font-mono text-[10px] uppercase tracking-[0.45em] text-blue-600 dark:text-blue-400 sm:block">
                D E H O N G
              </p>
              <h1 className="truncate text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-xl">
                데홍익인간
              </h1>
              <p className="mt-1 line-clamp-1 text-[11px] text-zinc-600 dark:text-zinc-500 sm:text-xs">
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

          <nav className="flex flex-shrink-0 items-center gap-3 sm:gap-6">
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
