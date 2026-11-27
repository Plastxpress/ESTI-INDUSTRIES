import { COMPANY_INFO_READY } from '../data/companyInfo';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUp, Clock, MessageSquare } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import {
  EMAIL,
  PHONE_TEL,
  PHONE_DISPLAY,
  ADDRESS_TEXT,
  HOURS_TEXT,
  LINKEDIN_URL,
  GOOGLE_PROFILE_URL,
  UNITS,
  whatsappLink,
} from '../data/site';

const PAGE_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Packaging Guide', href: '/packaging-guide' },
  { name: 'Industries', href: '/industries' },
  { name: 'About', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Request a Quote', href: '/contact#quote-form' },
  // Shown only once the owner has filled data/companyInfo.js
  ...(COMPANY_INFO_READY ? [{ name: 'Company Info', href: '/company-info' }] : []),
];

export default function Footer({ roomy = false }) {
  // roomy: 44px tap targets for links
  const tap = roomy ? " inline-flex items-center min-h-11 min-w-11" : "";
  return (
    <footer id="footer" className="bg-ink text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Brand & Overview */}
          <div className="space-y-4 lg:col-span-3">
            <a href="/" className="flex items-center gap-3" aria-label="ESTI Packaging Industry — Home">
              <div className="w-11 h-11 rounded-xl bg-white p-1.5 shadow-sm flex items-center justify-center shrink-0">
                <img
                  src="/assets/images/webp/esti-logo-emblem-thumb.webp"
                  alt="ESTI Packaging Industry Emblem Logo"
                  width="44"
                  height="44"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white font-display flex items-center gap-1 leading-none">
                  ESTI <span className="text-blue-400">PACKAGING</span>
                </span>
                <span className="sr-only">Industry</span>
                <div
                  aria-hidden="true"
                  className="flex justify-between w-full text-[9px] uppercase text-slate-400 font-extrabold mt-1 select-none leading-none tracking-normal"
                >
                  <span>I</span>
                  <span>N</span>
                  <span>D</span>
                  <span>U</span>
                  <span>S</span>
                  <span>T</span>
                  <span>R</span>
                  <span>Y</span>
                </div>
              </div>
            </a>

            <p className="text-sm text-slate-300 leading-relaxed">
              Your trusted partner in custom corrugated packaging solutions with over 30 years of experience in box manufacturing (Since 1995).
            </p>

            <p className="text-sm sm:text-xs font-bold text-kraft-400 tracking-wide">
              Engineered for strength. Designed for performance. Built for your industry.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-ink border border-slate-800 text-xs text-kraft-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 9001
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-ink border border-slate-800 text-xs text-kraft-400 font-medium">
                UN 1266 Certified
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-ink border border-slate-800 text-xs text-kraft-400 font-medium">
                100% Recyclable
              </span>
            </div>
          </div>

          {/* Product Pages */}
          <nav aria-label="Products" className="lg:col-span-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-4">
              Products
            </h2>
            <ul className="space-y-2 text-sm">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a href={p.path} className={`hover:text-kraft-400 transition-colors${tap}`}>{p.navLabel}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Pages + Manufacturing Units */}
          <div className="lg:col-span-2 space-y-8">
            <nav aria-label="Company">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-4">
                Company
              </h2>
              <ul className="space-y-2 text-sm">
                {PAGE_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={`hover:text-kraft-400 transition-colors${tap}`}>{l.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Direct Commercial Contacts (owner-provided address, phone, hours) */}
          <div className="lg:col-span-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-4">
              Direct Contact
            </h2>
            <address className="not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" />
                  <span>{ADDRESS_TEXT}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-kraft-400 shrink-0" />
                  <a href={`tel:${PHONE_TEL}`} className={`hover:text-kraft-400 font-semibold transition-colors${tap}`}>
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-kraft-400 shrink-0" />
                  <span>{HOURS_TEXT}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-kraft-400 shrink-0" />
                  <a href={`mailto:${EMAIL}`} className={`hover:text-kraft-400 transition-colors break-all${tap}`}>
                    {EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-kraft-400 shrink-0" />
                  <a
                    href={whatsappLink('Hello ESTI Packaging, I am interested in your corrugated and packaging products.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-kraft-400 transition-colors${tap}`}
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-sky-400 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0 0 3.32 1.66 1.66 0 0 0 0-3.32Z"/>
                  </svg>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-sky-400 transition-colors${tap}`}
                  >
                    linkedin.com/in/estipack/
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-kraft-300 shrink-0" aria-hidden="true" />
                  <a
                    href={GOOGLE_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`hover:text-kraft-300 transition-colors${tap}`}
                  >
                    Find us on Google
                  </a>
                </li>
              </ul>
            </address>

            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display mt-8 mb-3">
              Manufacturing Units
            </h3>
            <ul className="space-y-2 text-sm">
              {UNITS.map((u) => (
                <li key={u.city} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-200">{u.city}:</strong> {u.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm sm:text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} ESTI Packaging Industry. All rights reserved. Direct B2B packaging solutions.
          </div>

          <div className="flex items-center gap-4">
            <span>Khopoli • Deonar, Mumbai • Pune</span>
            <a
              href="#top"
              className={`inline-flex items-center gap-1.5 p-2${tap} rounded-lg bg-ink hover:bg-slate-800 text-slate-300 hover:text-kraft-400 border border-slate-800 transition-colors`}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Top</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
