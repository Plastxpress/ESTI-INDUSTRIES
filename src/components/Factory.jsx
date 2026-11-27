import React, { useEffect, useState } from 'react';
import Img from './Img';
import LazyVideo, { AV1_TYPE } from './LazyVideo';
import More from './More';
import CoaNote from './CoaNote';
import SectionHead from './SectionHead';
import {
  Factory as FactoryIcon,
  CheckCircle,
  Globe2,
  Leaf,
  ShieldCheck,
  Clock,
  HeartHandshake,
  FlaskConical,
  Maximize2,
  X,
  VolumeX,
  ArrowRight,
  Ruler,
} from 'lucide-react';

export const machineryHighlights = [
  {
    title: 'Imported 5-Ply Board Plant (2200 mm)',
    description: 'Fully automatic high-speed corrugating line producing 3-ply, 5-ply, and 7-ply heavy boards in A, B, and C flutes with steam-controlled moisture retention.',
  },
  {
    title: '1800 x 3500 mm Printer Slotter',
    description: 'Fully automatic 2-color printer slotter—one of the largest in the market—delivering precision scoring, slotting, and crisp flexo printing.',
  },
  {
    title: 'Automated Stitchers & Gluers',
    description: 'Equipped with automatic single and two-piece heavy-duty stitchers and automated gluing lines for rapid case assembly.',
  },
  {
    title: 'Quality Testing Laboratory',
    description: 'Fully equipped in-house testing lab monitoring Bursting Strength (BF), Edge Crush Test (ECT), Ring Crush Test (RCT), and Cobb moisture absorption.',
  },
];

export const coreValues = [
  { icon: Clock, title: 'On Time Delivery', desc: 'Disciplined production scheduling with dedicated buffer inventory for scheduled B2B dispatches.' },
  { icon: ShieldCheck, title: 'Consistent Superior Quality', desc: 'Rigorous batch-by-batch QA lab verification ensures every box complies with certified compression targets.' },
  { icon: HeartHandshake, title: 'Invest in Relations', desc: 'More than a vendor—we work as long-term strategic partners focused on mutual growth.' },
  { icon: Leaf, title: 'Sustainability & "Go Green"', desc: 'Prioritizing 100% recyclable, biodegradable kraft paper to reduce environmental waste.' },
];

const photos = [
  { src: '/assets/images/machinery-corrugator-line.jpg', alt: 'Automated High-Speed Corrugator Line', label: 'Automated Corrugator Line' },
  { src: '/assets/images/warehouse-paper-reels.jpg', alt: 'High-Capacity Paper Reel & Board Staging', label: 'Paper Reel & Board Storage' },
  { src: '/assets/images/conveyor-bundling-line.jpg', alt: 'Automated Conveyor & Bundling Line', label: 'Conveyor & Bundling Line' },
  { src: '/assets/images/warehouse-forklift-dispatch.jpg', alt: 'Forklift Logistics & Heavy Cargo Pallet Dispatch', label: 'Forklift & Pallet Logistics' },
];

