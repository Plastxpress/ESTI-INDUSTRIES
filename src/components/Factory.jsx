import React, { useState } from 'react';
import BoardSpec from './BoardSpec';
import DieLine from './DieLine';
import { 
  Factory as FactoryIcon, 
  Settings, 
  CheckCircle, 
  Globe2, 
  Leaf, 
  ShieldCheck, 
  Clock, 
  TrendingDown, 
  HeartHandshake,
  Award,
  Layers,
  FlaskConical,
  Maximize2,
  X,
  VolumeX
} from 'lucide-react';

export default function Factory() {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const machineryHighlights = [
    {
      title: 'Imported 5-Ply Board Plant (2200 mm)',
      description: 'Fully automatic high-speed corrugating line producing 3-ply, 5-ply, and 7-ply heavy boards in A, B, C, and E flutes with steam-controlled moisture retention.'
    },
    {
      title: '1800 x 3500 mm Printer Slotter',
      description: 'Fully automatic 2-color printer slotter—one of the largest in the market—delivering precision scoring, slotting, and crisp flexo printing.'
    },
    {
      title: 'Automated Stitchers & Gluers',
      description: 'Equipped with automatic single and two-piece heavy-duty stitchers and automated gluing lines for rapid case assembly.'
    },
    {
      title: 'Quality Testing Laboratory',
      description: 'Fully equipped in-house testing lab monitoring Bursting Strength (BF), Edge Crush Test (ECT), Ring Crush Test (RCT), and Cobb moisture absorption.'
    }
  ];

  const coreValues = [
    {
      icon: Clock,
      title: 'On Time Delivery',
      desc: 'Disciplined production scheduling with dedicated buffer inventory for scheduled B2B dispatches.'
    },
    {
      icon: ShieldCheck,
      title: 'Consistent Superior Quality',
      desc: 'Rigorous batch-by-batch QA lab verification ensures every box complies with certified compression targets.'
    },
    {
      icon: HeartHandshake,
      title: 'Invest in Relations',
      desc: 'More than a vendor—we work as long-term strategic partners focused on mutual growth.'
    },
    {
      icon: Leaf,
      title: 'Sustainability & "Go Green"',
      desc: 'Prioritizing 100% recyclable, biodegradable kraft paper to reduce environmental waste.'
    }
  ];

  return (
    <section id="factory" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <FactoryIcon className="w-3.5 h-3.5 text-emerald-700" />
            <span>Manufacturing Infrastructure & Core Values</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading">
            About Our <span className="font-normal text-emerald-700">Factories & Capabilities</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            We offer end-to-end packaging solutions (along with packaging design and contract packaging) for all industries, backed by 30+ years of manufacturing pedigree.
          </p>
        </div>

        {/* 2-Column: Plant Specs & Factory Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Left: Factory Details from Page 6 (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-black text-slate-900 font-display">
              Advanced Automated Machinery & In-House Testing
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our manufacturing facility is equipped with a fully automatic, imported 5-ply board plant (2200 mm) capable of producing 3-ply, 5-ply, and 7-ply corrugated boards in A, B, C, and E flutes, with a total production capacity of <strong>1,200 tons per month</strong>, including a spare capacity of approximately <strong>500 tons</strong> ready for immediate client onboarding.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {machineryHighlights.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-medium flex items-center gap-3">
              <FlaskConical className="w-5 h-5 text-emerald-700 shrink-0" />
              <span>Our in-house design team specializes in innovative packaging concepts and value engineering to ensure optimal performance and cost-efficiency.</span>
            </div>
          </div>

          {/* Right: Manufacturing Video Player & Process Photos (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Live Autoplaying Manufacturing Video */}
            <div 
              className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-lg group cursor-pointer"
              onClick={() => setIsFullscreenOpen(true)}
              title="Click to watch manufacturing video in full screen"
            >
              <video
                src="/assets/videos/factory-manufacturing.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-56 sm:h-64 object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Gradient Scrim for crisp text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/40 pointer-events-none" />

              {/* Top Bar: Live Factory Badge & Muted Indicator */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[11px] font-bold shadow-sm backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span>Factory Floor in Action</span>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 text-[10px] font-medium backdrop-blur-sm">
                  <VolumeX className="w-3 h-3 text-slate-400" />
                  <span>No Sound</span>
                </div>
              </div>

              {/* Bottom Bar: Action Description & Fullscreen Expand Trigger */}
              <div className="absolute bottom-0 inset-x-0 p-3.5 flex items-center justify-between text-white pointer-events-none">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold tracking-tight text-white">
                    Automated Corrugator & Box Line
                  </h4>
                  <p className="text-[11px] text-emerald-300 font-medium mt-0.5">
                    Click to watch full screen
                  </p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFullscreenOpen(true);
                  }}
                  className="pointer-events-auto p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-all group-hover:scale-110 shadow-md"
                  aria-label="Watch fullscreen"
                  title="Expand to Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                <img
                  src="/assets/images/double-wall-board.jpg"
                  alt="Double Wall Corrugated Board Broad Flute"
                  className="w-full h-24 object-cover"
                  loading="lazy"
                />
                <div className="p-1.5 bg-white text-center text-[10px] font-bold text-slate-700">
                  5-Ply Double Wall Flute
                </div>
              </div>

              <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                <img
                  src="/assets/images/corrugated-flute-stack.jpg"
                  alt="High Compression Corrugated Board Stack"
                  className="w-full h-24 object-cover"
                  loading="lazy"
                />
                <div className="p-1.5 bg-white text-center text-[10px] font-bold text-slate-700">
                  Precision Flute Sheets
                </div>
              </div>

              <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                <img
                  src="/assets/images/factory-warehouse-panoramic.jpg"
                  alt="High Capacity Converting & Storage Floor"
                  className="w-full h-24 object-cover"
                  loading="lazy"
                />
                <div className="p-1.5 bg-white text-center text-[10px] font-bold text-slate-700">
                  1,200 MT Converting Plant
                </div>
              </div>

              <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm">
                <img
                  src="/assets/images/warehouse-pallet-stack.jpg"
                  alt="Finished Palletized Heavy Cargo Staging Floor"
                  className="w-full h-24 object-cover"
                  loading="lazy"
                />
                <div className="p-1.5 bg-white text-center text-[10px] font-bold text-slate-700">
                  Heavy Pallet Staging Floor
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Technical Specs: Board Build-up & Die-Line Engineering */}
        <div className="border-t border-slate-200 mt-16 pt-8 mb-20">
          <BoardSpec />
          <div className="mx-auto max-w-6xl px-6">
            <DieLine />
          </div>
        </div>

        {/* Export Capability & Value Proposition Box (from Page 10 of PDF) */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 mb-20 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Export Capability & Free Trade Agreement (FTA) Advantage</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                Up to 40% Reduction in Packaging Cost from India
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                In today’s competitive market, optimizing procurement is key to increasing profit margins. ESTI Packaging offers cost-effective corrugated boxes directly from India—a global hub for high-quality packaging.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Lower labor & competitive raw material costs</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>FTA agreements with global trade partners</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Skilled, experienced 30-year workforce</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rapidly improving port & logistics corridors</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-emerald-50/70 rounded-2xl overflow-hidden border border-emerald-200 shadow-sm flex flex-col justify-between">
              <div className="p-6 text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-black text-emerald-700 font-display">
                  Up to -40%
                </div>
                <p className="text-xs font-bold text-slate-900">
                  Potential Total Landed Cost Savings
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Access export-grade, heavy-duty cartons directly from India with Free Trade Agreement tariff benefits.
                </p>
              </div>
              <div className="w-full overflow-hidden bg-slate-950 relative aspect-[16/10] sm:aspect-video flex items-center justify-center">
                <video
                  src="/assets/videos/export-capability.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 right-2.5 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow pointer-events-none z-10">
                  ISPM-15 / Sea Export
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Values (from Page 6 & 9) */}
        <div id="why-esti">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
              Our Core Values & Customer Commitment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              More than your packaging supplier — we work as your dedicated strategic partners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      {val.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Fullscreen Video Modal */}
      {isFullscreenOpen && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-fadeIn font-sans"
          onClick={() => setIsFullscreenOpen(false)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="w-full flex items-center justify-between text-white pb-3 px-1">
              <div className="flex items-center gap-2">
                <FactoryIcon className="w-4 h-4 text-emerald-400" />
                <span className="text-xs sm:text-sm md:text-base font-bold">
                  ESTI Packaging — Manufacturing Line Operations
                </span>
                <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Without Sound
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsFullscreenOpen(false)}
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all focus:outline-none"
                aria-label="Close fullscreen video"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* High-Resolution Video Player Stage */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-slate-800 flex items-center justify-center">
              <video
                src="/assets/videos/factory-manufacturing.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full max-h-[76vh] object-contain mx-auto"
              />
            </div>

            <p className="text-xs text-slate-400 mt-2.5 text-center">
              Live manufacturing footage: High-speed corrugating line converting multi-ply kraft paperboard into heavy-duty boxes.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
