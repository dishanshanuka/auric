import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GalleryCutout() {
  return (
    <section className="py-24 px-6 md:px-12 border-t border-white/10 bg-[#0b0b0c]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-2">
              Atelier Cutouts
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white">
              Capturing Essence: Brand Gallery Showcase
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-md">
            Explore textile moments, weaver stories, and inspirations that define our slow-luxury narrative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
            <Image
              src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop"
              alt="Venetian velvet craft"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-8">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                Venice, Italy
              </span>
              <h3 className="font-serif text-2xl font-light text-white mt-1">
                Architectural Silk Velvet Weave
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-2 max-w-md">
                Light-absorbent, ultra-dense pile designed for couture silhouettes and evening tailoring.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-white">$210 / meter</span>
                <Link
                  href="/shop"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 group">
            <Image
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
              alt="Brocade filament"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-8">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                Lyon, France
              </span>
              <h3 className="font-serif text-2xl font-light text-white mt-1">
                Gilded Filigree Organza Overlays
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-2 max-w-md">
                Delicate metallic threads intertwined on translucent silk matrices for bridal couture.
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-white">$320 / meter</span>
                <Link
                  href="/shop"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}