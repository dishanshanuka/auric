"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex justify-center transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#0b0b0c]/85 backdrop-blur-md border-b border-white/10 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="relative w-full max-w-7xl flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group z-10">
          <span className="font-serif text-2xl tracking-[0.22em] font-light uppercase text-white">
            AURIC
          </span>
        </Link>

        {/* Center: Absolute 100% Screen Center Nav Pill */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav className="flex items-center bg-[#1c1c1f]/90 backdrop-blur-xl border border-white/15 rounded-full px-2 py-1.5 shadow-xl">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors duration-200 ${
                    isActive ? "text-black" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activePill"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right: Cart, Login & Sign up */}
        <div className="flex items-center gap-3 z-10">
          <Link
            href="/cart"
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-all backdrop-blur-md"
            aria-label="Archive Bag"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
          </Link>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#1c1c1f] hover:bg-[#27272a] border border-white/10 text-xs uppercase tracking-wider text-neutral-200 hover:text-white font-medium transition-all shadow-sm"
          >
            Login
          </Link>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-all shadow-lg"
          >
            Sign up
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-4 right-4 bg-[#141416]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-widest text-neutral-300 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2 rounded-full bg-[#1c1c1f] border border-white/10 text-xs uppercase tracking-wider text-neutral-200"
              >
                Login
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 text-center py-2 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold"
              >
                Sign up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}