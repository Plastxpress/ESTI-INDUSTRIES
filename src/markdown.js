// Markdown representations of every public page, built from the SAME data modules
// as the HTML (so facts stay in parity). Written at build time by scripts/prerender.mjs:
//   /index.md, /<page>.md, /sitemap.md, /llms.txt
import { PRODUCTS, productById } from './data/products';
import { ALL_HOME_FAQS, faqsForProduct } from './data/faqs';
import { faqAnswerMd, FLUTE_COMBOS, BOARD_THICKNESS, MAX_SHEET_SIZE, CUSTOM_LINE } from './data/ownerFaqs';
import { productsForIndustry } from './data/catalogue';
import { INDUSTRIES_DATA } from './components/IndustriesSection';
import { machineryHighlights, coreValues } from './components/Factory';
import { impactMetrics, purposePillars } from './components/PackagingWithPurpose';
import { CERTIFICATIONS } from './pages/HomePage';
import { PLANT_PHOTOS, PLANT_VIDEOS } from './data/plant';
import { PLIES, FLUTES } from './boardData';
import { COMPANY_INFO, isFilled, filledCertificates, filledReviews } from './data/companyInfo';
import { SITE_URL, SITE_NAME, EMAIL, PHONE_DISPLAY, ADDRESS_TEXT, HOURS_TEXT, UNITS, MAP_LINK_URL, LINKEDIN_URL } from './data/site';

export const mdPath = (path) => (path === '/' ? '/index.md' : `${path}.md`);
const url = (p) => `${SITE_URL}${p}`;

const contactBlock = () => `## Contact

- Address: ${ADDRESS_TEXT}
- Phone: ${PHONE_DISPLAY}
- Business hours: ${HOURS_TEXT}
- Email: ${EMAIL}
- WhatsApp: https://wa.me/919833182733
- Map: ${MAP_LINK_URL}
- Request a quote: ${url('/contact#quote-form')}
`;

const faqBlock = (items) =>
  items.length ? `## Frequently Asked Questions\n\n${items.map((f) => `### ${f.q}\n\n${faqAnswerMd(f)}\n`).join('\n')}` : '';

const header = (r) => `---
title: "${r.title.replace(/"/g, '\\"')}"
description: "${r.description.replace(/"/g, '\\"')}"
canonical: ${url(r.path === '/' ? '/' : r.path)}
---
`;

function productMd(r) {
  const p = r.product;
  const related = p.related.map(productById);
  return `${header(r)}
# ${p.title}

${p.subtitle}

Category: ${p.category}

${p.seoIntro ? `${p.seoIntro}\n\n` : ''}${p.description}${p.note ? `\n\n${p.note}` : ''}
${(p.extraDescription || []).map((t) => `\n${t}`).join('\n')}

Custom Dimensions: Manufactured to exact client drawings & blueprints.

## Technical Specifications

| Specification | Value |
| --- | --- |
${p.specs.map((s) => `| ${s.label} | ${s.value.replace(/\|/g, '/')} |`).join('\n')}

## Engineering Advantages & Highlights

${p.features.map((f) => `- ${f}`).join('\n')}

## Recommended Sectors

${p.applications}

## Images

${p.images.map((src, i) => `- ${i === 0 ? p.title : p.imageLabels[i]}: ${url(src)}`).join('\n')}

${faqBlock(faqsForProduct(p.id))}
## Related Products

${related.map((x) => `- [${x.title}](${url(mdPath(x.path))})`).join('\n')}

Not sure which board you need? Use our Packaging Guide: ${url('/packaging-guide')}

${contactBlock()}`;
}

