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
              데이터로 설명하는 개발자
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-500">
              Data Analyst & Developer
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3 text-sm">
            <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-zinc-800 dark:text-zinc-300">
                컴퓨터공학과 데이터 분석을 함께 공부 중
              </p>
              <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-500">
                이론보다 손으로 직접 부딪히는 쪽에 가깝습니다
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Code2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-zinc-800 dark:text-zinc-300">
                분석부터 제품화까지 연결하는 흐름에 관심
              </p>
              <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-500">
                Python, SQL, 시각화, 간단한 프론트엔드까지 다룹니다
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <p className="text-zinc-800 dark:text-zinc-300">Seoul, Korea</p>
              <p className="mt-0.5 text-xs text-zinc-600 dark:text-zinc-500">
                원격 협업과 기록 중심 작업을 선호합니다
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-sky-200 pt-4 dark:border-zinc-700">
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            숫자와 로그 뒤에 숨어 있는 맥락을 읽어내고, 복잡한 내용을
            이해하기 쉬운 글과 화면으로 바꾸는 과정을 좋아합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
