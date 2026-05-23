import { REVIEWS } from "../data";
import { Star, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-24 px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sky-600 text-xs font-mono font-bold tracking-widest uppercase bg-sky-50 px-3 py-1.5 rounded-full border border-sky-200/50">
            Real Customer Words
          </span>
          <h2 className="font-display font-medium text-3xl md:text-5xl text-slate-900 mt-4 leading-tight tracking-tight">
            Loved By <span className="text-sky-600">Bengaluru Households</span>
          </h2>
          <p className="font-sans text-slate-500 text-sm md:text-base mt-4">
            See why our standard Google reviews rate Truneto as the premium home service leader in Bangalore.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Stars and verified badge header */}
                <div className="flex justify-between items-start gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="size-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  {rev.verified && (
                    <div className="flex items-center gap-1 bg-sky-50 text-sky-700 text-[10px] font-bold py-0.5 px-2 rounded-full border border-sky-200/50">
                      <CheckCircle2 className="size-3 text-sky-600 stroke-[2.5]" />
                      <span>Verified Client</span>
                    </div>
                  )}
                </div>

                {/* Tag */}
                <span className="bg-white border border-slate-200 px-2 py-0.5 text-[9px] font-mono text-slate-500 rounded font-semibold mt-4 inline-block">
                  {rev.tag}
                </span>

                {/* Comment */}
                <p className="font-sans text-xs md:text-sm text-slate-600 mt-4 leading-relaxed italic text-left">
                  &quot;{rev.comment}&quot;
                </p>
              </div>

              {/* Reviewer signature */}
              <div className="mt-6 pt-4 border-t border-slate-200/55 flex justify-between items-center text-left">
                <div>
                  <h4 className="font-display font-extrabold text-slate-900 text-xs md:text-sm">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5 block">
                    {rev.date}
                  </span>
                </div>
                <div className="bg-white px-2 py-1 rounded text-[10px] font-mono font-medium border border-slate-200 text-slate-500 uppercase">
                  Google Review
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Google Reviews Counter Box Banner */}
        <div className="mt-12 bg-slate-950 text-white rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="text-center md:text-left">
            <h3 className="font-display font-extrabold text-white text-xl md:text-2xl leading-tight">
              Backed by Our 100% Satisfaction Guarantee
            </h3>
            <p className="font-sans text-slate-300 text-xs md:text-sm mt-1.5 leading-relaxed max-w-xl">
              If you aren’t absolutely delighted with your clean, notify our Bangalore home office within 24 hours. We will dispatch a senior teammate to reclean any unsatisfactory area immediately—completely free.
            </p>
          </div>
          <div className="bg-slate-900 p-4 border border-slate-800 rounded-2xl text-center flex-shrink-0 min-w-[200px]">
            <span className="text-[10px] uppercase font-mono tracking-widest text-sky-400 font-bold">Google Reviews Score</span>
            <div className="font-display font-black text-3xl text-white mt-1">4.9 / 5.0</div>
            <span className="text-[10px] text-slate-500 mt-1 block font-mono">Based on 4,539+ real client ratings</span>
          </div>
        </div>
      </div>
    </section>
  );
}
