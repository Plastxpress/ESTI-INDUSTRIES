import React, { useState } from 'react';
import { 
  Leaf, 
  Recycle, 
  ShieldCheck, 
  TreePine, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Scale, 
  Zap, 
  Globe2, 
  Layers, 
  Mail, 
  MessageSquare,
  BarChart3,
  Award,
  Droplets,
  AlertTriangle
} from 'lucide-react';

export default function PackagingWithPurpose() {
  const [activeTab, setActiveTab] = useState('timber');

  const impactMetrics = [
    {
      value: '100%',
      label: 'Recyclable & Biodegradable',
      desc: 'All virgin & recycled kraft grades break down naturally without microplastic residue.',
      icon: Recycle,
      highlight: 'text-emerald-600'
    },
    {
      value: 'Up to 50%',
      label: 'Tare Weight Reduction',
      desc: 'Replacing wooden skids and timber crates slashes overseas shipping fuel emissions.',
      icon: Scale,
      highlight: 'text-amber-600'
    },
    {
      value: 'Zero',
      label: 'Toxic Fumigation (ISPM-15 Exempt)',
      desc: '100% paper construction requires zero methyl bromide or chemical heat treatments.',
      icon: ShieldCheck,
      highlight: 'text-emerald-700'
    },
    {
      value: '1,200 Tons',
      label: 'Monthly Processing Capacity',
      desc: 'High-speed corrugation with 100% closed-loop recovery of edge trim and paper pulp.',
      icon: BarChart3,
      highlight: 'text-blue-600'
    }
  ];

  const purposePillars = [
    {
      id: 'timber',
      title: 'Forest Conservation & Timber Replacement',
      badge: 'Deforestation Defense',
      icon: TreePine,
      summary: 'Heavy-duty 7-ply AAA corrugated board delivers the stacking rigidity of timber crates while preserving mature forests.',
      stat: '50% Lighter Payload',
      statDesc: 'Massive reduction in air/sea freight cargo tare weight',
      points: [
        'Eliminates timber harvesting and lumber waste in global supply chains',
        'Certified ISPM-15 exempt: immediate international customs clearance without border quarantine',
        'Delivered knocked-down flat, cutting inbound transport fuel by up to 70%',
        'Surpasses 1,500 kg static load capacity through high-ECT flute architecture'
      ],
      image: '/assets/images/ssdn-heavy-duty-pallet.jpg'
    },
    {
      id: 'plastics',
      title: 'Eliminating Single-Use Packaging Plastics',
      badge: 'Zero Microplastics',
      icon: Leaf,
      summary: 'Engineered honeycomb cushioning and cellular paper partitions replace expanded polystyrene (thermocol) and bubble wrap.',
      stat: '100% Repulpable',
      statDesc: 'Biodegrades naturally in soil and water within months',
      points: [
        'Hexagonal honeycomb pads absorb high impact shock without synthetic foam beads',
        'Interlocking slotted cell dividers eliminate polyurethane wraps and plastic void fill',
        'Non-toxic, water-based starch adhesives and heavy-metal-free flexographic inks',
        'Compliant with European Packaging and Packaging Waste Regulation (PPWR) directives'
      ],
      image: '/assets/images/honeycomb-packaging.jpg'
    },
    {
      id: 'efficiency',
      title: 'Right-Sized Logistics & Zero-Air Shipping',
      badge: 'Carbon Reduction',
      icon: Truck,
      summary: 'Custom CAD-engineered master containers eliminate shipping empty air, fitting up to 30% more cargo in standard sea containers.',
      stat: '+30% Cube Utilization',
      statDesc: 'More payload per truckload, fewer vehicles on the road',
      points: [
        'Precision sub-millimeter die-cutting prevents product shifting and freight attrition',
        'Engineered column fluting maximizes vertical container stacking height safely',
        'Direct reduction in scope-3 supply chain greenhouse gas emissions',
        'Ergonomic handling cutouts minimize warehouse operator lifting fatigue'
      ],
      image: '/assets/images/corrugated-box-stacked.jpg'
    },
    {
      id: 'circularity',
      title: 'Closed-Loop Manufacturing & Zero-Waste Plant',
      badge: '100% Circularity',
      icon: Recycle,
      summary: 'Our 2,200 mm corrugating plant operates on a closed-loop recycling discipline where every paper scrap is recycled.',
      stat: 'Zero Landfill Trim',
      statDesc: '100% scrap collection and factory repulping',
      points: [
        'Computerized slitting guarantees minimum board waste per order run',
        'All manufacturing off-cuts are compressed into dense bales and returned to paper mills',
        'Low-temperature corrugating systems designed for optimal thermal energy recovery',
        'Long-term client partnerships establishing circular packaging take-back programs'
      ],
      image: '/assets/images/controlled-moisture-corrugator.jpg'
    }
  ];

  const currentPillar = purposePillars.find(p => p.id === activeTab) || purposePillars[0];

  return (
    <section id="purpose" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative font-sans overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Leaf className="w-4 h-4 text-emerald-700" />
            <span>Sustainability & Engineering Integrity</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Packaging with <span className="font-normal text-emerald-700">Purpose</span>
          </h2>
          
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            At <strong>ESTI Packaging</strong>, our purpose extends beyond manufacturing boxes. We design industrial packaging systems that actively conserve natural resources, eliminate hazardous chemical fumigation, slash freight fuel emissions, and guarantee zero product damage across global supply routes.
          </p>
        </div>

        {/* 4 Core Impact Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, idx) => {
            const IconComponent = metric.icon;
            return (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors">
                  <IconComponent className={`w-6 h-6 ${metric.highlight}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {metric.label}
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Purpose Pillars Showcase */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm mb-16">
          
          {/* Pillar Tabs */}
          <div className="flex flex-wrap gap-2.5 pb-6 border-b border-slate-200 mb-8">
            {purposePillars.map((pillar) => {
              const TabIcon = pillar.icon;
              const isActive = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActiveTab(pillar.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-150 focus:outline-none ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isActive ? 'text-emerald-200' : 'text-slate-500'}`} />
                  <span>{pillar.title.split('&')[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Content Side (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{currentPillar.badge}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {currentPillar.title}
                </h3>
                
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {currentPillar.summary}
                </p>
              </div>

              {/* Stat Highlight Banner */}
              <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-800 tracking-tight">
                    {currentPillar.stat}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-emerald-950 mt-0.5">
                    {currentPillar.statDesc}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-emerald-700" />
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                  Actionable Environmental & Supply Chain Benefits:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentPillar.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Visual Side (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 h-80 sm:h-96 flex items-center justify-center p-4 group">
                <img
                  src={currentPillar.image}
                  alt={currentPillar.title}
                  className="max-h-full max-w-full object-contain rounded-lg drop-shadow transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-sm text-white p-3 rounded-xl border border-slate-800 pointer-events-none">
                  <div className="text-xs font-bold flex items-center gap-1.5 text-emerald-300">
                    <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Real-World Application</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5 truncate">
                    ESTI {currentPillar.title}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Purpose Call-To-Action Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
          
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sustainable Transition Partnership</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
              Ready to Replace Timber & Single-Use Plastics in Your Supply Chain?
            </h3>
            
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Our packaging design engineers will evaluate your current payload weight, transit stresses, and international container utilization to deliver a custom, 100% recyclable corrugated solution that cuts freight cost and environmental impact.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=esteepack@gmail.com&su=${encodeURIComponent('Packaging with Purpose Audit Inquiry - ESTI Packaging')}&body=${encodeURIComponent(`Hello ESTI Packaging Team,\n\nWe are looking to transition our packaging to sustainable, high-strength corrugated solutions. Please connect with us for a packaging audit.\n\nCompany Name: \nProduct Type: \nCurrent Packaging (Timber/Plastic/Carton): \nEstimated Monthly Volume: \n\nThank you.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] focus:outline-none"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Request Packaging Purpose Audit (esteepack@gmail.com)</span>
              </a>

              <a
                href="https://wa.me/919833182733?text=Hello%20ESTI%20Packaging,%20we%20are%20interested%20in%20your%20Packaging%20with%20Purpose%20solutions%20and%20timber%20crate%20replacements."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/20 backdrop-blur-sm transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Consultant</span>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Zero obligation CAD prototype
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Comprehensive ISTA / BCT laboratory testing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Direct factory pricing (ESTI Khopoli facility)
              </span>
            </div>
          </div>

        </div>

        {/* Climate Defense & Quality Preservation Sub-Section */}
        <div className="mt-16 pt-16 border-t border-slate-200">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Climate Defense & Quality Preservation</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight font-heading">
              Calibrated Moisture Control & <span className="font-normal text-emerald-700">Mold-Free Assurance</span>
            </h3>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Industrial corrugated packaging engineered to preserve structural integrity, eliminate humidity sagging, and guarantee 100% mold-free export protection.
            </p>
          </div>

          {/* 2-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Block 1: 9% Precision Moisture Control */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
                    <Droplets className="w-3.5 h-3.5 text-sky-600" />
                    <span>Optimal 9% RH</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Precision Controlled
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                  9% Moisture-Controlled Packaging
                </h4>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Manufactured under calibrated drying conditions to hold a steady 9% moisture content. Eliminates box sagging, softening, and warping, ensuring peak stacking strength throughout storage and humid transit.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Eliminates Box Sagging & Warping</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Peak Stacking Strength Retention</span>
                  </div>
                </div>
              </div>

              {/* [INSERT_MY_MOISTURE_IMAGE_HERE] */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 aspect-[16/10] sm:aspect-video w-full group">
                <img
                  src="/assets/images/moisture-controlled-corrugator.jpg"
                  alt="[INSERT_MY_MOISTURE_IMAGE_HERE] - 9% Moisture-Controlled Packaging"
                  data-placeholder="[INSERT_MY_MOISTURE_IMAGE_HERE]"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md text-sky-300 text-xs font-bold px-3 py-1 rounded-full border border-sky-400/30 flex items-center gap-1.5 shadow-sm">
                  <Droplets className="w-3.5 h-3.5 text-sky-400" />
                  <span>Optimal 9% RH</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md text-white px-3.5 py-2 rounded-xl border border-slate-700/80 pointer-events-none">
                  <span className="text-[11px] font-medium text-slate-300">Calibrated corrugator heating bed maintaining 9% moisture content</span>
                </div>
              </div>
            </div>

            {/* Block 2: 100% Mold-Free Guarantee (Zero White Spots) */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Anti-Fungal Treated</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Export Certified
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-3">
                  Zero White Spots & Mold-Free Assurance
                </h4>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Cured with anti-fungal treatment to permanently prevent fungal spores and the white spot patches common in damp storage. Clean, hygienic, and compliant for export and sensitive inventory.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Permanent Spore Growth Inhibition</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Export & Cleanroom Compliant</span>
                  </div>
                </div>
              </div>

              {/* Visual Comparison: White Mold Damage vs ESTI Mold-Free Guarantee */}
              <div className="space-y-2 pt-2">
                <div className="grid grid-cols-2 gap-3 text-[11px] font-bold">
                  <span className="text-rose-700 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                    <span>Untreated: Mold Damage</span>
                  </span>
                  <span className="text-emerald-700 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>ESTI: 100% Mold-Free</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                  {/* Untreated Carton with White Mold Spots */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-rose-200/80 aspect-[4/3] sm:aspect-square group">
                    <img
                      src="/assets/images/white-mold-box-damage.jpg"
                      alt="Untreated corrugated box with white mold spots and fungal mildew damage"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-rose-950/90 backdrop-blur-md text-rose-300 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border border-rose-500/40 flex items-center gap-1 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      <span>White Mold Spots</span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-slate-950/90 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-lg border border-slate-800 pointer-events-none">
                      Fungal spores from damp warehouse storage
                    </div>
                  </div>

                  {/* ESTI Mold-Free Carton */}
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-emerald-300/80 aspect-[4/3] sm:aspect-square group">
                    <img
                      src="/assets/images/mold-free-boxes.jpg"
                      alt="ESTI anti-fungal treated corrugated box completely free of mold and white spots"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-emerald-950/90 backdrop-blur-md text-emerald-300 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Anti-Fungal Cured</span>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 bg-slate-950/90 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-lg border border-slate-800 pointer-events-none">
                      Spotless, cleanroom & export compliant
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
