import React from 'react';
import { Plus } from 'lucide-react';
import SectionHead from './SectionHead';

/**
 * Visible FAQ (native <details>, so every answer is in the HTML and works without JS).
 * The same items are emitted as FAQPage JSON-LD by routes.js — keep them identical.
 */
export default function Faq({ items, title = 'Frequently Asked Questions', eyebrow = 'FAQ', index, tone = 'light', id = 'faq' }) {
  if (!items?.length) return null;
  const dark = tone === 'dark';
  return (
    <section id={id} className={`scroll-mt-28 py-16 md:py-20 ${dark ? 'bg-ink' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        <div className="lg:col-span-4 reveal">
          <SectionHead index={index} eyebrow={eyebrow} title={title} tone={tone} />
        </div>
        <div className={`lg:col-span-8 divide-y border-y reveal ${dark ? 'divide-white/10 border-white/10' : 'divide-line border-line'}`}>
          {items.map((f, i) => (
            <details key={f.q} className="more group/faq" open={i === 0}>
              <summary className="flex items-start justify-between gap-4 py-5 min-h-11 cursor-pointer">
                <h3 className={`font-grotesk text-base sm:text-lg font-bold leading-snug ${dark ? 'text-white' : 'text-ink'}`}>{f.q}</h3>
                <span className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-open/faq:rotate-45 ${dark ? 'bg-white/10 text-kraft-300' : 'bg-paper text-ink'}`} aria-hidden="true">
                  <Plus className="w-4 h-4" />
                </span>
              </summary>
              <p className={`pb-5 pr-12 text-[15px] leading-relaxed ${dark ? 'text-white/75' : 'text-ink-soft'}`}>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
