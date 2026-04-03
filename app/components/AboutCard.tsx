import { Code2, GraduationCap, MapPin } from "lucide-react";

export function AboutCard() {
  return (
    <div
      id="about"
      className="rounded-[1.5rem] border border-sky-200 bg-white p-6 dark:border-zinc-700 dark:bg-zinc-800"
    >
      <h3 className="mb-4 flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
        <span className="font-mono text-blue-600 dark:text-blue-400">&gt;</span>
        About Me
      </h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-xl font-semibold text-white">
            TY
          </div>
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-200">
              데이터로 세상을 이롭게 하는 엔지니어
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-500">
              Aspiring Data Engineer
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3 text-sm">
            <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-zinc-800 dark:text-zinc-300">
                컴퓨터공학 전공, 데이터 엔지니어링 집중
              </p>
              <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-500">
                이론과 실행을 함께 중요하게 생각합니다
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Code2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-zinc-800 dark:text-zinc-300">
                파이프라인 설계부터 운영까지 관심
              </p>
              <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-500">
                Python, SQL, PostgreSQL, Pipeline
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-zinc-800 dark:text-zinc-300">Seoul, Korea</p>
              <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-500">
                협업을 좋아하고, 배운 것은 꾸준히 기록합니다
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-200 pt-4 dark:border-zinc-700">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            직접 설계하고 부딪히며 배웁니다. 개념은 구현으로, 구현은 기록으로
            남깁니다.
          </p>
        </div>
      </div>
    </div>
  );
}
