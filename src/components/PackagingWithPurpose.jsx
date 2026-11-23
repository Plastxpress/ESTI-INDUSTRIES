import React, { useState } from 'react';
import Img from './Img';
import LazyVideo from './LazyVideo';
import More from './More';
import SectionHead from './SectionHead';
import {
  Leaf,
  Recycle,
  ShieldCheck,
  TreePine,
  Truck,
  CheckCircle2,
  Scale,
  Globe2,
  BarChart3,
  Award,
  Droplets,
  AlertTriangle,
  ChevronDown,
} from 'lucide-react';

// Section content (unchanged text).
export const impactMetrics = [
  {
    value: '100%',
    label: 'Recyclable & Biodegradable',
    desc: 'All virgin & recycled kraft grades break down naturally without microplastic residue.',
    icon: Recycle,
    highlight: 'text-emerald-600'
  },
  {
    value: 'Up to 50%',
    label: 'Tare Weight Reduction',
    desc: 'Replacing wooden skids and timber crates slashes overseas shipping fuel emissions.',
    icon: Scale,
    highlight: 'text-amber-600'
  },
  {
    value: 'Zero',
    label: 'Toxic Fumigation (ISPM-15 Exempt)',
    desc: '100% paper construction requires zero methyl bromide or chemical heat treatments.',
    icon: ShieldCheck,
    highlight: 'text-emerald-700'
  },
  {
    value: '1,200 Tons',
    label: 'Monthly Processing Capacity',
    desc: 'High-speed corrugation with 100% closed-loop recovery of edge trim and paper pulp.',
    icon: BarChart3,
    highlight: 'text-blue-600'
  }
];

export const purposePillars = [
  {
    id: 'timber',
    title: 'Forest Conservation & Timber Replacement',
    badge: 'Deforestation Defense',
    icon: TreePine,
    summary: 'Heavy-duty 7-ply AAA corrugated board delivers the stacking rigidity of timber crates while preserving mature forests.',
    stat: '50% Lighter Payload',
    statDesc: 'Massive reduction in air/sea freight cargo tare weight',
    points: [
      'Eliminates timber harvesting and lumber waste in global supply chains',
      'Certified ISPM-15 exempt: immediate international customs clearance without border quarantine',
      'Delivered knocked-down flat, cutting inbound transport fuel by up to 70%',
      'Surpasses 1,500 kg static load capacity through high-ECT flute architecture'
    ],
    video: '/assets/videos/corrugated-timber-replacement.mp4',
    poster: '/assets/videos/posters/corrugated-timber-replacement.webp',
    image: '/assets/images/ssdn-heavy-duty-pallet.jpg'
  },
  {
    id: 'plastics',
    title: 'Eliminating Single-Use Packaging Plastics',
    badge: 'Zero Microplastics',
    icon: Leaf,
    summary: 'Engineered honeycomb cushioning and cellular paper partitions replace expanded polystyrene (thermocol) and bubble wrap.',
    stat: '100% Repulpable',
    statDesc: 'Biodegrades naturally in soil and water within months',
    points: [
      'Hexagonal honeycomb pads absorb high impact shock without synthetic foam beads',
      'Interlocking slotted cell dividers eliminate polyurethane wraps and plastic void fill',
      'Non-toxic, water-based starch adhesives and heavy-metal-free flexographic inks',
      'Compliant with European Packaging and Packaging Waste Regulation (PPWR) directives'
    ],
    image: '/assets/images/honeycomb-packaging.jpg'
  },
  {
    id: 'efficiency',
    title: 'Right-Sized Logistics & Zero-Air Shipping',
    badge: 'Carbon Reduction',
    icon: Truck,
    summary: 'Custom CAD-engineered master containers eliminate shipping empty air, fitting up to 30% more cargo in standard sea containers.',
    stat: '+30% Cube Utilization',
    statDesc: 'More payload per truckload, fewer vehicles on the road',
    points: [
      'Precision sub-millimeter die-cutting prevents product shifting and freight attrition',
      'Engineered column fluting maximizes vertical container stacking height safely',
      'Direct reduction in scope-3 supply chain greenhouse gas emissions',
      'Ergonomic handling cutouts minimize warehouse operator lifting fatigue'
    ],
    image: '/assets/images/corrugated-box-stacked.jpg'
  },
  {
    id: 'circularity',
    title: 'Closed-Loop Manufacturing & Zero-Waste Plant',
    badge: '100% Circularity',
    icon: Recycle,
    summary: 'Our 2,200 mm corrugating plant operates on a closed-loop recycling discipline where every paper scrap is recycled.',
    stat: 'Zero Landfill Trim',
    statDesc: '100% scrap collection and factory repulping',
    points: [
      'Computerized slitting guarantees minimum board waste per order run',
      'All manufacturing off-cuts are compressed into dense bales and returned to paper mills',
      'Low-temperature corrugating systems designed for optimal thermal energy recovery',
      'Long-term client partnerships establishing circular packaging take-back programs'
    ],
    image: '/assets/images/controlled-moisture-corrugator.jpg'
  }
];

