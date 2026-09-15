import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const CLIENT_LOGOS = [
  { name: 'Garrett', src: '/assets/images/logos/garrett.png', alt: 'Garrett Advancing Motion' },
  { name: 'Tyman International', src: '/assets/images/logos/tyman.png', alt: 'Tyman International' },
  { name: 'Idemitsu', src: '/assets/images/logos/idemitsu.png', alt: 'Idemitsu' },
  { name: 'Godrej', src: '/assets/images/logos/godrej.png', alt: 'Godrej' },
  { name: 'PepsiCo', src: '/assets/images/logos/pepsico.png', alt: 'PepsiCo' },
  { name: 'Maersk', src: '/assets/images/logos/maersk.png', alt: 'Maersk Shipping' },
  { name: 'Cipla', src: '/assets/images/logos/cipla.png', alt: 'Cipla Pharmaceuticals' },
  { name: 'Mansons', src: '/assets/images/logos/mansons.png', alt: 'Mansons Driving Change' },
  { name: 'Honeywell', src: '/assets/images/logos/honeywell.png', alt: 'Honeywell' },
  { name: 'Britannia', src: '/assets/images/logos/britannia.png', alt: 'Britannia Eat Healthy Think Better' },
  { name: 'Racold', src: '/assets/images/logos/racold.png', alt: 'Racold' },
  { name: 'SchlegelGiesse', src: '/assets/images/logos/schlegelgiesse.png', alt: 'SchlegelGiesse' },
  { name: 'Rubaloy', src: '/assets/images/logos/rubaloy.png', alt: 'Rubaloy NBR-PVC' },
  { name: 'Bharat Forge', src: '/assets/images/logos/bharat-forge.png', alt: 'Bharat Forge' },
  { name: 'Kalyani Group', src: '/assets/images/logos/kalyani.png', alt: 'Kalyani Group Company' },
  { name: 'Piramal', src: '/assets/images/logos/piramal.png', alt: 'Piramal Healthcare' },
];

export default function ClientTicker() {
  // Duplicate list to achieve continuous seamless loop
  const tickerList = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="relative py-7 bg-white border-b border-slate-200 overflow-hidden shadow-sm">
      
      {/* Ticker Subtitle Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Trusted Packaging Partner to Global & National Industry Leaders
            </p>
          </div>
          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
            Automotive • Pharma • FMCG • Heavy Engineering • Marine Logistics
          </span>
        </div>
      </div>

      {/* Ticker Container with Edge Gradients */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left Edge Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        
        {/* Right Edge Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

        {/* Continuous Moving Track */}
        <div className="animate-ticker flex items-center gap-8 sm:gap-12 py-2">
          {tickerList.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center justify-center h-12 sm:h-14 px-4 py-2 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-emerald-300 hover:bg-white transition-all duration-200 shrink-0 shadow-xs hover:shadow-sm group cursor-pointer"
              title={logo.alt}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-7 sm:h-9 w-auto max-w-[140px] object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
