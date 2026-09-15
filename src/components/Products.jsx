import React, { useState } from 'react';
import { 
  Box, 
  Layers, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  Mail, 
  Check, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react';

export const PRODUCTS_CATALOG = [
  {
    id: 'corrugated-boxes',
    title: 'Corrugated Boxes & Heavy-Duty Cartons',
    subtitle: 'Jumbo Boxes, Pallet Boxes & UN Certified Cartons',
    image: '/assets/images/esti-branded-box.jpg',
    secondaryImage: '/assets/images/heavy-duty-pallet.jpg',
    category: 'Corrugated Boxes',
    badge: 'Core Specialty (30+ Years)',
    description: 'Manufactured on our imported 2200 mm 5-ply board plant with fully automatic 2-color printer slotters (1800 x 3500 mm). We specialize in high-burst strength cartons, heavy-duty wooden crate replacements, and export container pallet boxes.',
    specs: [
      { label: 'Constructions', value: '3-Ply (Single Wall), 5-Ply (Double Wall), 7-Ply (Triple Wall)' },
      { label: 'Flute Profiles', value: 'A, B, C, E, and combination BC & AAA flutes' },
      { label: 'Certifications', value: 'UN 1266 Flammable Liquid Certified (4GV), ISO 9001:2015' },
      { label: 'Weight Capacity', value: 'Up to 1,500 kg static load / 800 kg dynamic payload' },
      { label: 'Bursting Strength', value: '18 to 35+ kg/cm² (customized to client requirements)' },
      { label: 'Box Styles', value: 'RSC (0201), HSC (0200) with lids, Die-cut wrap-arounds, Pallet bins' },
    ],
    features: [
      'Engineered replacement for heavy, expensive wooden crates',
      'High humidity and moisture-retention liners for sea export',
      'Computerized slotting and 2-color high-definition flexo printing',
      '100% Recyclable and eco-friendly sustainable paper kraft'
    ],
    applications: 'Automotive components, industrial machinery, chemicals & lubricants, FMCG, pharmaceutical exports, electronics.'
  },
  {
    id: 'honeycomb',
    title: 'Honeycomb Sheets & Die-Cut Inserts',
    subtitle: 'High-Compression Dunnage & Surface Defense Solutions',
    image: '/assets/images/honeycomb-packaging.jpg',
    secondaryImage: '/assets/images/custom-dividers.jpg',
    category: 'Honeycomb Packaging',
    badge: '100% Eco-Friendly',
    description: '100% recyclable kraft paper honeycomb structures providing extraordinary vertical compression resistance, shock absorption, and surface protection. Engineered for high-load durability.',
    specs: [
      { label: 'Cell Diameters', value: '10 mm, 15 mm, 20 mm, and 25 mm cell geometry' },
      { label: 'Thickness Range', value: '10 mm up to 100 mm continuous thickness' },
      { label: 'Format Options', value: 'Flat sheets, die-cut panels, interlocking pads, bottle trays' },
      { label: 'Compression', value: 'High load-bearing capacity (up to 40+ metric tons/m²)' },
      { label: 'Weight Savings', value: 'Up to 60% lighter than solid timber or fiberboard' },
      { label: 'Material', value: '100% Recycled Virgin & Semi-Chemical Kraft Paper' }
    ],
    features: [
      'Custom CNC die-cut cavities for glass bottles and delicate parts',
      'Zero-abrasion surface contact prevents scratching of finished goods',
      'Approved for export air freight and ocean container dunnage',
      'Completely biodegradable and environmentally sustainable'
    ],
    applications: 'Wine & liquor bottles, solar panels, automotive glass, electrical motors, furniture buffer pads.'
  },
  {
    id: 'angle-boards',
    title: 'Angle Boards & Edge Protectors (V-Boards)',
    subtitle: 'Structural Corner Reinforcement & Pallet Strapping Defense',
    image: '/assets/images/angle-edge-boards.jpg',
    secondaryImage: '/assets/images/export-container.jpg',
    category: 'Edge Protection',
    badge: 'Pallet Stability',
    description: 'Rigid, multi-ply compressed laminated kraft paper corner boards that protect products from strap damage during tensioning and significantly increase vertical box column stacking strength on pallets.',
    specs: [
      { label: 'Leg Dimensions', value: '25 x 25 mm up to 100 x 100 mm (Equal & Unequal wings)' },
      { label: 'Caliper / Thickness', value: '2.0 mm to 8.0 mm heavy-duty multi-ply kraft' },
      { label: 'Lengths', value: 'Cut to exact customer dimensions up to 3,000 mm' },
      { label: 'Finish Options', value: 'Natural Brown Kraft, White coated, Moisture-barrier film' },
      { label: 'Types', value: 'Standard Rigid V-Boards, Wrap-around notched for circular rolls' }
    ],
    features: [
      'Prevents steel and plastic strapping tension from crushing carton edges',
      'Increases warehouse pallet stacking height by up to 2-3 extra tiers',
      'Distributes load tension uniformly across the entire pallet perimeter',
      '100% recyclable alternative to plastic or metal corner protectors'
    ],
    applications: 'Palletized export goods, paper ream skids, white goods appliances, sheet metal coils, ceramic tiles.'
  },
  {
    id: 'paper-cores',
    title: 'Paper Core Tubes (Spiral Wound)',
    subtitle: 'Industrial Cores for Winding, Storage & Transportation',
    image: '/assets/images/paper-core-tubes.jpg',
    secondaryImage: '/assets/images/factory-warehouse-panoramic.jpg',
    category: 'Paper Cores',
    badge: 'High Radial Strength',
    description: 'High-strength spiral wound paper cores manufactured using high-grade kraft board and specialized bonding adhesives, engineered for smooth high-speed rewinding and zero core collapse under heavy tension.',
    specs: [
      { label: 'Inner Diameter (ID)', value: '25 mm to 300 mm (1 inch to 12 inches standard)' },
      { label: 'Wall Thickness', value: '1.5 mm to 18.0 mm heavy radial wall' },
      { label: 'Lengths', value: 'Manufactured to custom lengths from 50 mm up to 4,000 mm' },
      { label: 'Surface Finish', value: 'Ultra-smooth outer ply, burr-free perpendicular cuts' },
      { label: 'Adhesive Grade', value: 'High-tack moisture-resistant bonding resins' }
    ],
    features: [
      'High radial crush resistance prevents deformation during mechanical clamping',
      'Precision dimensional tolerances for automated high-speed winding machinery',
      'Custom printing with client logo or batch coding inside or outside the core',
      'Eco-friendly and fully recyclable'
    ],
    applications: 'Flexible packaging film (BOPP/PET), textile fabric rolls, paper mills, adhesive tapes, industrial wire.'
  },
  {
    id: 'printed-tapes',
    title: 'Self-Adhesive Printed Tapes',
    subtitle: 'Branded Packaging Tapes & Anti-Tamper Security',
    image: '/assets/images/printed-tapes.jpg',
    secondaryImage: '/assets/images/un-certified-box.jpg',
    category: 'Packaging Accessories',
    badge: 'Custom Branding',
    description: 'High-performance BOPP and reinforced Kraft packaging tapes featuring custom multi-color corporate logo printing, ensuring brand visibility and tamper-evident carton sealing throughout your supply chain.',
    specs: [
      { label: 'Tape Widths', value: '24 mm, 36 mm, 48 mm, and 72 mm standard widths' },
      { label: 'Roll Lengths', value: '65 m, 100 m hand rolls up to 1000 m machine rolls' },
      { label: 'Adhesive Type', value: 'Pressure-sensitive water-based acrylic / Hot melt rubber' },
      { label: 'Print Capabilities', value: 'Up to 3-color rotogravure / flexo custom logo printing' },
      { label: 'Film Caliper', value: '40 to 65 microns high-tensile backing film' }
    ],
    features: [
      'High-shear tack ensures permanent bond to all kraft and recycled carton surfaces',
      'Acts as immediate visual anti-tamper security against pilferage',
      'Weather-resistant formulation withstands high humidity and temperature changes',
      'Enhances corporate brand presentation on every dispatched carton'
    ],
    applications: 'Carton box sealing, export shipping, e-commerce fulfillment, cold storage packaging, brand marketing.'
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(PRODUCTS_CATALOG[0].id);

  const categories = ['All', 'Corrugated Boxes', 'Honeycomb Packaging', 'Edge Protection', 'Paper Cores', 'Packaging Accessories'];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter(item => item.category === activeCategory);

  return (
    <section id="products" className="py-20 md:py-28 bg-white border-b border-slate-200 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Industrial Product Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Comprehensive <span className="text-emerald-700">Product Portfolio</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Engineered for strength, cost efficiency, and export compliance. Click on any product below for complete technical specifications and direct factory contact.
          </p>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Detailed Product List (Jayaraj Fortune inspired comprehensive display) */}
        <div className="space-y-12">
          {filteredProducts.map((product) => {
            const isExpanded = expandedId === product.id;

            return (
              <div
                key={product.id}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-300 transition-all shadow-sm hover:shadow-md"
              >
                {/* Product Header & Main Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                  
                  {/* Product Image Showcase (5 cols on lg) */}
                  <div className="lg:col-span-5 flex flex-col space-y-3">
                    <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-white border border-slate-200 group">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                        {product.badge}
                      </div>
                    </div>

                    {/* Secondary thumbnail if available */}
                    {product.secondaryImage && (
                      <div className="flex items-center gap-3">
                        <div className="h-16 w-24 rounded-lg overflow-hidden border border-slate-200 shrink-0 bg-white">
                          <img
                            src={product.secondaryImage}
                            alt="Alternative view"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-xs text-slate-500">
                          <span className="font-semibold text-slate-700">Custom Dimensions:</span> Manufactured to exact client drawings & blueprints.
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Product Details & Engineering Specs (7 cols on lg) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Category tag */}
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                        {product.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-1">
                        {product.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                        {product.subtitle}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Quick Highlight Points */}
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Specification Table */}
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-emerald-600" />
                          Technical Specifications & Parameters
                        </h4>
                      </div>

                      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
                        {product.specs.map((s, sIdx) => (
                          <div key={sIdx} className="grid grid-cols-12 px-3.5 py-2 hover:bg-slate-50">
                            <span className="col-span-4 font-bold text-slate-600">{s.label}:</span>
                            <span className="col-span-8 font-medium text-slate-800">{s.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Applications Note */}
                      <div className="mt-3 text-xs text-slate-600">
                        <strong className="text-slate-800">Ideal Applications:</strong> {product.applications}
                      </div>
                    </div>

                    {/* Direct Contact Bar (Phone, WhatsApp, Email - No Database!) */}
                    <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                      <a
                        href="tel:+919833182733"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-sm transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call for Specs: (+91) 983 318 2733</span>
                      </a>

                      <a
                        href={`https://wa.me/919833182733?text=Hello%20ESTI%20Packaging,%20I%20am%20inquiring%20about%20your%20${encodeURIComponent(product.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white hover:bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-300 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp Inquire</span>
                      </a>

                      <a
                        href={`mailto:sunil@estipackaging.com?subject=Inquiry%20regarding%20${encodeURIComponent(product.title)}&body=Hello%20ESTI%20Packaging,%0A%0AI%20would%20like%20to%20receive%20pricing%20and%20specifications%20for:%0AProduct:%20${encodeURIComponent(product.title)}%0A%0AMy%20requirements:%0A- Quantity:%0A- Target Dimensions:%0A- Delivery Location:%0A%0AThank%20you.`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-slate-500" />
                        <span>Email Direct Inquiry</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Technical Consultation Callout Box */}
        <div className="mt-14 p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Custom Engineering Desk</span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              Need a Custom Size, Flute Combination or UN Hazmat Spec?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              We engineer custom corrugated flutes, honeycomb dunnage, and edge protectors to your CAD blueprints. Speak directly with our senior packaging engineer.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:+919833182733"
              className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>(+91) 983 318 2733</span>
            </a>
            <a
              href="mailto:sunil@estipackaging.com?subject=Custom%20Packaging%20Specification%20Request"
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm border border-slate-700 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>sunil@estipackaging.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
