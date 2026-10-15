import React from 'react';
import { Award, Users, CheckCircle } from 'lucide-react';

const CLIENTS = [
  { name: 'Garrett', sector: 'Automotive & Turbochargers', logo: '/assets/images/logos/garrett.png' },
  { name: 'Tyman International', sector: 'Building & Fenestration', logo: '/assets/images/logos/tyman.png' },
  { name: 'Idemitsu', sector: 'Petrochemicals & Lubricants', logo: '/assets/images/logos/idemitsu.png' },
  { name: 'Godrej', sector: 'FMCG & Consumer Goods', logo: '/assets/images/logos/godrej.png' },
  { name: 'PepsiCo', sector: 'Food & Beverage', logo: '/assets/images/logos/pepsico.png' },
  { name: 'Maersk', sector: 'Global Shipping & Logistics', logo: '/assets/images/logos/maersk.png' },
  { name: 'Cipla', sector: 'Pharmaceuticals', logo: '/assets/images/logos/cipla.png' },
  { name: 'Mansons', sector: 'Auto Components', logo: '/assets/images/logos/mansons.png' },
  { name: 'Honeywell', sector: 'Industrial Aerospace & Controls', logo: '/assets/images/logos/honeywell.png' },
  { name: 'Britannia', sector: 'Packaged Foods', logo: '/assets/images/logos/britannia.png' },
  { name: 'Racold', sector: 'Water Heating & Appliances', logo: '/assets/images/logos/racold.png' },
  { name: 'SchlegelGiesse', sector: 'Engineered Hardware', logo: '/assets/images/logos/schlegelgiesse.png' },
  { name: 'Rubaloy', sector: 'NBR-PVC Polymers', logo: '/assets/images/logos/rubaloy.png' },
  { name: 'Bharat Forge', sector: 'Forging & Heavy Engineering', logo: '/assets/images/logos/bharat-forge.png' },
  { name: 'Kalyani Group', sector: 'Specialty Engineering', logo: '/assets/images/logos/kalyani.png' },
  { name: 'Piramal', sector: 'Healthcare & Pharma', logo: '/assets/images/logos/piramal.png' },
];

export default function Customers() {
  return (
    <section id="customers" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-emerald-700" />
            <span>Trusted Enterprise Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            Our Esteemed <span className="text-emerald-700">Customers</span>
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Trusted by multinational corporations, automotive giants, pharmaceutical leaders, and consumer goods conglomerates.
          </p>
        </div>

        {/* Customer Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
          {CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-emerald-300 hover:shadow-md transition-all duration-200 flex flex-col justify-center items-center text-center group"
            >
              <div className="h-12 w-full flex items-center justify-center mb-3">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-10 max-w-[120px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-xs group-hover:scale-110 transition-transform">
                    {client.name.charAt(0)}
                  </div>
                )}
              </div>
              <h4 className="text-sm sm:text-base font-black text-slate-800 font-display group-hover:text-emerald-700 transition-colors">
                {client.name}
              </h4>
              <span className="text-[11px] font-medium text-slate-600 mt-1">
                {client.sector}
              </span>
            </div>
          ))}
        </div>

        {/* Trust summary tag */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            Vendor Audit Verified
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            30+ Years Continuous Supply
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            JIT Enterprise Warehousing
          </span>
        </div>

      </div>
    </section>
  );
}
