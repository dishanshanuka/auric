"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, Product } from "@/data/products";
import { Search, Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CATEGORIES = ["ALL", "SAREES", "BATIK", "HANDLOOM", "LINENS", "SILKS"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addToCart } = useCart();

  const handleAdd = (product: Product) => {
    addToCart(product, 1);
    setAddedId(product.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1200);
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "ALL" ||
      product.category.toUpperCase() === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-neutral-500 block mb-2">
            Haute Raw Materials
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-white">
            Curated Textile Archive
          </h1>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-mono transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-md"
                      : "bg-[#161618] text-neutral-400 hover:text-white border border-white/5 hover:border-white/15"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              placeholder="Search weave or fiber..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#161618] border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/30 transition"
            />
          </div>
        </div>

        {/* Counter */}
        <div className="py-6">
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? "Weave" : "Weaves"}
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product) => {
            const isJustAdded = addedId === product.id;

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#141416] border border-white/10 overflow-hidden hover:border-white/25 transition-all duration-300"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#1a1a1d]">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] uppercase font-mono tracking-widest text-neutral-300">
                    {product.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-normal text-white group-hover:text-neutral-200 transition">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="font-mono text-sm text-white font-medium">
                      Rs. {product.price.toLocaleString("en-LK")}{" "}
                      <span className="text-xs text-neutral-400 font-normal">
                        / {product.unit}
                      </span>
                    </span>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-mono transition-all duration-200 ${
                        isJustAdded
                          ? "bg-emerald-500 text-black font-semibold"
                          : "bg-white/10 hover:bg-white text-white hover:text-black border border-white/15"
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 stroke-2" />
                          <span>Add to Bag</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}