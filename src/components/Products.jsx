import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Layers, 
  ShieldCheck, 
  MessageSquare, 
  Mail, 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  ZoomIn,
  ZoomOut,
  X,
  RotateCcw,
  Images
} from 'lucide-react';

const PRODUCTS_CATALOG = [
  {
    id: 'corrugated-boxes',
    title: 'Corrugated Boxes & Master Shipping Cartons',
    subtitle: 'High-Burst Strength 3-Ply, 5-Ply & 7-Ply Shipping Boxes',
    image: '/assets/images/corrugated-box-line.png',
    images: [
      '/assets/images/corrugated-box-line.png',
      '/assets/images/corrugated-box-dispatch.jpg',
      '/assets/images/corrugated-flute-profiles.jpeg',
      '/assets/images/corrugated-solar-bulk-box.png',
      '/assets/images/corrugated-solar-panel-shipper.png',
      '/assets/images/corrugated-custom-bicycle-box.png'
    ],
    imageLabels: [
      'Production Line',
      'Stacking & Dispatch',
      'Flute Profiles (A, C, B)',
      'Solar Bulk Box',
      'Solar Panel Carton',
      'Custom Fitted Box'
    ],
    category: 'Corrugated & Pallet Boxes',
    badge: 'Core Pedigree (Since 1995)',
    description: 'We produce boards ranging from 3mm to 15mm in thickness in custom flute combinations of E, B, C, A, EB, EC, EA, BC, BA, CA, AA, BCA, ACA, and AAA. Maximum sheet size of 5000mm in length and 2500mm in width, enabling unmatched structural integrity and efficiency for extra-large jumbo box manufacturing.',
    specs: [
      { label: 'Board Thickness', value: '3 mm to 15 mm custom thickness range' },
      { label: 'Flute Combinations', value: 'E, B, C, A, EB, EC, EA, BC, BA, CA, AA, BCA, ACA, AAA' },
      { label: 'Max Sheet Size', value: '5000 mm length × 2500 mm width (Jumbo Box capacity)' },
      { label: 'Constructions', value: '3-Ply (Single Wall), 5-Ply (Double Wall), 7-Ply (Triple Wall)' },
      { label: 'Bursting Strength', value: '18 to 35+ kg/cm² (customized to client payload)' },
      { label: 'Edge Crush Test', value: 'ECT 32 up to ECT 90+ heavy industrial grade' },
      { label: 'Printing', value: 'High-definition 2-color flexographic computerized slotting' },
      { label: 'Eco Profile', value: '100% Recyclable high-grade virgin & semi-chemical kraft' }
    ],
    features: [
      'Custom flute combinations (E, B, C, A, EB, EC, EA, BC, BA, CA, AA, BCA, ACA, AAA) for precision load engineering',
      'Massive sheet processing up to 5000 mm × 2500 mm for seamless, ultra-strong jumbo carton conversion',
      'Engineered for automated packing lines and manual rapid taping with high vertical stacking endurance',
      'High moisture-resistant kraft liners suitable for export sea cargo and heavy-duty supply chains'
    ],
    applications: 'FMCG, automotive components, electrical engineering, textiles, pharmaceuticals, e-commerce fulfillment.'
  },
  {
    id: 'heavy-duty-pallet',
    title: 'Heavy-Duty Pallet Boxes & Bulk Containers',
    subtitle: 'Cost-Effective Heavy Timber Crate Replacement (Up to 1,500 kg)',
    image: '/assets/images/ssdn-heavy-duty-pallet.jpg',
    category: 'Corrugated & Pallet Boxes',
    badge: 'Timber Crate Replacement',
    description: 'Ultra-heavy-duty multi-wall corrugated containers engineered to replace expensive, heavy wooden boxes. Easily strapped to wooden or plastic pallets for safe domestic transit and international containerized shipping.',
    specs: [
      { label: 'Load Capacity', value: 'Static load up to 1,500 kg / Dynamic payload up to 800 kg' },
      { label: 'Wall Profile', value: 'Heavy 5-ply & 7-ply AAA/BC heavy-duty corrugated board' },
      { label: 'Weight Reduction', value: 'Up to 50% lighter than traditional wooden crates' },
      { label: 'Pallet Integration', value: 'Compatible with standard Euro (1200x800) and ISO (1200x1000) pallets' }
    ],
    features: [
      'Eliminates ISPM-15 wooden fumigation certificates and border delays',
      'Delivered flat-packed to save over 70% in inbound transport and storage space',
      'Massive impact absorption reduces shock and vibration during forklift transit',
      'Significantly lowers freight and handling costs for export consignments'
    ],
    applications: 'Automotive engines, gearbox assemblies, pumps, forged components, heavy industrial machinery.'
  },
  {
    id: 'un-certified-boxes',
    title: 'UN 1266 Certified Hazardous Cargo Boxes',
    subtitle: 'Certified Packaging for Class 3 Flammable Liquids & Dangerous Goods',
    image: '/assets/images/un-certified-box.jpg',
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
    subtitle: 'Ransom Built to Protect - High Radial Outward Pressure Storage',
    image: '/assets/images/octagonal-bulk-bin.jpg',
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
    id: 'mattress-furniture-box',
    title: 'Large-Format 8ft × 6ft Mattress Box',
    subtitle: 'Extra-Large Flat-Pack Packaging for 8ft x 6ft Mattresses & Architectural Panels',
    image: '/assets/images/mattress-furniture-box.jpg',
    category: 'Custom & Large Format',
    badge: 'Extra Large Format',
    description: 'Oversized flat-profile corrugated shipping carton manufactured to accommodate full 8 ft × 6 ft (96" × 72" × 10") king and queen size mattresses, flat-pack wooden furniture, and architectural sheet products without sagging.',
    specs: [
      { label: 'Dimensions', value: '8 ft (96") Length × 6 ft (72") Width × 10" Height' },
      { label: 'Board Spec', value: 'High-puncture resistant 5-ply double wall corrugated board' },
      { label: 'Box Style', value: 'Large-format five-panel folder (FPF) or telescope tray system' },
      { label: 'Surface Printing', value: 'Large-bed flexographic branding with dimension & orientation marks' },
      { label: 'Corner Defense', value: 'Folded edge flaps shield vulnerable mattress corners from dragging' },
      { label: 'Customization', value: 'Customizable length up to 10 ft for bespoke furniture lines' }
    ],
    features: [
      'Manufactured on extra-wide converting machinery capable of handling 3.5-meter board blanks',
      'Prevents soiling, scuffing, puncture, and moisture damage during e-commerce doorstep delivery',
      'Reinforced perimeter tape lines ensure box stays rigid during two-person manual handling',
      'Can be supplied with reinforced corner buffers for maximum perimeter stiffness'
    ],
    applications: 'Mattress manufacturers, flat-pack furniture, solar panels, large display panels, architectural doors.'
  },
  {
    id: 'tall-industrial-carton-esti',
    title: 'Telescopic Vertical Industrial Cartons',
    subtitle: 'Custom 2-Meter Tall Corrugated Carton for Industrial Shafts & Long Profiles',
    image: '/assets/images/tall-industrial-carton-esti.jpg',
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
      { label: 'Board Options', value: '3-ply micro-flute (E-flute) or heavy B-flute corrugated' },
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
    image: '/assets/images/document-storage-archival-boxes.png',
    images: [
      '/assets/images/document-storage-archival-boxes.png',
      '/assets/images/document-storage-stacked.jpg',
      '/assets/images/document-storage-files.png'
    ],
    imageLabels: [
      'Box Specs & Multi-View',
      'Stacked Archive Storage',
      'Filing System Layout'
    ],
    category: 'Die-Cut & Partitions',
    badge: 'Organize • Protect • Retrieve',
    description: 'Custom-designed corrugated document storage and archival boxes manufactured by ESTI Packaging for the safe, organized, and long-term storage of files, records, documents, and valuable paper collections. Designed for corporate offices, law firms, healthcare facilities, warehouses, and record-management vaults, combining high stacking strength with dedicated labeling areas, locking/hinged lids, and integrated hand-holes for easy handling.',
    specs: [
      { label: 'Typical Dimensions', value: '400 × 300 × 250 mm (A4 / Legal / Box Files, fully customizable L × W × H)' },
      { label: 'Board Strength', value: '3-Ply or Heavy-Duty 5-Ply (BC / EB Flute) for high-density warehouse storage' },
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
      '/assets/images/wooden-pallets-warehouse.jpg'
    ],
    imageLabels: [
      'Standard Wooden Euro Pallets',
      'Warehouse Inventory & Skids'
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


export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(PRODUCTS_CATALOG[0].id);
  const [zoomProduct, setZoomProduct] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [transformOrigin, setTransformOrigin] = useState('center center');
  const [selectedImageMap, setSelectedImageMap] = useState({});

  const handleOpenZoom = (product, activeImg) => {
    setZoomProduct({
      ...product,
      activeImage: activeImg || (product.images ? product.images[0] : product.image)
    });
    setZoomScale(1);
    setTransformOrigin('center center');
  };

  const handleMouseMove = (e) => {
    if (zoomScale <= 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setTransformOrigin(`${x.toFixed(1)}% ${y.toFixed(1)}%`);
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    if (zoomScale === 1) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setTransformOrigin(`${x.toFixed(1)}% ${y.toFixed(1)}%`);
      setZoomScale(2);
    } else {
      setZoomScale(1);
      setTransformOrigin('center center');
    }
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomScale(prev => Math.min(Number((prev + 0.5).toFixed(1)), 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomScale(prev => {
      const next = Math.max(Number((prev - 0.5).toFixed(1)), 1);
      if (next === 1) setTransformOrigin('center center');
      return next;
    });
  };

  const handleResetZoom = (e) => {
    e.stopPropagation();
    setZoomScale(1);
    setTransformOrigin('center center');
  };

  const handlePrevProduct = (e) => {
    e?.stopPropagation();
    if (!zoomProduct) return;
    const currentIndex = PRODUCTS_CATALOG.findIndex(p => p.id === zoomProduct.id);
    const prevIndex = (currentIndex - 1 + PRODUCTS_CATALOG.length) % PRODUCTS_CATALOG.length;
    const prevProduct = PRODUCTS_CATALOG[prevIndex];
    setZoomProduct({
      ...prevProduct,
      activeImage: prevProduct.images ? prevProduct.images[0] : prevProduct.image
    });
    setZoomScale(1);
    setTransformOrigin('center center');
  };

  const handleNextProduct = (e) => {
    e?.stopPropagation();
    if (!zoomProduct) return;
    const currentIndex = PRODUCTS_CATALOG.findIndex(p => p.id === zoomProduct.id);
    const nextIndex = (currentIndex + 1) % PRODUCTS_CATALOG.length;
    const nextProduct = PRODUCTS_CATALOG[nextIndex];
    setZoomProduct({
      ...nextProduct,
      activeImage: nextProduct.images ? nextProduct.images[0] : nextProduct.image
    });
    setZoomScale(1);
    setTransformOrigin('center center');
  };

  useEffect(() => {
    if (!zoomProduct) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setZoomProduct(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrevProduct();
      } else if (e.key === 'ArrowRight') {
        handleNextProduct();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [zoomProduct]);

  const categories = [
    'All',
    'Corrugated & Pallet Boxes',
    'Custom & Large Format',
    'UN Certified Boxes',
    'Die-Cut & Partitions'
  ];

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter(item => item.category === activeCategory);

  return (
    <section id="products" className="py-20 md:py-28 bg-white border-b border-slate-200 relative font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold font-sans uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Industrial Product Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-heading">
            Comprehensive <span className="font-normal text-emerald-700">Product Portfolio</span>
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg font-sans">
            Engineered for strength, cost efficiency, and export compliance. Click on any product below for complete technical specifications and direct contact.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 font-sans">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold font-sans transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Detailed Product List */}
        <div className="space-y-12">
          {filteredProducts.map((product) => {
            const isExpanded = expandedId === product.id;
            const activeImgIndex = selectedImageMap[product.id] || 0;
            const currentImg = product.images ? (product.images[activeImgIndex] || product.image) : product.image;

            return (
              <div
                key={product.id}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-300 transition-all shadow-sm hover:shadow-md font-sans"
              >
                {/* Product Header & Main Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                  
                  {/* Product Image Showcase (5 cols on lg) */}
                  <div className="lg:col-span-5 flex flex-col space-y-3 font-sans">
                    <div 
                      className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200 group flex items-center justify-center p-3 cursor-zoom-in hover:border-emerald-400 transition-colors"
                      onClick={() => handleOpenZoom(product, currentImg)}
                      title="Click to zoom and view details in high resolution"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleOpenZoom(product, currentImg);
                        }
                      }}
                    >
                      <img
                        src={currentImg}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                        {product.badge}
                      </div>

                      {/* Multi-Image Badge Indicator */}
                      {product.images && product.images.length > 1 && (
                        <div className="absolute top-3 right-3 bg-slate-900/85 backdrop-blur-sm text-white text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1.5 shadow border border-slate-700/50">
                          <Images className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{activeImgIndex + 1} / {product.images.length} Views</span>
                        </div>
                      )}

                      {/* Floating Zoom Indicator on Hover */}
                      <div className="absolute bottom-3 right-3 bg-slate-900/85 group-hover:bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1.5 shadow-md pointer-events-none transform translate-y-1 group-hover:translate-y-0">
                        <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Click to Zoom</span>
                      </div>
                    </div>

                    {/* Multi-Image Thumbnail Switcher */}
                    {product.images && product.images.length > 1 && (
                      <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider pl-1">Models:</span>
                        <div className="flex flex-wrap items-center gap-2">
                          {product.images.map((imgSrc, idx) => {
                            const isSelected = activeImgIndex === idx;
                            const label = product.imageLabels ? product.imageLabels[idx] : `Option ${idx + 1}`;
                            return (
                              <button
                                key={idx}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedImageMap(prev => ({ ...prev, [product.id]: idx }));
                                }}
                                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-semibold transition-all ${
                                  isSelected
                                    ? 'bg-emerald-50 border-emerald-600 text-emerald-800 ring-2 ring-emerald-500/20 shadow-xs'
                                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                                title={label}
                              >
                                <img
                                  src={imgSrc}
                                  alt={label}
                                  className="w-5 h-5 object-contain rounded"
                                />
                                <span>{label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    <div className="text-xs text-slate-500 flex items-center gap-1.5 px-1 font-sans">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Custom Dimensions: Manufactured to exact client drawings & blueprints.</span>
                    </div>
                  </div>

                  {/* Product Details & Engineering Specs (7 cols on lg) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-4 font-sans">
                    <div>
                      {/* Category Tag & Multi-Angle Badge */}
                      <div className="flex flex-wrap items-center gap-2 font-sans">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 font-sans">
                          {product.category}
                        </span>
                        
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-heading mt-1">
                        {product.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-xs sm:text-sm font-semibold font-sans text-slate-600 mt-0.5">
                        {product.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm font-sans text-slate-600 mt-3 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Key Engineering Specs Grid */}
                      <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-sans">
                        {product.specs.slice(0, 4).map((spec, idx) => (
                          <div key={idx} className="bg-white p-2.5 rounded-lg border border-slate-200/80 font-sans">
                            <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold font-sans block">
                              {spec.label}
                            </span>
                            <span className="font-bold text-slate-800 font-sans mt-0.5 block">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Collapsible Details: Full Specs, Features & Applications */}
                      {isExpanded && (
                        <div className="mt-4 pt-4 border-t border-slate-200 space-y-4 animate-fadeIn font-sans">
                          
                          {/* Remaining Specs */}
                          {product.specs.length > 4 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-sans">
                              {product.specs.slice(4).map((spec, idx) => (
                                <div key={idx} className="bg-white p-2.5 rounded-lg border border-slate-200/80 font-sans">
                                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold font-sans block">
                                    {spec.label}
                                  </span>
                                  <span className="font-bold text-slate-800 font-sans mt-0.5 block">
                                    {spec.value}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Key Features Bullet List */}
                          <div className="font-sans">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-sans mb-2">
                              Engineering Advantages & Highlights
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-slate-600">
                              {product.features.map((feat, idx) => (
                                <li key={idx} className="flex items-start gap-2 font-sans">
                                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  <span className="font-sans">{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Applications */}
                          <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-sans text-slate-600">
                            <strong className="text-slate-900 font-semibold font-sans">Recommended Sectors: </strong>
                            <span className="font-sans">{product.applications}</span>
                          </div>

                        </div>
                      )}
                    </div>

                    {/* Bottom Action Strip */}
                    <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 font-sans">
                      
                      {/* Expand / Collapse Button */}
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : product.id)}
                        className="text-xs font-bold font-sans text-emerald-700 hover:text-emerald-800 flex items-center gap-1 focus:outline-none"
                      >
                        <span>{isExpanded ? 'Show Less Details' : 'View Full Specifications'}</span>
                        <ChevronRight className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>

                      {/* Direct Contact Buttons */}
                      <div className="flex items-center gap-2 font-sans">
                        <a
                          href={`https://wa.me/919833182733?text=Hello%20ESTI%20Packaging,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(product.title)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold font-sans border border-emerald-200 transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                          <span>WhatsApp</span>
                        </a>

                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=esteepack@gmail.com&su=${encodeURIComponent(`Inquiry: ${product.title} - ESTI Packaging`)}&body=${encodeURIComponent(`Hello ESTI Packaging Team,\n\nI am interested in learning more about ${product.title}.\n\nPlease provide:\n- Technical Specifications\n- Pricing & Minimum Order Quantity (MOQ)\n- Delivery Timeline\n\nThank you.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-sans shadow-sm transition-colors"
                          title="Click to Inquire via Gmail"
                        >
                          <Mail className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Click to Inquire</span>
                        </a>
                      </div>

                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* High-Resolution Interactive Product Image Zoom Modal */}
      {zoomProduct && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 animate-fadeIn select-none font-sans"
          onClick={() => setZoomProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${zoomProduct.title} Zoom View`}
        >
          {/* Top Bar: Title, Badge & Zoom Controls */}
          <div 
            className="w-full max-w-7xl mx-auto flex items-center justify-between gap-4 pb-3 border-b border-slate-800 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 shrink-0">
                {zoomProduct.badge}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  {zoomProduct.title}
                </h3>
                <p className="text-xs text-slate-400 hidden sm:block truncate">
                  {zoomProduct.subtitle}
                </p>
              </div>
            </div>

            {/* Zoom Tool Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="hidden sm:flex items-center gap-1 bg-slate-900 border border-slate-700/80 rounded-xl p-1 text-slate-200">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoomScale <= 1}
                  className="p-1.5 rounded-lg hover:bg-slate-800 disabled:opacity-30 transition-colors focus:outline-none"
                  title="Zoom Out (-)"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold px-1.5 min-w-[42px] text-center text-emerald-400">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoomScale >= 3}
                  className="p-1.5 rounded-lg hover:bg-slate-800 disabled:opacity-30 transition-colors focus:outline-none"
                  title="Zoom In (+)"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                {zoomScale > 1 && (
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors focus:outline-none"
                    title="Reset Zoom (100%)"
                    aria-label="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setZoomProduct(null)}
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-rose-600 text-white flex items-center justify-center transition-all focus:outline-none"
                aria-label="Close image zoom"
                title="Close (Esc)"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Central Image Viewing Stage */}
          <div 
            className="relative flex-1 w-full max-w-7xl mx-auto flex flex-col items-center justify-center overflow-hidden my-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Navigation Arrow */}
            <button
              type="button"
              onClick={handlePrevProduct}
              className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg border border-slate-700 hover:border-emerald-500 transition-all focus:outline-none hover:scale-110"
              title="Previous Product (Left Arrow)"
              aria-label="Previous Product"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Next Navigation Arrow */}
            <button
              type="button"
              onClick={handleNextProduct}
              className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg border border-slate-700 hover:border-emerald-500 transition-all focus:outline-none hover:scale-110"
              title="Next Product (Right Arrow)"
              aria-label="Next Product"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Zoomable Image Container */}
            <div 
              className={`relative max-w-full max-h-[68vh] sm:max-h-[72vh] flex items-center justify-center overflow-hidden transition-all duration-200 ${
                zoomScale > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={handleImageClick}
              onMouseMove={handleMouseMove}
              title={zoomScale > 1 ? 'Click to zoom out (or move cursor to pan)' : 'Click to zoom in 2x (or move cursor to pan)'}
            >
              <img
                src={zoomProduct.activeImage || zoomProduct.image}
                alt={zoomProduct.title}
                style={{
                  transform: `scale(${zoomScale})`,
                  transformOrigin: transformOrigin,
                  transition: zoomScale === 1 ? 'transform 0.3s ease-out' : 'transform 0.1s ease-out'
                }}
                className="max-h-[66vh] sm:max-h-[70vh] max-w-[88vw] object-contain rounded-xl drop-shadow-2xl select-none"
                draggable={false}
              />
            </div>

            {/* Multi-Image Switcher inside Zoom Modal */}
            {zoomProduct.images && zoomProduct.images.length > 1 && (
              <div className="z-20 flex items-center justify-center gap-2 mt-2.5 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                <Images className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mr-1">Views:</span>
                {zoomProduct.images.map((imgSrc, idx) => {
                  const isSelected = (zoomProduct.activeImage || zoomProduct.image) === imgSrc;
                  const label = zoomProduct.imageLabels ? zoomProduct.imageLabels[idx] : `Model ${idx + 1}`;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setZoomProduct(prev => ({ ...prev, activeImage: imgSrc }));
                        setZoomScale(1);
                        setTransformOrigin('center center');
                        setSelectedImageMap(prev => ({ ...prev, [zoomProduct.id]: idx }));
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <img src={imgSrc} alt={label} className="w-4 h-4 object-contain bg-white rounded p-0.5" />
                      <span>{label}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Bottom Bar: Instructions & Quick Inquiry */}
          <div 
            className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs text-slate-400"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline font-medium">
                Tip: Click image or use +/- to zoom. Hover and move cursor to pan across details. Press Esc to exit.
              </span>
              <span className="sm:hidden font-medium">
                Tap image to toggle 2x zoom.
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://wa.me/919833182733?text=Hello%20ESTI%20Packaging,%20I%20am%20interested%20in%20${encodeURIComponent(zoomProduct.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
