"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  {
    id: "cat-01",
    title: "Heirloom Sarees",
    subtitle: "Pure Kanchipuram & Organza Zari",
    tag: "Slow Craft",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
    href: "/shop?category=Sarees",
  },
  {
    id: "cat-02",
    title: "Galle Canting Batik",
    subtitle: "Hand-Drawn Beeswax on Liquid Silk",
    tag: "Artisanal Resist",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000",
    href: "/shop?category=Batik",
  },
  {
    id: "cat-03",
    title: "Dumbara Handloom",
    subtitle: "Historic Shuttle Weaves & Organic Cotton",
    tag: "Heritage Craft",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1000",
    href: "/shop?category=Handloom",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-white/10">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-500 block mb-2">
            Curated Editions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
            Signature Textile Editions
          </h2>
        </div>
        <Link
          href="/collections"
          className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-400 hover:text-white flex items-center gap-2 transition-colors"
        >
          <span>View All Collections</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {CATEGORIES.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group flex flex-col relative overflow-hidden rounded-2xl bg-[#141416] border border-white/10 hover:border-white/25 transition-all duration-500"
          >
            <div className="relative aspect-3/4 w-full overflow-hidden bg-[#1a1a1d]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] uppercase font-mono tracking-widest text-neutral-300">
                {item.tag}
              </span>
            </div>

            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-serif text-xl font-normal text-white group-hover:text-neutral-200 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1 font-light">
                  {item.subtitle}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-widest text-neutral-400 group-hover:text-white pt-4 border-t border-white/5">
                <span>Explore Series</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}