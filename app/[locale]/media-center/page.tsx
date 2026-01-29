"use client";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {
  fetchCategoryArticles,
  fetchArticles,
  fetchArticlesSearch,
  CategoryArticleItem,
} from "@/lib/media-center";
import { useTranslations } from "next-intl";

export default function MediaCenterPage() {
  const t = useTranslations("profile.mediaCenter");
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ["category-articles"],
    queryFn: fetchCategoryArticles,
  });

  // Category Filter Skeleton
  function CategoryFilterSkeleton() {
    return (
      <div className="w-full bg-[#f8f8f8] py-[32px] sm:py-[24px]">
        <div className="max-w-[1440px] mx-auto lg:px-[160px] px-[24px]">
          <div className="flex flex-wrap md:gap-[16px] gap-[12px] items-center lg:justify-center overflow-x-auto">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="px-[24px] sm:px-[20px] py-[12px] sm:py-[10px] rounded-[72px] sm:rounded-[48px] bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Category Empty State
  function CategoryEmptyState() {
    return (
      <div className="w-full bg-[#f8f8f8] py-[32px] sm:py-[24px]">
        <div className="max-w-[1440px] mx-auto lg:px-[160px] px-[24px]">
          <div className="flex flex-wrap md:gap-[16px] gap-[12px] items-center lg:justify-center overflow-x-auto">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-[24px] sm:px-[20px] py-[12px] sm:py-[10px] rounded-[72px] sm:rounded-[48px] font-inter font-semibold text-[16px] sm:text-[14px] tracking-[-0.64px] sm:tracking-[-0.48px] transition-all whitespace-nowrap ${
                selectedCategory === "All"
                  ? "bg-[#353185] text-white"
                  : "bg-white text-[#353185] hover:bg-[#f0f0ff]"
              }`}
            >
              {t("categories.all")}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Category Filter Content Component
  function CategoryFilterContent({
    categories,
    isLoading,
  }: {
    categories?: CategoryArticleItem[];
    isLoading: boolean;
  }) {
    if (isLoading) {
      return <CategoryFilterSkeleton />;
    }

    if (!categories || categories.length === 0) {
      return <CategoryEmptyState />;
    }

    const categoryNames = categories.map((cat) => cat.name);
    const allCategories = ["All", ...categoryNames];

    return (
      <div className="w-full bg-[#f8f8f8] py-[32px] sm:py-[24px] sticky top-[55px] z-40">
        <div className="max-w-[1440px] mx-auto lg:px-[160px] px-[24px]">
          <div className="flex flex-wrap md:gap-[16px] gap-[12px] items-center lg:justify-center overflow-x-auto">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-[24px] sm:px-[20px] py-[12px] sm:py-[10px] rounded-[72px] sm:rounded-[48px] font-inter font-semibold text-[16px] sm:text-[14px] tracking-[-0.64px] sm:tracking-[-0.48px] transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-[#353185] text-white"
                    : "bg-white text-[#353185] hover:bg-[#f0f0ff]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Get category ID by name
  function getCategoryIdByName(
    name: string,
    categories: CategoryArticleItem[] | undefined,
  ): string | undefined {
    if (name === "All") return undefined;
    const category = categories?.find((cat) => cat.name === name);
    return category?.id;
  }

  // Format date from API
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  }

  // Articles Grid Skeleton
  function ArticlesGridSkeleton() {
    return (
      <div className="max-w-[1440px] mx-auto lg:px-[160px] px-[24px] py-[80px] sm:py-[60px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[32px] sm:gap-[24px]">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-col gap-[20px]">
              <div className="relative w-full h-[240px] rounded-[16px] overflow-hidden bg-gray-200 animate-pulse" />
              <div className="flex flex-col gap-[12px]">
                <div className="flex gap-[12px] items-center">
                  <div className="h-[16px] w-[80px] bg-gray-200 rounded animate-pulse" />
                  <div className="size-[4px] rounded-full bg-gray-200" />
                  <div className="h-[16px] w-[100px] bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="h-[24px] w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-[20px] w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Articles Grid Empty State
  function ArticlesGridEmpty() {
    return (
      <div className="max-w-[1440px] mx-auto lg:px-[160px] px-[24px] py-[80px] sm:py-[60px]">
        <div className="flex flex-col items-center justify-center py-[100px] gap-[16px]">
          <div className="size-[64px] opacity-30">
            <svg className="block size-full" fill="none" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" stroke="#898989" strokeWidth="2" />
              <path
                d="M20 20L16 16"
                stroke="#898989"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
          </div>
          <p className="font-inter text-[#898989] text-[20px] tracking-[-0.8px]">
            {t("noArticles")}
          </p>
        </div>
      </div>
    );
  }
  // Articles Grid Content
  function ArticlesGridContent({
    categories,
  }: {
    categories?: CategoryArticleItem[];
  }) {
    const categoryId = getCategoryIdByName(selectedCategory, categories);

    const { data: articles, isLoading } = useQuery({
      queryKey: ["articles", categoryId, searchQuery],
      queryFn: () => {
        if (searchQuery && searchQuery.trim()) {
          return fetchArticlesSearch(searchQuery);
        }
        return fetchArticles({ categoryId });
      },
    });

    if (isLoading) {
      return <ArticlesGridSkeleton />;
    }

    if (!articles || articles.length === 0) {
      return <ArticlesGridEmpty />;
    }

    return (
      <div className="max-w-[1440px] mx-auto lg:px-[160px] px-[24px] py-[80px] sm:py-[60px]">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[32px] sm:gap-[24px]">
          {articles.map((article) => (
            <div
              key={article.id}
              onClick={() => router.push(`/media-center/${article.slug}`)}
              className="flex flex-col gap-[20px] cursor-pointer group"
            >
              {/* Article Image */}
              <div className="relative w-full h-[240px] rounded-[16px] overflow-hidden bg-gray-200">
                {article.primaryImage ? (
                  <ImageWithFallback
                    src={article.primaryImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
                <div className="absolute top-[16px] left-[16px] px-[16px] py-[6px] rounded-[64px] bg-[#353185] bg-opacity-90">
                  <p className="font-inter font-medium text-white text-[14px] tracking-[-0.56px]">
                    {article.category.name}
                  </p>
                </div>
              </div>

              {/* Article Content */}
              <div className="flex flex-col gap-[12px]">
                {/* Date and Author */}
                <div className="flex gap-[12px] items-center">
                  <p className="font-inter text-[#898989] text-[14px] tracking-[-0.56px]">
                    {formatDate(article.publishedAt)}
                  </p>
                  <div className="size-[4px] rounded-full bg-[#898989]" />
                  <p className="font-inter text-[#898989] text-[14px] tracking-[-0.56px]">
                    {article.author || ""}
                  </p>
                </div>

                {/* Title */}
                <h3 className="font-inter font-semibold text-[#121212] text-[20px] leading-[1.3] tracking-[-0.8px] group-hover:text-[#353185] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-inter text-[#414141] text-[16px] leading-[1.5] tracking-[-0.64px] line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-[8px] mt-[8px]">
                  <p className="font-inter font-semibold text-[#353185] text-[16px] tracking-[-0.64px]">
                    {t("readMore")}
                  </p>
                  <div className="size-[16px] rotate-[90deg] group-hover:translate-x-1 transition-transform">
                    <svg
                      className="block size-full"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 14L12 9L7 14"
                        stroke="#353185"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section with Purple Gradient Background */}
      <div className="relative w-full bg-gradient-to-b from-[#353185] via-[#605bc3] via-[52.404%] to-[#353185] pt-[120px] sm:pt-[80px] pb-[80px] sm:pb-[60px]">
        <div className="max-w-[1440px] mx-auto md:px-[160px] px-[24px]">
          <div className="flex flex-col gap-[32px] sm:gap-[24px] items-center text-center">
            <div className="flex flex-col gap-[16px] sm:gap-[12px] items-center">
              <h1 className="font-league-spartan font-bold text-white md:text-[48px] text-[32px] leading-[1.292] tracking-[-1.92px] sm:tracking-[-1.28px]">
                {t("hero.title")}
              </h1>
              <p className="font-inter text-white md:text-[20px] text-[16px] leading-[1.5] sm:leading-[1.6] tracking-[-0.8px] sm:tracking-[-0.64px] max-w-[800px] sm:max-w-full opacity-90">
                {t("hero.subtitle")}
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-[600px]">
              <input
                type="text"
                placeholder={t("search.placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:px-[24px] px-[20px] md:py-[16px] py-[12px] rounded-[72px] bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white placeholder:text-white/70 text-[16px] sm:text-[14px] focus:outline-none focus:bg-white/30 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <CategoryFilterContent
        categories={categoriesData}
        isLoading={categoriesLoading}
      />

      {/* Articles Grid */}
      <ArticlesGridContent categories={categoriesData} />
    </div>
  );
}
