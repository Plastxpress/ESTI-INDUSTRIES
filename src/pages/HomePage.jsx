import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Award, Phone, Mail, MessageSquare, Factory as FactoryIcon, Check } from 'lucide-react';
import Hero from '../components/Hero';
import ClientTicker from '../components/ClientTicker';
import PackagingWithPurpose from '../components/PackagingWithPurpose';
import ProductTile from '../components/ProductTile';
import SectionHead from '../components/SectionHead';
import More from '../components/More';
import LazyVideo from '../components/LazyVideo';
import { PRODUCTS } from '../data/products';
import { GROUPS, groupOf } from '../data/catalogue';
import { INDUSTRIES_DATA as INDUSTRIES } from '../components/IndustriesSection';
import { EMAIL, PHONE_TEL, PHONE_DISPLAY, whatsappLink } from '../data/site';
import { PLANT_PHOTOS, altFor } from '../data/plant';
import Img from '../components/Img';
import Faq from '../components/Faq';
import { HOME_FAQS } from '../data/faqs';

// Machinery highlights (existing text from the Factory section).
const MACHINERY = [
  { title: 'Imported 5-Ply Board Plant (2200 mm)', description: 'Fully automatic high-speed corrugating line producing 3-ply, 5-ply, and 7-ply heavy boards in A, B, C, and E flutes with steam-controlled moisture retention.' },
  { title: '1800 x 3500 mm Printer Slotter', description: 'Fully automatic 2-color printer slotter—one of the largest in the market—delivering precision scoring, slotting, and crisp flexo printing.' },
  { title: 'Automated Stitchers & Gluers', description: 'Equipped with automatic single and two-piece heavy-duty stitchers and automated gluing lines for rapid case assembly.' },
  { title: 'Quality Testing Laboratory', description: 'Fully equipped in-house testing lab monitoring Bursting Strength (BF), Edge Crush Test (ECT), Ring Crush Test (RCT), and Cobb moisture absorption.' },
];

