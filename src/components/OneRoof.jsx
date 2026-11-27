import React from 'react';
import { Layers, Ruler, Maximize } from 'lucide-react';
import SectionHead from './SectionHead';
import { FLUTE_COMBOS, BOARD_THICKNESS, MAX_SHEET_SIZE, CUSTOM_LINE } from '../data/ownerFaqs';

/** "All Essential Packaging Under One Roof" — owner-provided intro + board capability summary. */
export default function OneRoof({ index }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 reveal">
          <SectionHead
            index={index}
            eyebrow="Capabilities"
            title="All Essential Packaging Under One Roof"
            lead="From regular corrugated boxes to heavy-duty export packaging, we provide customised solutions focused on product safety, strength and cost efficiency."
          />
          <p className="mt-6 flex items-start gap-3 rounded-2xl bg-paper p-4 text-[15px] font-semibold text-ink leading-snug">
            <Layers className="w-5 h-5 text-kraft-700 shrink-0 mt-0.5" />
            Engineered for extreme compression, moisture resistance, UN hazardous cargo standards, and seamless logistics.
          </p>
        </div>

        <div className="lg:col-span-7 reveal">
          <div className="rounded-3xl border border-line overflow-hidden">
            <table className="w-full text-left">
              <caption className="sr-only">Flute combinations by ply</caption>
              <thead className="bg-ink text-white">
                <tr>
                  <th scope="col" className="w-[30%] px-4 sm:px-5 py-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.16em]">Construction</th>
                  <th scope="col" className="px-4 sm:px-5 py-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.16em]">Flute combinations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {FLUTE_COMBOS.map((f) => (
                  <tr key={f.ply}>
                    <th scope="row" className="px-4 sm:px-5 py-4 font-grotesk text-base sm:text-lg font-extrabold text-ink whitespace-nowrap">{f.ply}</th>
                    <td className="px-4 sm:px-5 py-4">
                      <ul className="flex flex-wrap gap-1.5">
                        {f.combos.map((c) => (
                          <li key={c} className="rounded-lg bg-paper px-2.5 py-1 font-grotesk text-sm font-bold text-ink">{c}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <dl className="grid grid-cols-2 border-t border-line bg-paper">
              <div className="p-5">
                <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-kraft-700"><Ruler className="w-3.5 h-3.5" /> Board thickness</dt>
                <dd className="mt-1 font-grotesk text-lg sm:text-2xl font-extrabold text-ink">{BOARD_THICKNESS}</dd>
              </div>
              <div className="p-5 border-l border-line">
                <dt className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-kraft-700"><Maximize className="w-3.5 h-3.5" /> Max sheet size</dt>
                <dd className="mt-1 font-grotesk text-lg sm:text-2xl font-extrabold text-ink">{MAX_SHEET_SIZE}</dd>
              </div>
            </dl>
          </div>
          <p className="mt-4 text-[15px] text-ink-soft leading-relaxed">{CUSTOM_LINE}</p>
        </div>
      </div>
    </section>
  );
}
