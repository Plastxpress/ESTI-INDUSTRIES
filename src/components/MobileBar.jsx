import React from 'react';
import { Home, LayoutGrid, Ruler, Building2, Phone } from 'lucide-react';
import { whatsappLink, PHONE_TEL, PHONE_DISPLAY } from '../data/site';

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.43 9.43 0 0 1-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.41 9.41 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.45-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.44-9.44 9.44zm8.03-17.47A11.3 11.3 0 0 0 12.04.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.58 23.7l6.1-1.6a11.33 11.33 0 0 0 5.36 1.37h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.04-1.18-5.89-3.33-8.04z" />
    </svg>
  );
}

/** Phone/tablet sticky bottom bar (Home, Products, Guide, About Us) + floating WhatsApp button on all screens. */
export default function MobileBar({ path = '/' }) {
  const items = [
    { href: '/', label: 'Home', icon: Home, active: path === '/' },
    { href: '/#products', label: 'Products', icon: LayoutGrid, active: false },
    { href: '/packaging-guide', label: 'Guide', icon: Ruler, active: path === '/packaging-guide' },
    { href: '/about', label: 'About Us', icon: Building2, active: path === '/about' },
  ];
  return (
    <>
      <nav aria-label="Quick links" className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-4 bg-white border-t border-line shadow-[0_-4px_20px_rgba(17,22,29,0.08)] pb-[env(safe-area-inset-bottom)]">
        {items.map(({ href, label, icon: Icon, active }) => (
          <a
            key={href}
            href={href}
            aria-current={active ? 'page' : undefined}
            className={`relative flex flex-col items-center justify-center gap-0.5 min-h-14 text-[11px] font-bold transition-colors ${active ? 'text-kraft-700' : 'text-ink hover:text-kraft-700'}`}
          >
            {active && <span className="absolute top-0 inset-x-6 h-0.5 rounded-full bg-kraft-500" aria-hidden="true" />}
            <Icon className="w-5 h-5" />
            {label}
          </a>
        ))}
      </nav>

      {/* Floating call button (phones/tablets; desktop shows the number in the header) */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label={`Call ${PHONE_DISPLAY}`}
        className="lg:hidden fixed right-[1.375rem] sm:right-[1.875rem] bottom-[calc(8.5rem+env(safe-area-inset-bottom))] z-40 w-12 h-12 rounded-full bg-ink text-kraft-300 flex items-center justify-center shadow-[0_10px_24px_-8px_rgba(17,22,29,0.6)] active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* Floating WhatsApp button (bottom-right; sits above the bar on phones) */}
      <a
        href={whatsappLink('Hello ESTI Packaging, I am interested in your corrugated and packaging products.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed right-4 sm:right-6 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] lg:bottom-6 z-40 flex items-center h-14 rounded-full bg-wa text-white shadow-[0_12px_30px_-8px_rgba(21,127,61,0.6)] hover:bg-wa-dark transition-all duration-300"
      >
        <span className="relative w-14 h-14 flex items-center justify-center shrink-0">
          <WhatsAppIcon className="w-7 h-7" />
        </span>
        <span className="relative max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-[8rem] group-hover:pr-5 group-focus-visible:max-w-[8rem] group-focus-visible:pr-5">
          WhatsApp
        </span>
      </a>
    </>
  );
}
