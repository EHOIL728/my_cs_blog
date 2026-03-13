import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Category {
  name: string;
  slug: string;
  subcategories: { name: string; slug: string }[];
}

const categories: Category[] = [
  {
    name: "Data Analysis",
    slug: "data-analysis",
    subcategories: [
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
      { name: "Tableau", slug: "tableau" },
      { name: "Excel", slug: "excel" },
    ],
  },
  {
    name: "Machine Learning",
    slug: "machine-learning",
    subcategories: [
      { name: "Scikit-learn", slug: "scikit-learn" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "Model Evaluation", slug: "model-evaluation" },
    ],
  },
  {
    name: "Data Engineering",
    slug: "data-engineering",
    subcategories: [
      { name: "Apache Spark", slug: "apache-spark" },
      { name: "Kafka", slug: "kafka" },
      { name: "Airflow", slug: "airflow" },
      { name: "ETL Pipeline", slug: "etl-pipeline" },
    ],
  },
  {
    name: "Visualization",
    slug: "visualization",
    subcategories: [
      { name: "Matplotlib", slug: "matplotlib" },
      { name: "Seaborn", slug: "seaborn" },
      { name: "Plotly", slug: "plotly" },
      { name: "D3.js", slug: "d3js" },
    ],
  },
  {
    name: "Database",
    slug: "database",
    subcategories: [
      { name: "SQL", slug: "sql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Query Optimization", slug: "query-optimization" },
    ],
  },
  {
    name: "Statistics",
    slug: "statistics",
    subcategories: [
      { name: "A/B Testing", slug: "ab-testing" },
      { name: "Hypothesis Testing", slug: "hypothesis-testing" },
      { name: "Regression Analysis", slug: "regression-analysis" },
      { name: "Probability", slug: "probability" },
    ],
  },
];

interface SidebarProps {
  onClose: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const router = useRouter();

  const toggleCategory = (slug: string) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  const handleSubcategoryClick = (
    categorySlug: string,
    subcategorySlug: string,
  ) => {
    router.push(`/category/${categorySlug}/${subcategorySlug}`);
    onClose();
  };

  const handleCategoryClick = (categorySlug: string) => {
    router.push(`/category/${categorySlug}`);
    onClose();
  };

  return (
    <div className="py-6">
      <h2 className="text-xl mb-6 px-6 flex items-center gap-2">
        <span className="text-blue-400 font-mono">&gt;</span>
        카테고리
      </h2>

      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.slug}>
            <div className="px-6 py-3 hover:bg-zinc-800 transition-colors">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleCategoryClick(category.slug)}
                  className="flex-1 text-left text-zinc-200 hover:text-blue-400 transition-colors"
                >
                  {category.name}
                </button>
                <button
                  onClick={() => toggleCategory(category.slug)}
                  className="text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      expandedCategory === category.slug ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>

            {expandedCategory === category.slug && (
              <div className="bg-zinc-900 py-2">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub.slug}
                    onClick={() =>
                      handleSubcategoryClick(category.slug, sub.slug)
                    }
                    className="w-full text-left px-12 py-2 text-sm text-zinc-400 hover:text-blue-400 hover:bg-zinc-800 transition-colors"
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
