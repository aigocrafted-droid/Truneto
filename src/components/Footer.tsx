import { NEIGHBORHOODS } from "../data";
import { Sparkles, Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onScrollToCalculator: () => void;
  onScrollToAIPlanner: () => void;
}

export default function Footer({ onScrollToCalculator, onScrollToAIPlanner }: FooterProps) {
  return (
    <footer id="about" className="bg-slate-950 text-white pt-16 pb-12 px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Column 1: Brand details and physical address */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#" className="flex items-center gap-2 mb-6">
                <div className="bg-sky-500 text-white p-2 rounded-xl">
                  <Sparkles className="size-5 fill-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-medium text-xl tracking-tight text-white leading-none">
                    Truneto
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase leading-none mt-1">
                    Care &amp; Cleanliness
                  </span>
                </div>
              </a>

              <p className="font-sans text-xs md:text-sm text-slate-400 leading-relaxed max-w-sm">
                Truneto is Bengaluru’s premium house cleaning, home care, and maintenance solution. We combine professional industrial single-disc floor scrubbers, botanical non-toxic sanitizer agents, and 100% background-verified staff.
              </p>
            </div>

            {/* Address */}
            <div className="mt-8 space-y-3.5 border-t border-slate-900 pt-6">
              <div className="flex items-start gap-3.5 text-xs text-slate-300">
                <MapPin className="size-5 text-sky-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Headquarters: 35th, 303 JC RESIDENCY, Sarakki Main Road, 11th Cross Rd, 1st Phase, J. P. Nagar, Bengaluru, Karnataka 560078
                </span>
              </div>
              <div className="flex items-center gap-3.5 text-xs text-slate-300">
                <MapPin className="size-5 text-indigo-400 flex-shrink-0" />
                <span>Branch: Kumaraswamy Layout Main, Bangalore South</span>
              </div>
            </div>
          </div>

          {/* Column 2: Bengaluru Service Areas */}
          <div className="lg:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-6 font-bold">
              Our Specific Bengaluru Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NEIGHBORHOODS.map((n, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
                  <span className="size-1 rounded-full bg-sky-500 flex-shrink-0" />
                  <span>{n}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Site Nav Links */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-6 font-bold">
              Quick Navigation
            </h3>
            <div className="flex flex-col gap-3 font-sans text-xs md:text-sm text-slate-400">
              <a href="#services" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Our Services</span>
                <ArrowUpRight className="size-3 text-slate-600" />
              </a>
              <a
                href="#calculator"
                onClick={(e) => { e.preventDefault(); onScrollToCalculator(); }}
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Pricing Calc</span>
                <ArrowUpRight className="size-3 text-slate-600" />
              </a>
              <a
                href="#ai-planner"
                onClick={(e) => { e.preventDefault(); onScrollToAIPlanner(); }}
                className="hover:text-sky-400 transition-colors flex items-center gap-1"
              >
                <span>AI Planner</span>
                <ArrowUpRight className="size-3 text-slate-600" />
              </a>
              <a href="#reviews" className="hover:text-white transition-colors flex items-center gap-1">
                <span>Verified Reviews</span>
                <ArrowUpRight className="size-3 text-slate-600" />
              </a>
              <a
                href="https://wa.me/919108412345?text=Hello%20Truneto!"
                className="hover:text-white transition-colors flex items-center gap-1"
                target="_blank"
                rel="noreferrer"
              >
                <span>Book Service Now</span>
                <ArrowUpRight className="size-3 text-slate-600" />
              </a>
            </div>
          </div>

          {/* Column 4: Operating Hours & Direct line */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-4 font-bold">
                Operating Hours
              </h3>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Clock className="size-4 text-sky-400" />
                <span>Open 24 Hours / 7 Days</span>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-4 font-bold">
                Direct Contact Lines
              </h3>
              <div className="space-y-3.5 text-xs text-slate-300">
                <a href="tel:+919108412345" className="flex items-center gap-2 hover:text-sky-300 transition-colors">
                  <Phone className="size-4 text-sky-400" />
                  <span>+91 91084 12345</span>
                </a>
                <a href="mailto:support@truneto.in" className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
                  <Mail className="size-4 text-indigo-400" />
                  <span>support@truneto.in</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom micro copyrights section */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 font-mono">
          <div className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Truneto House Cleaning Services. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-center justify-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Work</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white transition-colors">Bangalore Operations Area</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
