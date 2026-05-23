import React, { useState } from "react";
import { Sparkles, MapPin, Search, Star, ShieldCheck } from "lucide-react";

interface HeroProps {
  onCalculate: (bhk: number, zip: string) => void;
}

export default function Hero({ onCalculate }: HeroProps) {
  const [zipCode, setZipCode] = useState("560078");
  const [bhk, setBhk] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(parseInt(bhk, 10), zipCode);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/40 via-white to-white py-12 md:py-20 lg:py-24 px-8">
      {/* Absolute blurry ambient designs */}
      <div className="absolute top-0 right-1/4 -z-10 size-80 bg-sky-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-10 -z-10 size-72 bg-blue-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline and Mini-Form */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Top trust badge */}
          <div className="inline-flex items-center gap-2 self-start bg-sky-50 border border-sky-200/80 rounded-full px-3 py-1 mb-6 text-sky-800 text-xs font-semibold">
            <Sparkles className="size-3.5 fill-sky-500 text-sky-500 animate-pulse" />
            <span>Bangalore&apos;s #1 Choice &bull; 4.9 Rated</span>
          </div>

          <h1 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.15] tracking-tight">
            Come Home to Freshness. <br/>
            <span className="text-sky-600 font-extrabold font-display">Bengaluru&apos;s Best</span> House Cleaning.
          </h1>

          <p className="mt-4 text-slate-500 text-sm md:text-base max-w-xl font-sans leading-relaxed">
            Insured, bonded, and <span className="font-semibold text-slate-900">100% satisfaction guaranteed.</span> Professional cleaning for busy lives in J.P. Nagar, BTM, and across Bengaluru.
          </p>

          {/* Dynamic Quote Multi-form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 bg-white p-2 rounded-2xl border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row gap-2 max-w-xl"
          >
            {/* ZIP input */}
            <div className="flex-1 min-w-[150px] relative flex items-center">
              <MapPin className="absolute left-3.5 text-slate-400 size-5" />
              <input
                type="text"
                placeholder="Enter Pincode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                maxLength={6}
                className="w-full bg-slate-50 border-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 pl-11 pr-4 py-2.5 rounded-lg text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400"
                required
              />
            </div>

            {/* BHK select */}
            <div className="flex-1 min-w-[150px] relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 text-xs font-bold uppercase font-sans">BHK</span>
              <select
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className="w-full bg-slate-50 border-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 pl-14 pr-4 py-2.5 rounded-lg text-sm font-semibold text-slate-855 outline-none transition-all appearance-none cursor-pointer"
              >
                <option value="1">1 BHK Flat / Home</option>
                <option value="2">2 BHK Flat / Home</option>
                <option value="3">3 BHK Flat / Home</option>
                <option value="4">4 BHK Custom Clean</option>
                <option value="5">5+ BHK Duplex</option>
              </select>
            </div>

            {/* Form Button */}
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2.5 px-6 rounded-lg shadow-lg hover:shadow-sky-100 transition-all flex items-center justify-center gap-2 text-sm font-sans active:scale-[0.98] cursor-pointer"
            >
              <Search className="size-4" />
              <span>Get Instant Quote</span>
            </button>
          </form>

          {/* Mini benefits checklist */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-450">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="text-sky-500 size-4 stroke-[2.5]" />
              No Hidden Charges
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="text-amber-500 fill-amber-500 size-4" />
              4.9 rating based on verified Google reviews
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="text-indigo-500 size-4" />
              Eco-Friendly Plant Products
            </span>
          </div>
        </div>

        {/* Right Column: Premium Image with Custom Floating Badges */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            {/* Decorative colored backdrop frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-[2.5rem] opacity-20 blur-lg" />

            <div className="relative bg-white p-3 rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden aspect-[4/3]">
              <img
                src="/src/assets/images/clean_living_room_1779525906093.png"
                alt="Truneto bright pristine clean apartment living room"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[2rem] hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Floating Banner 1: Live numbers */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="bg-sky-50 text-sky-600 size-11 rounded-xl flex items-center justify-center font-bold">
                ⭐
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-slate-900 leading-none text-lg">4.9 Star</span>
                <span className="text-xs text-slate-505 leading-none mt-1 font-sans font-medium text-slate-400">Verified Truneto Rating</span>
              </div>
            </div>

            {/* Floating Banner 2: Verified team */}
            <div className="absolute -top-4 -right-4 bg-slate-950 text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-2">
              <ShieldCheck className="text-sky-400 size-5" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase font-mono tracking-widest text-sky-450 leading-none">100% Insured</span>
                <span className="text-xs font-semibold leading-none mt-1">Background Checked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
