import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ThemeProvider } from "./components/ThemeProvider";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-ExtraLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "데홍익인간",
  description: "데이터로 세상을 이롭게, 그 과정을 기록하는 개인 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={pretendard.variable}>
        <ThemeProvider>
          <div className="min-h-screen bg-slate-50 text-zinc-900 dark:bg-[#111318] dark:text-zinc-100">
            <Header />
            <HeroSection />
            <main>{children}</main>

            <footer className="mt-12 border-t border-sky-200 bg-slate-100 dark:border-zinc-700 dark:bg-[#171a20]">
              <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-500">
                  <p className="font-mono">2026 데홍익인간. All rights reserved.</p>
                  <p className="font-mono">Built with Next.js, MDX, and Tailwind CSS</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
