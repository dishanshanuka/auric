import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#141416] border border-white/20 rounded-3xl max-w-2xl w-full p-6 md:p-8 overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full rounded-2xl overflow-hidden min-h-[240px]">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                  {product.category} · {product.origin}
                </span>
                <h3 className="font-serif text-2xl font-light text-white mt-1">{product.name}</h3>
                <p className="text-sm text-white font-medium mt-2">${product.price} / meter</p>
                <p className="text-xs text-neutral-400 font-light mt-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="/bespoke"
                  className="flex-1 text-center px-4 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition"
                >
                  Order Bolt
                </Link>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-full border border-white/20 text-neutral-300 hover:text-white text-xs uppercase tracking-wider transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}