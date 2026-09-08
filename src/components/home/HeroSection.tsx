"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArchItem {
  id: string;
  title: string;
  category: string;
  price: string;
  origin: string;
  image: string;
}

const ARCH_ITEMS: ArchItem[] = [
  {
    id: "1",
    title: "Mulberry Raw Silk",
    category: "Imperial Silk",
    price: "$185/m",
    origin: "Como, Italy",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Flemish Washed Flax",
    category: "Artisanal Linen",
    price: "$95/m",
    origin: "Flanders, Belgium",
    image:
      "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Highland Cashmere",
    category: "Fine Wool",
    price: "$240/m",
    origin: "Biella, Italy",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Gilded Thread Organza",
    category: "Bespoke Weave",
    price: "$320/m",
    origin: "Lyon, France",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Architectural Velvet",
    category: "Liquid Silk",
    price: "$210/m",
    origin: "Venice, Italy",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function HeroSection() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleNext = () =>
    setSliderIndex((prev) => (prev + 1) % ARCH_ITEMS.length);
  const handlePrev = () =>
    setSliderIndex((prev) => (prev - 1 + ARCH_ITEMS.length) % ARCH_ITEMS.length);

  const visibleArchItems = [
    ARCH_ITEMS[sliderIndex % ARCH_ITEMS.length],
    ARCH_ITEMS[(sliderIndex + 1) % ARCH_ITEMS.length],
    ARCH_ITEMS[(sliderIndex + 2) % ARCH_ITEMS.length],
    ARCH_ITEMS[(sliderIndex + 3) % ARCH_ITEMS.length],
    ARCH_ITEMS[(sliderIndex + 4) % ARCH_ITEMS.length],
  ];

  return (
    <section className="relative pt-36 md:pt-44 pb-20 px-4 md:px-12 flex flex-col items-center text-center">
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] max-w-5xl font-light text-white"
      >
        Where style speaks, trends resonate, fabric flourishes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="mt-6 text-neutral-400 font-light text-sm sm:text-base max-w-xl leading-relaxed"
      >
        Unveiling a textile sanctuary where artisanal weaving seamlessly blends with high-fashion aspirations. Handcrafted across historic European mills.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-8"
      >
        <Link
          href="/shop"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-xl group"
        >
          <span>Explore Collection</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <div className="relative w-full max-w-7xl mt-16 md:mt-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 items-end">
          {visibleArchItems.map((item, idx) => {
            const isCenter = idx === 2;
            return (
              <motion.div
                key={`${item.id}-${idx}`}
                layout
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`relative w-full rounded-t-full overflow-hidden border border-white/10 group cursor-pointer transition-all duration-500 ${
                  isCenter
                    ? "h-[400px] md:h-[480px] ring-1 ring-white/40 shadow-2xl"
                    : "h-[320px] md:h-[390px] opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {isCenter ? (
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-center items-center">
                    <div className="bg-[#121214]/80 backdrop-blur-xl border border-white/20 px-5 py-3.5 rounded-2xl w-full shadow-2xl">
                      <span className="text-[10px] uppercase tracking-widest text-neutral-400 block">
                        {item.origin}
                      </span>
                      <h4 className="font-serif text-lg text-white font-normal mt-0.5">
                        {item.title}
                      </h4>
                      <span className="text-xs text-neutral-300 font-medium block mt-1">
                        Price: {item.price}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                    <p className="text-[11px] uppercase tracking-wider text-neutral-300 font-medium truncate">
                      {item.title}
                    </p>
                    <span className="text-[9px] text-neutral-400 tracking-wider block">
                      {item.price}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition active:scale-95"
            aria-label="Previous fabric"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-400 font-medium">
            Rotate Archive
          </span>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition active:scale-95"
            aria-label="Next fabric"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}