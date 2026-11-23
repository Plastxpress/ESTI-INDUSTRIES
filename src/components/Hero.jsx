import React from 'react';
import { ShieldCheck, Phone, ArrowDown, Check, MessageSquare } from 'lucide-react';

const FEATURES = ['3, 5 & 7-Ply Boards', 'UN 1266 Certified', '1,200 MT/Mo Capacity', 'Up to 40% Cost Savings'];
const METRICS = [
  { value: '30+ Years', label: 'Experience (Since 1995)' },
  { value: '1,200 MT', label: 'Monthly Board Capacity' },
  { value: 'Up to 40%', label: 'Cost Savings from India' },
  { value: '3, 5 & 7-Ply', label: 'A, B, C & E Flutes' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-ink text-white min-h-[100svh] flex flex-col justify-end pt-36 sm:pt-40">
      {/* Background factory video — same file and playback as before */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <video autoPlay loop muted playsInline preload="auto" poster="/assets/videos/posters/hero-factory-bg.webp" className="w-full h-full object-cover object-center">
          <source src="/assets/videos/hero-factory-bg.webm" type={`video/webm; codecs="av01.0.05M.08"`} />
          <source src="/assets/videos/hero-factory-bg.mp4" type="video/mp4" />
        </video>
        {/* Ink overlays in the site palette (keeps text readable over the video) */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />
        <div className="absolute -left-40 bottom-0 w-[36rem] h-[36rem] rounded-full bg-kraft-500/15 blur-3xl" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="max-w-5xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-kraft-400/40 bg-ink/50 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-semibold text-kraft-200">
            <ShieldCheck className="w-4 h-4 text-kraft-400" />
            Over 30 Years of Box Manufacturing (Since 1995)
          </p>

          <h1 className="mt-6 font-grotesk text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.035em]">
            Engineered Corrugated &amp; <br />
            <span className="text-kraft-300">Sustainable Packaging</span>
          </h1>

          <h2 className="mt-6 max-w-3xl font-sans text-[15px] sm:text-xl font-semibold text-white/90 leading-snug">
            Multiple flute Combinations for 3 Ply, 5 Ply &amp; 7 Ply Corrugated Boxes, Wall Thickness ranging from 3mm up to 15 mm.
          </h2>

          <p className="mt-4 max-w-2xl text-sm sm:text-lg text-white/70 leading-relaxed">
            Your trusted partner in custom corrugated packaging solutions. With over three decades of industry experience, <strong className="text-white font-semibold">ESTI Packaging Industry</strong> is a pioneer in manufacturing Jumbo Boxes, Pallet Boxes, and UN Certified Boxes tailored for domestic and export operations.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {FEATURES.map((f) => (
              <li key={f} className="inline-flex items-center gap-2 text-sm font-semibold text-white/85">
                <span className="w-5 h-5 rounded-full bg-kraft-500 flex items-center justify-center">
                  <Check className="w-3 h-3 text-ink" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
            <a href="#products" className="group inline-flex items-center justify-center gap-2 min-h-14 px-7 rounded-full bg-kraft-500 hover:bg-kraft-400 text-ink font-bold transition-colors">
              View Product Portfolio
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a href="tel:+919833182733" className="inline-flex items-center justify-center gap-2 min-h-14 px-7 rounded-full border border-white/25 bg-white/5 backdrop-blur hover:bg-white/15 font-bold transition-colors">
              <Phone className="w-4 h-4 text-kraft-300" />
              Call: (+91) 983 318 2733
            </a>
            <a
              href="https://wa.me/919833182733?text=Hello%20ESTI%20Packaging,%20I%20am%20interested%20in%20your%20corrugated%20and%20packaging%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-14 px-7 rounded-full bg-wa hover:bg-wa-dark font-bold transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Click to Inquire
            </a>
          </div>
        </div>

        {/* Metric strip */}
        <dl className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 rounded-3xl border border-white/10 bg-ink/55 backdrop-blur-md overflow-hidden">
          {METRICS.map((m, i) => (
            <div
              key={m.label}
              className={`flex flex-col-reverse gap-1 px-5 py-5 sm:px-7 sm:py-6 ${i % 2 ? 'border-l border-white/10' : ''} ${i > 1 ? 'border-t lg:border-t-0 border-white/10' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
            >
              <dt className="text-xs sm:text-sm text-white/60 font-medium">{m.label}</dt>
              <dd className={`font-grotesk text-2xl sm:text-4xl font-extrabold tracking-tight ${i % 2 ? 'text-white' : 'text-kraft-300'}`}>{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
