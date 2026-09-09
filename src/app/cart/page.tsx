"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CartItem {
  id: string;
  name: string;
  category: string;
  origin: string;
  pricePerUnit: number;
  unit: string;
  quantity: number;
  image: string;
  isSwatchIncluded: boolean;
}

const INITIAL_CART: CartItem[] = [
  {
    id: "tex-01",
    name: "Heirloom Kanchipuram Raw Silk Saree",
    category: "Sarees",
    origin: "Southern Heritage Looms",
    pricePerUnit: 95000,
    unit: "saree",
    quantity: 1,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
    isSwatchIncluded: true,
  },
  {
    id: "tex-02",
    name: "Hand-Drawn Canting Wax Batik Silk",
    category: "Batik",
    origin: "Galle Artisanal Ateliers",
    pricePerUnit: 14500,
    unit: "meter",
    quantity: 3,
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?q=80&w=800&auto=format&fit=crop",
    isSwatchIncluded: false,
  },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_CART);

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const toggleSwatch = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isSwatchIncluded: !item.isSwatchIncluded } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const formatLKR = (amount: number) => {
    return `Rs. ${amount.toLocaleString("en-LK")}`;
  };

  const subtotal = items.reduce((acc, item) => acc + item.pricePerUnit * item.quantity, 0);
  const swatchTotal = items.filter((item) => item.isSwatchIncluded).length * 3500;
  const deliveryCourier = items.length > 0 ? 1200 : 0;
  const grandTotal = subtotal + swatchTotal + deliveryCourier;

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white pt-32 pb-24 px-6 md:px-12 selection:bg-white selection:text-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Breadcrumb */}
        <div className="pb-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-neutral-500 block mb-2">
              Atelier Acquisition / Bag
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-light text-white">
              Archive Selection
            </h1>
          </div>
          <p className="text-xs uppercase font-mono tracking-widest text-neutral-400">
            {items.length} {items.length === 1 ? "Curated Weave" : "Curated Weaves"}
          </p>
        </div>

        {items.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl text-neutral-400 font-light mb-4">
              Your archive selection is currently empty.
            </p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 rounded-full bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 transition"
            >
              Explore Textile Archive
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Cart Items */}
            <div className="lg:col-span-8 flex flex-col divide-y divide-white/10">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8 first:pt-0 flex flex-col sm:flex-row gap-6 items-start"
                >
                  <div className="relative w-28 h-36 rounded-2xl overflow-hidden border border-white/10 shrink-0 bg-[#161618]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="112px"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between h-full w-full">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <span className="text-[9px] uppercase font-mono tracking-[0.25em] text-neutral-400">
                          {item.origin} • {item.category}
                        </span>
                        <h2 className="font-serif text-lg md:text-xl font-normal text-white mt-1">
                          {item.name}
                        </h2>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[11px] uppercase tracking-wider text-neutral-500 hover:text-white transition-colors"
                      >
                        Remove
                      </button>
                    </div>

                    <p className="text-xs text-neutral-300 mt-2 font-mono">
                      {formatLKR(item.pricePerUnit)} per {item.unit}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-white/15 rounded-full px-3 py-1 bg-white/5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-sm text-neutral-400 hover:text-white px-2"
                        >
                          −
                        </button>
                        <span className="text-xs font-mono px-3 text-white">
                          {item.quantity} {item.unit}{item.quantity > 1 && item.unit === "saree" ? "s" : ""}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-sm text-neutral-400 hover:text-white px-2"
                        >
                          +
                        </button>
                      </div>

                      {/* Swatch Checkbox */}
                      <label className="flex items-center gap-2 cursor-pointer select-none text-xs text-neutral-400 hover:text-neutral-200 transition">
                        <input
                          type="checkbox"
                          checked={item.isSwatchIncluded}
                          onChange={() => toggleSwatch(item.id)}
                          className="w-3.5 h-3.5 rounded border-white/20 bg-white/5 text-white focus:ring-0 cursor-pointer"
                        />
                        <span>Archival Swatch Sample (+Rs. 3,500)</span>
                      </label>

                      {/* Item Total */}
                      <span className="font-mono text-sm text-white font-medium">
                        {formatLKR(item.pricePerUnit * item.quantity + (item.isSwatchIncluded ? 3500 : 0))}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-4 bg-[#141416]/90 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl sticky top-28 shadow-2xl">
              <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-neutral-400 block mb-2">
                Order Valuation
              </span>
              <h2 className="font-serif text-xl font-light text-white pb-4 border-b border-white/10">
                Summary
              </h2>

              <div className="mt-6 flex flex-col gap-3 text-xs">
                <div className="flex justify-between text-neutral-400">
                  <span>Fabric Total</span>
                  <span className="font-mono text-white">{formatLKR(subtotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Sample Swatch Folios</span>
                  <span className="font-mono text-white">{formatLKR(swatchTotal)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Island-wide Secure Courier</span>
                  <span className="font-mono text-white">{formatLKR(deliveryCourier)}</span>
                </div>
                <div className="pt-4 mt-2 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-sm font-medium text-white">Estimated Total</span>
                  <span className="font-mono text-xl text-white font-semibold">
                    {formatLKR(grandTotal)}
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-full bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-neutral-200 text-center transition shadow-xl"
                >
                  Proceed to Inquire / Order
                </Link>
                <Link
                  href="/shop"
                  className="w-full py-3 rounded-full border border-white/15 text-neutral-300 hover:text-white text-center text-xs uppercase tracking-widest transition hover:border-white/30"
                >
                  Continue Browsing
                </Link>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-neutral-500 flex flex-col gap-1.5 font-mono">
                <p>• Handled with bespoke archival packaging.</p>
                <p>• Verified Sri Lankan artisan certificate included.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}