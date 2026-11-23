import React from 'react';
import { ChevronRight } from 'lucide-react';

/** Visible breadcrumb + the page's single H1 (used on every page except Home and products). */
export default function PageHeader({ crumbs, title, eyebrow, children }) {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 pb-12 md:pb-16 bg-paper border-b border-line">
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-kraft-300/30 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-soft">
            {crumbs.map((c, i) => (
              <li key={c.name} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 opacity-60" aria-hidden="true" />}
                {c.href && i < crumbs.length - 1 ? (
                  <a href={c.href} className="inline-flex items-center justify-center min-h-11 min-w-11 hover:text-ink">
                    {c.name}
                  </a>
                ) : (
                  <span aria-current="page" className="font-semibold text-ink">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow && (
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-kraft-700">{eyebrow}</p>
        )}
        <h1 className={`${eyebrow ? 'mt-3' : 'mt-6'} font-grotesk text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.025em] leading-[1.02] text-ink max-w-4xl`}>
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}
