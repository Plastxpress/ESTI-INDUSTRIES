// Product content — moved verbatim from the original single-page Products section.
// Only edits: removed stray word "Ransom" (octagonal bins subtitle) and renamed the
// confusing "Core Pedigree (Since 1995)" badge to "Since 1995".

const CATALOG = [
  {
    id: 'corrugated-boxes',
    title: 'Corrugated Boxes & Master Shipping Cartons',
    subtitle: 'High-Burst Strength 3-Ply, 5-Ply & 7-Ply Shipping Boxes',
    image: '/assets/images/corrugated-custom-bicycle-box.png',
    images: [
      '/assets/images/corrugated-custom-bicycle-box.png',
      '/assets/images/corrugated-box-line.png',
      '/assets/images/corrugated-box-dispatch.jpg',
      '/assets/images/corrugated-flute-profiles.jpeg',
      '/assets/images/corrugated-bokz-dual.jpg',
      '/assets/images/corrugated-bokz-single.jpg',
      '/assets/images/corrugated-flat-pallet-shipper.jpg'
    ],
    imageLabels: [
      'Custom Fitted Box',
      'Production Line',
      'Stacking & Dispatch',
      'Flute Profiles (A, C, B)',
      'Dual Box System',
      'Heavy-Duty Shipper',
      'Flat Pallet Shipper'
    ],
    extraDescription: [
      'Driven by engineering excellence, innovation, and advanced manufacturing, we develop packaging designed to meet the demanding performance, protection, and sustainability requirements of modern industries.',
      'Our capabilities extend from standard corrugated packaging to heavy-duty and engineered packaging systems, offering dependable strength, dimensional precision, and consistent quality.',
      'With modern manufacturing infrastructure and a commitment to continuous improvement, we deliver packaging engineered for performance, built for reliability, and designed for value.'
    ],
    category: 'Corrugated & Pallet Boxes',
    badge: 'Since 1995',
    description: 'We produce boards ranging from 3mm to 15mm in thickness in custom flute combinations of B, C, A, BB, BC, BA, CA, AA, BCA, ACA, and AAA. Maximum sheet size of 5000mm in length and 2500mm in width, enabling unmatched structural integrity and efficiency for extra-large jumbo box manufacturing.',
    specs: [
      { label: 'Board Thickness', value: '3 mm to 15 mm custom thickness range' },
      { label: 'Flute Combinations', value: 'B, C, A, BB, BC, BA, CA, AA, BCA, ACA, AAA' },
      { label: 'Max Sheet Size', value: '5000 mm length × 2500 mm width (Jumbo Box capacity)' },
      { label: 'Constructions', value: '3-Ply (Single Wall), 5-Ply (Double Wall), 7-Ply (Triple Wall)' },
      { label: 'Bursting Strength', value: '18 to 35+ kg/cm² (customized to client payload)' },
      { label: 'Edge Crush Test', value: 'ECT 32 up to ECT 90+ heavy industrial grade' },
      { label: 'Printing', value: 'High-definition 2-color flexographic computerized slotting' },
      { label: 'Eco Profile', value: '100% Recyclable high-grade virgin & semi-chemical kraft' }
    ],
    features: [
      'Custom flute combinations (B, C, A, BB, BC, BA, CA, AA, BCA, ACA, AAA) for precision load engineering',
      'Massive sheet processing up to 5000 mm × 2500 mm for seamless, ultra-strong jumbo carton conversion',
      'Engineered for automated packing lines and manual rapid taping with high vertical stacking endurance',
      'High moisture-resistant kraft liners suitable for export sea cargo and heavy-duty supply chains'
    ],
    applications: 'FMCG, automotive components, electrical engineering, textiles, pharmaceuticals, e-commerce fulfillment.'
  },
  {
    id: 'heavy-duty-pallet',
    title: 'Heavy-Duty Pallet Boxes & Bulk Containers',
    subtitle: 'Cost-Effective Timber Crate Replacement — Lighter, Smarter, 100% Recyclable (Up to 1,500 kg)',
    image: '/assets/images/ssdn-heavy-duty-pallet.jpg',
    category: 'Corrugated & Pallet Boxes',
    badge: 'Timber Crate Replacement',
    description: "EVERY CRATE YOU USE COSTS YOU — AND THE EARTH. It's time to move beyond heavy, expensive wooden packaging. Switch to ESTI high-strength corrugated export boxes. Lighter. Smarter. Cost-effective. 100% recyclable.",
    specs: [
      { label: 'Load Capacity', value: 'Static load up to 1,500 kg / Dynamic payload up to 800 kg' },
      { label: 'Wall Profile', value: 'Heavy 5-ply & 7-ply AAA/BC heavy-duty corrugated board' },
      { label: 'Weight Reduction', value: 'Up to 50% lighter than traditional wooden crates' },
      { label: 'Pallet Integration', value: 'Compatible with standard Euro (1200x800) and ISO (1200x1000) pallets' },
      { label: 'Sustainability', value: '100% Recyclable — Lighter, smarter & cost-effective' }
    ],
    features: [
      'Eliminates ISPM-15 wooden fumigation certificates and border delays',
      'Delivered flat-packed to save over 70% in inbound transport and storage space',
      'Massive impact absorption reduces shock and vibration during forklift transit',
      'Significantly lowers freight and handling costs for export consignments',
      "It's time to move beyond heavy, expensive wooden packaging with ESTI high-strength corrugated export boxes",
      'Lighter. Smarter. Cost-effective. 100% recyclable'
    ],
    applications: 'Automotive engines, gearbox assemblies, pumps, forged components, heavy industrial machinery.'
  },
  {
    id: 'un-certified-boxes',
    title: 'UN 1266 Certified Hazardous Cargo Boxes',
    subtitle: 'Certified Packaging for Class 3 Flammable Liquids & Dangerous Goods',
    image: '/assets/images/un-certified-box.jpg',
    images: [
      '/assets/images/un-certified-box.jpg',
      '/assets/images/un-certified-bulk-shipper.jpg',
      '/assets/images/un-certified-4g-cartons.jpg',
      '/assets/images/un-certified-flute-stack.jpg'
    ],
    imageLabels: [
      'UN Certified Box',
      'Bulk UN Shipper',
      '4G/4GV Cartons',
      'Corrugated Board Stack'
    ],
    category: 'UN Certified Boxes',
    badge: 'UN 1266 / 4GV Certified',
    description: 'Rigidly tested and officially certified UN packaging compliant with IMDG (Sea), ICAO/IATA (Air), and ADR (Road) regulations for the domestic transit and international export of hazardous and flammable liquid products.',
    specs: [
      { label: 'Certification', value: 'UN 1266 Class 3 Flammable Liquids (Packaging Group II & III)' },
      { label: 'Drop Test Standard', value: 'Certified drop tested from 1.2m to 1.8m per UN protocol' },
      { label: 'Bursting Strength', value: 'Exceeds 24 kg/cm² hydraulic burst pressure' },
      { label: 'Identification', value: 'Pre-printed UN specification marking, orientation arrows, diamond labels' }
    ],
    features: [
      'Meets all international port clearance requirements without customs rejections',
      'High Cobb sizing ensures zero delamination in high-humidity sea transits',
      'Internal partition configurations for tin cans, bottles, and carboys',
      'Supplied with certified compliance documentation for hazardous exports'
    ],
    applications: 'Perfumery products, industrial solvents, adhesives, agro-chemicals, paints, lubricants and oils.'
  },
  {
    id: 'octagonal-bulk-bins',
    title: 'Octagonal Jumbo Bulk Bins & Drum Cartons',
    subtitle: 'Built to Protect - High Radial Outward Pressure Storage',
    image: '/assets/images/octagonal-bulk-bin.jpg',
    images: [
      '/assets/images/octagonal-bulk-bin.jpg',
      '/assets/images/octagonal-bulk-bin-benzo.png',
      '/assets/images/octagonal-bulk-bin-pallet.jpg',
      '/assets/images/octagonal-bulk-bin-end-caps.jpg'
    ],
    imageLabels: [
      'Standard Octabin',
      'Multi-Size Octabins',
      'Pallet-Mounted Octabin',
      'Open End-Cap View'
    ],
    category: 'Corrugated & Pallet Boxes',
    badge: 'Heavy Industrial Grade',
    description: 'Heavy-duty 8-sided octagonal corrugated bulk bins featuring heavy top and bottom caps. Specially designed to resist extreme outward hydrostatic pressure exerted by dense loose granular materials.',
    specs: [
      { label: 'Design Geometry', value: '8-sided octagonal sleeve with locking top/bottom end caps' },
      { label: 'Wall Structure', value: 'Reinforced 5-ply / 7-ply high-puncture resistant board' },
      { label: 'Holding Capacity', value: '500 kg to 1,000 kg bulk filling capacity' },
      { label: 'Stacking Height', value: 'Engineered for 2-high warehouse stacking when filled' }
    ],
    features: [
      'Octagonal geometry distributes lateral bursting forces evenly across 8 corners',
      'Replace steel or fiber drums with 100% recyclable paper alternatives',
      'Quick single-person folding assembly on the production line',
      'Custom printed warning symbols, batch barcodes, and corporate branding'
    ],
    applications: 'Plastic resin granules, masterbatches, rubber chemicals, powders, metal fasteners, agricultural seeds.'
  },
  {
    id: 'tall-industrial-carton-esti',
    title: 'Telescopic Vertical Industrial Cartons',
    subtitle: 'Custom 2-Meter Tall Corrugated Carton for Industrial Shafts & Long Profiles',
    image: '/assets/images/tall-industrial-carton-esti.jpg',
    images: [
      '/assets/images/tall-industrial-carton-esti.jpg',
      '/assets/images/tall-carton-hdwell.png',
      '/assets/images/tall-cartons-pair.jpg'
    ],
    imageLabels: [
      'ESTI 2-Meter Carton',
      'Printed Tall Carton',
      'Telescopic Tall Boxes'
    ],
    category: 'Custom & Large Format',
    badge: '2-Meter Extra Tall',
    description: 'Custom-engineered extra-tall corrugated carton towering over 2 meters in height. Built with high-caliper vertical fluting to provide extraordinary column strength for long industrial components, roll goods, and vertical machinery assemblies without bowing.',
    specs: [
      { label: 'Height Range', value: 'Over 2,000 mm (2 meters / 6.5+ feet) vertical height' },
      { label: 'Flute Orientation', value: 'Vertical machine-direction fluting for extreme axial load' },
      { label: 'Board Structure', value: 'High-ECT 5-ply / 7-ply heavy corrugated kraft' },
      { label: 'End Closure', value: 'Top and bottom full-overlap flaps or independent locking end caps' },
      { label: 'Tear Resistance', value: 'High puncture resistance against sharp internal metal edges' },
      { label: 'Manufacture', value: 'Produced in-house at ESTI Packaging facility' }
    ],
    features: [
      'Authentic ESTI production capability solving the common B2B challenge of packaging extra-tall cargo',
      'Eliminates expensive custom wooden crating for long components and structural extrusions',
      'Superior vertical column stiffness prevents folding or bending during crane or forklift slinging',
      'Delivered flat-packed to maximize customer storage density prior to pack-out'
    ],
    applications: 'Industrial drive shafts, aluminum & steel extrusions, roll fabrics, architectural trim, precision hydraulic rams.'
  },
  {
    id: 'die-cut-boxes',
    title: 'Precision Die-Cut Boxes & Ergonomic Trays',
    subtitle: 'Flatbed CNC Die-Cutting with Integrated Handholes & Interlocks',
    image: '/assets/images/die-cut-corrugated.jpg',
    images: [
      '/assets/images/die-cut-corrugated.jpg',
      '/assets/images/die-cut-handle-partition.jpg',
      '/assets/images/die-cut-custom-insert.jpg',
      '/assets/images/die-cut-mailer-sleeve.jpg',
      '/assets/images/die-cut-open-tuck-top.jpg',
      '/assets/images/die-cut-insulated-box.jpg'
    ],
    imageLabels: [
      'CNC Die-Cut Box',
      'Handle Partition Box',
      'Custom Insert Tray',
      'Mailer Sleeve',
      'Tuck-Top Mailer',
      'Insulated Shipper'
    ],
    category: 'Die-Cut & Partitions',
    badge: 'CNC Precision Die-Cut',
    description: 'Custom-cut corrugated packaging produced with steel-rule die tooling to sub-millimeter precision. Features integrated ergonomic carrying handles, self-locking fold tabs, and display-ready wrap designs.',
    specs: [
      { label: 'Cutting Process', value: 'High-speed flatbed & rotary CNC automated die-cutting' },
      { label: 'Dimensional Tolerance', value: '±0.5 mm precision CAD cutting accuracy' },
      { label: 'Locking Types', value: 'Snap-lock bottom (1-2-3), crash-lock, self-tuck mailer style' },
      { label: 'Handle Options', value: 'Oval handholes, ventilation slits, tear-strip perforations' }
    ],
    features: [
      'Self-assembling structures eliminate adhesive tape for faster packing',
      'Punched carrying handles facilitate easy warehouse and consumer handling',
      'Smooth, burr-free edges ensure safe handling without paper cuts',
      'Optimized sheet layouts maximize board utilization and lower unit costs'
    ],
    applications: 'E-commerce subscription boxes, fruits & vegetables, retail shelf-ready packs, hardware tools, electronic appliances.'
  },
  {
    id: 'custom-dividers',
    title: 'Custom Slotted Cell Dividers & Partition Grids',
    subtitle: 'Interlocking Corrugated Partitions for Precision Component Isolation',
    image: '/assets/images/custom-dividers.jpg',
    category: 'Die-Cut & Partitions',
    badge: 'Zero-Scratch Protection',
    description: 'Engineered interlocking corrugated partition sets that create individual isolated cells inside master shipping cartons, ensuring zero product-to-product contact and maximum inner column stacking reinforcement.',
    specs: [
      { label: 'Cell Arrangements', value: '2x2, 3x4, 4x6 up to 48-cell custom matrix configurations' },
      { label: 'Board Options', value: 'Heavy B-flute corrugated' },
      { label: 'Assembly', value: 'Pre-assembled collapsible sets or flat-slot knocked down' },
      { label: 'Surface Contact', value: 'Anti-scuff virgin kraft liner prevents component abrasion' }
    ],
    features: [
      'Separates delicate finished components to eliminate scratches and denting',
      'Vertical partition walls add up to 40% additional box top-to-bottom crush strength',
      'Folds flat for compact storage and pops open instantly for packing lines',
      '100% recyclable alternative to non-biodegradable molded plastic trays'
    ],
    applications: 'Automotive lighting, machine sensors, cosmetic jars, electrical relays, turned metal components.'
  },
  {
    id: 'document-storage-archival-boxes',
    title: 'Document Storage & Archival Corrugated Boxes',
    subtitle: 'Professional Corrugated Storage Solutions by ESTI Packaging (Organize • Protect • Retrieve)',
    image: '/assets/images/document-storage-stacked.jpg',
    images: [
      '/assets/images/document-storage-stacked.jpg',
      '/assets/images/document-storage-files.png',
      '/assets/images/document-storage-dbs-bank.png',
      '/assets/images/document-storage-jumbo-box.jpg',
      '/assets/images/document-storage-open-lid.jpg',
      '/assets/images/document-storage-banker-box.jpg'
    ],
    imageLabels: [
      'Stacked Archive Storage',
      'Filing System Layout',
      'Branded Document Box',
      'Jumbo Storage Box',
      'Open Lid Design',
      'Standard Banker Box'
    ],
    category: 'Die-Cut & Partitions',
    badge: 'Organize • Protect • Retrieve',
    description: 'Custom-designed corrugated document storage and archival boxes manufactured by ESTI Packaging for the safe, organized, and long-term storage of files, records, documents, and valuable paper collections. Designed for corporate offices, law firms, healthcare facilities, warehouses, and record-management vaults, combining high stacking strength with dedicated labeling areas, locking/hinged lids, and integrated hand-holes for easy handling.',
    specs: [
      { label: 'Typical Dimensions', value: '400 × 300 × 250 mm (A4 / Legal / Box Files, fully customizable L × W × H)' },
      { label: 'Board Strength', value: '3-Ply or Heavy-Duty 5-Ply (BC Flute) for high-density warehouse storage' },
      { label: 'Lid Construction', value: 'Locking-tab design, one-piece hinged lid, or separate lift-off telescoping lid' },
      { label: 'Easy Handling', value: 'Integrated die-cut hand-holes for ergonomic lifting, carrying & shelf retrieval' },
      { label: 'Indexing Panels', value: 'Pre-printed label panels (File No., Department, Year, Contents, Destroy Date)' },
      { label: 'Special Formats', value: 'Drop-front archival boxes for maps/prints and moisture-resistant barrier coatings' }
    ],
    features: [
      'Strong & Stackable: Manufactured using 3-ply or 5-ply corrugated board for reliable stacking and high-density storage',
      'Dedicated Identification Panels: Indexing areas include File No., Department, Year, and Contents classification fields',
      'Ergonomic Hand-Holes: Integrated die-cut hand-holes make boxes easier to lift, carry, and retrieve from high archival shelves',
      'Archival & Drop-Front Designs: Suitable for long-term historical records, manuscripts, maps, and artwork with drop-front access',
      'Custom Sizing & Printing: 1–2 color flexographic printing with custom dimensions, indexing layouts, and company branding'
    ],
    applications: 'Office files & documents, invoices & financial records, legal & statutory records, personnel files, project documentation, hospital medical records, historical archives & library collections.'
  },
  {
    id: 'heat-treated-wooden-pallets',
    title: 'Heat-Treated & Reconditioned Wooden Pallets',
    subtitle: 'ISPM-15 Certified (TR-183 HT-DB) Euro & Four-Way Pallets Across Maharashtra & Goa',
    image: '/assets/images/wooden-pallets-stack.jpg',
    images: [
      '/assets/images/wooden-pallets-stack.jpg',
      '/assets/images/wooden-pallets-warehouse.jpg',
      '/assets/images/wooden-pallets-four-way.jpg',
      '/assets/images/wooden-pallets-euro-stack.jpg'
    ],
    imageLabels: [
      'Standard Wooden Euro Pallets',
      'Warehouse Inventory & Skids',
      'Four-Way Entry Pallet',
      'Euro Pallet Stack'
    ],
    category: 'Corrugated & Pallet Boxes',
    badge: 'ISPM-15 Certified / Zero to Landfill',
    description: 'Comprehensive range of heat-treated wooden pallets, Euro pallets, and reconditioned pallet solutions compliant with international ISPM-15 export regulations across Maharashtra and Goa. Certified under official TR-183 HT-DB heat treatment seals and managed under a sustainable "Zero to Landfill" circular model, delivering identical load-bearing performance and service life to new timber pallets at substantial cost savings.',
    specs: [
      { label: 'Pallet Types', value: '1200 x 800 mm Euro Pallets, Four-Way Entry, CP Pallets, and Heavy Runners' },
      { label: 'Base Constructions', value: 'Close Boarded 3-Base, Perimeter Base, Wing Type, and Close Boarded Perimeter' },
      { label: 'Export Certification', value: '100% ISPM-15 compliant with official TR-183 HT-DB heat-treatment stamp' },
      { label: 'Treatments Available', value: 'ISPM-15 Heat Treatment (HT) & Fumigation Treatment for international customs' },
      { label: 'Service Life & Load', value: 'Same operational service life & dynamic payload capacity as newly manufactured pallets' },
      { label: 'Turnkey Services', value: 'Pallet sourcing, warehouse buffer storage, custom stencilling, heat treatment & dedicated logistics' }
    ],
    features: [
      'Significant Cost Savings: High-quality refurbished pallets save substantial money compared to new timber pallets',
      'Full ISPM-15 Export Clearance: Heat-treated under official seal (TR-183 HT-DB) to prevent pest/quarantine border delays',
      'Sustainable Circular Practice: Strict "Zero to Landfill" reuse model helping clients achieve ESG sustainability targets',
      'Complete Type Matrix: Available in 4-way entry, Euro (1200x800), CP chemical, wing type, and heavy runner designs',
      'End-to-End Supply: Reliable buffer inventory, on-site audits, brand stencilling, and regional dispatch across Maharashtra & Goa'
    ],
    applications: 'Export container shipments, automotive component logistics, FMCG warehousing, chemical drums (CP pallets), pharmaceutical supply chains, heavy industrial freight.'
  }
];

