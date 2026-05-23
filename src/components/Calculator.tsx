import { useState, useEffect } from "react";
import { SERVICES, ADDONS } from "../data";
import { ServiceOption, AddonOption } from "../types";
import { Check, Phone, Plus, Minus, ShieldCheck, HelpCircle } from "lucide-react";
import { generateWhatsAppLink } from "../utils";

interface CalculatorProps {
  initialBhk: number;
  initialZip: string;
}

export default function Calculator({ initialBhk, initialZip }: CalculatorProps) {
  const [selectedService, setSelectedService] = useState<ServiceOption>(SERVICES[0]);
  const [bedrooms, setBedrooms] = useState<number>(initialBhk || 2);
  const [bathrooms, setBathrooms] = useState<number>(initialBhk || 2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [zipCode, setZipCode] = useState<string>(initialZip || "560078");
  const [customNotes, setCustomNotes] = useState<string>("");

  // Sync state if initial value changes (e.g., submitted from Hero form)
  useEffect(() => {
    if (initialBhk) {
      setBedrooms(initialBhk);
      setBathrooms(initialBhk);
    }
    if (initialZip) {
      setZipCode(initialZip);
    }
  }, [initialBhk, initialZip]);

  // Handle addon toggling
  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Pricing calculation
  const calculateTotal = (): number => {
    const base = selectedService.basePrice;
    // bedrooms multiplier
    const roomSub = bedrooms * selectedService.multiplier;
    // bathrooms multiplier (half of bedrooms rate)
    const bathSub = bathrooms * Math.floor(selectedService.multiplier * 0.5);

    // add-ons sum
    const addonsSum = selectedAddons.reduce((sum, addonId) => {
      const add = ADDONS.find((a) => a.id === addonId);
      return sum + (add ? add.price : 0);
    }, 0);

    return base + roomSub + bathSub + addonsSum;
  };

  const getAddonNames = (): string[] => {
    return selectedAddons.map((id) => {
      const a = ADDONS.find((addon) => addon.id === id);
      return a ? a.name : "";
    }).filter(Boolean);
  };

  const currentPrice = calculateTotal();

  const handleWhatsAppBooking = () => {
    const addonNames = getAddonNames();
    const link = generateWhatsAppLink(
      selectedService.name,
      bedrooms,
      bathrooms,
      addonNames,
      currentPrice,
      zipCode,
      customNotes
    );
    window.open(link, "_blank");
  };

  return (
    <section id="calculator" className="py-16 md:py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sky-600 text-xs font-mono font-bold tracking-widest uppercase bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200/50">
            Realtime Quote Generator
          </span>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-slate-900 mt-4 leading-tight tracking-tight">
            Configure Your Service &amp; <span className="text-sky-600">See Your Price</span>
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base mt-4">
            Select your preferences below. No hidden surprises, no waiting on hold. Direct flat-rate pricing for Bengaluru households.
          </p>
        </div>

        {/* Dynamic Calculator Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE: Inputs */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-6 md:p-8 rounded-3xl space-y-8 shadow-sm">
            {/* 1. Service Type Selector */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                1. Select Service Category
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SERVICES.map((serv) => (
                  <button
                    key={serv.id}
                    onClick={() => setSelectedService(serv)}
                    className={`p-4 rounded-xl border text-left transition-all relative cursor-pointer ${
                      selectedService.id === serv.id
                        ? "bg-white border-sky-500 ring-2 ring-sky-500/10 shadow-sm"
                        : "bg-white/80 border-slate-200/70 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    {selectedService.id === serv.id && (
                      <span className="absolute top-3 right-3 bg-sky-500 text-white rounded-full p-0.5">
                        <Check className="size-3.5 stroke-[3]" />
                      </span>
                    )}
                    <h3 className="font-display font-bold text-slate-900 text-sm">{serv.name}</h3>
                    <p className="font-sans text-[11px] text-slate-500 mt-1.5 leading-normal line-clamp-2">
                      {serv.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Room Count Adjusters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Bedrooms Adjustment */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  2. Number of BHK / Bedrooms
                </label>
                <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                    className="p-2 border border-slate-200 hover:border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                    aria-label="Decrease bedrooms"
                  >
                    <Minus className="size-4 text-slate-600" />
                  </button>
                  <span className="font-display font-bold text-slate-900 text-lg">
                    {bedrooms} {bedrooms === 5 ? "5+ BHK" : "BHK"}
                  </span>
                  <button
                    onClick={() => setBedrooms(Math.min(5, bedrooms + 1))}
                    className="p-2 border border-slate-200 hover:border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                    aria-label="Increase bedrooms"
                  >
                    <Plus className="size-4 text-slate-600" />
                  </button>
                </div>
              </div>

              {/* Bathrooms Adjustment */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  3. Number of Bathrooms
                </label>
                <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-slate-200">
                  <button
                    onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                    className="p-2 border border-slate-200 hover:border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                    aria-label="Decrease bathrooms"
                  >
                    <Minus className="size-4 text-slate-600" />
                  </button>
                  <span className="font-display font-bold text-slate-900 text-lg">
                    {bathrooms} {bathrooms === 5 ? "5+ Bath" : "Bath"}
                  </span>
                  <button
                    onClick={() => setBathrooms(Math.min(5, bathrooms + 1))}
                    className="p-2 border border-slate-200 hover:border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                    aria-label="Increase bathrooms"
                  >
                    <Plus className="size-4 text-slate-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3. Add-on services */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                4. Select Optional Work Addons
              </label>
              <div className="space-y-2">
                {ADDONS.map((addon) => (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between gap-4 cursor-pointer ${
                      selectedAddons.includes(addon.id)
                        ? "bg-white border-sky-500 ring-2 ring-sky-500/10"
                        : "bg-white/80 border-slate-200/70 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-5 rounded-md border flex items-center justify-center transition-colors ${
                          selectedAddons.includes(addon.id)
                            ? "bg-sky-500 border-sky-500 text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {selectedAddons.includes(addon.id) && <Check className="size-3.5 stroke-[3]" />}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-sans font-semibold text-slate-900 text-sm">
                          {addon.name}
                        </span>
                        <span className="font-sans text-[11px] text-slate-400 mt-0.5">
                          {addon.description}
                        </span>
                      </div>
                    </div>
                    <span className="font-display font-bold text-sky-600 text-sm whitespace-nowrap">
                      + ₹{addon.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. PIN code and Custom details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              <div className="md:col-span-1">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Zip/PIN Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  placeholder="560078"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full bg-white border border-slate-200 pl-4 pr-3 py-3 rounded-xl font-sans text-sm font-semibold text-slate-800 outline-none focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Special Notes / Landmark in Bangalore
                </label>
                <input
                  type="text"
                  placeholder="e.g. Near Sarakki signal, 3rd floor..."
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full bg-white border border-slate-200 pl-4 pr-3 py-3 rounded-xl font-sans text-sm text-slate-800 outline-none focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Calculation Summary */}
          <div className="lg:col-span-5 sticky top-28 bg-slate-950 text-white rounded-3xl p-6 md:p-8 shadow-xl shadow-slate-900/10 flex flex-col justify-between border border-slate-800 h-full min-h-[500px]">
            <div>
              {/* Premium Top stats */}
              <div className="flex justify-between items-center pb-5 border-b border-slate-800">
                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-widest text-sky-400">Quote Estimate</h3>
                  <span className="font-display font-medium text-white text-xs mt-1 block">Live Calculation</span>
                </div>
                <div className="bg-slate-900 px-3 py-1 rounded-xl border border-slate-800 flex items-center gap-1">
                  <span className="size-2 rounded-full bg-sky-400 animate-ping"></span>
                  <span className="font-mono text-[10px] text-slate-350 font-bold uppercase">Realtime Rate</span>
                </div>
              </div>

              {/* Price Calculation Display */}
              <div className="py-6 text-center">
                <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">Estimated Total</span>
                <div className="flex justify-center items-baseline gap-1 mt-1 text-sky-400">
                  <span className="text-3xl font-display font-extrabold">₹</span>
                  <span className="text-5xl md:text-6xl font-display font-black tracking-tight select-all">
                    {currentPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 block mt-2 font-mono">Includes transport & GST within Bengaluru service limits</span>
              </div>

              {/* What's Included visual checklists */}
              <div className="mt-2 space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block pb-1.5 border-b border-slate-900">
                  Scope of Clean Checklist:
                </span>
                <div className="space-y-3 h-[180px] overflow-y-auto pr-2 custom-scrollbar">
                  {selectedService.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 leading-relaxed text-left">
                      <div className="bg-sky-500/20 text-sky-400 rounded p-0.5 flex-shrink-0 mt-0.5">
                        <Check className="size-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Action Button Trigger */}
            <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col gap-3">
              <button
                onClick={handleWhatsAppBooking}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-sans font-bold py-4 rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all active:scale-[0.98] inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="size-4 fill-white text-white animate-pulse" />
                <span>Schedule This Clean</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-sans mt-1">
                <ShieldCheck className="size-4 text-sky-400" />
                <span>100% Satisfaction Guarantee. Pay after inspection!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
