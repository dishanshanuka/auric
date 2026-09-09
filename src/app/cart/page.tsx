"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ArrowLeft, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, subtotal, totalItems } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#0b0b0c] text-white pt-40 pb-24 px-6 md:px-12 flex flex-col items-center justify-center text-center">
        <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-neutral-500 block mb-3">
          Archive Empty
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-white mb-4">
          Your Archive Bag is Empty
        </h1>
        <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-md mb-8">
          Explore our authentic handwoven sarees, artisanal batiks, and Dumbara cotton textiles to curate your bespoke commission.
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse Textile Archive</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-8 border-b border-white/10">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.35em] text-neutral-500 block mb-2">
              Selected Textiles
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-white">
              Archive Bag ({totalItems})
            </h1>
          </div>
          <button
            onClick={clearCart}
            className="text-[11px] uppercase tracking-widest font-mono text-neutral-500 hover:text-red-400 transition"
          >
            Clear Entire Bag
          </button>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items List */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cart.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-5 rounded-2xl bg-[#141416] border border-white/10 hover:border-white/20 transition"
              >
                <div className="flex items-center gap-5 w-full sm:w-auto">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#1c1c1f] shrink-0">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400 block">
                      {product.origin}
                    </span>
                    <h3 className="font-serif text-lg font-normal text-white mt-0.5">
                      {product.name}
                    </h3>
                    <span className="font-mono text-xs text-neutral-300 block mt-1">
                      Rs. {product.price.toLocaleString("en-LK")} / {product.unit}
                    </span>
                  </div>
                </div>

                {/* Quantity & Actions */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-0 border-white/5">
                  <div className="flex items-center bg-[#1c1c1f] border border-white/10 rounded-full px-2 py-1">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="p-1 hover:text-neutral-300 transition"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-mono font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="p-1 hover:text-neutral-300 transition"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <span className="font-mono text-sm text-white font-semibold">
                    Rs. {(product.price * quantity).toLocaleString("en-LK")}
                  </span>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="p-2 text-neutral-500 hover:text-red-400 transition"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary / Order Specs */}
          <div className="lg:col-span-1">
            <div className="p-8 rounded-2xl bg-[#141416] border border-white/10 sticky top-32">
              <h2 className="font-serif text-xl font-normal text-white mb-6">
                Commission Summary
              </h2>

              <div className="space-y-4 pb-6 border-b border-white/10 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Selected Bolts & Drapes</span>
                  <span className="font-mono text-white">{totalItems} units</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Archival Packaging & Handling</span>
                  <span className="font-mono text-emerald-400">Complimentary</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Atelier Dispatch Inspection</span>
                  <span className="font-mono text-emerald-400">Verified</span>
                </div>
              </div>

              <div className="pt-6 pb-8 flex items-baseline justify-between">
                <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">
                  Estimated Total
                </span>
                <span className="font-mono text-2xl font-light text-white">
                  Rs. {subtotal.toLocaleString("en-LK")}
                </span>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-3 py-3.5 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition shadow-xl"
              >
                <span>Proceed to Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <p className="mt-4 text-[10px] text-center font-mono text-neutral-500 leading-relaxed">
                Prices inclusive of luxury VAT and master weaver guild contribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}