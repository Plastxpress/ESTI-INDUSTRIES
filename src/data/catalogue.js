// Catalogue helpers derived from existing product content (no new facts).
// Home page filter chips: the 9 existing products grouped (labels only).
export const GROUPS = [
  { id: 'all', label: 'All products' },
  { id: 'boxes', label: 'Boxes & Cartons', ids: ['corrugated-boxes', 'un-certified-boxes', 'tall-industrial-carton-esti', 'die-cut-boxes', 'document-storage-archival-boxes'] },
  { id: 'pallets', label: 'Pallets & Bins', ids: ['heavy-duty-pallet', 'octagonal-bulk-bins', 'heat-treated-wooden-pallets'] },
  { id: 'accessories', label: 'Dividers & Inserts', ids: ['custom-dividers'] },
];
export const groupOf = (p) => GROUPS.find((g) => g.ids?.includes(p.id))?.id;

// Key specs shown on product cards / product pages: picked by existing spec label.
const KEY_SPECS = {
  'corrugated-boxes': ['Constructions', 'Board Thickness', 'Bursting Strength'],
  'heavy-duty-pallet': ['Load Capacity', 'Wall Profile', 'Weight Reduction'],
  'un-certified-boxes': ['Certification', 'Drop Test Standard', 'Bursting Strength'],
  'octagonal-bulk-bins': ['Holding Capacity', 'Wall Structure', 'Stacking Height'],
  'tall-industrial-carton-esti': ['Height Range', 'Board Structure', 'Flute Orientation'],
  'die-cut-boxes': ['Dimensional Tolerance', 'Locking Types', 'Cutting Process'],
  'custom-dividers': ['Cell Arrangements', 'Board Options', 'Assembly'],
  'document-storage-archival-boxes': ['Board Strength', 'Typical Dimensions', 'Lid Construction'],
  'heat-treated-wooden-pallets': ['Pallet Types', 'Export Certification', 'Treatments Available'],
};
export const keySpecs = (p, n = 3) =>
  (KEY_SPECS[p.id] || []).slice(0, n).map((label) => p.specs.find((s) => s.label === label)).filter(Boolean);

// Industry -> products: a product is listed for an industry only when the product's
// own existing "Recommended Sectors" (applications) text names that sector.
const INDUSTRY_KEYWORDS = {
  'Heavy Engineering & Industrial Equipment': ['heavy industrial', 'machinery'],
  'Automotive & Auto Components': ['automotive'],
  'Engineering & Manufacturing': ['engineering', 'machinery', 'metal components', 'forged components'],
  'Electrical & Electronics': ['electrical', 'electronic'],
  'FMCG & Consumer Products': ['fmcg'],
  'Lubricants, Oils & Chemicals': ['lubricants', 'oils', 'chemical', 'solvents'],
  'Pharmaceutical & Healthcare': ['pharmaceutical', 'medical'],
  'Food Processing & Food Products': ['food'],
  'Agriculture & Agro Products': ['agro', 'agricultural'],
  'Fruits & Vegetables': ['fruits & vegetables'],
  'E-commerce & Retail': ['e-commerce', 'retail'],
  'Logistics & Warehousing': ['logistics', 'warehousing', 'freight'],
  'Export & International Shipping': ['export'],
  'Furniture & Industrial Products': ['furniture'],
  'Textiles & Apparel': ['textiles', 'fabrics'],
  'Printing & Stationery': ['stationery', 'printing'],
};
export const productsForIndustry = (products, name) => {
  const kws = INDUSTRY_KEYWORDS[name] || [];
  return products.filter((p) => kws.some((k) => p.applications.toLowerCase().includes(k)));
};
