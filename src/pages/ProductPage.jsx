import React from 'react';
import { Check, MessageSquare, ShieldCheck, ArrowRight, ChevronRight, Ruler } from 'lucide-react';
import Gallery from '../components/Gallery';
import InquiryForm from '../components/InquiryForm';
import ProductTile from '../components/ProductTile';
import More from '../components/More';
import { productById } from '../data/products';
import { keySpecs } from '../data/catalogue';
import Faq from '../components/Faq';
import { faqsForProduct } from '../data/faqs';

const SPECS_SHOWN = 4;
const FEATURES_SHOWN = 3;

function SpecRows({ specs }) {
  return (
    <dl className="divide-y divide-line">
      {specs.map((s) => (
        <div key={s.label} className="grid grid-cols-1 sm:grid-cols-5 gap-1 sm:gap-6 py-4">
          <dt className="sm:col-span-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-soft/80 pt-0.5">{s.label}</dt>
          <dd className="sm:col-span-3 text-[15px] font-semibold text-ink leading-snug">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function FeatureList({ features }) {
  return (
    <ul className="space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-3 rounded-2xl bg-paper p-4 text-[15px] text-ink leading-snug">
          <span className="mt-0.5 w-6 h-6 rounded-full bg-kraft-500 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 text-ink" />
          </span>
          {f}
        </li>
      ))}
    </ul>
  );
}

export default function ProductPage({ product: p }) {
  const related = p.related.map(productById);
  const wa = `https://wa.me/919833182733?text=Hello%20ESTI%20Packaging,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(p.title)}.`;
  const extraSpecs = p.specs.slice(SPECS_SHOWN);
  const extraFeatures = p.features.slice(FEATURES_SHOWN);

  return (
    <div className="readable">
      {/* Product hero */}
      <section className="pt-32 sm:pt-36 pb-12 md:pb-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-soft">
              <li><a href="/" className="inline-flex items-center justify-center min-h-11 min-w-11 hover:text-ink">Home</a></li>
              <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
              <li><a href="/#products" className="inline-flex items-center min-h-11 hover:text-ink">Products</a></li>
              <li aria-hidden="true"><ChevronRight className="w-3.5 h-3.5" /></li>
              <li aria-current="page" className="font-semibold text-ink">{p.navLabel}</li>
            </ol>
          </nav>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <Gallery product={p} />
            </div>

            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-kraft-700">{p.category}</p>
              <h1 className="mt-3 font-grotesk text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.02em] leading-[1.05] text-ink">{p.title}</h1>
              <p className="mt-3 text-base sm:text-lg font-medium text-ink-soft">{p.subtitle}</p>

              <dl className="mt-7 grid grid-cols-1 gap-px rounded-2xl overflow-hidden border border-line bg-line">
                {keySpecs(p, 3).map((s) => (
                  <div key={s.label} className="bg-white px-5 py-4">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-kraft-700">{s.label}</dt>
                    <dd className="mt-1 font-grotesk text-base sm:text-lg font-bold text-ink leading-snug">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="#quote-form" className="group inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full bg-ink hover:bg-ink-2 text-white font-bold transition-colors">
                  Request a Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full bg-wa hover:bg-wa-dark text-white font-bold transition-colors">
                  <MessageSquare className="w-4 h-4" /> WhatsApp
                </a>
              </div>

              <p className="mt-5 text-sm text-ink-soft flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-kraft-700 shrink-0 mt-0.5" />
                Custom Dimensions: Manufactured to exact client drawings & blueprints.
              </p>
              <a href="/packaging-guide" className="mt-1 inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-ink underline decoration-kraft-500 decoration-2 underline-offset-4 hover:text-kraft-700">
                <Ruler className="w-4 h-4 text-kraft-700" />
                Not sure which board you need? Use our Packaging Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="font-grotesk text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">Overview</h2>
            <p className="mt-4 text-base sm:text-lg text-ink-soft leading-relaxed">{p.description}</p>
            {p.extraDescription?.length > 0 && (
              <More className="mt-5" more="Read more" less="Read less">
                <div className="space-y-3 text-ink-soft leading-relaxed">
                  {p.extraDescription.map((t) => <p key={t}>{t}</p>)}
                </div>
              </More>
            )}

            <h2 className="mt-12 font-grotesk text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">Technical Specifications</h2>
            <div className="mt-2">
              <SpecRows specs={p.specs.slice(0, SPECS_SHOWN)} />
            </div>
            {extraSpecs.length > 0 && (
              <More className="mt-2" more={`See all ${p.specs.length} specifications`} less="Show fewer specifications">
                <div className="-mt-5 border-t border-line"><SpecRows specs={extraSpecs} /></div>
              </More>
            )}
          </div>

          <div className="lg:col-span-5">
            <h2 className="font-grotesk text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">Engineering Advantages & Highlights</h2>
            <div className="mt-5"><FeatureList features={p.features.slice(0, FEATURES_SHOWN)} /></div>
            {extraFeatures.length > 0 && (
              <More className="mt-4" more={`See ${extraFeatures.length} more`} less="Show fewer">
                <FeatureList features={extraFeatures} />
              </More>
            )}

            <h2 className="mt-12 font-grotesk text-xl sm:text-2xl font-extrabold tracking-tight text-ink">Recommended Sectors</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.applications.replace(/\.$/, '').split(/,\s*/).map((a) => (
                <li key={a} className="rounded-full border border-line px-3.5 py-1.5 text-sm font-medium text-ink">{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq items={faqsForProduct(p.id)} title={`${p.navLabel}: Frequently Asked Questions`} />

      {/* Quote */}
      <section className="relative overflow-hidden py-14 md:py-20 bg-ink">
        <div className="absolute -right-32 top-0 w-[26rem] h-[26rem] rounded-full bg-kraft-500/15 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm defaultProductId={p.id} heading={`Request a Quote: ${p.navLabel}`} />
        </div>
      </section>

      {/* Related */}
      <section className="py-14 md:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-grotesk text-2xl sm:text-3xl font-extrabold tracking-tight text-ink">Related Products</h2>
            <a href="/#products" className="inline-flex items-center gap-1.5 min-h-11 text-sm font-bold text-ink hover:text-kraft-700">
              All products <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {related.map((r) => <ProductTile key={r.id} p={r} specs={1} showQuote={false} />)}
          </div>
        </div>
      </section>
    </div>
  );
}
