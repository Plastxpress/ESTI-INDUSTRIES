import React, { useState } from 'react';
import {
  Wrench,
  Car,
  Cpu,
  Zap,
  ShoppingBag,
  Flame,
  Pill,
  Utensils,
  Wheat,
  Truck,
  Shirt,
  Printer,
  Armchair,
  Globe2,
  AlertTriangle,
  Compass,
  ArrowRight,
  Factory
} from 'lucide-react';

const INDUSTRIES_LIST = [
  {
    id: 'heavy-eng',
    name: 'Heavy Engineering & Industrial Equipment',
    icon: Wrench,
    tagline: 'Multi-wall 7-ply boxes, heavy machinery base trays, and wooden-crate replacement.',
    category: 'Industrial',
    highlight: 'Up to 1,500 kg static load'
  },
  {
    id: 'automotive',
    name: 'Automotive & Auto Components',
    icon: Car,
    tagline: 'Precision dividers for gears, engine blocks, brake discs, and scratch-sensitive body panels.',
    category: 'Industrial',
    highlight: 'Zero-abrasion cell matrix'
  },
  {
    id: 'engineering-mfg',
    name: 'Engineering & Manufacturing',
    icon: Factory,
    tagline: 'Custom corrugated sleeves, pallet caps, and high-tensile packaging for precision parts.',
    category: 'Industrial',
    highlight: 'High burst factor kraft'
  },
  {
    id: 'electrical',
    name: 'Electrical & Electronics',
    icon: Zap,
    tagline: 'Anti-static, ESD safe, and high-cushioning protective packaging for circuit boards & drives.',
    category: 'Technology',
    highlight: 'ESD & Shock Dampening'
  },
  {
    id: 'fmcg',
    name: 'FMCG & Consumer Products',
    icon: ShoppingBag,
    tagline: 'High-speed line compatible RSC shippers with multi-color branding for retail distribution.',
    category: 'Retail',
    highlight: 'Automated packing ready'
  },
  {
    id: 'chemicals-un',
    name: 'Lubricants, Oils & Chemicals',
    icon: Flame,
    tagline: 'UN certified hazardous goods packaging for flammable liquids (UN 1266) & industrial lubricants.',
    category: 'Hazardous',
    highlight: 'UN 1266 Certified 4GV'
  },
  {
    id: 'pharma',
    name: 'Pharmaceutical & Healthcare',
    icon: Pill,
    tagline: 'Hygienic, dust-free virgin corrugated cartons with tamper-evident die-cuts and batch tracking.',
    category: 'Healthcare',
    highlight: 'Dust-free virgin liners'
  },
  {
    id: 'food-processing',
    name: 'Food Processing & Food Products',
    icon: Utensils,
    tagline: 'Food-grade certified corrugated shippers and outer cartons for bakeries, snacks & processed foods.',
    category: 'Food',
    highlight: 'FDA & FSSAI compliant'
  },
  {
    id: 'agro',
    name: 'Agriculture & Agro Products',
    icon: Wheat,
    tagline: 'Hydro-cooling ventilated corrugated crates for fresh fruits, vegetables, and agro-export.',
    category: 'Food',
    highlight: 'High humidity retention'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce, Retail & Logistics',
    icon: Truck,
    tagline: 'Quick-seal tear-strip mailer boxes, lightweight e-comm master cartons, and return-ready boxes.',
    category: 'Retail',
    highlight: 'Tamper-evident design'
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    icon: Shirt,
    tagline: 'Extra-deep wardrobe cartons, garment export shippers, and fabric roll protective tubes.',
    category: 'Retail',
    highlight: 'High crush-proof stacking'
  },
  {
    id: 'printing',
    name: 'Printing & Stationery',
    icon: Printer,
    tagline: 'Moisture-sealed paper ream shippers, book cartons, and display packaging for office supplies.',
    category: 'Commercial',
    highlight: 'Moisture-barrier seal'
  },
  {
    id: 'furniture',
    name: 'Furniture & Heavy Goods',
    icon: Armchair,
    tagline: 'Corner edge protectors, large flatbed furniture shippers, and surface-protection pads.',
    category: 'Commercial',
    highlight: 'Full perimeter defense'
  },
  {
    id: 'export-shipping',
    name: 'Export & International Shipping',
    icon: Globe2,
    tagline: 'ISPM-15 compliant sea freight cartons with 4-tier container stacking endurance.',
    category: 'Logistics',
    highlight: 'ISPM-15 wood substitute'
  },
  {
    id: 'hazardous-perfumery',
    name: 'Hazmat, Aerosols & Perfumery',
    icon: AlertTriangle,
    tagline: 'Certified dangerous goods (UN 4G/4GV) outer cartons with specialized absorbent liners.',
    category: 'Hazardous',
    highlight: 'Class 3 Flammable certified'
  },
  {
    id: 'precision-instruments',
    name: 'Aerospace & Precision Instruments',
    icon: Compass,
    tagline: 'Engineered high-density corrugated cradles for optical instruments and aerospace assemblies.',
    category: 'Technology',
    highlight: 'Mil-spec dampening'
  }
];

export default function Industries({ onSelectIndustryForQuote }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Industrial', 'Hazardous', 'Retail', 'Food', 'Technology', 'Commercial'];

  const filteredList = activeFilter === 'All'
    ? INDUSTRIES_LIST
    : INDUSTRIES_LIST.filter(item => item.category === activeFilter);

  return (
    <section id="industries" className="py-20 md:py-28 bg-slate-900 text-white relative">
      {/* Visual Accent Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <span>B2B Market Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Industries We Serve
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Every vertical faces distinct supply chain challenges. We engineer corrugated strength, cushioning, and moisture barrier properties customized to each industry’s standards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Industries Grid (16 Verticals) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectIndustryForQuote(item.name)}
                className="group relative bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/60 rounded-xl p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-slate-700/70 group-hover:bg-amber-500/20 border border-slate-600 group-hover:border-amber-500/40 flex items-center justify-center text-amber-400 group-hover:text-amber-300 transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900/80 text-amber-400 border border-amber-500/20">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {item.name}
                  </h3>

                  {/* Tagline */}
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                {/* Bottom Quote Prompt */}
                <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-amber-500 font-semibold group-hover:text-amber-400">
                  <span>Inquire for {item.category}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with UN Hazardous certification showcase */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">Specialized Regulatory Capability</p>
              <h4 className="text-lg font-bold text-white">U.N. Certified Flammable Liquids & Dangerous Goods Cartons</h4>
              <p className="text-xs text-slate-400 mt-0.5">Compliant with UN 1266 packaging specifications for perfumery, chemicals, and solvent transport.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onSelectIndustryForQuote('U.N. Certified Chemical & Flammable Packaging')}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors shadow-md"
          >
            Get Hazmat Packaging Specs
          </button>
        </div>

      </div>
    </section>
  );
}
