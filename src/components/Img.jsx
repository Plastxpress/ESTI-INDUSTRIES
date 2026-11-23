import React from 'react';
import META from '../data/imageMeta.json';

// Maps an original /assets/images/*.jpg|png path to its optimised WebP variant.
export function webp(src, variant = '') {
  if (!META[src]) return src;
  const base = src.replace(/^.*\//, '').replace(/\.(png|jpe?g)$/i, '');
  return `/assets/images/webp/${base}${variant ? `-${variant}` : ''}.webp`;
}

/**
 * Responsive, lazy-loaded image with explicit width/height (prevents layout shift).
 * size: 'full' (1000w + 480w srcset), 'sm' (480w only), 'thumb' (96px tall).
 */
export default function Img({ src, alt, size = 'full', sizes, eager = false, className = '', ...rest }) {
  const m = META[src];
  if (!m) {
    return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} {...rest} />;
  }

  let width = m.w;
  let height = m.h;
  let props;
  if (size === 'thumb') {
    height = 96;
    width = Math.round((m.w / m.h) * 96);
    props = { src: webp(src, 'thumb') };
  } else if (size === 'sm') {
    width = m.smW;
    height = m.smH;
    props = { src: webp(src, 'sm') };
  } else {
    props = {
      src: webp(src),
      srcSet: m.w > m.smW ? `${webp(src, 'sm')} ${m.smW}w, ${webp(src)} ${m.w}w` : undefined,
      sizes: sizes || '(min-width: 1024px) 600px, 100vw',
    };
  }

  return (
    <img
      {...props}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={eager ? "high" : undefined}
      className={className}
      {...rest}
    />
  );
}
