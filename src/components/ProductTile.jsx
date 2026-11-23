import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Img from './Img';
import { keySpecs } from '../data/catalogue';

/**
 * Product-first card.
 * Phone (<640px): one card per row — big photo + product name only; tap opens the product page.
 * Tablet/desktop: photo, category, name, key specs, View details + Quote.
 * (Specs stay in the HTML on phones, just visually hidden by CSS breakpoints.)
 */
export default function ProductTile({ p, specs = 2, headingLevel = 3, showQuote = true }) {
  const H = `h${headingLevel}`;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(17,22,29,0.35)] hover:border-kraft-300">
      <div className="relative aspect-[4/3] sm:aspect-[5/4] bg-paper overflow-hidden">
        <Img
          src={p.image}
          alt={p.title}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="absolute inset-0 w-full h-full object-contain p-3 sm:p-6 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute top-3 left-3 max-w-[80%] truncate rounded-full bg-ink/90 backdrop-blur px-3 py-1 text-xs font-bold text-white">
          {p.badge}
        </span>
        <span className="hidden sm:flex absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white shadow items-center justify-center text-ink opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" aria-hidden="true">
          <ArrowUpRight className="w-5 h-5" />
        </span>
      </div>
      <div className="flex flex-col flex-1 px-4 py-3.5 sm:p-6">
        <p className="hidden sm:block text-[11px] font-bold uppercase tracking-[0.16em] text-kraft-700 truncate">{p.category}</p>
        <div className="flex items-center justify-between gap-3 sm:block">
          <H className="sm:mt-1.5 font-grotesk text-lg sm:text-xl font-bold leading-snug text-ink">
            {/* Whole card is clickable via the stretched link */}
            <a href={p.path} className="after:absolute after:inset-0 after:content-['']">{p.title}</a>
          </H>
          <span className="sm:hidden w-10 h-10 shrink-0 rounded-full bg-paper flex items-center justify-center text-ink" aria-hidden="true">
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </div>
        {specs > 0 && (
          <dl className="hidden sm:block mt-3 space-y-2 flex-1">
            {keySpecs(p, specs).map((s) => (
              <div key={s.label}>
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-soft/70">{s.label}</dt>
                <dd className="text-sm font-semibold text-ink leading-snug line-clamp-2">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {showQuote && (
          <div className="relative z-10 mt-4 pt-4 border-t border-line hidden sm:flex flex-wrap items-center justify-between gap-2">
            <a href={p.path} tabIndex={-1} aria-hidden="true" className="inline-flex items-center min-h-11 text-sm font-bold text-ink hover:text-kraft-700">
              View details
            </a>
            <a
              href={`/contact?product=${p.slug}#quote-form`}
              className="inline-flex items-center justify-center min-h-11 px-4 rounded-full bg-paper hover:bg-kraft-500 text-ink text-sm font-bold transition-colors"
            >
              Quote
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
