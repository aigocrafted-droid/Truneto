import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBand from "./components/TrustBand";
import ServiceCatalogue from "./components/ServiceCatalogue";
import Calculator from "./components/Calculator";
import AIPlanner from "./components/AIPlanner";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { ServiceOption } from "./types";

export default function App() {
  const [calculatorBhk, setCalculatorBhk] = useState<number>(2);
  const [calculatorZip, setCalculatorZip] = useState<string>("560078");

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHeroSubmit = (bhk: number, zip: string) => {
    setCalculatorBhk(bhk);
    setCalculatorZip(zip);
    // Smooth scroll down to the Pricing calculator section
    setTimeout(() => {
      scrollToSection("calculator");
    }, 100);
  };

  const handleSelectServiceFromCatalogue = (serv: ServiceOption) => {
    // Scroll down to the Pricing calculator section and highlight
    scrollToSection("calculator");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900 overflow-x-hidden antialiased">
      {/* 1. Permanent Header Navigation bar */}
      <Header
        onScrollToCalculator={() => scrollToSection("calculator")}
        onScrollToAIPlanner={() => scrollToSection("ai-planner")}
      />

      {/* 2. Hero Section with dynamic mini-quote form triggers */}
      <Hero onCalculate={handleHeroSubmit} />

      {/* 3. Horizontal Local Trust and Credibility strip */}
      <TrustBand />

      {/* 4. Interactive Horizontal Service Catalogue list */}
      <ServiceCatalogue onSelectService={handleSelectServiceFromCatalogue} />

      {/* 5. Dynamic pricing interactive calculator card */}
      <Calculator initialBhk={calculatorBhk} initialZip={calculatorZip} />

      {/* 6. AI-powered smart residential spec planner */}
      <AIPlanner />

      {/* 7. The visual 3-step 'How It Works' workflow indicator */}
      <HowItWorks />

      {/* 8. Star verified Google reviews and local guarantees */}
      <Testimonials />

      {/* 9. Bangalore operating hours and J.P. Nagar HQ Address Footer */}
      <Footer
        onScrollToCalculator={() => scrollToSection("calculator")}
        onScrollToAIPlanner={() => scrollToSection("ai-planner")}
      />
    </div>
  );
}
