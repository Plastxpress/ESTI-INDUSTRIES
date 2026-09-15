import React from 'react';
import {
  Wrench,
  Car,
  Factory,
  Zap,
  ShoppingBag,
  Flame,
  Pill,
  Utensils,
  Wheat,
  Apple,
  ShoppingCart,
  Warehouse,
  Globe2,
  Armchair,
  Shirt,
  Printer,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const INDUSTRIES_DATA = [
  { name: 'Heavy Engineering & Industrial Equipment', icon: Wrench, focus: 'High burst strength & crate replacement' },
  { name: 'Automotive & Auto Components', icon: Car, focus: 'Scratch-free cell dividers & pallet bins' },
  { name: 'Engineering & Manufacturing', icon: Factory, focus: 'Custom corrugated sleeves & heavy parts boxes' },
  { name: 'Electrical & Electronics', icon: Zap, focus: 'Cushioning pads & ESD-safe protective packaging' },
  { name: 'FMCG & Consumer Products', icon: ShoppingBag, focus: 'Automated line RSC & branded shipping cartons' },
  { name: 'Lubricants, Oils & Chemicals', icon: Flame, focus: 'UN 1266 certified hazardous liquid packaging' },
  { name: 'Pharmaceutical & Healthcare', icon: Pill, focus: 'Clean, dust-free virgin kraft master cartons' },
  { name: 'Food Processing & Food Products', icon: Utensils, focus: 'Food-grade certified outer transport cartons' },
  { name: 'Agriculture & Agro Products', icon: Wheat, focus: 'Moisture-resistant bulk agro packaging' },
  { name: 'Fruits & Vegetables', icon: Apple, focus: 'Ventilated produce trays for cold chain storage' },
  { name: 'E-commerce & Retail', icon: ShoppingCart, focus: 'Tear-strip mailers & durable e-comm shippers' },
  { name: 'Logistics & Warehousing', icon: Warehouse, focus: 'High-stacking strength & pallet stability' },
  { name: 'Export & International Shipping', icon: Globe2, focus: 'ISPM-15 compliant ocean freight containers' },
  { name: 'Furniture & Industrial Products', icon: Armchair, focus: 'Angle board corner & surface protection' },
  { name: 'Textiles & Apparel', icon: Shirt, focus: 'Deep wardrobe cartons & paper core fabric tubes' },
  { name: 'Printing & Stationery', icon: Printer, focus: 'Moisture-barrier paper ream & book shippers' },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200 relative">
      
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Packaging Solutions Built for Every Industry */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tailored Industry Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Packaging Solutions <br />
            <span className="text-emerald-700">Built for Every Industry</span>
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Every product has different packaging requirements. At <strong className="text-slate-900 font-semibold">ESTI Packaging</strong>, we develop corrugated packaging solutions based on the product, handling conditions, transportation requirements and performance expectations of each industry. Our range includes heavy-duty corrugated boxes, industrial packaging, export cartons, custom-made boxes, die-cut packaging and protective packaging solutions designed to provide dependable product protection while optimizing packaging costs.
          </p>

          {/* Highlight Signature Banner (Exact text as requested) */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span className="text-sm sm:text-base font-bold text-slate-900">
              Engineered for strength. Designed for performance. Built for your industry.
            </span>
          </div>
        </div>

        {/* Sub-Header: Industries We Serve */}
        <div className="text-center max-w-2xl mx-auto mt-14 mb-8">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
            Industries We Serve
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Proven custom packaging configurations deployed across 16 critical market verticals.
          </p>
        </div>

        {/* 16 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {INDUSTRIES_DATA.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-slate-50 group-hover:bg-emerald-50 text-slate-700 group-hover:text-emerald-700 border border-slate-200 group-hover:border-emerald-200 flex items-center justify-center mb-3.5 transition-colors">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>

                  <h4 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {ind.name}
                  </h4>

                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {ind.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={`https://wa.me/919833182733?text=Hello%20ESTI%20Packaging,%20I%20would%20like%20to%20inquire%20about%20packaging%20solutions%20for%20${encodeURIComponent(ind.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center gap-1"
                  >
                    <span>Inquire for Sector</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
