import React from 'react';
import { ShieldCheck, Phone, ArrowDown, CheckCircle2, MessageSquare, Award, Leaf, Zap, Factory } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-20 bg-slate-950 overflow-hidden border-b border-slate-800">
      
      {/* High-definition Factory Background Video playing in continuous loop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center scale-105"
        >
          <source src="/assets/videos/hero-factory-bg.mp4" type="video/mp4" />
        </video>

        {/* Industrial Dark Glass Overlay: preserves original video clarity while ensuring 100% text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/80"></div>
        <div className="absolute inset-0 bg-slate-950/30"></div>
        <div className="absolute inset-0 bg-dot-pattern opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Hero Content */}
        <div className="max-w-4xl flex flex-col items-start text-left space-y-6">
          
          {/* Top Badge (Since 1995) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Over 30 Years of Box Manufacturing (Since 1995)</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] font-display text-left">
            Engineered Corrugated & <br />
            <span className="text-emerald-400">
              Sustainable Packaging
            </span>
          </h1>

          {/* Body Copy from PDF */}
          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl text-left">
            Your trusted partner in custom corrugated packaging solutions. With over three decades of industry experience, <strong className="text-white font-semibold">ESTI Packaging Industry</strong> is a pioneer in manufacturing Jumbo Boxes, Pallet Boxes, and UN Certified Boxes, along with Honeycomb sheets, Edge Boards, Paper Cores & Printed Tapes tailored for domestic and export operations.
          </p>

          {/* 4 Feature Bullet Points Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full pt-1">
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800 text-xs sm:text-sm text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>3, 5 & 7-Ply Boards</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800 text-xs sm:text-sm text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>UN 1266 Certified</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800 text-xs sm:text-sm text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>1,200 MT/Mo Capacity</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/60 backdrop-blur-md border border-slate-800 text-xs sm:text-sm text-slate-200 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Up to 40% Cost Savings</span>
            </div>
          </div>

          {/* Direct Contact CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-start gap-3.5">
            <button
              type="button"
              onClick={() => scrollTo('products')}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-emerald-600/30 transition-all active:scale-95"
            >
              <span>View Product Portfolio</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="tel:+919833182733"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-slate-700 shadow-md transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call: (+91) 983 318 2733</span>
            </a>

            <a
              href="https://wa.me/919833182733?text=Hello%20ESTI%20Packaging,%20I%20am%20interested%20in%20your%20corrugated%20and%20packaging%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-bold text-sm sm:text-base shadow-md transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Minimalist 4-Metric Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/70 backdrop-blur-md border border-slate-800 shadow-md">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-display">30+ Years</div>
            <div className="text-xs text-slate-400 font-semibold mt-0.5">Experience (Since 1995)</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/70 backdrop-blur-md border border-slate-800 shadow-md">
            <div className="text-2xl sm:text-3xl font-black text-white font-display">1,200 MT</div>
            <div className="text-xs text-slate-400 font-semibold mt-0.5">Monthly Board Capacity</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/70 backdrop-blur-md border border-slate-800 shadow-md">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-display">Up to 40%</div>
            <div className="text-xs text-slate-400 font-semibold mt-0.5">Cost Savings from India</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/70 backdrop-blur-md border border-slate-800 shadow-md">
            <div className="text-2xl sm:text-3xl font-black text-white font-display">3, 5 & 7-Ply</div>
            <div className="text-xs text-slate-400 font-semibold mt-0.5">A, B, C & E Flutes</div>
          </div>
        </div>

      </div>
    </section>
  );
}
