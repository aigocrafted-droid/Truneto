import { useState, useEffect } from "react";
import { Phone, Sparkles, ChevronRight, Menu, X } from "lucide-react";

interface HeaderProps {
  onScrollToCalculator: () => void;
  onScrollToAIPlanner: () => void;
}

export default function Header({ onScrollToCalculator, onScrollToAIPlanner }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full z-50 transition-all duration-300">
      {/* Top micro-contact bar */}
      <div className="bg-slate-900 text-white py-1 px-8 flex justify-between items-center text-xs tracking-tight">
        <span className="opacity-80">Serving J.P. Nagar, Sarakki & Downtown Bengaluru</span>
        <div className="flex items-center gap-4 text-slate-200">
          <a href="tel:+919108412345" className="flex items-center gap-1.5 hover:text-sky-400 font-semibold transition-colors">
            <Phone className="size-3.5" />
            <span>Questions? Call +91 91084 12345</span>
          </a>
        </div>
      </div>

      {/* Main navigation header */}
      <nav
        className={`w-full py-4 px-8 border-b transition-all duration-300 ${
          isScrolled
            ? "sticky top-0 bg-white/95 backdrop-blur-md shadow-sm border-slate-100"
            : "bg-white border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center shadow-md shadow-sky-500/10 group-hover:scale-105 transition-transform duration-300 text-white">
              <Sparkles className="size-4.5 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-slate-900 leading-none">
                Truneto<span className="text-sky-500">.</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase leading-none mt-1">
                Bengaluru cleaning Co.
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#calculator" onClick={(e) => { e.preventDefault(); onScrollToCalculator(); }} className="hover:text-sky-600 transition-colors">Pricing</a>
            <a href="#ai-planner" onClick={(e) => { e.preventDefault(); onScrollToAIPlanner(); }} className="flex items-center gap-1 text-sky-600 hover:text-sky-700 font-semibold transition-colors">
              <span className="bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full text-[10px] font-bold border border-sky-200">AI</span> 
              Custom Planner
            </a>
            <a href="#reviews" className="hover:text-sky-600 transition-colors text-amber-600">★ 4.9 (4,539 Reviews)</a>
            <a href="#about" className="hover:text-sky-600 transition-colors">About</a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/919108412345?text=Hello%20Truneto,%20I%20would%20like%20to%20learn%20more%20about%20your%20deep%20cleaning%20services!"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-900 border border-slate-200 hover:bg-slate-50 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
            >
              <Phone className="size-4" />
              <span>Tap to Call</span>
            </a>
            <button
              onClick={onScrollToCalculator}
              id="nav-book-button"
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-2.5 rounded-full inline-flex items-center gap-1.5 shadow-lg shadow-slate-200 transition-all transform duration-200 active:scale-95 cursor-pointer"
            >
              <span>Book Online</span>
              <ChevronRight className="size-4" />
            </button>
          </div>

          {/* Mobile hamburger switcher */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://wa.me/919108412345?text=Hi%20Truneto!%20I'm%20on%20your%20website%20and%20looking%20to%20get%20a%20cleaning%20quote."
              target="_blank"
              rel="noreferrer"
              className="bg-sky-50 text-sky-700 border border-sky-200 p-2.5 rounded-lg text-sm font-semibold active:scale-95 transition-transform"
            >
              Book via WhatsApp
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-900 p-2 border border-slate-200 rounded-xl"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute left-0 right-0 py-6 px-6 flex flex-col gap-4 shadow-xl z-40 transition-all">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 font-semibold hover:text-sky-650 py-1"
            >
              Our Cleaning Services
            </a>
            <a
              href="#calculator"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onScrollToCalculator();
              }}
              className="text-slate-800 font-semibold hover:text-sky-650 py-1"
            >
              Pricing Calculator
            </a>
            <a
              href="#ai-planner"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onScrollToAIPlanner();
              }}
              className="text-slate-800 font-semibold hover:text-sky-650 py-1 flex items-center gap-2"
            >
              <span className="bg-sky-50 text-sky-700 px-2 py-0.5 rounded text-[10px] font-bold border border-sky-200">AI</span>
              AI Custom Planner
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 font-semibold hover:text-sky-650 py-1"
            >
              Verified Live Reviews
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 font-semibold hover:text-sky-650 py-1"
            >
              JP Nagar Head Office
            </a>

            <div className="h-px bg-slate-100 my-2" />

            <div className="flex flex-col gap-3">
              <a
                href="tel:+919108412345"
                className="w-full flex justify-center items-center gap-2 text-slate-900 border border-slate-300 py-3 rounded-xl font-medium"
              >
                <Phone className="size-4" />
                <span>Call Hotline +91 91084 12345</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToCalculator();
                }}
                className="w-full bg-slate-900 text-white font-semibold py-3 rounded-xl shadow-lg inline-flex justify-center items-center gap-2"
              >
                <span>Quick Booking Form</span>
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
