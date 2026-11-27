import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageSquare, Navigation } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import InquiryForm from '../components/InquiryForm';
import {
  EMAIL,
  PHONE_TEL,
  PHONE_DISPLAY,
  ADDRESS_TEXT,
  HOURS_TEXT,
  UNITS,
  MAP_EMBED_URL,
  DIRECTIONS_URL,
  GOOGLE_PROFILE_URL,
  whatsappLink,
} from '../data/site';

export default function ContactPage() {
  const rows = [
    { icon: MapPin, label: 'Address', content: ADDRESS_TEXT },
    { icon: Phone, label: 'Phone', content: <a href={`tel:${PHONE_TEL}`} className="font-semibold hover:text-kraft-700">{PHONE_DISPLAY}</a> },
    { icon: Clock, label: 'Business Hours', content: HOURS_TEXT },
    { icon: Mail, label: 'Email', content: <a href={`mailto:${EMAIL}`} className="font-semibold hover:text-kraft-700 break-all">{EMAIL}</a> },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      content: (
        <a
          href={whatsappLink('Hello ESTI Packaging, I am interested in your corrugated and packaging products.')}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:text-kraft-700"
        >
          Click to chat on WhatsApp
        </a>
      ),
    },
  ];

  return (
    <div className="readable">
      <PageHeader crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact Us' }]} title="Contact ESTI Packaging Industry" h1Location="Khopoli, Maharashtra" />

      <section className="py-12 md:py-16 bg-white border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight font-grotesk">Direct Contact</h2>
              <address className="not-italic mt-5">
                <ul className="space-y-4">
                  {rows.map(({ icon: Icon, label, content }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-kraft-50 text-kraft-700 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-600">{label}</p>
                        <p className="mt-0.5 text-base text-ink">{content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </address>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-ink tracking-tight font-grotesk">Manufacturing Units</h2>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {UNITS.map((u) => (
                  <li key={u.city} className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-kraft-700 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-ink">{u.city}:</strong> {u.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink tracking-tight font-grotesk">Find Us</h2>
            <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 min-h-11 px-5 rounded-full bg-ink hover:bg-ink-2 text-white text-sm font-bold">
              <Navigation className="w-4 h-4 text-kraft-300" /> Get Directions
            </a>
            <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 min-h-11 px-5 rounded-full border border-line bg-white hover:bg-paper text-ink text-sm font-bold">
              <MapPin className="w-4 h-4 text-kraft-700" /> View on Google Maps
            </a>
          </div>
          <p className="text-base text-slate-700 mb-4">{ADDRESS_TEXT}</p>
          <div className="rounded-2xl overflow-hidden border border-line shadow-sm bg-white">
            <iframe
              title={`Map: ${ADDRESS_TEXT}`}
              src={MAP_EMBED_URL}
              width="1200"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block w-full h-[340px] sm:h-[450px] border-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
