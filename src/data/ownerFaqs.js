// Owner-provided FAQs (Sunil, 2026-11-27). Light grammar polish only — no new facts.
// Shape: { id, q, a, list?, after? }  (list/after render as bullets + closing line)

// Owner-confirmed FINAL flute list (single source for the FAQ and the "under one roof" section).
export const FLUTE_COMBOS = [
  { ply: '3 Ply', combos: ['B', 'C', 'A'] },
  { ply: '5 Ply', combos: ['BB', 'BC', 'BA', 'CA', 'AA'] },
  { ply: '7 Ply', combos: ['BCA', 'ACA', 'AAA'] },
];
export const BOARD_THICKNESS = '3 mm to 15 mm';
export const MAX_SHEET_SIZE = '5,000 mm × 2,500 mm';
export const CUSTOM_LINE = 'All boxes are manufactured to customised requirements, offering flexibility in dimensions, thickness and flute combinations.';

export const OWNER_FAQS = [
  {
    id: 'gsm-bf',
    q: 'What GSM and BF paper do you use?',
    a: 'GSM determines paper weight, while BF (Bursting Factor) indicates its bursting strength. Both are essential for box strength and durability.',
  },
  {
    id: 'plies',
    q: 'How many plies does the box have?',
    a: 'We offer 3-ply, 5-ply and 7-ply corrugated boxes, depending on product weight, stacking and protection requirements.',
  },
  {
    id: 'strength',
    q: 'How do you measure box strength?',
    a: 'BF, ECT and BCT tests help evaluate bursting resistance, edge compression and overall box compression strength.',
  },
  {
    id: 'flutes',
    q: 'Which flute combinations are available?',
    a: 'We offer a wide range of corrugated board constructions to suit different product weights, stacking requirements and transportation needs.',
    list: FLUTE_COMBOS.map((f) => `${f.ply}: ${f.combos.join(', ')}`),
    after: `Board thickness: ${BOARD_THICKNESS}. Max sheet size: ${MAX_SHEET_SIZE}. ${CUSTOM_LINE}`,
  },
  {
    id: 'stacking',
    q: 'What is the stacking weight capacity?',
    a: 'Actual stacking weight is critical. Box specifications must consider total load, stacking height, storage duration and humidity to prevent box collapse.',
  },
  {
    id: 'export',
    q: 'Are your boxes suitable for export packaging?',
    a: 'Absolutely. We offer heavy-duty corrugated packaging designed for demanding storage and export transportation conditions. For suitable applications, it can also replace conventional wooden crates.',
  },
  {
    id: 'coa',
    q: 'Do you provide a Certificate of Analysis (COA)?',
    a: 'We provide a COA with every shipment, covering GSM, BF, moisture content, board thickness, ECT and individual carton weight.',
  },
  {
    id: 'custom',
    q: 'Can you manufacture customised boxes?',
    a: 'Absolutely! Every box is manufactured as per the customer’s specific requirements. From dimensions, design and board strength to printing and internal partitions, our solutions are completely customised.',
  },
  {
    id: 'quantity-delivery',
    q: 'Can you meet our quantity and delivery requirements?',
    a: 'We plan production and supply schedules according to order quantities, specifications and delivery requirements to ensure consistent quality and timely supplies.',
  },
  {
    id: 'delivery-area',
    q: 'Where do you deliver?',
    a: 'We deliver across India and also support customers with export packaging requirements. Delivery arrangements are planned according to customer location, order quantity and logistics requirements.',
  },
  {
    id: 'industries',
    q: 'Which industries do you serve?',
    a: 'We serve every industry that requires high-quality corrugated packaging. Our solutions are customised to meet specific product protection, strength, stacking and transportation requirements.',
  },
];

export const ownerFaq = (id) => OWNER_FAQS.find((f) => f.id === id);

/** Plain/HTML answer text for FAQPage JSON-LD (same words as the visible answer). */
export const faqAnswerHtml = (f) =>
  f.list
    ? `<p>${f.a}</p><ul>${f.list.map((x) => `<li>${x}</li>`).join('')}</ul>${f.after ? `<p>${f.after}</p>` : ''}`
    : f.a;

/** Markdown answer text. */
export const faqAnswerMd = (f) =>
  f.list ? `${f.a}\n\n${f.list.map((x) => `- ${x}`).join('\n')}${f.after ? `\n\n${f.after}` : ''}` : f.a;
