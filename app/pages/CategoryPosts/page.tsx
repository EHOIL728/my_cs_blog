import { useParams } from "next/navigation";
import { BlogPost } from "../../components/BlogPost";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

// Mock data for different categories
const categoryData: Record<string, { title: string; description: string }> = {
  "data-analysis": {
    title: "Data Analysis",
    description: "데이터 분석 기법과 도구에 대한 포스트",
  },
  "machine-learning": {
    title: "Machine Learning",
    description: "머신러닝 모델과 알고리즘에 대한 포스트",
  },
  "data-engineering": {
    title: "Data Engineering",
    description: "데이터 파이프라인과 아키텍처에 대한 포스트",
  },
  visualization: {
    title: "Visualization",
    description: "데이터 시각화 기법과 라이브러리에 대한 포스트",
  },
  database: {
    title: "Database",
    description: "데이터베이스 설계와 쿼리 최적화에 대한 포스트",
  },
  statistics: {
    title: "Statistics",
    description: "통계 분석과 가설 검정에 대한 포스트",
  },
};

const subcategoryData: Record<string, { title: string; description: string }> =
  {
    pandas: {
      title: "Pandas",
      description: "Pandas 라이브러리를 활용한 데이터 분석",
    },
    numpy: {
      title: "NumPy",
      description: "NumPy를 활용한 수치 연산과 배열 처리",
    },
    tableau: {
      title: "Tableau",
      description: "Tableau를 활용한 비즈니스 인텔리전스",
    },
    excel: { title: "Excel", description: "Excel을 활용한 데이터 분석" },
    "scikit-learn": {
      title: "Scikit-learn",
      description: "Scikit-learn을 활용한 머신러닝",
    },
    tensorflow: {
      title: "TensorFlow",
      description: "TensorFlow를 활용한 딥러닝",
    },
    pytorch: { title: "PyTorch", description: "PyTorch를 활용한 딥러닝" },
    "model-evaluation": {
      title: "Model Evaluation",
      description: "머신러닝 모델 평가 기법",
    },
    "apache-spark": {
      title: "Apache Spark",
      description: "Spark를 활용한 대규모 데이터 처리",
    },
    kafka: {
      title: "Kafka",
      description: "Kafka를 활용한 실시간 데이터 스트리밍",
    },
    airflow: {
      title: "Airflow",
      description: "Airflow를 활용한 워크플로우 관리",
    },
    "etl-pipeline": {
      title: "ETL Pipeline",
      description: "ETL 파이프라인 설계와 구현",
    },
    matplotlib: {
      title: "Matplotlib",
      description: "Matplotlib을 활용한 데이터 시각화",
    },
    seaborn: { title: "Seaborn", description: "Seaborn을 활용한 통계 시각화" },
    plotly: {
      title: "Plotly",
      description: "Plotly를 활용한 인터랙티브 시각화",
    },
    d3js: { title: "D3.js", description: "D3.js를 활용한 웹 기반 시각화" },
    sql: { title: "SQL", description: "SQL 쿼리 작성과 최적화" },
    postgresql: {
      title: "PostgreSQL",
      description: "PostgreSQL 데이터베이스 관리",
    },
    mongodb: { title: "MongoDB", description: "MongoDB NoSQL 데이터베이스" },
    "query-optimization": {
      title: "Query Optimization",
      description: "쿼리 성능 최적화 기법",
    },
    "ab-testing": {
      title: "A/B Testing",
      description: "A/B 테스트 설계와 분석",
    },
    "hypothesis-testing": {
      title: "Hypothesis Testing",
      description: "가설 검정 방법론",
    },
    "regression-analysis": {
      title: "Regression Analysis",
      description: "회귀 분석 기법",
    },
    probability: { title: "Probability", description: "확률론과 확률 분포" },
  };

const mockPosts = [
  {
    title: "Pandas 데이터프레임 고급 활용법",
    excerpt:
      "Pandas의 다양한 데이터프레임 조작 기법을 실전 예제와 함께 알아봅니다. GroupBy, Pivot, Merge 등 핵심 기능을 다룹니다.",
    date: "2026.03.01",
    readTime: "10분",
    views: "1.5k",
    category: "Data Analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1660616246653-e2c57d1077b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHB5dGhvbiUyMGNvZGV8ZW58MXx8fHwxNzczMDA5NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "결측치 처리 완벽 가이드",
    excerpt:
      "데이터 분석에서 가장 중요한 결측치 처리 방법을 상황별로 정리했습니다. 단순 대체부터 고급 기법까지 소개합니다.",
    date: "2026.02.25",
    readTime: "12분",
    views: "2.1k",
    category: "Data Analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1770681381576-f1fdceb2ea01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0cyUyMGdyYXBoc3xlbnwxfHx8fDE3NzMwNTQwMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "시계열 데이터 분석 시작하기",
    excerpt:
      "Pandas의 시계열 기능을 활용하여 트렌드 분석, 계절성 분해, 예측 모델링까지 단계별로 알아봅니다.",
    date: "2026.02.18",
    readTime: "15분",
    views: "1.8k",
    category: "Data Analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1529078155058-5d716f45d604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGF0aXN0aWNzJTIwYW5hbHl0aWNzJTIwbnVtYmVyc3xlbnwxfHx8fDE3NzMwNTQwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "데이터 정규화와 표준화: 언제 무엇을 사용할까?",
    excerpt:
      "Min-Max Scaling과 Standardization의 차이점과 적용 시나리오를 실제 데이터로 비교 분석합니다.",
    date: "2026.02.10",
    readTime: "8분",
    views: "1.3k",
    category: "Data Analysis",
    imageUrl:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc3MzAxMzYyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function CategoryPosts() {
  const { category, subcategory } = useParams<{
    category: string;
    subcategory?: string;
  }>();
  const router = useRouter();

  const pageData = subcategory
    ? subcategoryData[subcategory]
    : category
      ? categoryData[category]
      : null;

  if (!pageData) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-3xl mb-4">카테고리를 찾을 수 없습니다</h1>
          <button
            onClick={() => router.push("/")}
            className="text-blue-400 hover:text-blue-300"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>홈으로</span>
      </button>

      {/* Page Header */}
      <div className="mb-12">
        <div className="inline-block mb-4">
          <span className="text-sm font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded border border-blue-500/20">
            {subcategory
              ? `${categoryData[category!]?.title} / ${pageData.title}`
              : pageData.title}
          </span>
        </div>
        <h1 className="text-4xl mb-4 bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
          {pageData.title}
        </h1>
        <p className="text-xl text-zinc-400">{pageData.description}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
          <p className="text-zinc-400 text-sm mb-1">총 포스트</p>
          <p className="text-3xl text-zinc-100 font-mono">{mockPosts.length}</p>
        </div>
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
          <p className="text-zinc-400 text-sm mb-1">총 조회수</p>
          <p className="text-3xl text-zinc-100 font-mono">6.7k</p>
        </div>
        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
          <p className="text-zinc-400 text-sm mb-1">평균 읽기 시간</p>
          <p className="text-3xl text-zinc-100 font-mono">11분</p>
        </div>
      </div>

      {/* Posts List */}
      <div>
        <h2 className="text-2xl mb-6 flex items-center gap-2">
          <span className="text-blue-400 font-mono">&gt;</span>
          포스트 목록
        </h2>

        <div className="grid gap-6">
          {mockPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
