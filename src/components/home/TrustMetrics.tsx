import { Compass, Layers, Award } from "lucide-react";

export default function TrustMetrics() {
  return (
    <section className="py-16 px-6 md:px-12 border-y border-white/10 bg-[#121214]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex items-start gap-4">
          <Compass className="w-6 h-6 text-neutral-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Traceable Mill Heritage
            </h4>
            <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
              Direct partnerships with multi-generational looms in Northern Italy, Flanders, and Scotland.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Layers className="w-6 h-6 text-neutral-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Zero Synthetic Blends
            </h4>
            <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
              100% natural, certified Grade 6A mulberry silks, pure organic linens, and virgin cashmeres.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Award className="w-6 h-6 text-neutral-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
              Bespoke Atelier Consultations
            </h4>
            <p className="text-xs text-neutral-400 font-light mt-1 leading-relaxed">
              Custom yarn weights, sample cut swatches, and dedicated concierge for fashion ateliers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}