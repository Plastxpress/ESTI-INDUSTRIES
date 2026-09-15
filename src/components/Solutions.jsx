import React from 'react';
import { 
  Package, 
  ShieldAlert, 
  Ship, 
  Scissors, 
  ShoppingBag, 
  Apple, 
  Check, 
  ArrowUpRight,
  Layers,
  Sparkles
} from 'lucide-react';

export const SOLUTIONS_DATA = [
  {
    id: 'heavy-duty',
    title: 'Heavy-Duty Corrugated Boxes',
    category: 'High Burst-Strength & Multi-Wall',
    image: '/assets/images/heavy-duty-pallet.jpg',
    icon: Package,
    badge: 'Popular for Heavy Machinery',
    summary: 'High burst-strength multi-wall protection built to replace heavy wooden crates while reducing air and sea freight costs.',
    specs: [
      'Multi-Wall: 5-Ply (BC Flute) & 7-Ply (AAA Flute)',
      'Bursting Strength: 18 – 35+ kg/cm²',
      'Load Capacity: Up to 1,500 kg static / 800 kg dynamic',
      'ECT (Edge Crush Test): 55 to 110+ lbs/in'
    ],
    applications: 'Automotive engines, heavy machinery, pumps, industrial valves, bulk metal castings.'
  },
  {
    id: 'industrial-protective',
    title: 'Industrial & Protective Packaging',
    category: 'Internal Cushioning & Inserts',
    image: '/assets/images/custom-dividers.jpg',
    icon: ShieldAlert,
    badge: 'Zero-Abrasion Engineering',
    summary: 'Custom slotted partition cells, corrugated layer pads, and cushioning corner guards engineered for fragile and precision components.',
    specs: [
      'Slotted interlocking cell grids & custom fitments',
      'Flute Choices: B-Flute, E-Flute, Double Wall',
      'Anti-Scuff & moisture-resistant barrier liners',
      'Drop-impact dampening and vibration protection'
    ],
    applications: 'Glassware, precision electronics, automotive components, bottled liquids & chemicals.'
  },
  {
    id: 'export-sea',
    title: 'Export & Sea Cartons',
    category: 'Weather-Resistant Container Packaging',
    image: '/assets/images/export-container.jpg',
    icon: Ship,
    badge: 'UN Certified Ready',
    summary: 'Specially treated moisture-barrier cartons engineered for long-duration ocean freight, condensation resistance, and 4-tier container stacking.',
    specs: [
      'Hydrophobic moisture-repellent barrier coating',
      'Full compliance with ISPM-15 export standards (no fumigation needed)',
      'High humid-climate compression retention (RCT/BCT)',
      'UN 1266 hazardous materials packaging options'
    ],
    applications: 'International overseas shipping, chemical drums, textiles, electrical equipment, perishable export.'
  },
  {
    id: 'custom-die-cut',
    title: 'Custom Die-Cut Packaging',
    category: 'Precision Engineered Geometry',
    image: '/assets/images/die-cut-corrugated.jpg',
    icon: Scissors,
    badge: 'CAD/CAM Precision',
    summary: 'Precision flatbed and rotary die-cut boxes crafted to exact CAD blueprints, featuring self-locking tabs, ventilation slots, and ergonomic handholds.',
    specs: [
      'Precision tolerance: ±0.5 mm cut accuracy',
      'Self-locking / roll-end tuck top / snap-lock bottoms',
      'Ergonomic hand-hole cutouts and ventilation louvers',
      'Compatible with high-definition flexo printing'
    ],
    applications: 'Specialty hardware, retail shelf-ready cartons, high-end consumer goods, e-commerce kits.'
  },
  {
    id: 'fmcg-regular',
    title: 'FMCG & Regular Cartons',
    category: 'High-Volume RSC & Bulk Cartons',
    image: '/assets/images/hsc-double-wall.jpg',
    icon: ShoppingBag,
    badge: 'High-Speed Automated Lines',
    summary: 'Standard Regular Slotted Cartons (RSC) and Half Slotted Cartons (HSC) manufactured with uniform dimensional accuracy for high-speed automated case packers.',
    specs: [
      'Styles: RSC (0201), HSC (0200) with matching top caps',
      'Linerboard: 140 – 300 GSM Virgin / Semi-chemical Kraft',
      'High run-speed consistency on automated erecting machines',
      'Economical per-unit cost on high-volume production runs'
    ],
    applications: 'Packaged foods, household goods, personal care, retail distribution centers, beverages.'
  },
  {
    id: 'agricultural-produce',
    title: 'Agricultural & Produce Packaging',
    category: 'Ventilated & Cold-Room Stackable',
    image: '/assets/images/controlled-moisture-corrugator.jpg',
    icon: Apple,
    badge: 'Cold Chain Verified',
    summary: 'Ventilated, heavy-duty corrugated fruit and vegetable trays built to withstand condensation in cold storage and high-humidity ripening rooms.',
    specs: [
      'Interlocking stacking lugs for stable palletizing',
      'Precision airflow holes for rapid hydro-cooling',
      'Wet-strength adhesive and wax/water-repellent coatings',
      '100% Food contact approved virgin paper grades'
    ],
    applications: 'Fresh fruits, vegetables, flowers, refrigerated dairy, frozen processed food shipments.'
  }
];

export default function Solutions({ onOpenModal, onSelectForQuote }) {
  return (
    <section id="solutions" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Engineered Corrugated Categories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            High-Performance <br className="hidden sm:block" />
            <span className="text-amber-600">Packaging Solutions</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            From single-ply retail cartons to 7-ply heavy-duty bulk systems, each solution is customized for bursting strength, stacking load, and transit resilience.
          </p>
        </div>

        {/* 6 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Zoom effect */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-700 shadow">
                    {item.badge}
                  </div>

                  {/* Icon Indicator */}
                  <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Subtitle pill */}
                  <div className="absolute bottom-3 left-3 text-xs font-semibold text-amber-400">
                    {item.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors font-display">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Specs List */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-amber-500" />
                        Key Engineering Specs
                      </p>
                      <ul className="space-y-1.5">
                        {item.specs.map((spec, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onOpenModal(item)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                    >
                      <span>Inquire Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectForQuote(item.title)}
                      className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors shadow-sm"
                    >
                      Get Quote
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Callout Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700 shadow-xl">
          <div className="text-left">
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
              Need a Custom Size or Specialized UN Hazmat Spec?
            </h4>
            <p className="mt-1 text-slate-300 text-sm max-w-2xl">
              We design tailor-made inner fitments, custom die-lines, and hazardous liquid transport cartons (UN 1266 / 4GV tested).
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectForQuote('Custom Tailored Corrugated Solution')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            Request Custom Prototype
          </button>
        </div>

      </div>
    </section>
  );
}