// Page-level data per product: URL, short menu label, SEO title/description
// (written only from the product's own text above) and related products.
const PAGES = {
  'corrugated-boxes': {
    slug: 'corrugated-boxes',
    navLabel: 'Corrugated Boxes',
    seoTitle: 'Jumbo Box Manufacturer in Mumbai | ESTI Packaging Industry',
    h1Location: 'Jumbo Box Manufacturer in Mumbai',
    seoIntro: 'As a jumbo box manufacturer in Mumbai, ESTI Packaging Industry produces 3-ply, 5-ply and 7-ply corrugated boxes and master shipping cartons, including extra-large jumbo boxes.',
    note: 'We also manufacture Broad Flute corrugated boxes as per customer requirements.',
    seoDescription: 'Jumbo box manufacturer in Mumbai: 3, 5 and 7-ply corrugated boxes and master cartons from 3 mm to 15 mm board, jumbo sheets up to 5000 × 2500 mm.',
    related: ['heavy-duty-pallet', 'die-cut-boxes', 'tall-industrial-carton-esti'],
  },
  'heavy-duty-pallet': {
    slug: 'pallet-boxes',
    navLabel: 'Pallet Boxes',
    seoTitle: 'Pallet Box Manufacturer in Mumbai | ESTI Packaging Industry',
    h1Location: 'Pallet Box Manufacturer in Mumbai',
    seoIntro: 'As a pallet box manufacturer in Mumbai, ESTI Packaging Industry makes heavy-duty corrugated pallet boxes and bulk containers that replace timber crates.',
    seoDescription: 'Pallet box manufacturer in Mumbai: heavy-duty corrugated pallet boxes that replace timber crates, static load up to 1,500 kg, 100% recyclable.',
    related: ['octagonal-bulk-bins', 'heat-treated-wooden-pallets', 'corrugated-boxes'],
  },
  'un-certified-boxes': {
    slug: 'un-1266-boxes',
    navLabel: 'UN 1266 Boxes',
    seoTitle: 'UN Certified Boxes Manufacturer in India',
    h1Location: 'UN Certified Boxes Manufacturer in India',
    seoIntro: 'ESTI Packaging Industry is a UN certified boxes manufacturer in India, producing UN 1266 certified packaging for Class 3 flammable liquids and dangerous goods.',
    seoDescription: 'UN certified boxes manufacturer in India: UN 1266 boxes for Class 3 flammable liquids, compliant with IMDG, ICAO/IATA and ADR transport regulations.',
    related: ['corrugated-boxes', 'custom-dividers', 'heavy-duty-pallet'],
  },
  'octagonal-bulk-bins': {
    slug: 'octagonal-bins',
    navLabel: 'Octagonal Bins',
    seoTitle: 'Octagonal Bulk Bins (Octabins) | ESTI Packaging Industry',
    seoDescription: '8-sided octagonal corrugated bulk bins (octabins) with top and bottom caps for 500 kg to 1,000 kg of resin granules, powders and other loose bulk.',
    related: ['heavy-duty-pallet', 'corrugated-boxes', 'tall-industrial-carton-esti'],
  },
  'tall-industrial-carton-esti': {
    slug: '2-metre-tall-cartons',
    navLabel: '2-Metre Tall Cartons',
    seoTitle: '2-Metre Tall Industrial Cartons | ESTI Packaging Industry',
    seoDescription: 'Telescopic vertical corrugated cartons over 2 metres tall with vertical fluting for column strength, for shafts, extrusions and long profiles.',
    related: ['corrugated-boxes', 'heavy-duty-pallet', 'octagonal-bulk-bins'],
  },
  'die-cut-boxes': {
    slug: 'die-cut-boxes',
    navLabel: 'Die-Cut Boxes',
    seoTitle: 'Die-Cut Corrugated Boxes | ESTI Packaging Industry',
    seoDescription: 'Precision die-cut corrugated boxes and trays with ±0.5 mm tolerance, integrated handholes, self-locking tabs and snap-lock or crash-lock bottoms.',
    related: ['custom-dividers', 'corrugated-boxes', 'document-storage-archival-boxes'],
  },
  'custom-dividers': {
    slug: 'dividers',
    navLabel: 'Dividers',
    seoTitle: 'Corrugated Dividers & Partitions | ESTI Packaging Industry',
    seoDescription: 'Interlocking corrugated partition sets from 2x2 up to 48-cell matrices that create individual cells inside master shipping cartons. 100% recyclable.',
    related: ['die-cut-boxes', 'corrugated-boxes', 'un-certified-boxes'],
  },
  'document-storage-archival-boxes': {
    slug: 'document-storage-boxes',
    navLabel: 'Document Storage Boxes',
    seoTitle: 'Document Storage & Archival Boxes | ESTI Packaging Industry',
    seoDescription: 'Corrugated document storage and archival boxes in 3-ply or 5-ply board, with indexing panels, die-cut hand-holes and locking, hinged or lift-off lids.',
    related: ['die-cut-boxes', 'corrugated-boxes', 'custom-dividers'],
  },
  'heat-treated-wooden-pallets': {
    slug: 'wooden-pallets',
    navLabel: 'Wooden Pallets',
    seoTitle: 'ISPM-15 Heat-Treated Pallets | ESTI Packaging Industry',
    seoDescription: 'ISPM-15 compliant heat-treated and reconditioned wooden pallets (TR-183 HT-DB): 1200 x 800 mm Euro and four-way pallets, across Maharashtra & Goa.',
    related: ['heavy-duty-pallet', 'octagonal-bulk-bins', 'corrugated-boxes'],
  },
};

export const PRODUCTS = CATALOG.map((p) => ({
  ...p,
  ...PAGES[p.id],
  // Location line shown in the product H1 (wooden pallets are supplied/reconditioned, not manufactured).
  h1Location: PAGES[p.id].h1Location || (p.id === 'heat-treated-wooden-pallets' ? 'Supplier across Maharashtra & Goa' : 'Manufacturer in Mumbai & Pune'),
  images: p.images || [p.image],
  imageLabels: p.imageLabels || [p.title],
  path: `/${PAGES[p.id].slug}`,
}));

export const productById = (id) => PRODUCTS.find((p) => p.id === id);
export const productBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);
