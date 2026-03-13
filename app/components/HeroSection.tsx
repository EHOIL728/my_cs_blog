import { FileText } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative border-b border-sky-200 dark:border-zinc-700 overflow-hidden bg-sky-100/50 dark:bg-zinc-800/50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20"></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(63 63 70 / 0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="max-w-3xl">
          <div className="inline-block mb-4">
            <span className="text-sm font-mono text-blue-600 dark:text-blue-400 bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20">
              &lt;Developer & Data Analyst /&gt;
            </span>
          </div>
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-zinc-900 dark:from-zinc-100 to-zinc-600 dark:to-zinc-400 bg-clip-text text-transparent">
            데이터로 인사이트를,
            <br />
            코드로 솔루션을 만듭니다
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            데이터 분석과 머신러닝, 그리고 효율적인 데이터 엔지니어링에 대한
            실무 경험과 인사이트를 공유합니다.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              <FileText className="w-4 h-4" />
              최근 글 보기
            </button>
            <button className="border border-sky-300 dark:border-zinc-700 hover:border-sky-400 dark:hover:border-zinc-600 text-zinc-900 dark:text-zinc-300 bg-white/50 dark:bg-transparent px-6 py-3 rounded-lg transition-colors">
              프로젝트 둘러보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