export default function Factory() {
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  useEffect(() => {
    if (!isFullscreenOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setIsFullscreenOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFullscreenOpen]);

  return (
    <section id="factory" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHead
            eyebrow="Manufacturing Infrastructure & Core Values"
            title="About Our Factories & Capabilities"
            lead="We offer end-to-end packaging solutions (along with packaging design and contract packaging) for all industries, backed by 30+ years of manufacturing pedigree."
          />
        </div>

        {/* Machinery + video */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-6 reveal">
            <h3 className="font-grotesk text-2xl font-bold text-ink">Advanced Automated Machinery & In-House Testing</h3>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Our manufacturing facility is equipped with a fully automatic, imported 5-ply board plant (2200 mm) capable of producing 3-ply, 5-ply, and 7-ply corrugated boards in A, B, and C flutes, with a total production capacity of <strong className="text-ink">1,200 tons per month</strong>, including a spare capacity of approximately <strong className="text-ink">500 tons</strong> ready for immediate client onboarding.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {machineryHighlights.map((m) => (
                <li key={m.title} className="flex items-start gap-3 rounded-2xl bg-paper px-4 py-3">
                  <CheckCircle className="w-5 h-5 text-kraft-700 shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-ink">{m.title}</span>
                </li>
              ))}
            </ul>
            <More className="mt-4" more="See machinery details" less="Hide machinery details">
              <dl className="space-y-4">
                {machineryHighlights.map((m) => (
                  <div key={m.title}>
                    <dt className="text-sm font-bold text-ink">{m.title}</dt>
                    <dd className="mt-1 text-sm text-ink-soft leading-relaxed">{m.description}</dd>
                  </div>
                ))}
              </dl>
            </More>
            <p className="mt-6 flex items-start gap-3 rounded-2xl border border-line p-4 text-sm text-ink">
              <FlaskConical className="w-5 h-5 text-kraft-700 shrink-0" />
              Our in-house design team specializes in innovative packaging concepts and value engineering to ensure optimal performance and cost-efficiency.
            </p>
            <CoaNote className="mt-3" />
          </div>

          <div className="lg:col-span-6 space-y-3 reveal">
            <div
              className="relative rounded-[2rem] overflow-hidden bg-ink aspect-[16/10] group cursor-pointer"
              onClick={() => setIsFullscreenOpen(true)}
              title="Click to watch manufacturing video in full screen"
            >
              <LazyVideo
                src="/assets/videos/factory-manufacturing.mp4"
                poster="/assets/videos/posters/factory-manufacturing.webp"
                label="Automated Corrugator & Box Line"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/30 pointer-events-none" />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-kraft-500 px-3 py-1 text-xs font-bold text-ink">
                  <span className="w-2 h-2 rounded-full bg-ink animate-pulse" /> Factory Floor in Action
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-ink/70 px-2.5 py-1 text-[11px] text-white/80">
                  <VolumeX className="w-3 h-3" /> No Sound
                </span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-4 text-white">
                <div className="pointer-events-none">
                  <h4 className="font-grotesk text-lg font-bold">Automated Corrugator & Box Line</h4>
                  <p className="text-xs text-kraft-300 font-semibold mt-0.5">Click to watch full screen</p>
                </div>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setIsFullscreenOpen(true); }}
                  className="w-11 h-11 shrink-0 inline-flex items-center justify-center rounded-full bg-ink/60 hover:bg-ink/80 transition-all group-hover:scale-110"
                  aria-label="Watch fullscreen"
                  title="Expand to Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {photos.map((ph) => (
                <figure key={ph.src} className="group overflow-hidden rounded-2xl bg-paper">
                  <div className="overflow-hidden">
                    <Img src={ph.src} alt={ph.alt} size="sm" className="w-full h-24 object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <figcaption className="px-2 py-2 text-center text-[11px] font-bold text-ink">{ph.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* Packaging Guide link (tools live on /packaging-guide) */}
        <a
          href="/packaging-guide"
          className="group mt-16 grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_auto] items-center gap-5 rounded-[2rem] bg-ink p-6 sm:p-8 text-white transition-colors hover:bg-ink-2 reveal"
        >
          <Ruler className="w-8 h-8 text-kraft-400" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-kraft-300">Step 1</p>
            <h3 className="mt-1 font-grotesk text-lg sm:text-xl font-bold">Start from the board, not the box</h3>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-kraft-300">Step 2</p>
            <h3 className="mt-1 font-grotesk text-lg sm:text-xl font-bold">Die-line · FEFCO 0201 regular slotted carton</h3>
          </div>
          <span className="inline-flex items-center gap-2 justify-self-start md:justify-self-end min-h-12 px-6 rounded-full bg-kraft-500 group-hover:bg-kraft-400 text-ink text-sm font-bold">
            Packaging Guide <ArrowRight className="w-4 h-4" />
          </span>
        </a>

        {/* Export capability */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-[2rem] bg-paper p-6 sm:p-10 reveal">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-kraft-700">
              <Globe2 className="w-4 h-4" /> Export Capability & Free Trade Agreement (FTA) Advantage
            </p>
            <h3 className="mt-3 font-grotesk text-2xl sm:text-3xl font-extrabold text-ink">Up to 40% Reduction in Packaging Cost from India</h3>
            <p className="mt-4 text-ink-soft leading-relaxed">
              In today’s competitive market, optimizing procurement is key to increasing profit margins. ESTI Packaging offers cost-effective corrugated boxes directly from India—a global hub for high-quality packaging.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Lower labor & competitive raw material costs', 'FTA agreements with global trade partners', 'Skilled, experienced 30-year workforce', 'Rapidly improving port & logistics corridors'].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <CheckCircle className="w-4 h-4 text-kraft-700 shrink-0" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 rounded-3xl overflow-hidden bg-white border border-line">
            <div className="p-6 text-center">
              <p className="font-grotesk text-4xl font-extrabold text-kraft-700">Up to -40%</p>
              <p className="mt-1 text-sm font-bold text-ink">Potential Total Landed Cost Savings</p>
              <p className="mt-2 text-xs text-ink-soft leading-relaxed">Access export-grade, heavy-duty cartons directly from India with Free Trade Agreement tariff benefits.</p>
            </div>
            <div className="relative aspect-video bg-ink">
              <LazyVideo
                src="/assets/videos/export-capability.mp4"
                poster="/assets/videos/posters/export-capability.webp"
                label="Export Capability"
                controls
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 right-3 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-bold text-white pointer-events-none">ISPM-15 / Sea Export</span>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div id="why-esti" className="mt-16">
          <div className="reveal">
            <SectionHead as="h3" eyebrow="Why ESTI" title="Our Core Values & Customer Commitment" lead="More than your packaging supplier — we work as your dedicated strategic partners." />
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="rounded-3xl border border-line p-6 transition-all hover:border-kraft-400 hover:-translate-y-0.5">
                  <span className="w-12 h-12 rounded-2xl bg-ink text-kraft-300 flex items-center justify-center"><Icon className="w-6 h-6" /></span>
                  <h4 className="mt-4 font-grotesk text-lg font-bold text-ink">{val.title}</h4>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {isFullscreenOpen && (
        <div className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6" onClick={() => setIsFullscreenOpen(false)}>
          <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <div className="w-full flex items-center justify-between text-white pb-3 px-1">
              <div className="flex items-center gap-2">
                <FactoryIcon className="w-4 h-4 text-kraft-400" />
                <span className="text-xs sm:text-sm md:text-base font-bold">ESTI Packaging — Manufacturing Line Operations</span>
                <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/10 text-kraft-300">Without Sound</span>
              </div>
              <button type="button" onClick={() => setIsFullscreenOpen(false)} className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center" aria-label="Close fullscreen video">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-white/10">
              <video autoPlay loop muted playsInline controls className="w-full max-h-[76vh] object-contain mx-auto">
                <source src="/assets/videos/factory-manufacturing.webm" type={AV1_TYPE} />
                <source src="/assets/videos/factory-manufacturing.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="text-xs text-white/60 mt-2.5 text-center">
              Live manufacturing footage: High-speed corrugating line converting multi-ply kraft paperboard into heavy-duty boxes.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