function Catalogue() {
  const [group, setGroup] = useState('all');
  const visible = group === 'all' ? PRODUCTS : PRODUCTS.filter((p) => groupOf(p) === group);
  return (
    <section id="products" className="scroll-mt-28 py-16 md:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHead
            index="01"
            eyebrow="Products"
            title="Comprehensive Product Portfolio"
            lead="Engineered for strength, cost efficiency, and export compliance."
          />
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex gap-2 overflow-x-auto pb-1 lg:pb-0" role="group" aria-label="Filter products">
            {GROUPS.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setGroup(g.id)}
                aria-pressed={group === g.id}
                className={`shrink-0 min-h-11 px-5 rounded-full text-sm font-bold transition-all duration-200 ${
                  group === g.id ? 'bg-ink text-white shadow-md' : 'bg-white text-ink border border-line hover:border-ink'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-6 text-sm font-semibold text-ink-soft" aria-live="polite">{visible.length} of {PRODUCTS.length} products</p>
        <div key={group} className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-[fadeUp_0.45s_ease-out]">
          {visible.map((p) => <ProductTile key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}

function Capability() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6 reveal">
          <SectionHead
            index="02"
            eyebrow="Manufacturing"
            title={<>Engineered for strength. <span className="text-kraft-700">Designed for performance.</span> Built for your industry.</>}
            lead="We offer end-to-end packaging solutions (along with packaging design and contract packaging) for all industries, backed by 30+ years of manufacturing pedigree."
          />
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MACHINERY.map((m) => (
              <li key={m.title} className="flex items-start gap-3 rounded-2xl bg-paper px-4 py-3">
                <Check className="w-5 h-5 text-kraft-700 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-ink">{m.title}</span>
              </li>
            ))}
          </ul>
          <More className="mt-5" more="See machinery details" less="Hide machinery details">
            <dl className="space-y-4">
              {MACHINERY.map((m) => (
                <div key={m.title}>
                  <dt className="text-sm font-bold text-ink">{m.title}</dt>
                  <dd className="mt-1 text-sm text-ink-soft leading-relaxed">{m.description}</dd>
                </div>
              ))}
            </dl>
          </More>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/about" className="inline-flex items-center gap-2 min-h-12 px-6 rounded-full bg-ink text-white text-sm font-bold hover:bg-ink-2 transition-colors">
              About ESTI Packaging <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/packaging-guide" className="inline-flex items-center gap-2 min-h-12 px-6 rounded-full border border-ink/20 text-ink text-sm font-bold hover:border-ink transition-colors">
              Packaging Guide
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 reveal">
          <div className="relative rounded-[2rem] overflow-hidden bg-ink aspect-[16/11] shadow-[0_40px_80px_-30px_rgba(17,22,29,0.5)]">
            <LazyVideo
              src="/assets/videos/factory-manufacturing.mp4"
              poster="/assets/videos/posters/factory-manufacturing.webp"
              label="Automated Corrugator & Box Line"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 flex items-end justify-between gap-4 text-white pointer-events-none">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-kraft-300">
                  <span className="w-2 h-2 rounded-full bg-kraft-400 animate-pulse" /> Factory Floor in Action
                </p>
                <p className="mt-1 font-grotesk text-lg sm:text-xl font-bold">Automated Corrugator & Box Line</p>
              </div>
              <FactoryIcon className="w-8 h-8 text-white/40 shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Plant photo strip → full gallery on /about#plant */}
      <div className="mt-14 reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kraft-700">Inside Our Plant</p>
          <a href="/about#plant" className="inline-flex items-center gap-1.5 min-h-11 text-sm font-bold text-ink hover:text-kraft-700">
            See the plant <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <ul className="mt-3 flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-[max(2rem,calc((100vw_-_80rem)/2_+_2rem))] scroll-px-4 sm:scroll-px-6 lg:scroll-px-[max(2rem,calc((100vw_-_80rem)/2_+_2rem))] pb-2 [scrollbar-width:none]">
          {PLANT_PHOTOS.slice(0, 8).map((ph) => (
            <li key={ph.src} className="snap-start shrink-0 w-56 sm:w-64">
              <a href="/about#plant" className="group block relative aspect-[4/5] rounded-2xl overflow-hidden bg-paper">
                <Img src={ph.src} alt={altFor(ph)} size="sm" sizes="256px" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/85 to-transparent text-sm font-semibold text-white">{ph.caption}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IndustriesTeaser() {
  const Card = ({ ind }) => {
    const Icon = ind.icon;
    return (
      <li className="group flex items-center gap-3 rounded-2xl bg-white border border-line px-4 py-4 transition-all duration-200 hover:border-kraft-400 hover:-translate-y-0.5">
        <span className="w-10 h-10 rounded-xl bg-paper flex items-center justify-center shrink-0 transition-colors group-hover:bg-kraft-500">
          <Icon className="w-5 h-5 text-kraft-700 group-hover:text-ink" />
        </span>
        <span className="text-sm font-bold text-ink leading-snug">{ind.name}</span>
      </li>
    );
  };
  return (
    <section className="py-16 md:py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <SectionHead
            index="04"
            eyebrow="Industries"
            title="Packaging Solutions Built for Every Industry"
            lead="Every product has different packaging requirements."
          />
          <a href="/industries" className="inline-flex items-center gap-2 min-h-12 px-6 rounded-full bg-ink text-white text-sm font-bold hover:bg-ink-2 transition-colors self-start md:self-auto">
            Industries We Serve <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 reveal">
          {INDUSTRIES.slice(0, 8).map((ind) => <Card key={ind.name} ind={ind} />)}
        </ul>
        <More className="mt-5" more={`See all ${INDUSTRIES.length} industries`} less="Show fewer">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {INDUSTRIES.slice(8).map((ind) => <Card key={ind.name} ind={ind} />)}
          </ul>
        </More>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero and client logo strip — unchanged */}
      <Hero />
      <ClientTicker />

      <div className="readable">
        <Catalogue />
        <Capability />
        <PackagingWithPurpose index="03" />
        <IndustriesTeaser />
        <Certifications index="05" />
        <Faq items={HOME_FAQS} index="06" eyebrow="FAQ" title="Frequently Asked Questions" />
        <ContactCta />
      </div>
    </>
  );
}

export const CERTIFICATIONS = [
  { name: 'ISO 9001', detail: null, href: null },
  { name: 'UN 1266 Certified', detail: 'UN 1266 Class 3 Flammable Liquids (Packaging Group II & III)', href: '/un-1266-boxes' },
  { name: 'ISPM-15 (TR-183 HT-DB)', detail: '100% ISPM-15 compliant with official TR-183 HT-DB heat-treatment stamp', href: '/wooden-pallets' },
];

export function Certifications({ index }) {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal"><SectionHead index={index} eyebrow="Quality" title="Certifications" /></div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
          {CERTIFICATIONS.map((c) => {
            const Icon = c.name.startsWith('ISO') ? Award : ShieldCheck;
            const body = (
              <>
                <span className="w-12 h-12 rounded-2xl bg-ink text-kraft-300 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </span>
                <span>
                  <span className="block font-grotesk text-xl font-bold text-ink">{c.name}</span>
                  {c.detail && <span className="mt-1 block text-sm text-ink-soft leading-relaxed">{c.detail}</span>}
                </span>
              </>
            );
            return c.href ? (
              <a key={c.name} href={c.href} className="flex gap-4 rounded-3xl border border-line p-6 transition-all hover:border-kraft-400 hover:-translate-y-0.5">{body}</a>
            ) : (
              <div key={c.name} className="flex gap-4 rounded-3xl border border-line p-6">{body}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute -right-32 -top-32 w-[28rem] h-[28rem] bg-[radial-gradient(closest-side,rgba(197,155,97,0.2),transparent)] pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-7 reveal">
          <SectionHead
            tone="dark"
            eyebrow="Direct Inquiry"
            title="Request a Quote"
            lead="More than your packaging supplier — we work as your dedicated strategic partners."
          />
        </div>
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 reveal">
          <a href="/contact#quote-form" className="inline-flex items-center justify-between gap-2 min-h-14 px-6 rounded-full bg-kraft-500 hover:bg-kraft-400 text-ink font-bold transition-colors">
            <span className="inline-flex items-center gap-2"><Mail className="w-5 h-5" /> Request a Quote</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 min-h-14 px-6 rounded-full border border-white/20 hover:bg-white/10 font-bold transition-colors">
            <Phone className="w-5 h-5 text-kraft-300" /> {PHONE_DISPLAY}
          </a>
          <a
            href={whatsappLink('Hello ESTI Packaging, I am interested in your corrugated and packaging products.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 min-h-14 px-6 rounded-full bg-wa hover:bg-wa-dark font-bold transition-colors"
          >
            <MessageSquare className="w-5 h-5" /> WhatsApp
          </a>
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center min-h-11 text-sm text-white/70 underline underline-offset-4 hover:text-white">{EMAIL}</a>
        </div>
      </div>
    </section>
  );
}
