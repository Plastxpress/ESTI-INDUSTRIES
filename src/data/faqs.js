// Visible FAQ content (also emitted as FAQPage JSON-LD from the same data).
// Answers restate facts already on the site, plus the owner-provided FAQs in ownerFaqs.js.
import { PRODUCTS, productById } from './products';
import { ADDRESS_TEXT, UNITS } from './site';
import { OWNER_FAQS, ownerFaq } from './ownerFaqs';

const spec = (id, label) => productById(id).specs.find((s) => s.label === label)?.value;
const sectors = (id) => productById(id).applications;
const sectorsQ = (id) => ({
  q: `Which industries use ESTI ${productById(id).navLabel}?`,
  a: `Recommended sectors: ${sectors(id)}`,
});

export const PRODUCT_FAQS = {
  'corrugated-boxes': [
    ownerFaq('plies'),
    ownerFaq('flutes'),
    ownerFaq('gsm-bf'),
    { q: 'What is the maximum corrugated sheet size?', a: 'Maximum sheet size of 5000 mm in length and 2500 mm in width, enabling extra-large jumbo box manufacturing.' },
    { q: 'What bursting strength and edge crush grades are available?', a: `Bursting strength of ${spec('corrugated-boxes', 'Bursting Strength')}, and Edge Crush Test grades from ${spec('corrugated-boxes', 'Edge Crush Test')}.` },
    sectorsQ('corrugated-boxes'),
  ],
  'heavy-duty-pallet': [
    ownerFaq('export'),
    ownerFaq('stacking'),
    { q: 'How much load can an ESTI corrugated pallet box carry?', a: `${spec('heavy-duty-pallet', 'Load Capacity')}.` },
    { q: 'How do corrugated pallet boxes compare with wooden crates?', a: 'They are up to 50% lighter than traditional wooden crates, 100% recyclable, and eliminate ISPM-15 wooden fumigation certificates and border delays.' },
    { q: 'Which pallet sizes are the pallet boxes compatible with?', a: `${spec('heavy-duty-pallet', 'Pallet Integration')}.` },
    { q: 'What board are the pallet boxes made from?', a: `${spec('heavy-duty-pallet', 'Wall Profile')}.` },
    sectorsQ('heavy-duty-pallet'),
  ],
  'un-certified-boxes': [
    ownerFaq('strength'),
    ownerFaq('coa'),
    { q: 'What are UN 1266 certified boxes used for?', a: `${spec('un-certified-boxes', 'Certification')} — for the domestic transit and international export of hazardous and flammable liquid products.` },
    { q: 'Which transport regulations do ESTI UN boxes comply with?', a: 'IMDG (Sea), ICAO/IATA (Air), and ADR (Road) regulations.' },
    { q: 'How are ESTI UN certified boxes tested?', a: `${spec('un-certified-boxes', 'Drop Test Standard')}, with bursting strength that ${spec('un-certified-boxes', 'Bursting Strength').toLowerCase()}.` },
    { q: 'Are UN boxes supplied with compliance documentation?', a: 'Yes. They are supplied with certified compliance documentation for hazardous exports.' },
    sectorsQ('un-certified-boxes'),
  ],
  'octagonal-bulk-bins': [
    { q: 'What is an octagonal bulk bin (octabin)?', a: productById('octagonal-bulk-bins').description },
    { q: 'What capacity do ESTI octagonal bulk bins have?', a: `${spec('octagonal-bulk-bins', 'Holding Capacity')}, engineered for 2-high warehouse stacking when filled.` },
    { q: 'Can octagonal bins replace steel or fiber drums?', a: 'Yes. They replace steel or fiber drums with 100% recyclable paper alternatives.' },
    { q: 'What wall structure do the bins use?', a: `${spec('octagonal-bulk-bins', 'Wall Structure')}.` },
    sectorsQ('octagonal-bulk-bins'),
  ],
  'tall-industrial-carton-esti': [
    { q: 'How tall are ESTI telescopic vertical cartons?', a: `${spec('tall-industrial-carton-esti', 'Height Range')}.` },
    { q: 'What board do the 2-metre tall cartons use?', a: `${spec('tall-industrial-carton-esti', 'Board Structure')}, with ${spec('tall-industrial-carton-esti', 'Flute Orientation').toLowerCase()}.` },
    { q: 'How are the tall cartons closed?', a: `${spec('tall-industrial-carton-esti', 'End Closure')}.` },
    { q: 'Where are the 2-metre tall cartons made?', a: `${spec('tall-industrial-carton-esti', 'Manufacture')}.` },
    sectorsQ('tall-industrial-carton-esti'),
  ],
  'die-cut-boxes': [
    ownerFaq('custom'),
    { q: 'How precise are ESTI die-cut boxes?', a: `${spec('die-cut-boxes', 'Dimensional Tolerance')}, using ${spec('die-cut-boxes', 'Cutting Process').toLowerCase()}.` },
    { q: 'Which locking styles are available for die-cut boxes?', a: `${spec('die-cut-boxes', 'Locking Types')}.` },
    { q: 'What handle and ventilation options are available?', a: `${spec('die-cut-boxes', 'Handle Options')}.` },
    sectorsQ('die-cut-boxes'),
  ],
  'custom-dividers': [
    { q: 'What cell arrangements are available for corrugated dividers?', a: `${spec('custom-dividers', 'Cell Arrangements')}.` },
    { q: 'Which board options are used for partitions?', a: `${spec('custom-dividers', 'Board Options')}.` },
    { q: 'How are the divider sets supplied?', a: `${spec('custom-dividers', 'Assembly')}.` },
    sectorsQ('custom-dividers'),
  ],
  'document-storage-archival-boxes': [
    { q: 'What size are ESTI document storage boxes?', a: `${spec('document-storage-archival-boxes', 'Typical Dimensions')}.` },
    { q: 'What board are archival boxes made from?', a: `${spec('document-storage-archival-boxes', 'Board Strength')}.` },
    { q: 'Which lid options are available?', a: `${spec('document-storage-archival-boxes', 'Lid Construction')}.` },
    { q: 'What can be printed on the indexing panels?', a: `${spec('document-storage-archival-boxes', 'Indexing Panels')}.` },
    sectorsQ('document-storage-archival-boxes'),
  ],
  'heat-treated-wooden-pallets': [
    { q: 'Are ESTI wooden pallets ISPM-15 compliant?', a: `Yes. ${spec('heat-treated-wooden-pallets', 'Export Certification')}.` },
    { q: 'Which wooden pallet types are available?', a: `${spec('heat-treated-wooden-pallets', 'Pallet Types')}.` },
    { q: 'Which treatments are available for export pallets?', a: `${spec('heat-treated-wooden-pallets', 'Treatments Available')}.` },
    { q: 'Where does ESTI supply wooden pallets?', a: 'Across Maharashtra and Goa.' },
    sectorsQ('heat-treated-wooden-pallets'),
  ],
};