export default function PackagingWithPurpose({ index }) {
  const [active, setActive] = useState(purposePillars[0].id);

  return (
    <section id="purpose" className="relative overflow-hidden bg-ink text-white py-16 md:py-24">
      <div className="absolute -left-40 top-20 w-[30rem] h-[30rem] rounded-full bg-kraft-500/10 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal">
          <SectionHead
            tone="dark"
            index={index}
            eyebrow="Sustainability & Engineering Integrity"
            title="Packaging with Purpose"
            lead={<>At <strong className="text-white">ESTI Packaging</strong>, our purpose extends beyond manufacturing boxes. We design industrial packaging systems that actively conserve natural resources, eliminate hazardous chemical fumigation, slash freight fuel emissions, and guarantee zero product damage across global supply routes.</>}
          />
        </div>

        {/* Impact metrics */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 border-t border-white/10 reveal">
          {impactMetrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className={`py-6 lg:py-8 pr-4 ${i % 2 ? 'pl-4 sm:pl-6' : ''} ${i > 0 ? 'lg:pl-6 lg:border-l lg:border-white/10' : ''} ${i % 2 ? 'border-l border-white/10 lg:border-l' : ''}`}>
                <Icon className="w-5 h-5 text-kraft-400" />
                <p className="mt-3 font-grotesk text-3xl sm:text-4xl font-extrabold text-kraft-300 tracking-tight">{m.value}</p>
                <p className="mt-1 text-sm font-bold text-white">{m.label}</p>
                <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Pillars: media on one side, accordion on the other */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-36 reveal">
            <div className="relative aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-ink-2 border border-white/10">
              {purposePillars.map((p) => (
                <div
                  key={p.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${p.id === active ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                  aria-hidden={p.id !== active}
                >
                  {p.video ? (
                    <LazyVideo src={p.video} poster={p.poster} label={p.title} className="w-full h-full object-cover" />
                  ) : (
                    <Img src={p.image} alt={p.title} className="w-full h-full object-cover" sizes="(min-width: 1024px) 480px, 100vw" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/90 to-transparent">
                    <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-kraft-300">
                      <Globe2 className="w-3.5 h-3.5" /> Real-World Application
                    </p>
                    <p className="mt-1 text-sm text-white/85">ESTI {p.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10 reveal">
            {purposePillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <details
                  key={p.id}
                  name="purpose-pillars"
                  open={i === 0}
                  onToggle={(e) => { if (e.currentTarget.open) setActive(p.id); }}
                  className="more group/p"
                >
                  <summary className="flex items-center gap-4 py-5 min-h-16 cursor-pointer" data-pillar-tab="">
                    <span className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-open/p:bg-kraft-500 group-open/p:border-kraft-500 transition-colors">
                      <Icon className="w-5 h-5 text-kraft-300 group-open/p:text-ink" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-kraft-300">{p.badge}</span>
                      <h3 className="mt-0.5 font-grotesk text-lg sm:text-xl font-bold text-white leading-snug">{p.title}</h3>
                    </span>
                    <ChevronDown className="more-chev w-5 h-5 text-white/60 shrink-0" aria-hidden="true" />
                  </summary>
                  <div className="pb-6 pl-0 sm:pl-[3.75rem]">
                    <p className="text-white/75 leading-relaxed">{p.summary}</p>
                    <div className="mt-4 flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4">
                      <Award className="w-6 h-6 text-kraft-300 shrink-0" />
                      <div>
                        <p className="font-grotesk text-2xl font-extrabold text-kraft-300">{p.stat}</p>
                        <p className="text-sm text-white/70">{p.statDesc}</p>
                      </div>
                    </div>
                    <h4 className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-white/60">Actionable Environmental & Supply Chain Benefits:</h4>
                    <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {p.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" /> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              );
            })}
          </div>
        </div>

        {/* Climate defense & quality preservation */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="reveal">
            <SectionHead
              tone="dark"
              as="h3"
              eyebrow="Climate Defense & Quality Preservation"
              title="Calibrated Moisture Control & Mold-Free Assurance"
              lead="Industrial corrugated packaging engineered to preserve structural integrity, eliminate humidity sagging, and guarantee 100% mold-free export protection."
            />
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Moisture control */}
            <article className="rounded-[2rem] bg-white text-ink overflow-hidden reveal">
              <div className="relative aspect-[16/9] bg-ink-2">
                <Img src="/assets/images/moisture-controlled-corrugator.jpg" alt="Precision Moisture Control. Consistent Quality." className="w-full h-full object-cover" sizes="(min-width: 1024px) 600px, 100vw" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-ink/85 backdrop-blur px-3 py-1 text-xs font-bold text-white">
                  <Droplets className="w-3.5 h-3.5 text-kraft-300" /> Moisture Controlled
                </span>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-kraft-700">Precision Regulated</p>
                <h4 className="mt-1 font-grotesk text-xl sm:text-2xl font-bold">Precision Moisture Control. Consistent Quality.</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="rounded-full bg-paper px-3 py-1.5 text-xs font-bold">Effective Bonding & Quality</li>
                  <li className="rounded-full bg-paper px-3 py-1.5 text-xs font-bold">Year-Round Dimensional Stability</li>
                </ul>
                <More className="mt-5">
                  <p className="text-ink-soft leading-relaxed">
                    Our corrugated board manufacturing machines are equipped with advanced moisture control systems, enabling us to regulate and maintain paper moisture levels according to seasonal and environmental conditions. We carefully regulate moisture levels to support consistent paper quality, effective bonding, and dimensional stability—helping ensure reliable packaging performance throughout the year.
                  </p>
                  <p className="mt-3 text-sm text-ink-soft/80">Advanced moisture control systems for year-round quality & dimensional stability</p>
                </More>
              </div>
            </article>

            {/* Mold-free */}
            <article className="rounded-[2rem] bg-white text-ink overflow-hidden reveal">
              <div className="grid grid-cols-2">
                <figure className="relative aspect-square bg-ink-2">
                  <Img src="/assets/images/white-mold-box-damage.jpg" alt="Untreated corrugated box with white mold spots and fungal mildew damage" size="sm" className="w-full h-full object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/90 to-transparent text-white">
                    <span className="flex items-center gap-1 text-xs font-bold text-rose-300"><AlertTriangle className="w-3.5 h-3.5" /> Untreated: Mold Damage</span>
                    <span className="block text-[11px] text-white/75">Fungal spores from damp warehouse storage</span>
                  </figcaption>
                  <span className="absolute top-3 left-3 rounded-full bg-rose-950/85 px-2.5 py-1 text-[11px] font-bold text-rose-200">White Mold Spots</span>
                </figure>
                <figure className="relative aspect-square bg-ink-2">
                  <Img src="/assets/images/mold-free-boxes.jpg" alt="ESTI anti-fungal treated corrugated box completely free of mold and white spots" size="sm" className="w-full h-full object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-ink/90 to-transparent text-white">
                    <span className="flex items-center gap-1 text-xs font-bold text-kraft-300"><ShieldCheck className="w-3.5 h-3.5" /> ESTI: 100% Mold-Free</span>
                    <span className="block text-[11px] text-white/75">Spotless, cleanroom & export compliant</span>
                  </figcaption>
                  <span className="absolute top-3 left-3 rounded-full bg-ink/85 px-2.5 py-1 text-[11px] font-bold text-kraft-200">Anti-Fungal Cured</span>
                </figure>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-kraft-700">Anti-Fungal Treated · Export Certified</p>
                <h4 className="mt-1 font-grotesk text-xl sm:text-2xl font-bold">Zero White Spots & Mold-Free Assurance</h4>
                <ul className="mt-4 flex flex-wrap gap-2">
                  <li className="rounded-full bg-paper px-3 py-1.5 text-xs font-bold">Permanent Spore Growth Inhibition</li>
                  <li className="rounded-full bg-paper px-3 py-1.5 text-xs font-bold">Export & Cleanroom Compliant</li>
                </ul>
                <More className="mt-5">
                  <p className="text-ink-soft leading-relaxed">
                    Cured with anti-fungal treatment to permanently prevent fungal spores and the white spot patches common in damp storage. Clean, hygienic, and compliant for export and sensitive inventory.
                  </p>
                </More>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
