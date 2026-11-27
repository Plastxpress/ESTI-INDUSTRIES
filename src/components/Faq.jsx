import React, { useId } from 'react';
import { Plus } from 'lucide-react';
import SectionHead from './SectionHead';
import More from './More';

/**
 * Visible FAQ accordion (native <details>, so every answer is in the HTML and works
 * without JS). Items share a `name`, so only one answer is open at a time.
 * The same items are emitted as FAQPage JSON-LD by routes.js — keep them identical.
 * Item shape: { q, a, list?, after? }
 */
function Item({ f, group, open, dark }) {
  const text = dark ? 'text-white/75' : 'text-ink-soft';
  return (
    <details name={group} className="more group/faq" open={open}>
      <summary className="flex items-start justify-between gap-4 py-5 min-h-11 cursor-pointer">
        <h3 className={`font-grotesk text-base sm:text-lg font-bold leading-snug ${dark ? 'text-white' : 'text-ink'}`}>{f.q}</h3>
        <span className={`mt-0.5 w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-open/faq:rotate-45 ${dark ? 'bg-white/10 text-kraft-300' : 'bg-paper text-ink'}`} aria-hidden="true">
          <Plus className="w-4 h-4" />
        </span>
      </summary>
      <div className={`pb-5 pr-12 text-[15px] leading-relaxed ${text}`}>
        <p>{f.a}</p>
        {f.list && (
          <ul className="mt-3 space-y-1.5">
            {f.list.map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-kraft-500 shrink-0" aria-hidden="true" />
                <span className={dark ? 'text-white' : 'text-ink font-semibold'}>{x}</span>
              </li>
            ))}
          </ul>
        )}
        {f.after && <p className="mt-3">{f.after}</p>}
      </div>
    </details>
  );
}

export default function Faq({ items, moreItems = [], title = 'Frequently Asked Questions', eyebrow = 'FAQ', index, tone = 'light', id = 'faq' }) {
  const group = `faq-${useId().replace(/:/g, '')}`;
  if (!items?.length) return null;
  const dark = tone === 'dark';
  const list = dark ? 'divide-white/10 border-white/10' : 'divide-line border-line';
  return (
    <section id={id} className={`scroll-mt-28 py-16 md:py-20 ${dark ? 'bg-ink' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        <div className="lg:col-span-4 reveal">
          <SectionHead index={index} eyebrow={eyebrow} title={title} tone={tone} />
        </div>
        <div className="lg:col-span-8 reveal">
          <div className={`divide-y border-y ${list}`}>
            {items.map((f, i) => <Item key={f.q} f={f} group={group} open={i === 0} dark={dark} />)}
          </div>
          {moreItems.length > 0 && (
            <More className="mt-5" more="See more questions" less="Show fewer questions" tone={tone}>
              <div className={`-mt-5 divide-y border-b ${list}`}>
                {moreItems.map((f) => <Item key={f.q} f={f} group={group} open={false} dark={dark} />)}
              </div>
            </More>
          )}
        </div>
      </div>
    </section>
  );
}
