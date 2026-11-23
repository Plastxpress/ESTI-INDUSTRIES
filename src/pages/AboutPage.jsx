import React from 'react';
import { MapPin, ShieldCheck, Award } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Factory from '../components/Factory';
import PlantGallery from '../components/PlantGallery';
import { CERTIFICATIONS, ContactCta } from './HomePage';
import { UNITS, ADDRESS_TEXT } from '../data/site';

export default function AboutPage() {
  return (
    <div className="readable">
      <PageHeader crumbs={[{ name: 'Home', href: '/' }, { name: 'About' }]} title="About ESTI Packaging Industry">
        <p className="mt-4 text-base sm:text-lg text-slate-700 max-w-3xl leading-relaxed">
          Your trusted partner in custom corrugated packaging solutions with over 30 years of experience in box manufacturing (Since 1995).
        </p>
      </PageHeader>

      <section className="py-12 md:py-16 bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight font-grotesk">Since 1995</h2>
            <p className="text-base text-slate-700 leading-relaxed">
              With over three decades of industry experience, <strong className="text-ink">ESTI Packaging Industry</strong> is a pioneer in manufacturing Jumbo Boxes, Pallet Boxes, and UN Certified Boxes tailored for domestic and export operations.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-paper border border-line text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-kraft-700 font-display">30+ Years</div>
                <div className="text-sm text-slate-700 font-semibold mt-0.5">Experience (Since 1995)</div>
              </div>
              <div className="p-4 rounded-xl bg-paper border border-line text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-ink font-display">1,200 MT</div>
                <div className="text-sm text-slate-700 font-semibold mt-0.5">Monthly Board Capacity</div>
              </div>
            </div>

            <h2 className="pt-4 text-2xl sm:text-3xl font-extrabold text-ink tracking-tight font-grotesk">Certifications</h2>
            <ul className="space-y-3">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name} className="flex items-start gap-3 p-4 rounded-xl border border-line bg-paper">
                  {c.name.startsWith('ISO') ? (
                    <Award className="w-5 h-5 text-kraft-700 shrink-0 mt-0.5" />
                  ) : (
                    <ShieldCheck className="w-5 h-5 text-kraft-700 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <h3 className="text-base font-bold text-ink">
                      {c.href ? <a href={c.href} className="inline-flex items-center min-h-11 hover:text-kraft-700">{c.name}</a> : c.name}
                    </h3>
                    {c.detail && <p className="text-sm text-slate-700 mt-0.5">{c.detail}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight font-grotesk">Manufacturing Units</h2>
            <ul className="mt-6 space-y-4">
              {UNITS.map((u) => (
                <li key={u.city} className="flex items-start gap-3 p-4 rounded-xl border border-line bg-white shadow-sm">
                  <MapPin className="w-5 h-5 text-kraft-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-ink">{u.city}</h3>
                    <p className="text-sm text-slate-700 mt-0.5">{u.city === 'Khopoli' ? ADDRESS_TEXT : u.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PlantGallery />
      <Factory />
      <ContactCta />
    </div>
  );
}
