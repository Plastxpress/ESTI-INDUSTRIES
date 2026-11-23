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
import { PRODUCTS } from '../data/products';
import { productsForIndustry } from '../data/catalogue';

export const INDUSTRIES_DATA = [
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

export default function IndustriesSection({ asPage = false }) {
  const SubHeading = asPage ? 'h2' : 'h3';
  const ItemHeading = asPage ? 'h3' : 'h4';
  return (
    <section id="industries" className={`${asPage ? 'py-12 md:py-16' : 'py-20 md:py-28'} bg-paper border-b border-line relative`}>
      
      {/* Subtle Dot Grid Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Packaging Solutions Built for Every Industry */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          {!asPage && (
            <>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kraft-50 border border-kraft-200 text-kraft-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5 text-kraft-700" />
                <span>Tailored Industry Engineering</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight font-grotesk">
                Packaging Solutions <br className="hidden sm:inline" />
                <span className="font-normal text-kraft-700">Built for Every Industry</span>
              </h2>
            </>
          )}

          <p className="mt-4 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Every product has different packaging requirements. At <strong className="text-ink font-semibold">ESTI Packaging</strong>, we develop corrugated packaging solutions based on the product, handling conditions, transportation requirements and performance expectations of each industry. Our range includes heavy-duty corrugated boxes, industrial packaging, export cartons, custom-made boxes, die-cut packaging and protective packaging solutions designed to provide dependable product protection while optimizing packaging costs.
          </p>

          {/* Highlight Signature Banner (Exact text as requested) */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-kraft-200 shadow-sm flex items-center justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-kraft-700 shrink-0" />
            <span className="text-sm sm:text-base font-bold text-ink">
              Engineered for strength. Designed for performance. Built for your industry.
            </span>
          </div>
        </div>

        {/* Sub-Header: Industries We Serve */}
        <div className="text-center max-w-2xl mx-auto mt-14 mb-8">
          <SubHeading className="text-2xl sm:text-3xl font-extrabold text-ink font-display">
            Industries We Serve
          </SubHeading>
          <p className="text-sm text-slate-600 mt-1">
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
                className="bg-white border border-line/90 rounded-2xl p-5 hover:border-kraft-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-paper group-hover:bg-kraft-50 text-slate-700 group-hover:text-kraft-700 border border-line group-hover:border-kraft-200 flex items-center justify-center mb-3.5 transition-colors">
                    <IconComponent className="w-5 h-5 stroke-[2]" />
                  </div>

                  <ItemHeading className="text-base font-extrabold text-ink group-hover:text-kraft-700 transition-colors leading-snug">
                    {ind.name}
                  </ItemHeading>

                  <p className="text-sm sm:text-xs text-slate-600 mt-1.5 leading-relaxed">
                    {ind.focus}
                  </p>

                  {/* Products whose Recommended Sectors name this industry */}
                  {productsForIndustry(PRODUCTS, ind.name).length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`Products for ${ind.name}`}>
                      {productsForIndustry(PRODUCTS, ind.name).map((p) => (
                        <li key={p.id}>
                          <a href={p.path} className="inline-flex items-center min-h-11 sm:min-h-9 px-3 rounded-full bg-paper text-xs font-semibold text-ink hover:bg-kraft-500 transition-colors">
                            {p.navLabel}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <a
                    href={`https://wa.me/919833182733?text=Hello%20ESTI%20Packaging,%20I%20would%20like%20to%20inquire%20about%20packaging%20solutions%20for%20${encodeURIComponent(ind.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kraft-700 font-bold hover:text-kraft-800 flex items-center gap-1 min-h-11"
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
