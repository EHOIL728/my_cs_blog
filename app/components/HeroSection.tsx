import Link from "next/link";
import { FileText } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-sky-200 bg-sky-100/50 dark:border-zinc-700 dark:bg-zinc-800/50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(63 63 70 / 0.2) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-4 inline-block">
            <span className="rounded border border-blue-500/20 bg-blue-500/10 px-3 py-1 font-mono text-sm text-blue-600 dark:text-blue-400">
              &lt;Developer, Analyst, Writer /&gt;
            </span>
          </div>
          <h2 className="mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-5xl text-transparent dark:from-zinc-100 dark:to-zinc-400">
            데이터와 코드로
            <br />
            생각의 흐름을 기록합니다
          </h2>
          <p className="mb-8 text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            데이터 분석, 개발, 실험 기록을 바탕으로 배운 것을 차분하게
            정리합니다. 복잡한 문제를 이해 가능한 글과 화면으로 바꾸는
            과정을 좋아합니다.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/posts"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
            >
              <FileText className="h-4 w-4" />
              글 보러가기
            </Link>
            <Link
              href="/#projects"
              className="rounded-lg border border-sky-300 bg-white/50 px-6 py-3 text-zinc-900 transition-colors hover:border-sky-400 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-300 dark:hover:border-zinc-600"
            >
              프로젝트 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
