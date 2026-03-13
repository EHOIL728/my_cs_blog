import { GraduationCap, MapPin, Code2 } from "lucide-react";

export function AboutCard() {
  return (
    <div className="bg-white dark:bg-zinc-800 border border-sky-200 dark:border-zinc-700 rounded-lg p-6">
      <h3 className="text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
        <span className="text-blue-600 dark:text-blue-400 font-mono">&gt;</span>
        About Me
      </h3>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center text-2xl">
            👨‍💻
          </div>
          <div>
            <p className="text-zinc-900 dark:text-zinc-200 font-medium">
              데이터 분석가
            </p>
            <p className="text-zinc-600 dark:text-zinc-500 text-sm">
              Data Analyst & Developer
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3 text-sm">
            <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-zinc-800 dark:text-zinc-300">
                홍익대학교 재학중
              </p>
              <p className="text-zinc-600 dark:text-zinc-500 text-xs mt-0.5">
                데이터 분석 전공
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-zinc-800 dark:text-zinc-300">
                데이터로 문제 해결
              </p>
              <p className="text-zinc-600 dark:text-zinc-500 text-xs mt-0.5">
                분석부터 시각화까지
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-zinc-800 dark:text-zinc-300">Seoul, Korea</p>
              <p className="text-zinc-600 dark:text-zinc-500 text-xs mt-0.5">
                원격 근무 가능
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-sky-200 dark:border-zinc-700">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            데이터로 세상을 이롭게 만드는 것이 목표입니다. 복잡한 데이터를
            이해하기 쉬운 인사이트로 변환하는 것을 좋아합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
