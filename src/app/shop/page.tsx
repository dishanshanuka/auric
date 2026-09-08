"use client";

import { useState, useMemo } from "react";
import { PRODUCTS, Product } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";
import ProductModal from "@/components/shop/ProductModal";
import ShopFilterBar from "@/components/shop/ShopFilterBar";

const CATEGORIES = ["All", "Silk", "Linen", "Wool", "Bespoke Weave"] as const;

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCat = selectedCategory === "All" || item.category === selectedCategory;
      const matchQuery =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        <div className="pb-10 border-b border-white/10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 block mb-2">
            Haute Raw Materials
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white">
            Curated Textile Archive
          </h1>
        </div>

        <ShopFilterBar
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div className="pt-6 pb-8 text-[11px] uppercase tracking-widest text-neutral-500">
          Showing {filtered.length} Weaves
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <ProductCard key={item.id} product={item} onInspect={setActiveModalProduct} />
          ))}
        </div>

        <ProductModal product={activeModalProduct} onClose={() => setActiveModalProduct(null)} />
      </div>
    </div>
  );
}