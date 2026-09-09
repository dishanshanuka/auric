"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Layers, Compass } from "lucide-react";

interface Collection {
  id: string;
  season: string;
  title: string;
  tagline: string;
  description: string;
  provenance: string;
  technique: string;
  curatedPieces: number;
  image: string;
  palette: string[];
  href: string;
}

const COLLECTIONS: Collection[] = [
  {
    id: "col-01",
    season: "Capsule Edition I",
    title: "The Kandy Royal Guilds",
    tagline: "Geometric Shuttle Looms & Unbleached Flax",
    description:
      "A tribute to the centuries-old Dumbara valley weavers. Structured twill patterns, organic textured unbleached cotton, and ancient Sri Lankan royal geometric borders designed for elevated contemporary drapery.",
    provenance: "Dumbara Valley, Central Province",
    technique: "Historic Wooden Shuttle Loom Weave",
    curatedPieces: 8,
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1200",
    palette: ["#D4AF37", "#2C2C2E", "#E5E5EA", "#8E8E93"],
    href: "/shop?category=Handloom",
  },
  {
    id: "col-02",
    season: "Capsule Edition II",
    title: "Coastal Canting Resist",
    tagline: "Beeswax Drawn Botanicals on Liquid Silk",
    description:
      "Created in Galle’s coastal ateliers using double-canting copper pens. Hand-drawn botanical silhouettes are infused into pure lightweight Habotai silk through natural botanical and indigo bath immersions.",
    provenance: "Southern Bastion Workshops, Galle Fort",
    technique: "Multi-Dip Hot Beeswax Batik Resist",
    curatedPieces: 12,
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200",
    palette: ["#1B365D", "#E0A96D", "#F4F1DE", "#3D405B"],
    href: "/shop?category=Batik",
  },
  {
    id: "col-03",
    season: "Capsule Edition III",
    title: "Imperial Korvai Silks",
    tagline: "Interlocked Zari Borders & Mulberry Threads",
    description:
      "The pinnacle of heirloom festive drapes. Heavyweight raw mulberry silk woven with authentic silver-gilt zari thread utilizing the traditional three-shuttle Korvai interlocking technique.",
    provenance: "Southern Heritage Silk Guilds",
    technique: "Three-Shuttle Pit Loom Interlocking",
    curatedPieces: 6,
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200",
    palette: ["#581845", "#FFC300", "#900C3F", "#C70039"],
    href: "/shop?category=Sarees",
  },
  {
    id: "col-04",
    season: "Capsule Edition IV",
    title: "Tropical Slub Linens",
    tagline: "Low-Tension Organic Flax for Haute Tailoring",
    description:
      "Tailored specifically for humid coastal climates. Breathable organic flax washed with artisanal stone-softening enzymes, yielding an effortless, tactile drape prized by bespoke tailors worldwide.",
    provenance: "Central Highland Mills",
    technique: "Enzyme-Washed Low-Tension Warp",
    curatedPieces: 10,
    image:
      "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?auto=format&fit=crop&q=80&w=1200",
    palette: ["#E3DAC9", "#C2B280", "#4A4238", "#F5F5DC"],
    href: "/shop?category=Linens",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-neutral-500">
              Curated Lookbook
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white leading-tight">
            Thematic Capsule Editions
          </h1>
          <p className="text-neutral-400 text-xs sm:text-sm font-light mt-4 leading-relaxed">
            Each AURIC edition embodies months of meticulous loom setup, botanical dye baths, and generational handcraft. These limited-run textile series are curated exclusively for bespoke couturiers and textile archivists.
          </p>
        </div>

        {/* Collections Stack / Grid */}
        <div className="flex flex-col gap-16 md:gap-24">
          {COLLECTIONS.map((col, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={col.id}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-16 p-6 sm:p-10 rounded-3xl bg-[#141416] border border-white/10 hover:border-white/20 transition-all duration-500`}
              >
                {/* Visual Canvas */}
                <div className="relative w-full lg:w-1/2 aspect-4/3 rounded-2xl overflow-hidden bg-[#1a1a1d] group">
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[9px] uppercase font-mono tracking-widest text-neutral-300">
                      {col.season}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                    <div className="flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{col.curatedPieces} Archival Bolts</span>
                    </div>
                    {/* Palette swatches */}
                    <div className="flex items-center gap-1.5">
                      {col.palette.map((color, i) => (
                        <span
                          key={i}
                          className="w-2.5 h-2.5 rounded-full border border-white/30"
                          style={{ backgroundColor: color }}
                          title={`Pigment ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Editorial Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-500 block mb-2">
                      {col.provenance}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl font-light text-white mb-2">
                      {col.title}
                    </h2>
                    <p className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-4">
                      {col.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  {/* Metadata Specs */}
                  <div className="grid grid-cols-2 gap-4 py-5 border-y border-white/10 text-xs">
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-500 block mb-1">
                        Weaving Protocol
                      </span>
                      <span className="text-neutral-300 font-light">
                        {col.technique}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-500 block mb-1">
                        Availability
                      </span>
                      <span className="text-emerald-400 font-mono">
                        Limited Reserve
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href={col.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition shadow-lg"
                    >
                      <span>Explore Edition Pieces</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1c1c1f] hover:bg-[#252529] border border-white/10 text-xs uppercase tracking-wider text-neutral-300 hover:text-white transition"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>Request Swatch Book</span>
                    </Link>
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