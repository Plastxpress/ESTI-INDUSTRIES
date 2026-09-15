import React from 'react';
import { 
  SlidersHorizontal, 
  Truck, 
  Gauge, 
  CheckCircle, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  ThermometerSnowflake,
  Factory
} from 'lucide-react';

export default function ValueProp({ onOpenQuote }) {
  const pillars = [
    {
      icon: SlidersHorizontal,
      title: 'Customized Board Strength',
      subtitle: 'GSM & Flute Profile Optimization',
      description:
        'We engineer exact grammage (GSM) combinations from 120 to 350+ GSM kraft paper and match precise flute geometry (A, B, C, E, BC, AAA) to achieve maximum stacking strength without paying for excess paper weight.',
      points: [
        'Single Wall (3-Ply), Double Wall (5-Ply), Triple Wall (7-Ply)',
        'Edge Crush Test (ECT) ratings from 32 to 110+ lbs/inch',
        'Burst Factor (BF) customized from 18 to 35+ BF'
      ]
    },
    {
      icon: Truck,
      title: 'Freight & Space Efficiency',
      subtitle: 'Maximized Palletization & Lower Shipping Costs',
      description:
        'Our packaging engineers run CAD cube-utilization simulations to ensure your boxes fit standard Euro and ISO shipping pallets with 0% overhang and 98%+ volumetric container fill.',
      points: [
        'Knocked-Down-Flat (KDF) precision scoring for compact storage',
        'Optimized tare weight reduces sea and air freight tariffs',
        'Eliminates need for heavy, costly timber crating'
      ]
    },
    {
      icon: Gauge,
      title: 'Quality Assurance & Speed',
      subtitle: 'Rapid B2B Turnaround & Zero-Defect Manufacturing',
      description:
        'Every production batch undergoes strict laboratory verification for bursting factor, Cobb moisture absorption, and compression resistance on modern computer-controlled corrugating lines.',
      points: [
        'In-house bursting strength & puncture testing lab',
        'Computerized steam-heated moisture control',
        'Just-In-Time (JIT) batch delivery for enterprise schedules'
      ]
    }
  ];

  const galleryItems = [
    {
      title: 'Moisture Controlled Corrugation',
      subtitle: 'Steam-heated corrugator line ensuring precise flute rigidity and flat board formation',
      image: '/assets/images/controlled-moisture-corrugator.jpg',
      tag: 'Manufacturing Tech'
    },
    {
      title: 'Double Wall Broad Flute Board',
      subtitle: 'Engineered heavy-duty corrugated board profile developed by ESTI Packaging',
      image: '/assets/images/double-wall-board.jpg',
      tag: 'Board Architecture'
    },
    {
      title: 'High-Volume Production Facility',
      subtitle: 'Over 1,000 MT monthly capacity with computerized converting machinery',
      image: '/assets/images/factory-warehouse-panoramic.jpg',
      tag: 'Scale & Capacity'
    },
    {
      title: 'UN Hazmat Certified Packaging',
      subtitle: 'Tested outer cartons for flammable liquids (UN 1266) & hazardous chemicals',
      image: '/assets/images/un-certified-box.jpg',
      tag: 'Compliance'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Value Statement Quote Box */}
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 sm:p-12 md:p-14 mb-20 overflow-hidden border border-slate-800 shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>The ESTI Packaging Advantage</span>
            </div>

            <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-slate-100 leading-relaxed font-sans italic">
              “Whether you require a regular corrugated carton, a high-strength industrial box, an export-ready package or a customized packaging solution, <span className="text-amber-400 font-bold not-italic">ESTI Packaging</span> focuses on delivering the right combination of board strength, construction and protection for your application.”
            </blockquote>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-300 font-semibold">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500" />
                Zero Transit Damage Focus
              </span>
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-500" />
                Optimized Board Formulations
              </span>
              <span className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-amber-500" />
                Scalable B2B Volume Output
              </span>
            </div>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-display">
            Engineered Packaging <span className="text-amber-600">Pillars</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Our 3-pillar engineering approach delivers maximum payload security while driving down total landed supply chain costs.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:shadow-xl hover:border-amber-500/40 transition-all duration-300 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wide mt-1">
                    {pillar.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Key Highlights
                  </p>
                  <ul className="space-y-2">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Factory & Production Technology Showcase */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600">State-of-the-Art Infrastructure</p>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mt-1">
                Precision Manufacturing Facilities
              </h3>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Take a look inside our corrugating, printing, and automated converting lines engineered for consistency and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-slate-200 flex flex-col"
              >
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 text-amber-400 text-[10px] font-bold border border-amber-500/30 shadow">
                    {item.tag}
                  </span>
                </div>

                <div className="p-4 bg-slate-900 text-white flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
