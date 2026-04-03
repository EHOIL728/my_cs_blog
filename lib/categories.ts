export type CategoryItem = {
  name: string;
  slug: string;
  subcategories: { name: string; slug: string }[];
};

export const categories: CategoryItem[] = [
  {
    name: "Database",
    slug: "database",
    subcategories: [{ name: "PostgreSQL", slug: "postgresql" }],
  },
  {
    name: "Computer Science",
    slug: "computer-science",
    subcategories: [{ name: "Software Engineering", slug: "software-engineering" }],
  },
  {
    name: "Books",
    slug: "books",
    subcategories: [{ name: "DDIA", slug: "ddia" }],
  },
];

export function getCategoryConfig(categorySlug: string) {
  return categories.find((category) => category.slug === categorySlug) ?? null;
}

export function getSubcategoryConfig(categorySlug: string, subcategorySlug: string) {
  const category = getCategoryConfig(categorySlug);
  if (!category) {
    return null;
  }

  return (
    category.subcategories.find(
      (subcategory) => subcategory.slug === subcategorySlug,
    ) ?? null
  );
}
