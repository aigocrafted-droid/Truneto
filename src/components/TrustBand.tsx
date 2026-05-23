import { ShieldAlert, Sparkles, Star, ShieldCheck } from "lucide-react";

export default function TrustBand() {
  const items = [
    {
      icon: <ShieldCheck className="size-6 text-sky-500" />,
      title: "100% Background-Checked Staff",
      desc: "Strictly vetted personnel for absolute security."
    },
    {
      icon: <ShieldAlert className="size-6 text-sky-500" />,
      title: "Fully Insured & Bonded",
      desc: "Comprehensive liability coverage for peace of mind."
    },
    {
      icon: <Sparkles className="size-6 text-sky-500" />,
      title: "Eco-Friendly Products Available",
      desc: "Completely safe for pets, infants, and environment."
    },
    {
      icon: <Star className="size-6 text-amber-500 fill-amber-500" />,
      title: "5-Star Rated Locally",
      desc: "Bangalore's premium cleaning brand with 4.9 stars."
    }
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-6 px-8 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-2"
          >
            <div className="bg-slate-50 p-2 rounded-xl flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <h4 className="font-display font-bold text-slate-900 text-xs md:text-sm uppercase tracking-wider">
                {item.title}
              </h4>
              <p className="font-sans text-[11px] text-slate-400 mt-1 leading-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
