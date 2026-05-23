import { Calendar, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Calendar className="size-6 text-sky-500" />,
      title: "Pick Your Time",
      desc: "Select a convenient date and cleaning frequency that seamlessly fits your busy life."
    },
    {
      number: "02",
      icon: <ShieldCheck className="size-6 text-sky-500" />,
      title: "We Clean Safely",
      desc: "Our highly trained, background-checked professionals scrub away every speck of dirt."
    },
    {
      number: "03",
      icon: <Sparkles className="size-6 text-sky-500 animate-pulse" />,
      title: "Enjoy Your Space",
      desc: "Relax, walk in, and breathe the sparkling, freshly cleaned atmosphere of your home."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-8 bg-slate-50 border-y border-slate-100/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sky-600 text-xs font-mono font-bold tracking-widest uppercase bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200/50">
            Painless 3-Step Process
          </span>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-slate-900 mt-4 leading-tight tracking-tight">
            How Truneto Works
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base mt-4">
            Cleaning is stress-free when you deal with professionals. Book, inspect, relax.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="bg-white border border-slate-100 p-8 rounded-3xl relative overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
              {/* Subtle background number watermark */}
              <span className="absolute -top-12 -right-8 font-display font-black text-slate-150/40 text-[10rem] select-none pointer-events-none group-hover:text-slate-200/50 transition-colors">
                {step.number}
              </span>

              <div>
                <div className="bg-slate-50 p-3.5 rounded-2xl w-fit border border-slate-100 shadow-inner flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                
                <h3 className="font-display font-bold text-slate-900 text-lg md:text-xl leading-tight">
                  <span className="text-sky-600 font-mono text-sm mr-2 font-black">{step.number}.</span>
                  {step.title}
                </h3>
                
                <p className="font-sans text-xs md:text-sm text-slate-500 mt-3.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {index < 2 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 bg-white border border-slate-200 p-1 rounded-full text-slate-400 transform -translate-y-1/2 shadow z-10 size-8 items-center justify-center">
                  <ArrowRight className="size-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
