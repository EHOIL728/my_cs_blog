import type { Metadata } from "next";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "데이터 홍익인간",
  description: "데이터, AI, 통계를 다루는 블로그",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-sky-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
            <Header />
            <HeroSection />
            <main>{children}</main>

            <footer className="border-t border-sky-200 dark:border-zinc-700 bg-sky-100 dark:bg-zinc-800 mt-12">
              <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-500">
                  <p className="font-mono">
                    © 2026 데이터 홍익인간. All rights reserved.
                  </p>
                  <p className="font-mono">
                    Built with Next.js + TypeScript + Recharts
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
