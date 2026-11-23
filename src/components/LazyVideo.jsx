import React, { useEffect, useRef } from 'react';

// Videos that also have a smaller, sharper AV1 (WebM) version. Browsers that can
// play AV1 use it; everything else falls back to the H.264 MP4. Both are < 3 MB.
export const AV1_TYPE = 'video/webm; codecs="av01.0.05M.08"';
export const AV1_VERSIONS = {
  '/assets/videos/factory-manufacturing.mp4': '/assets/videos/factory-manufacturing.webm',
};

/**
 * Muted looping video that downloads nothing until it scrolls into view
 * (preload="none" + poster), then starts playing. Pauses again when off-screen.
 */
export default function LazyVideo({ src, poster, className = '', controls = false, label }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    el.muted = true;
    el.defaultMuted = true;

    const play = () => {
      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };

    if (!('IntersectionObserver' in window)) {
      play();
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else if (!el.paused) el.pause();
      },
      { rootMargin: '200px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      src={AV1_VERSIONS[src] ? undefined : src}
      poster={poster}
      preload="none"
      loop
      muted
      playsInline
      controls={controls}
      aria-label={label}
      className={className}
    >
      {AV1_VERSIONS[src] && <source src={AV1_VERSIONS[src]} type={AV1_TYPE} />}
      {AV1_VERSIONS[src] && <source src={src} type="video/mp4" />}
    </video>
  );
}
