"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

interface CategoryHighlight {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  featuredProduct: string;
  price: string;
  image: string;
}

const CATEGORY_SHOWCASE: CategoryHighlight[] = [
  {
    id: "silk",
    name: "Pure Silk",
    tagline: "Fluid Drape & Natural Sheen",
    desc: "Woven on low-tension mechanical shuttle looms in Como to preserve natural cellular elasticity and thermal breathability.",
    featuredProduct: "Imperial Mulberry Raw Silk",
    price: "$185 / meter",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "linen",
    name: "Belgian Flax",
    tagline: "Stone-Washed Earthy Texture",
    desc: "Enzyme stone-washed flax harvested from the riverbanks of Flanders. Natural slubbing creates an effortless architectural silhouette.",
    featuredProduct: "Flemish Heavyweight Flax",
    price: "$95 / meter",
    image: "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "wool",
    name: "Merino & Cashmere",
    tagline: "Savile Row Tailoring Grade",
    desc: "Spun from combed extra-fine 15.5-micron Merino blended with Mongolian cashmere for bespoke structured suiting.",
    featuredProduct: "Biella Highland Twill",
    price: "$240 / meter",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bespoke",
    name: "Gilded Filament",
    tagline: "Couture Metallic Organza",
    desc: "Translucent silk warp intertwined with gold filament yarn, tailored specifically for royal bridal overlays and red-carpet couture.",
    featuredProduct: "Lyon Gold Thread Organza",
    price: "$320 / meter",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CategoryShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("silk");
  const currentCategoryData = CATEGORY_SHOWCASE.find((c) => c.id === activeCategory) || CATEGORY_SHOWCASE[0];

  return (
    <section className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#0e0e10]">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-6">
          <Sparkles className="w-3 h-3 text-neutral-300" />
          <span>Curated Material Study</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Eclat Ensemble: Radiant Seasonal Arrivals
            </h2>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Experience the pure tactile allure of our mill-run textures. Selected for high-fashion bespoke tailoring and couture draping.
            </p>

            <div className="pt-4 flex flex-col space-y-3">
              {CATEGORY_SHOWCASE.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center justify-between text-left py-2.5 px-4 rounded-xl transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-white/10 border-l-2 border-white text-white font-medium pl-5"
                      : "text-neutral-500 hover:text-neutral-300"
                  }`}
                >
                  <span className="text-sm uppercase tracking-wider">{cat.name}</span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {activeCategory === cat.id ? "→ Active" : ""}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-wider font-medium hover:bg-neutral-200 transition-all shadow-md"
              >
                <span>View All Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCategoryData.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative h-[420px] md:h-[500px] w-full rounded-[40px] md:rounded-[60px] overflow-hidden border border-white/10 shadow-2xl group"
              >
                <Image
                  src={currentCategoryData.image}
                  alt={currentCategoryData.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-8 right-8 bg-[#141416]/85 backdrop-blur-xl border border-white/20 p-4 rounded-3xl max-w-xs shadow-2xl flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0 border border-white/20">
                    <Image
                      src={currentCategoryData.image}
                      alt="Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-white line-clamp-1">
                      {currentCategoryData.featuredProduct}
                    </h4>
                    <p className="text-[11px] text-neutral-400 line-clamp-1">
                      {currentCategoryData.tagline}
                    </p>
                    <span className="text-[11px] font-semibold text-white mt-1 block">
                      {currentCategoryData.price}
                    </span>
                  </div>
                  <Link
                    href="/shop"
                    className="p-2.5 rounded-full bg-white text-black hover:bg-neutral-200 transition shrink-0 ml-auto"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-widest text-neutral-300">
                  {currentCategoryData.name}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}