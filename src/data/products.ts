export interface Product {
  id: string;
  name: string;
  category: "Sarees" | "Handloom" | "Batik" | "Silks" | "Linens";
  price: number;
  unit: string;
  origin: string;
  description: string;
  composition: string;
  technique: string;
  images: string[];
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "tex-01",
    name: "Heirloom Kanchipuram Raw Silk Saree",
    category: "Sarees",
    price: 95000,
    unit: "saree",
    origin: "Southern Heritage Looms",
    description: "Hand-interlocked pure mulberry silk with traditional zari temple borders, woven by master generational artisans.",
    composition: "100% Pure Mulberry Silk & Gold Zari",
    technique: "Pit Loom Weaving with Korvai Technique",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
    ],
    featured: true,
  },
  {
    id: "tex-02",
    name: "Hand-Drawn Canting Wax Batik Silk",
    category: "Batik",
    price: 14500,
    unit: "meter",
    origin: "Galle Artisanal Ateliers",
    description: "Authentic hot beeswax canting resist dye on featherlight liquid silk, featuring organic coastal motifs.",
    composition: "100% Habotai Silk",
    technique: "Hand-Drawn Canting Wax Resist Dyeing",
    images: [
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1000",
    ],
    featured: true,
  },
  {
    id: "tex-03",
    name: "Dumbara Handloom Cotton Weave",
    category: "Handloom",
    price: 8500,
    unit: "meter",
    origin: "Kandy Heritage Guild",
    description: "Historic geometric hand-woven textile created using traditional wooden shuttle looms and unbleached cotton yarn.",
    composition: "100% Handspun Organic Cotton",
    technique: "Traditional Dumbara Wooden Shuttle Weave",
    images: [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1000",
    ],
    featured: true,
  },
  {
    id: "tex-04",
    name: "Natural Washed Pure Linen",
    category: "Linens",
    price: 6800,
    unit: "meter",
    origin: "Central Valley Mills",
    description: "Breathable textured slub linen crafted for tropical climates, bespoke shirts, and artisanal drapery.",
    composition: "100% Pure Organic Flax",
    technique: "Low-Tension Shuttle Loom Weave",
    images: [
      "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?auto=format&fit=crop&q=80&w=1200",
    ],
    featured: false,
  },
  {
    id: "tex-05",
    name: "Pure Organza Tissue Festive Saree",
    category: "Sarees",
    price: 62000,
    unit: "saree",
    origin: "Heritage Weavers Guild",
    description: "Sheer metallic luster interwoven with delicate botanical thread embroidery along the pallu.",
    composition: "Silk Warp with Metallic Thread Weft",
    technique: "Jacquard Handloom Interweave",
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000",
    ],
    featured: true,
  },
  {
    id: "tex-06",
    name: "Wild Tussar Textured Raw Silk",
    category: "Silks",
    price: 18500,
    unit: "meter",
    origin: "Eastern Silk Sanctuary",
    description: "Ethically harvested peace silk with an organic, slubbed grain celebrated for natural thermal breathability.",
    composition: "100% Wild Tussar Peace Silk",
    technique: "Hand-reeled Slub Weaving",
    images: [
      "https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?auto=format&fit=crop&q=80&w=1000",
    ],
    featured: false,
  },
];