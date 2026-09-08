export interface Product {
  id: string;
  name: string;
  category: "Silk" | "Linen" | "Wool" | "Bespoke Weave";
  price: number;
  width: string;
  composition: string;
  origin: string;
  description: string;
  images: string[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "auric-mulberry-silk",
    name: "Imperial Mulberry Raw Silk",
    category: "Silk",
    price: 185,
    width: "140 cm",
    composition: "100% Grade 6A Organic Mulberry Silk",
    origin: "Como, Italy",
    description: "Lustrous, heavyweight pure silk with an organic slub texture. Crafted using heritage shuttle looms to maintain natural drape and thermal fluidity.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "flemish-washed-linen",
    name: "Artisanal Flemish Flax Linen",
    category: "Linen",
    price: 95,
    width: "150 cm",
    composition: "100% European Certified Flax",
    origin: "Flanders, Belgium",
    description: "Enzyme stone-washed for an effortless hand feel. Breathable, durable, and naturally antibacterial with a subtle matte texture.",
    images: [
      "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1200&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "merino-twill-cashmere",
    name: "Highland Merino & Cashmere Weave",
    category: "Wool",
    price: 240,
    width: "145 cm",
    composition: "85% Extra-Fine Merino, 15% Mongolian Cashmere",
    origin: "Biella, Italy",
    description: "An ultra-soft twill weave designed for tailored suiting, structured outerwear, and seasonless luxury garments.",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1200&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "gilded-brocade-organza",
    name: "Gilded Threadwork Organza",
    category: "Bespoke Weave",
    price: 320,
    width: "135 cm",
    composition: "70% Silk Organza, 30% Metallic Filament",
    origin: "Lyon, France",
    description: "Ethereal translucent silk organza interwoven with fine metallic threads for bridal wear, couture overlays, and evening pieces.",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    ],
    featured: true,
  },
  {
    id: "venetian-velour",
    name: "Architectural Silk Velvet",
    category: "Silk",
    price: 210,
    width: "140 cm",
    composition: "60% Silk, 40% Viscose Rayon Pile",
    origin: "Venice, Italy",
    description: "Deep light-absorbing velvet with fluid liquid drape. Developed for couture drapes and modern evening tailoring.",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
    ],
    featured: false,
  },
  {
    id: "sandwashed-cupro",
    name: "Minimalist Sandwashed Cupro",
    category: "Linen",
    price: 110,
    width: "148 cm",
    composition: "100% Regenerated Cotton Linter",
    origin: "Osaka, Japan",
    description: "Vegan silk alternative with a peach-skin matte feel and cooling breathability for modern relaxed tailoring.",
    images: [
      "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1200&auto=format&fit=crop",
    ],
    featured: false,
  },
];