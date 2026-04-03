"use client";

import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { categories } from "@/lib/categories";

interface SidebarProps {
  onClose: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const router = useRouter();

  const toggleCategory = (slug: string) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  const handleSubcategoryClick = (categorySlug: string, subcategorySlug: string) => {
    router.push(`/category/${categorySlug}/${subcategorySlug}`);
    onClose();
  };

  const handleCategoryClick = (categorySlug: string) => {
    router.push(`/category/${categorySlug}`);
    onClose();
  };

  return (
    <div className="py-6">
      <h2 className="mb-6 flex items-center gap-2 px-6 text-xl">
        <span className="font-mono text-blue-600 dark:text-blue-400">&gt;</span>
        Categories
      </h2>

      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.slug}>
            <div className="px-6 py-3 transition-colors hover:bg-sky-100 dark:hover:bg-zinc-800">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleCategoryClick(category.slug)}
                  className="flex-1 text-left text-zinc-700 transition-colors hover:text-blue-600 dark:text-zinc-200 dark:hover:text-blue-400"
                >
                  {category.name}
                </button>
                <button
                  onClick={() => toggleCategory(category.slug)}
                  disabled={category.subcategories.length === 0}
                  className="text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
                >
                  {category.subcategories.length > 0 ? (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedCategory === category.slug ? "rotate-180" : ""
                      }`}
                    />
                  ) : null}
                </button>
              </div>
            </div>

            {category.subcategories.length > 0 && expandedCategory === category.slug ? (
              <div className="bg-sky-50 py-2 dark:bg-zinc-900">
                {category.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.slug}
                    onClick={() =>
                      handleSubcategoryClick(category.slug, subcategory.slug)
                    }
                    className="w-full px-12 py-2 text-left text-sm text-zinc-500 transition-colors hover:bg-sky-100 hover:text-blue-600 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
                  >
                    {subcategory.name}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