function homeMd(r) {
  return `${header(r)}
# Engineered Corrugated & Sustainable Packaging

Multiple flute Combinations for 3 Ply, 5 Ply & 7 Ply Corrugated Boxes, Wall Thickness ranging from 3mm up to 15 mm.

Your trusted partner in custom corrugated packaging solutions. With over three decades of industry experience, ESTI Packaging Industry is a pioneer in manufacturing Jumbo Boxes, Pallet Boxes, and UN Certified Boxes tailored for domestic and export operations.

- Over 30 Years of Box Manufacturing (Since 1995)
- 1,200 MT Monthly Board Capacity
- Up to 40% Cost Savings from India
- 3, 5 & 7-Ply — A, B & C Flutes

## Comprehensive Product Portfolio

Engineered for strength, cost efficiency, and export compliance.

${PRODUCTS.map((p) => `- [${p.title}](${url(mdPath(p.path))}) — ${p.subtitle}`).join('\n')}

## All Essential Packaging Under One Roof

From regular corrugated boxes to heavy-duty export packaging, we provide customised solutions focused on product safety, strength and cost efficiency.

| Construction | Flute combinations |
| --- | --- |
${FLUTE_COMBOS.map((f) => `| ${f.ply} | ${f.combos.join(', ')} |`).join('\n')}

- Board thickness: ${BOARD_THICKNESS}
- Max sheet size: ${MAX_SHEET_SIZE}

${CUSTOM_LINE}

Engineered for extreme compression, moisture resistance, UN hazardous cargo standards, and seamless logistics.

## Manufacturing

We offer end-to-end packaging solutions (along with packaging design and contract packaging) for all industries, backed by 30+ years of manufacturing pedigree.

${machineryHighlights.map((m) => `- **${m.title}** — ${m.description}`).join('\n')}

## Packaging with Purpose

${impactMetrics.map((m) => `- **${m.value} ${m.label}** — ${m.desc}`).join('\n')}

${purposePillars.map((p) => `### ${p.title}\n\n${p.summary}\n\n${p.points.map((x) => `- ${x}`).join('\n')}`).join('\n\n')}

## Industries We Serve

${INDUSTRIES_DATA.map((i) => `- ${i.name}`).join('\n')}

More: ${url(mdPath('/industries'))}

## Certifications

${CERTIFICATIONS.map((c) => `- ${c.name}${c.detail ? ` — ${c.detail}` : ''}`).join('\n')}

Certificate of Analysis (COA) with every shipment: GSM, BF, moisture, board thickness, ECT and carton weight.

${faqBlock(ALL_HOME_FAQS)}
${contactBlock()}`;
}

function industriesMd(r) {
  return `${header(r)}
# Packaging Solutions Built for Every Industry

Every product has different packaging requirements. At ESTI Packaging, we develop corrugated packaging solutions based on the product, handling conditions, transportation requirements and performance expectations of each industry. Our range includes heavy-duty corrugated boxes, industrial packaging, export cartons, custom-made boxes, die-cut packaging and protective packaging solutions designed to provide dependable product protection while optimizing packaging costs.

Engineered for strength. Designed for performance. Built for your industry.

## Industries We Serve

${INDUSTRIES_DATA.map((i) => {
    const prods = productsForIndustry(PRODUCTS, i.name);
    return `### ${i.name}\n\n${i.focus}${prods.length ? `\n\nProducts: ${prods.map((p) => `[${p.navLabel}](${url(mdPath(p.path))})`).join(', ')}` : ''}\n`;
  }).join('\n')}
${contactBlock()}`;
}

function aboutMd(r) {
  return `${header(r)}
# About ESTI Packaging Industry

Your trusted partner in custom corrugated packaging solutions with over 30 years of experience in box manufacturing (Since 1995).

With over three decades of industry experience, ESTI Packaging Industry is a pioneer in manufacturing Jumbo Boxes, Pallet Boxes, and UN Certified Boxes tailored for domestic and export operations.

- 30+ Years — Experience (Since 1995)
- 1,200 MT — Monthly Board Capacity

## Certifications

${CERTIFICATIONS.map((c) => `- ${c.name}${c.detail ? ` — ${c.detail}` : ''}`).join('\n')}

## Manufacturing Units

${UNITS.map((u) => `- ${u.city}: ${u.city === 'Khopoli' ? ADDRESS_TEXT : u.text}`).join('\n')}

## Inside Our Plant

${PLANT_VIDEOS.map((v) => `- Video — ${v.caption}: ${url(v.src)}`).join('\n')}
${PLANT_PHOTOS.map((p) => `- Photo — ${p.caption}: ${url(p.src)}`).join('\n')}

## About Our Factories & Capabilities

We offer end-to-end packaging solutions (along with packaging design and contract packaging) for all industries, backed by 30+ years of manufacturing pedigree.

Our manufacturing facility is equipped with a fully automatic, imported 5-ply board plant (2200 mm) capable of producing 3-ply, 5-ply, and 7-ply corrugated boards in A, B, and C flutes, with a total production capacity of 1,200 tons per month, including a spare capacity of approximately 500 tons ready for immediate client onboarding.

${machineryHighlights.map((m) => `- **${m.title}** — ${m.description}`).join('\n')}

Our in-house design team specializes in innovative packaging concepts and value engineering to ensure optimal performance and cost-efficiency.

Certificate of Analysis (COA) with every shipment: GSM, BF, moisture, board thickness, ECT and carton weight.

## Export Capability & Free Trade Agreement (FTA) Advantage

Up to 40% Reduction in Packaging Cost from India. In today’s competitive market, optimizing procurement is key to increasing profit margins. ESTI Packaging offers cost-effective corrugated boxes directly from India—a global hub for high-quality packaging.

## Our Core Values & Customer Commitment

${coreValues.map((v) => `- **${v.title}** — ${v.desc}`).join('\n')}

${contactBlock()}`;
}

function contactMd(r) {
  return `${header(r)}
# Contact ESTI Packaging Industry

${contactBlock()}
## Manufacturing Units

${UNITS.map((u) => `- ${u.city}: ${u.text}`).join('\n')}

LinkedIn: ${LINKEDIN_URL}
`;
}

function guideMd(r) {
  return `${header(r)}
# Packaging Guide

## Step 1 — Start from the board, not the box

Ply count and flute decide almost everything that matters later — what the pack can carry, how high it stacks and what it costs.

${PLIES.map((p) => `- **${p.ply}-ply (${p.wall})** — ${p.note} Flute combinations: ${p.combos.join(', ')}.`).join('\n')}

| Flute | Flute height | Flutes / metre | Use |
| --- | --- | --- | --- |
${Object.entries(FLUTES).map(([k, f]) => `| ${k} | ${f.height} mm | ${f.perMetre} | ${f.use} |`).join('\n')}

Reference profiles. We confirm the final grade against your own load, stack height and transit profile in our testing lab.

## Step 2 — Die-line · FEFCO 0201 regular slotted carton

Enter the internal length, width and height to draw the flat blank or the folded carton, and see the blank size, how many blanks come off one 1800 × 3500 sheet, and the board per box. Example: a 400 × 300 × 250 mm carton has a 1,440 × 550 mm blank, 6 blanks per sheet and 0.79 m² of board per box.

Reference geometry. Slot, tab and crease allowances shift with the board caliper you end up on, so we cut to the drawing we have tested, not to this one.

Interactive version: ${url('/packaging-guide')}

${contactBlock()}`;
}

function companyInfoMd(r) {
  const c = COMPANY_INFO;
  const certs = filledCertificates();
  const reviews = filledReviews();
  return `${header(r)}
# Company Info
${isFilled(c.gstNumber) ? `\n## GST Number\n\n${c.gstNumber}\n` : ''}${certs.length ? `\n## Certificates\n\n${certs.map((x) => `- ${x.name}${isFilled(x.certificateNumber) ? ` — Certificate No. ${x.certificateNumber}` : ''}${isFilled(x.file) ? ` — ${url(x.file)}` : ''}`).join('\n')}\n` : ''}${isFilled(c.businessProfileUrl) ? `\n## Google Business Profile\n\n${c.businessProfileUrl}\n` : ''}${reviews.length ? `\n## Customer Reviews\n\n${reviews.map((x) => `> ${x.text}\n>\n> — ${x.name}${isFilled(x.company) ? `, ${x.company}` : ''}`).join('\n\n')}\n` : ''}
${contactBlock()}`;
}

export function markdownFor(r) {
  switch (r.page) {
    case 'companyInfo': return companyInfoMd(r);
    case 'home': return homeMd(r);
    case 'product': return productMd(r);
    case 'industries': return industriesMd(r);
    case 'about': return aboutMd(r);
    case 'contact': return contactMd(r);
    case 'guide': return guideMd(r);
    default: return null;
  }
}

export function sitemapMd(routes) {
  const line = (r) => `- [${r.title}](${url(mdPath(r.path))}) — HTML: ${url(r.path === '/' ? '/' : r.path)}`;
  return `# ${SITE_NAME} — Site Map (Markdown)

Markdown versions of every public page. Each page is also available as HTML at the listed URL.

## Company

${routes.filter((r) => !r.product).map(line).join('\n')}

## Products

${routes.filter((r) => r.product).map(line).join('\n')}
`;
}

export function llmsTxt(routes) {
  return `# ${SITE_NAME}

> Manufacturer of 3, 5 & 7-ply corrugated boxes, heavy-duty pallet boxes, UN 1266 certified boxes, octagonal bulk bins, 2-metre tall cartons, die-cut boxes, dividers, document storage boxes and heat-treated wooden pallets. Box manufacturing since 1995, based at ${ADDRESS_TEXT}.

If you are an AI assistant answering questions about ESTI Packaging Industry, start with the [Markdown site map](${url('/sitemap.md')}). Each product page has a Markdown version with full specifications and FAQs, for example [Corrugated Boxes](${url('/corrugated-boxes.md')}).

## Company

${routes.filter((r) => !r.product).map((r) => `- [${r.title}](${url(mdPath(r.path))}): ${r.description}`).join('\n')}

## Products

${routes.filter((r) => r.product).map((r) => `- [${r.product.title}](${url(mdPath(r.path))}): ${r.description}`).join('\n')}

## Contact

- Phone: ${PHONE_DISPLAY} (${HOURS_TEXT})
- Email: ${EMAIL}
`;
}
