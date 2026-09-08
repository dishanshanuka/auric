import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0c] text-neutral-400 pt-20 pb-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2 space-y-4">
          <span className="font-serif text-3xl tracking-[0.25em] font-light uppercase text-white block">
            AURIC
          </span>
          <p className="text-xs font-light text-neutral-500 max-w-sm leading-relaxed">
            Preserving centuries of artisanal textile heritage. Supplying couture ateliers,
            design houses, and tailors worldwide with traceable natural fabrics.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-white mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs tracking-wider uppercase text-neutral-400">
            <li><Link href="/shop" className="hover:text-white transition">Curated Archive</Link></li>
            <li><Link href="/craft" className="hover:text-white transition">Craftsmanship</Link></li>
            <li><Link href="/bespoke" className="hover:text-white transition">Bespoke Inquiries</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-white mb-4">
            Atelier Contact
          </h4>
          <p className="text-xs font-light text-neutral-400 leading-relaxed">
            Via della Spiga 18, Milan<br />
            14 Savile Row, Mayfair, London<br />
            concierge@auric.atelier
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] uppercase tracking-widest text-neutral-600">
        <p>© 2026 AURIC ATELIER. All Rights Reserved.</p>
        <p className="mt-2 sm:mt-0">Creative Digital Experience</p>
      </div>
    </footer>
  );
}