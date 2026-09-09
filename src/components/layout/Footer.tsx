import Link from "next/link";

const FOOTER_NAVIGATION = [
  { label: "Textile Archive", href: "/shop" },
  { label: "Curated Collections", href: "/collections" },
  { label: "Heritage & About", href: "/about" },
  { label: "Bespoke Inquiries", href: "/contact" },
  { label: "Archive Bag", href: "/cart" },
];

const TEXTILE_EDITIONS = [
  { label: "Kanchipuram Silks", href: "/shop" },
  { label: "Artisanal Canting Batik", href: "/shop" },
  { label: "Dumbara Handlooms", href: "/shop" },
  { label: "Pure Slub Linens", href: "/shop" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0c] text-neutral-400 pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        {/* Brand & Provenance */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center text-white font-serif text-xs">
              A
            </span>
            <span className="font-serif text-2xl tracking-[0.25em] font-light uppercase text-white">
              AURIC
            </span>
          </div>
          <p className="text-xs font-light text-neutral-400 max-w-sm leading-relaxed">
            Preserving centuries of artisanal Sri Lankan handloom and master weaving heritage. 
            Supplying bespoke fashion houses and connoisseurs with sustainable, traceable artisanal fabrics.
          </p>
          <div className="pt-2 flex items-center gap-4 text-[10px] uppercase font-mono tracking-widest text-neutral-500">
            <span>Colombo</span>
            <span>•</span>
            <span>Galle Fort</span>
            <span>•</span>
            <span>Kandy Looms</span>
          </div>
        </div>

        {/* 5-Page Navigation */}
        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase font-mono tracking-[0.25em] text-white mb-4">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs tracking-wider uppercase text-neutral-400">
            {FOOTER_NAVIGATION.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Textile Categories */}
        <div className="md:col-span-2">
          <h4 className="text-[10px] uppercase font-mono tracking-[0.25em] text-white mb-4">
            Editions
          </h4>
          <ul className="space-y-2.5 text-xs tracking-wider uppercase text-neutral-400">
            {TEXTILE_EDITIONS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-white transition-colors duration-200">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Atelier Sri Lanka Contact */}
        <div className="md:col-span-3">
          <h4 className="text-[10px] uppercase font-mono tracking-[0.25em] text-white mb-4">
            Atelier & Archives
          </h4>
          <div className="text-xs font-light text-neutral-400 leading-relaxed space-y-2">
            <p>
              42 Ward Place, Cinnamon Gardens<br />
              Colombo 07, Sri Lanka
            </p>
            <p className="text-neutral-500 font-mono text-[11px]">
              Loom Workshop: Dumbara Valley, Kandy
            </p>
            <p className="pt-1 text-white font-mono text-[11px]">
              atelier@aurictextiles.lk
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-[0.25em] font-mono text-neutral-500">
        <p>© 2026 AURIC TEXTILE HOUSE. ALL RIGHTS RESERVED.</p>
        <p className="mt-3 sm:mt-0 text-neutral-400">Handcrafted Sri Lankan Textiles</p>
      </div>
    </footer>
  );
}