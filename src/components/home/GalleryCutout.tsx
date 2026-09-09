"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ATELIER_MOMENTS = [
  {
    title: "Dumbara Wooden Shuttle Loom",
    caption: "Kandy Valley Masters",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1200",
    aspect: "col-span-1 md:col-span-2 aspect-[16/9]",
  },
  {
    title: "Botanical Indigo Immersion",
    caption: "Zero-Chemical Dye Vats",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    aspect: "col-span-1 aspect-[4/5]",
  },
  {
    title: "Canting Hot Beeswax Resist",
    caption: "Galle Maritime Ateliers",
    image:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=80&w=1200",
    aspect: "col-span-1 aspect-[4/5]",
  },
  {
    title: "Korvai Temple Border Interlock",
    caption: "Generational Silk Guild",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200",
    aspect: "col-span-1 md:col-span-2 aspect-[16/9]",
  },
];

export default function GalleryCutout() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#0e0e10] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-500 block mb-2">
              Atelier Chronicle
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Behind the rhythmic breath of the loom.
            </h2>
          </div>
          <Link
            href="/about"
            className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-400 hover:text-white flex items-center gap-2 transition"
          >
            <span>Read Loom Chronicle</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Masonry-Style Cutout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ATELIER_MOMENTS.map((item, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl border border-white/10 group ${item.aspect} bg-[#141416]`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 block mb-1">
                  {item.caption}
                </span>
                <h4 className="font-serif text-lg md:text-xl font-normal text-white">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}