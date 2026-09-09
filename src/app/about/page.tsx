"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Feather, Droplet, ShieldCheck, HeartHandshake } from "lucide-react";

const PILLARS = [
  {
    icon: Feather,
    title: "Low-Tension Handlooms",
    desc: "Every warp thread is calibrated on wooden floor looms, imparting breathable, tactile irregularities unachievable by industrial machinery.",
  },
  {
    icon: Droplet,
    title: "Botanical Dye Chemistry",
    desc: "All hues originate from organic pigments: crushed madder root, pomegranate rind, and cold-extracted Sri Lankan natural indigo.",
  },
  {
    icon: ShieldCheck,
    title: "UNESCO Heritage Weaves",
    desc: "Preserving the sacred geometric Dumbara motifs recognized worldwide as enduring pinnacles of South Asian craft.",
  },
  {
    icon: HeartHandshake,
    title: "Direct Guild Patronage",
    desc: "Eliminating intermediaries by channeling 100% of atelier textile commissions directly back to master weaver guilds across Dumbara and Galle.",
  },
];

const TIMELINE = [
  {
    year: "1840s",
    title: "The Kandy Pit Loom Origin",
    desc: "Generational families across the Dumbara valley begin documented weaving for royal court vestments and temple drapes.",
  },
  {
    year: "1972",
    title: "Coastal Wax Resist Revival",
    desc: "Southern coastal artisans merge copper canting wax application with Sri Lankan botanical dye techniques in Galle.",
  },
  {
    year: "2024",
    title: "Founding of AURIC Atelier",
    desc: "AURIC brings authentic raw silks, pure handloom linens, and rare artisanal batiks into global haute couture.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto space-y-28">
        {/* Hero Section */}
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-neutral-500 block mb-3">
            Lineage & slow craft
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light text-white leading-tight">
            Preserving the rare tactile soul of Sri Lankan artisanal weaving.
          </h1>
          <p className="text-neutral-400 text-sm font-light mt-6 leading-relaxed">
            AURIC is a private textile atelier headquartered in Colombo, operating in intimate collaboration with multi-generational master weavers from Dumbara Valley and maritime canting artisans of the Southern Bastion.
          </p>
        </div>

        {/* Visual Story Banner */}
        <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden bg-[#161618] border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1600"
            alt="Master artisan at a traditional Sri Lankan handloom"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-lg">
            <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-300 bg-black/60 px-3 py-1 rounded-full border border-white/10">
              Loom Workshop • Dumbara Valley
            </span>
            <p className="font-serif text-xl sm:text-2xl font-light text-white mt-3">
              Where rhythm, wooden shuttle percussion, and pure unbleached cotton converge.
            </p>
          </div>
        </div>

        {/* Pillars of Slow Craft */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-neutral-500 block mb-2">
              Our Ethos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              The Four Pillars of AURIC
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-2xl bg-[#141416] border border-white/10 flex flex-col justify-between hover:border-white/25 transition duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                      <Icon className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <h3 className="font-serif text-lg font-normal text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline / Provenance */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#141416] border border-white/10">
          <div className="max-w-xl mb-12">
            <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-neutral-500 block mb-2">
              Historical Continuity
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
              A Living Tradition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIMELINE.map((item) => (
              <div key={item.year} className="border-l border-white/15 pl-6 space-y-2">
                <span className="font-mono text-sm text-neutral-300 font-medium">
                  {item.year}
                </span>
                <h4 className="font-serif text-lg font-normal text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#18181b] to-[#111113] border border-white/10">
          <div className="max-w-lg text-center sm:text-left">
            <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
              Experience the Craft
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
              Curate your bespoke textile commission today.
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/shop"
              className="px-6 py-3 rounded-full bg-[#1c1c1f] hover:bg-[#252529] border border-white/10 text-xs uppercase tracking-wider text-neutral-300 hover:text-white transition"
            >
              Textile Archive
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition shadow-lg"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}