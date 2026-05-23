import { SERVICES } from "../data";
import { ServiceOption } from "../types";
import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

interface ServiceCatalogueProps {
  onSelectService: (service: ServiceOption) => void;
}

export default function ServiceCatalogue({ onSelectService }: ServiceCatalogueProps) {
  return (
    <section id="services" className="py-16 md:py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sky-600 text-xs font-mono font-bold tracking-widest uppercase bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200/50">
            Our Cleaning Solutions
          </span>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-slate-900 mt-4 leading-tight tracking-tight">
            Specialist Services for <span className="text-sky-600">Every Home Need</span>
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base mt-4">
            From quick express cleanups to mechanized marble floor single-disc scrubbing. Fully trained, standard uniformed crews ready to descend at J.P. Nagar and beyond.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((serv) => (
            <div
              key={serv.id}
              className="bg-slate-50 border border-slate-100/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-all transform duration-300 md:hover:-translate-y-1 group"
            >
              <div>
                {/* Card header */}
                <div className="flex justify-between items-start gap-4 pb-4 border-b border-slate-200/55">
                  <div className="text-left">
                    <h3 className="font-display font-bold text-slate-900 text-lg md:text-xl leading-snug">
                      {serv.name}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 mt-1">
                      Professional Bangalore Standard Rating
                    </p>
                  </div>
                  <div className="bg-sky-500 text-white px-4 py-2.5 rounded-2xl text-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-sky-100 block">Starts @</span>
                    <span className="font-display font-black text-white text-sm md:text-base">₹{serv.basePrice.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                {/* Body details Description */}
                <p className="font-sans text-xs md:text-sm text-slate-600 mt-6 leading-relaxed text-left">
                  {serv.description}
                </p>

                {/* Included features list */}
                <div className="mt-6 space-y-2.5">
                  <span className="block text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wide">
                    Core Work Specifications Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serv.included.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-500 text-left">
                        <div className="bg-sky-100 text-sky-700 rounded p-[3px] flex-shrink-0 mt-0.5">
                          <Check className="size-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action and trust button trigger footer */}
              <div className="mt-8 pt-6 border-t border-slate-200/55 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1.5 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                  <ShieldCheck className="size-4 text-sky-600" />
                  <span>100% Insured Operations</span>
                </span>
                
                <button
                  onClick={() => onSelectService(serv)}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold text-xs py-3 px-5 rounded-full cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-slate-200 active:scale-95 transition-all"
                >
                  <span>Build Pricing Quote</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
