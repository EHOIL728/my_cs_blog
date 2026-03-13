"use client";
import { Github, Linkedin, Mail, BarChart3, Search, Menu } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Sidebar } from "./Sidebar";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="border-b border-zinc-700 dark:border-zinc-700 border-sky-200 bg-sky-50/80 dark:bg-zinc-900/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-10 h-10 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-mono text-zinc-900 dark:text-zinc-100">
                데이터 홍익인간
              </h1>
              <p className="text-xs text-zinc-600 dark:text-zinc-500 font-mono">
                데이터로 널리 인간 세상을 이롭게 하다
              </p>
            </div>
          </Link>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-md hidden md:block"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 dark:text-zinc-500 text-sky-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="포스트 검색..."
                className="w-full bg-white dark:bg-zinc-800 border border-sky-200 dark:border-zinc-700 rounded-lg pl-10 pr-4 py-2 text-sm text-zinc-900 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-500 placeholder:text-sky-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              />
            </div>
          </form>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden lg:block"
            >
              Posts
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden lg:block"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden lg:block"
            >
              About
            </Link>

            {/* Social Links */}
            <div className="flex items-center gap-3 ml-4">
              <Link
                href="#"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden sm:block"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden sm:block"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors hidden sm:block"
              >
                <Mail className="w-5 h-5" />
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Sidebar Toggle */}
              <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
                <SheetTrigger asChild>
                  <button className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-2 hover:bg-sky-100 dark:hover:bg-zinc-800 rounded-lg">
                    <Menu className="w-5 h-5" />
                  </button>
                </SheetTrigger>
                <SheetContent className="bg-sky-50 dark:bg-zinc-900 border-sky-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100">
                  <SheetHeader>
                    <SheetTitle className="text-zinc-900 dark:text-zinc-100">
                      메뉴
                    </SheetTitle>
                  </SheetHeader>
                  <Sidebar onClose={() => setSidebarOpen(false)} />
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>

        {/* Mobile Search Bar */}
        <form onSubmit={handleSearch} className="mt-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 dark:text-zinc-500 text-sky-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="포스트 검색..."
              className="w-full bg-white dark:bg-zinc-800 border border-sky-200 dark:border-zinc-700 rounded-lg pl-10 pr-4 py-2 text-sm text-zinc-900 dark:text-zinc-200 placeholder-zinc-500 dark:placeholder-zinc-500 placeholder:text-sky-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </form>
      </div>
    </header>
  );
}
