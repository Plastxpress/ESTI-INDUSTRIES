import React from 'react';

/** Consistent section heading: small numbered eyebrow, big grotesk title, optional lead. */
export default function SectionHead({ index, eyebrow, title, lead, tone = 'light', as: H = 'h2', align = 'left', children }) {
  const dark = tone === 'dark';
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}>
      {eyebrow && (
        <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${dark ? 'text-kraft-300' : 'text-kraft-700'} ${align === 'center' ? 'justify-center' : ''}`}>
          {index && <span className="font-grotesk tabular-nums">{index}</span>}
          {index && <span className={`h-px w-8 ${dark ? 'bg-kraft-300/60' : 'bg-kraft-700/50'}`} aria-hidden="true" />}
          <span>{eyebrow}</span>
        </p>
      )}
      <H className={`mt-3 font-grotesk text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.02em] leading-[1.05] ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </H>
      {lead && <p className={`mt-4 text-base sm:text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-ink-soft'}`}>{lead}</p>}
      {children}
    </div>
  );
}
