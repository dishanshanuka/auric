"use client";

import { Search } from "lucide-react";

interface ShopFilterBarProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function ShopFilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: ShopFilterBarProps) {
  return (
    <div className="py-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-white/5">
      {/* Category Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-white text-black font-semibold shadow-md"
                : "bg-white/5 text-neutral-400 hover:text-white border border-white/10 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="relative w-full sm:w-64">
        <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search weave or fiber..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-[#161618] border border-white/10 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition-colors"
        />
      </div>
    </div>
  );
}