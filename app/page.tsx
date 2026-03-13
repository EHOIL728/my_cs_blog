import { FileText, Code2, BarChart3, Activity } from "lucide-react";
import { StatsCard } from "./components/StatsCard";
import { BlogPost } from "./components/BlogPost";
import { ActivityChart } from "./components/ActivityChart";
import { AboutCard } from "./components/AboutCard";
import { ProjectCard } from "./components/ProjectCard";

export default function Home() {
  const recentPosts = [
    {
      title: "Python으로 시작하는 데이터 전처리 완벽 가이드",
      excerpt:
        "Pandas와 NumPy를 활용한 효율적인 데이터 정제 및 변환 기법을 소개합니다. 실무에서 자주 마주치는 데이터 품질 이슈와 해결 방법을 다룹니다.",
      date: "2026.03.05",
      readTime: "8분",
      views: "1.2k",
      category: "Data Analysis",
      imageUrl: "",
    },
    {
      title: "머신러닝 모델 성능 평가 지표 총정리",
      excerpt:
        "Accuracy, Precision, Recall부터 F1-Score, AUC-ROC까지 다양한 평가 지표의 의미와 활용 상황을 실제 사례와 함께 설명합니다.",
      date: "2026.02.28",
      readTime: "12분",
      views: "2.3k",
      category: "Machine Learning",
      imageUrl: "",
    },
    {
      title: "시각화 라이브러리 비교: Matplotlib vs Seaborn vs Plotly",
      excerpt:
        "각 라이브러리의 장단점과 사용 시나리오를 비교 분석합니다. 인터랙티브한 대시보드 제작을 위한 최적의 선택은?",
      date: "2026.02.20",
      readTime: "10분",
      views: "1.8k",
      category: "Visualization",
      imageUrl: "",
    },
  ];

  const featuredPosts = [
    {
      title: "SQL 쿼리 최적화 실전 테크닉",
      excerpt:
        "대용량 데이터베이스에서 쿼리 성능을 10배 향상시키는 인덱싱 전략과 실행 계획 분석 방법을 공유합니다.",
      date: "2026.02.12",
      readTime: "15분",
      views: "3.1k",
      category: "Database",
      imageUrl: "",
    },
    {
      title: "A/B 테스트 설계부터 분석까지",
      excerpt:
        "통계적으로 유의미한 A/B 테스트를 설계하고 결과를 해석하는 방법을 단계별로 알아봅니다.",
      date: "2026.02.05",
      readTime: "11분",
      views: "1.5k",
      category: "Statistics",
      imageUrl: "",
    },
  ];

  const projects = [
    {
      title: "고객 이탈 예측 대시보드",
      description:
        "머신러닝 모델을 활용한 실시간 고객 이탈 예측 시스템. Tableau로 시각화하여 비즈니스 인사이트를 제공합니다.",
      tags: ["Python", "Scikit-learn", "Tableau", "SQL"],
      imageUrl: "",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "매출 예측 AI 모델",
      description:
        "시계열 분석과 딥러닝을 결합한 매출 예측 모델. LSTM 네트워크로 92% 정확도를 달성했습니다.",
      tags: ["TensorFlow", "Pandas", "NumPy"],
      imageUrl: "",
      githubUrl: "#",
    },
    {
      title: "실시간 로그 분석 파이프라인",
      description:
        "Kafka와 Spark Streaming을 활용한 대규모 로그 데이터 실시간 처리 시스템. 초당 10만 건 처리 가능합니다.",
      tags: ["Kafka", "Spark", "Docker", "PostgreSQL"],
      imageUrl: "",
      githubUrl: "#",
    },
  ];

  return (
    <div>
      {/* Stats Section */}
      <section className="border-b border-sky-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/30">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Total Posts"
              value="39"
              icon={FileText}
              trend="12% from last month"
              trendUp={true}
            />
            <StatsCard
              title="Code Snippets"
              value="156"
              icon={Code2}
              trend="8% from last month"
              trendUp={true}
            />
            <StatsCard
              title="Total Views"
              value="24.5k"
              icon={Activity}
              trend="23% from last month"
              trendUp={true}
            />
            <StatsCard
              title="Projects"
              value="12"
              icon={BarChart3}
              trend="2 new this month"
              trendUp={true}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Recent Posts */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-mono">
                    &gt;
                  </span>
                  Recent Posts
                </h2>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-mono">
                  view all →
                </button>
              </div>

              <div className="grid gap-6">
                {recentPosts.map((post, index) => (
                  <BlogPost key={index} {...post} />
                ))}
              </div>
            </div>

            {/* Featured Posts */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-mono">
                    &gt;
                  </span>
                  Featured Posts
                </h2>
              </div>

              <div className="grid gap-6">
                {featuredPosts.map((post, index) => (
                  <BlogPost key={index} {...post} />
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-mono">
                    &gt;
                  </span>
                  Projects
                </h2>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-mono">
                  view all →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* About Me */}
            <AboutCard />

            {/* Tech Stack */}
            <div className="bg-white dark:bg-zinc-800 border border-sky-200 dark:border-zinc-700 rounded-lg p-6">
              <h3 className="text-zinc-900 dark:text-zinc-100 mb-4 flex items-center gap-2">
                <span className="text-blue-600 dark:text-blue-400 font-mono">
                  &gt;
                </span>
                Tech Stack
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "SQL",
                  "Pandas",
                  "NumPy",
                  "Scikit-learn",
                  "TensorFlow",
                  "PyTorch",
                  "Matplotlib",
                  "Seaborn",
                  "Tableau",
                  "Apache Spark",
                  "Kafka",
                  "Docker",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-sky-100 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded border border-sky-200 dark:border-zinc-600 hover:border-sky-300 dark:hover:border-zinc-500 transition-colors cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Activity Overview */}
            <ActivityChart />
          </div>
        </div>
      </section>
    </div>
  );
}
