import { useSearchParams, useRouter } from "next/navigation";
import { BlogPost } from "../../components/BlogPost";
import { ArrowLeft, Search } from "lucide-react";

const mockSearchResults = [
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
];

export function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";

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
        <div className="flex items-center gap-3 mb-4">
          <Search className="w-8 h-8 text-blue-400" />
          <h1 className="text-4xl bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            검색 결과
          </h1>
        </div>
        <p className="text-xl text-zinc-400">
          {'"'}
          <span className="text-blue-400">{query}</span>
          {'"'} 검색 결과 {mockSearchResults.length}개
        </p>
      </div>

      {/* Search Results */}
      <div className="grid gap-6">
        {mockSearchResults.length > 0 ? (
          mockSearchResults.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-zinc-400 text-lg mb-4">검색 결과가 없습니다.</p>
            <button
              onClick={() => router.push("/")}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              홈으로 돌아가기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
