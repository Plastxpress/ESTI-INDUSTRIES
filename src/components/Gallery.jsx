import React, { useState } from 'react';
import { Images } from 'lucide-react';
import Img from '../components/Img';

/** Main image + thumbnail strip. All images are in the HTML; JS only switches. */
export default function Gallery({ product, tall = false }) {
  const [active, setActive] = useState(0);
  const { images, imageLabels: labels } = product;
  return (
    <div>
      <div className={`relative w-full rounded-2xl border border-line bg-white flex items-center justify-center p-4 overflow-hidden ${tall ? 'h-80 sm:h-[28rem]' : 'h-72 sm:h-96'}`}>
        <Img
          key={images[active]}
          src={images[active]}
          alt={active === 0 ? product.title : labels[active]}
          eager={active === 0}
          sizes="(min-width: 1024px) 640px, 100vw"
          className="max-w-full max-h-full w-auto h-auto object-contain"
        />
        <span className="absolute top-3 left-3 bg-ink text-white text-xs font-bold px-2.5 py-1 rounded-md">{product.badge}</span>
        {images.length > 1 && (
          <span className="absolute top-3 right-3 bg-white/90 border border-line text-ink text-xs font-semibold px-2 py-1 rounded-md flex items-center gap-1.5">
            <Images className="w-3.5 h-3.5 text-kraft-700" />
            {active + 1} / {images.length}
          </span>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Product views">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              title={labels[i]}
              className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl border bg-white p-1.5 transition-all ${
                active === i ? 'border-kraft-700 ring-2 ring-kraft-500/30' : 'border-line hover:border-slate-400'
              }`}
            >
              <Img src={src} alt={labels[i]} size="thumb" className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      )}
      {images.length > 1 && <p className="mt-1 text-sm text-slate-600">{labels[active]}</p>}
    </div>
  );
}
