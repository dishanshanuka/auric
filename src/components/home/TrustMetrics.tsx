"use client";

import Link from "next/link";

export default function TrustMetrics() {
  return (
    <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="rounded-3xl bg-linear-to-b from-[#161618] to-[#101012] border border-white/10 p-8 sm:p-14 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
        <div className="max-w-xl">
          <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-400 block mb-4">
            Private Atelier Consultations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
            Commission bespoke bolts or private saree viewings.
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-light mt-4 leading-relaxed">
            Our Ward Place atelier in Colombo offers private swatch inspections, custom motif commissions, and tactile drapery sessions for couture designers.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition shadow-lg"
            >
              Schedule Private Viewing
            </Link>
            <Link
              href="/shop"
              className="px-6 py-3 rounded-full border border-white/20 text-neutral-300 hover:text-white text-xs uppercase tracking-widest font-medium transition"
            >
              Order Fabric Swatches
            </Link>
          </div>
        </div>

        {/* Minimalist Metrics */}
        <div className="grid grid-cols-2 gap-8 border-l border-white/10 pl-0 md:pl-12 w-full md:w-auto">
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-light text-white block">
              120+
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mt-1 block">
              Loom Guild Artisans
            </span>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-light text-white block">
              100%
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mt-1 block">
              Traceable Handspun
            </span>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-light text-white block">
              14
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mt-1 block">
              Heritage Clusters
            </span>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-light text-white block">
              Zero
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 mt-1 block">
              Chemical Effluents
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}