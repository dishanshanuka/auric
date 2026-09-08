import HeroSection from "@/components/home/HeroSection";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import GalleryCutout from "@/components/home/GalleryCutout";
import TrustMetrics from "@/components/home/TrustMetrics";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0b0c] text-neutral-100 selection:bg-white selection:text-black">
      <HeroSection />
      <CategoryShowcase />
      <GalleryCutout />
      <TrustMetrics />
    </div>
  );
}