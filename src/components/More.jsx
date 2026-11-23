import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * "See more" disclosure built on native <details>: the hidden content is always in
 * the HTML (crawlers read it), it opens without JavaScript, and it animates open in
 * browsers that support it (see details.more in index.css).
 */
export default function More({ more = 'See more', less = 'See less', tone = 'light', className = '', children }) {
  const btn =
    tone === 'dark'
      ? 'border-white/25 text-white hover:bg-white/10'
      : 'border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white';
  return (
    <details className={`more group ${className}`}>
      <summary
        className={`inline-flex items-center gap-2 min-h-11 px-5 rounded-full border text-sm font-bold transition-colors select-none ${btn}`}
      >
        <span className="more-more">{more}</span>
        <span className="more-less">{less}</span>
        <ChevronDown className="more-chev w-4 h-4" aria-hidden="true" />
      </summary>
      <div className="pt-5">{children}</div>
    </details>
  );
}
