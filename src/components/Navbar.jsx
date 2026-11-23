import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Award, Clock, ArrowRight, ChevronDown, Ruler } from 'lucide-react';
import Img from './Img';
import { PRODUCTS } from '../data/products';

const LINKS = [
  { name: 'Packaging Guide', href: '/packaging-guide' },
  { name: 'Industries', href: '/industries' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

/**
 * Site header. Same two-row height as before (the hero is positioned against it):
 * ink info bar + white main bar with a product mega-menu and a Get Quote button.
 */
export default function Navbar({ path = '/' }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const onProduct = PRODUCTS.some((p) => p.path === path);
  const link = (active) =>
    `relative inline-flex items-center h-11 px-3 xl:px-4 text-[15px] font-semibold transition-colors whitespace-nowrap after:absolute after:left-3 after:right-3 xl:after:left-4 xl:after:right-4 after:bottom-1.5 after:h-0.5 after:rounded-full after:bg-kraft-500 after:transition-transform after:origin-left ${
      active ? 'text-ink after:scale-x-100' : 'text-ink-soft hover:text-ink after:scale-x-0 hover:after:scale-x-100'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Info bar */}
      <div className="bg-ink text-white/75 text-xs py-2 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a href="tel:+919833182733" className="flex items-center gap-1.5 py-[14px] -my-[14px] hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-kraft-400" />
              <span>+91 98331 82733</span>
            </a>
            <a href="mailto:info@estipack.com" className="flex items-center gap-1.5 py-[14px] -my-[14px] hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-kraft-400" />
              <span>info@estipack.com</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-white/60">
              <MapPin className="w-3.5 h-3.5" />
              <span>Mumbai • Khopoli • Pune</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[11px] text-white/60 font-medium tracking-wide">
            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3 text-kraft-400" />Since 1995 (30+ Years)</span>
            <span className="text-white/20">/</span>
            <span className="inline-flex items-center gap-1"><Award className="w-3 h-3 text-kraft-400" />1,200 MT/Mo Capacity</span>
            <span className="text-white/20">/</span>
            <span className="text-kraft-300 font-semibold">UN 1266 Certified</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className={`relative transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(17,22,29,0.25)] border-b border-line py-3' : 'bg-white border-b border-line py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-3 group shrink-0 py-1 -my-1" aria-label="ESTI Packaging Industry — Home">
              <img src="/assets/images/webp/esti-logo-emblem-thumb.webp" alt="ESTI Packaging Industry Logo" width="44" height="44" fetchpriority="high" className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0a1240] font-display flex items-center gap-1 leading-none">
                  ESTI <span className="text-blue-700">PACKAGING</span>
                </span>
                <span className="sr-only">Industry</span>
                <div aria-hidden="true" className="flex justify-between w-full text-[9px] sm:text-[10.5px] uppercase text-slate-500 font-extrabold mt-1 leading-none">
                  {'INDUSTRY'.split('').map((c, i) => <span key={i}>{c}</span>)}
                </div>
              </div>
            </a>

            <nav aria-label="Main" className="hidden lg:flex items-center min-w-0">
              <div className="group">
                <a href="/#products" className={`${link(onProduct)} gap-1`} aria-haspopup="true">
                  Products
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                </a>
                {/* Mega-menu */}
                <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-200 absolute left-0 right-0 top-full pt-2">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-12 gap-3 rounded-3xl border border-line bg-white p-3 shadow-[0_30px_60px_-20px_rgba(17,22,29,0.35)]">
                      <div className="col-span-9 grid grid-cols-3 gap-1">
                        {PRODUCTS.map((p) => (
                          <a key={p.id} href={p.path} className="group/item flex items-center gap-3 rounded-2xl p-2.5 hover:bg-paper transition-colors">
                            <span className="w-16 h-16 shrink-0 rounded-xl bg-paper border border-line flex items-center justify-center overflow-hidden">
                              <Img src={p.image} alt="" size="thumb" className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover/item:scale-110" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-bold text-ink leading-snug">{p.navLabel}</span>
                              <span className="block text-xs text-ink-soft/80 truncate">{p.category}</span>
                            </span>
                          </a>
                        ))}
                      </div>
                      <a href="/packaging-guide" className="col-span-3 flex flex-col justify-between rounded-2xl bg-ink p-5 text-white hover:bg-ink-2 transition-colors">
                        <Ruler className="w-7 h-7 text-kraft-400" />
                        <span>
                          <span className="block text-xs font-bold uppercase tracking-[0.18em] text-kraft-300">Packaging Guide</span>
                          <span className="mt-2 block font-grotesk text-lg font-bold leading-snug">Start from the board, not the box</span>
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white/80">Open <ArrowRight className="w-4 h-4" /></span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} className={link(path === l.href)}>{l.name}</a>
              ))}
            </nav>

            <div className="hidden sm:flex items-center shrink-0">
              <a href="/contact#quote-form" className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-kraft-500 hover:bg-kraft-400 text-ink text-sm font-bold transition-colors whitespace-nowrap">
                Get Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="lg:hidden w-11 h-11 inline-flex items-center justify-center rounded-full border border-line text-ink hover:bg-paper"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav aria-label="Mobile" className="lg:hidden absolute left-0 right-0 top-full h-[calc(100dvh-7rem)] overflow-y-auto bg-white border-t border-line px-4 pt-4 pb-24">
            <a href="/" className="flex items-center min-h-12 px-3 rounded-xl text-lg font-bold text-ink hover:bg-paper">Home</a>
            <p className="px-3 pt-4 pb-2 text-xs font-bold uppercase tracking-[0.18em] text-kraft-700">Products</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a href={p.path} className="flex items-center gap-3 min-h-12 px-3 rounded-xl text-base font-semibold text-ink hover:bg-paper">
                    <span className="w-10 h-10 rounded-lg bg-paper border border-line flex items-center justify-center shrink-0">
                      <Img src={p.image} alt="" size="thumb" className="max-w-full max-h-full object-contain" />
                    </span>
                    {p.navLabel}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-line">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} className="flex items-center min-h-12 px-3 rounded-xl text-lg font-bold text-ink hover:bg-paper">{l.name}</a>
              ))}
            </div>
            <a href="/contact#quote-form" className="mt-4 flex items-center justify-center gap-2 min-h-12 rounded-full bg-kraft-500 text-ink font-bold">
              Get Quote <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
