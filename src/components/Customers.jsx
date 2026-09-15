import React from 'react';
import { Award, Users, CheckCircle } from 'lucide-react';

const CLIENTS = [
  { name: 'Garrett', sector: 'Automotive & Turbochargers' },
  { name: 'Tyman International', sector: 'Building & Fenestration' },
  { name: 'Idemitsu', sector: 'Petrochemicals & Lubricants' },
  { name: 'Godrej', sector: 'FMCG & Consumer Goods' },
  { name: 'PepsiCo', sector: 'Food & Beverage' },
  { name: 'Maersk', sector: 'Global Shipping & Logistics' },
  { name: 'Cipla', sector: 'Pharmaceuticals' },
  { name: 'Mansons', sector: 'Auto Components' },
  { name: 'Honeywell', sector: 'Industrial Aerospace & Controls' },
  { name: 'Britannia', sector: 'Packaged Foods' },
  { name: 'Racold', sector: 'Water Heating & Appliances' },
  { name: 'SchlegelGiesse', sector: 'Engineered Hardware' },
  { name: 'Rubaloy', sector: 'NBR-PVC Polymers' },
  { name: 'Bharat Forge', sector: 'Forging & Heavy Engineering' },
  { name: 'Kalyani Group', sector: 'Specialty Engineering' },
  { name: 'Piramal', sector: 'Healthcare & Pharma' },
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
              <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-xs mb-2.5 group-hover:scale-110 transition-transform">
                {client.name.charAt(0)}
              </div>
              <h4 className="text-base font-black text-slate-800 font-display group-hover:text-emerald-700 transition-colors">
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