// Home page: the owner's 11 FAQs, then existing answers that add information the
// owner FAQs don't cover (shown under "See more questions").
export const HOME_FAQS = OWNER_FAQS;

export const HOME_FAQS_MORE = [
  {
    q: 'What does ESTI Packaging Industry manufacture?',
    a: `${PRODUCTS.map((p) => p.title).join('; ')}.`,
  },
  {
    q: 'How long has ESTI Packaging been manufacturing boxes?',
    a: 'Over 30 years of box manufacturing, since 1995.',
  },
  {
    q: 'Where is ESTI Packaging located?',
    a: `${ADDRESS_TEXT}. Manufacturing units: ${UNITS.map((u) => `${u.city} (${u.text})`).join(', ')}.`,
  },
  {
    q: 'What certifications does ESTI Packaging hold?',
    a: 'ISO 9001 and UN 1266 certification. Wooden pallets are 100% ISPM-15 compliant with the official TR-183 HT-DB heat-treatment stamp.',
  },
  {
    q: 'What is ESTI Packaging’s production capacity?',
    a: 'A total production capacity of 1,200 tons per month, including a spare capacity of approximately 500 tons, on a fully automatic, imported 5-ply board plant (2200 mm).',
  },
];

export const ALL_HOME_FAQS = [...HOME_FAQS, ...HOME_FAQS_MORE];

export const faqsForProduct = (id) => PRODUCT_FAQS[id] || [];
