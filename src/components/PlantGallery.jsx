import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Expand, Film } from 'lucide-react';
import Img from './Img';
import LazyVideo from './LazyVideo';
import More from './More';
import SectionHead from './SectionHead';
import { PLANT_PHOTOS, PLANT_VIDEOS, altFor } from '../data/plant';

const SHOWN = 6;

function Tile({ ph, index, onOpen, className = '' }) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl bg-paper ${className}`}>
      <button type="button" onClick={() => onOpen(index)} className="block w-full h-full" aria-label={`Open photo: ${ph.caption}`}>
        <Img
          src={ph.src}
          alt={altFor(ph)}
          size="sm"
          sizes="(min-width: 1024px) 300px, 50vw"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-80 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
        <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">
          <Expand className="w-4 h-4" />
        </span>
      </button>
      <figcaption className="pointer-events-none absolute bottom-0 inset-x-0 p-3 text-left text-xs sm:text-sm font-semibold text-white">{ph.caption}</figcaption>
    </figure>
  );
}

/** "Inside Our Plant": two portrait reels + photo grid with a full-screen viewer. */
export default function PlantGallery({ id = 'plant', index }) {
  const [open, setOpen] = useState(null);
  const count = PLANT_PHOTOS.length;
  const go = useCallback((d) => setOpen((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, go]);

  const shown = PLANT_PHOTOS.slice(0, SHOWN);
  const rest = PLANT_PHOTOS.slice(SHOWN);

  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHead index={index} eyebrow="Plant & Machinery" title="Inside Our Plant" />
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Reels */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 reveal">
            {PLANT_VIDEOS.map((v) => (
              <figure key={v.src} className="relative aspect-[9/16] rounded-[1.75rem] overflow-hidden bg-ink shadow-[0_30px_60px_-30px_rgba(17,22,29,0.6)]">
                <LazyVideo src={v.src} poster={v.poster} label={v.caption} className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-bold text-kraft-200 pointer-events-none">
                  <Film className="w-3.5 h-3.5" /> Factory Floor in Action
                </span>
                <figcaption className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-ink/90 to-transparent text-sm font-semibold text-white pointer-events-none">
                  {v.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Photo grid */}
          <div className="lg:col-span-7 reveal">
            <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[9.5rem] sm:auto-rows-[11rem] gap-3 sm:gap-4">
              {shown.map((ph, i) => (
                <Tile
                  key={ph.src}
                  ph={ph}
                  index={i}
                  onOpen={setOpen}
                  className={i === 0 ? 'col-span-2 row-span-2' : ''}
                />
              ))}
            </div>
            <More className="mt-5" more={`See all ${count} photos`} less="Show fewer photos">
              <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[9.5rem] sm:auto-rows-[11rem] gap-3 sm:gap-4">
                {rest.map((ph, i) => (
                  <Tile key={ph.src} ph={ph} index={SHOWN + i} onOpen={setOpen} />
                ))}
              </div>
            </More>
          </div>
        </div>
      </div>

      {/* Full-screen viewer */}
      {open !== null && (
        <div className="fixed inset-0 z-[70] bg-ink/95 backdrop-blur-lg flex flex-col p-3 sm:p-6" role="dialog" aria-modal="true" aria-label="Plant photos" onClick={() => setOpen(null)}>
          <div className="flex items-center justify-between gap-3 text-white" onClick={(e) => e.stopPropagation()}>
            <p className="text-sm sm:text-base font-semibold">
              {PLANT_PHOTOS[open].caption}
              <span className="ml-2 text-white/50 tabular-nums">{open + 1} / {count}</span>
            </p>
            <button type="button" onClick={() => setOpen(null)} className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center" aria-label="Close">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="relative flex-1 flex items-center justify-center my-3" onClick={(e) => e.stopPropagation()}>
            <Img
              key={open}
              src={PLANT_PHOTOS[open].src}
              alt={altFor(PLANT_PHOTOS[open])}
              eager
              sizes="90vw"
              className="max-h-[78vh] max-w-full w-auto h-auto object-contain rounded-xl animate-[fadeUp_0.3s_ease-out]"
            />
            <button type="button" onClick={() => go(-1)} className="absolute left-0 sm:left-2 w-12 h-12 rounded-full bg-white/15 hover:bg-kraft-500 hover:text-ink text-white flex items-center justify-center transition-colors" aria-label="Previous photo">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button type="button" onClick={() => go(1)} className="absolute right-0 sm:right-2 w-12 h-12 rounded-full bg-white/15 hover:bg-kraft-500 hover:text-ink text-white flex items-center justify-center transition-colors" aria-label="Next photo">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="flex gap-2 overflow-x-auto justify-center" onClick={(e) => e.stopPropagation()}>
            {PLANT_PHOTOS.map((ph, i) => (
              <button
                key={ph.src}
                type="button"
                onClick={() => setOpen(i)}
                className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors ${i === open ? 'border-kraft-400' : 'border-transparent opacity-60 hover:opacity-100'}`}
                aria-label={`Show photo ${i + 1}: ${ph.caption}`}
              >
                <Img src={ph.src} alt="" size="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
