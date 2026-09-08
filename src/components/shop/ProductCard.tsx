import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";

interface Props {
  product: Product;
  onInspect: (product: Product) => void;
}

export default function ProductCard({ product, onInspect }: Props) {
  return (
    <div className="group flex flex-col bg-[#121214] rounded-3xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl">
      <div className="relative h-80 w-full rounded-2xl overflow-hidden bg-neutral-900">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase tracking-widest text-neutral-300 border border-white/10">
          {product.category}
        </span>
      </div>

      <div className="pt-5 pb-2 px-2 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif text-xl font-light text-white group-hover:text-neutral-300 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-neutral-400 font-light mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-base font-medium text-white">
            ${product.price} <span className="text-[11px] text-neutral-400 font-normal">/ m</span>
          </span>
          <button
            onClick={() => onInspect(product)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-xs uppercase tracking-wider font-medium transition-all"
          >
            <span>Inspect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}