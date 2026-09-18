import React, { useState } from 'react';
import { 
  Box, 
  Layers, 
  ShieldCheck, 
  MessageSquare, 
  Mail, 
  Check, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';

export const PRODUCTS_CATALOG = [
  {
    id: 'corrugated-boxes',
    title: 'Corrugated Boxes & Master Shipping Cartons',
    subtitle: 'High-Burst Strength 3-Ply, 5-Ply & 7-Ply Shipping Boxes',
    image: '/assets/images/corrugated-box-primary.jpg',
    category: 'Corrugated & Pallet Boxes',
    badge: 'Core Pedigree (Since 1995)',
    description: 'Manufactured on our imported 2200 mm 5-ply board plant with fully automatic 2-color printer slotters (1800 x 3500 mm). Precision-engineered Regular Slotted Containers (RSC 0201) delivering maximum vertical compression resistance and stacking endurance.',
    specs: [
      { label: 'Constructions', value: '3-Ply (Single Wall), 5-Ply (Double Wall), 7-Ply (Triple Wall)' },
      { label: 'Flute Profiles', value: 'A, B, C, E, and combination BC & AAA flutes' },
      { label: 'Bursting Strength', value: '18 to 35+ kg/cm² (customized to client payload)' },
      { label: 'Edge Crush Test', value: 'ECT 32 up to ECT 90+ heavy industrial grade' },
      { label: 'Printing', value: 'High-definition 2-color flexographic computerized slotting' },
      { label: 'Eco Profile', value: '100% Recyclable high-grade virgin & semi-chemical kraft' }
    ],
    features: [
      'Engineered for automated packing lines and manual rapid taping',
      'High moisture-resistant kraft liners suitable for export sea cargo',
      'Custom printing with brand logo, barcodes, and ISO handling symbols',
      'Available in custom batch volumes with dedicated warehouse buffers'
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
    id: 'eco-pallet-box',
    title: 'Eco-Corrugated Paper Pallet Box with Lid',
    subtitle: '100% Recyclable Pallet Container with Integrated Paper Feet',
    image: '/assets/images/eco-pallet-box.jpg',
    category: 'Corrugated & Pallet Boxes',
    badge: 'ISPM-15 Exempt / 100% Paper',
    description: 'All-in-one corrugated bulk container with integrated heavy paper pallet runners and telescoping lid. Engineered as a fully circular, 100% recyclable alternative to wooden pallets and plastic containers, eliminating export fumigation requirements.',
    specs: [
      { label: 'Payload Capacity', value: 'Static load up to 1,000 kg / Dynamic load up to 600 kg' },
      { label: 'Pallet Base', value: 'Integrated heavy-gauge multi-layer corrugated runners' },
      { label: 'Wall Profile', value: '7-Ply Heavy-Duty AAA Flute corrugated sleeve' },
      { label: 'Forklift Access', value: 'Standard 4-way entry for forklifts & pallet jacks' },
      { label: 'Export Status', value: '100% ISPM-15 exempt (zero heat treatment / fumigation required)' },
      { label: 'Circularity', value: 'Fully repulpable and 100% biodegradable kraft' }
    ],
    features: [
      'Integrated corrugated pallet feet remove the need for separate wooden or plastic pallets',
      'Exempt from international wood packaging quarantine regulations for instant customs clearance',
      'Delivered flat-pack or assembled for immediate hopper or conveyor loading',
      'Significantly lowers tare weight, slashing overseas air and sea freight bills'
    ],
    applications: 'Automotive exports, industrial fittings, electrical switchgear, green logistics, pharmaceutical distribution.'
  },
  {
    id: 'white-bulk-pallet-container',
    title: 'Integrated Pallet Base White Bulk Container',
    subtitle: 'Bleached Kraft Cleanroom & High-Value Cargo Bulk Bin',
    image: '/assets/images/white-bulk-pallet-container.jpg',
    category: 'Corrugated & Pallet Boxes',
    badge: 'Cleanroom & White Kraft',
    description: 'Premium white bleached kraft bulk packaging container fitted directly onto corrugated pallet runners with high-wall overlap cap. Provides an ultra-clean, dust-proof exterior ideal for sensitive pharmaceutical, food ingredient, and high-value export shipments.',
    specs: [
      { label: 'Exterior Liner', value: 'High-brightness bleached white virgin kraft liner' },
      { label: 'Base System', value: 'Mounted corrugated pallet blocks with 4-way fork entry' },
      { label: 'Cap Closure', value: 'Heavy telescoping kraft lid for total top protection' },
      { label: 'Bursting Strength', value: '26 to 32 kg/cm² hydraulic burst pressure' },
      { label: 'Stacking Strength', value: 'Tested for 2-tier dynamic stack in ISO containers' },
      { label: 'Moisture Defense', value: 'Internal water-resistant barrier sizing' }
    ],
    features: [
      'Clean white exterior provides superior contrast for barcodes, labels, and corporate branding',
      'Dust-free surface suitable for cleanroom environments and healthcare supply chains',
      'High vertical column strength prevents sidewall bulging under heavy dense contents',
      'Integrated runners allow direct pickup without transferring onto warehouse wooden skids'
    ],
    applications: 'Cleanroom electronics, bulk pharmaceutical intermediates, food ingredients, luxury consumer durables.'
  },
  {
    id: 'drop-gate-pallet-box',
    title: 'Drop-Gate Access Heavy-Duty Pallet Container',
    subtitle: 'Ergonomic Fold-Down Front Door for Assembly Line Loading',
    image: '/assets/images/drop-gate-pallet-box.jpg',
    category: 'Corrugated & Pallet Boxes',
    badge: 'Ergonomic Front Access',
    description: 'Heavy-duty multi-wall pallet sleeve equipped with a pre-creased fold-down drop gate. Enables assembly workers and robotic arms to load or pick heavy machined components without bending deep over high container walls.',
    specs: [
      { label: 'Wall Structure', value: 'Reinforced 5-Ply / 7-Ply heavy corrugated board' },
      { label: 'Gate Feature', value: 'Half-height fold-down front flap with reinforced crease score' },
      { label: 'Pallet Integration', value: 'Mounts on standard 1200x1000 and 1200x800 industrial pallets' },
      { label: 'Load Rating', value: 'Payload capacity up to 1,200 kg with internal support' },
      { label: 'Stitching / Joint', value: 'Galvanized heavy wire stitching along vertical corners' },
      { label: 'Stacking', value: 'Compatible with standard corrugated top cap for multi-level stacking' }
    ],
    features: [
      'Ergonomic drop door eliminates operator strain during progressive part extraction',
      'Ideal for active assembly line feeding in automotive and machinery plants',
      'Folds completely flat when empty for reverse logistics space optimization',
      'Can be fitted with internal cellular dividers or VCI anti-corrosion barrier bags'
    ],
    applications: 'Automotive assembly lines, CNC machined castings, forgings, stamping parts, motor assemblies.'
  },
  {
    id: 'poly-lined-bulk-box',
    title: 'Poly-Lined Bulk Chemical & Resin Container',
    subtitle: 'Heavy Multi-Wall Box Fitted with Heavy-Gauge Polyethylene Liner',
    image: '/assets/images/poly-lined-bulk-box.jpg',
    category: 'Corrugated & Pallet Boxes',
    badge: 'Hygroscopic & Chemical Barrier',
    description: 'Rugged corrugated bulk box integrated with a heavy-gauge internal polyethylene (PE) liner bag and telescopic lid. Engineered specifically to store and transport hygroscopic powders, resins, granular chemicals, and food-grade raw materials safely.',
    specs: [
      { label: 'Liner Material', value: 'Heavy-gauge virgin LDPE / HDPE liner (food-grade certified)' },
      { label: 'Wall Rating', value: 'Heavy 5-ply double wall or 7-ply triple wall corrugated' },
      { label: 'Capacity', value: '500 kg to 1,000 kg bulk filling capacity' },
      { label: 'Sealing Method', value: 'Heat-sealable or twist-tie bag closure with top corrugated cap' },
      { label: 'Moisture Barrier', value: 'Near-zero moisture vapor transmission rate (MVTR)' },
      { label: 'Corner Reinforcement', value: 'Continuous heavy wire stitched corner seams' }
    ],
    features: [
      'Internal liner prevents product contamination, dusting, and atmospheric moisture absorption',
      'Eliminates the cost, return logistics, and cleaning overhead of steel drums or intermediate bulk containers',
      'Square footprint utilizes 100% of shipping container floor space without drum void gaps',
      'Compatible with top automated filling funnels and bottom vacuum probe discharge'
    ],
    applications: 'Plastic polymers & masterbatches, rubber chemicals, specialty powders, agricultural fertilizers, bulk food spices.'
  },
  {
    id: 'telescopic-lid-box',
    title: 'Two-Piece Telescopic Lid Box (FTD)',
    subtitle: 'Full Telescoping Top & Bottom Heavy Carton with Dual-Wall Side Armor',
    image: '/assets/images/telescopic-lid-box.jpg',
    category: 'Corrugated & Pallet Boxes',
    badge: 'Telescopic Rigid Setup',
    description: 'Two-piece rigid corrugated box comprising an open base tray and a full-depth telescoping lid (Full Telescopic Design - FTD). When closed, the overlapping sidewalls create double-wall armor on all four vertical faces, providing superior stacking and corner resistance.',
    specs: [
      { label: 'FEFCO Style', value: 'FEFCO 0300 / 0301 Two-Piece Full Telescopic Design' },
      { label: 'Board Caliper', value: 'Available in 3-Ply single wall & 5-Ply double wall kraft' },
      { label: 'Side Reinforcement', value: 'Overlapping lids create 2x sidewall strength against crushing' },
      { label: 'Edge Crush Test', value: 'ECT 44 to ECT 60+ heavy compression rating' },
      { label: 'Closure', value: 'Friction-fit lid with strap or tape securing options' },
      { label: 'Printing', value: 'Custom 2-color flexographic print with edge alignment marks' }
    ],
    features: [
      'Full telescoping cover provides dual-wall perimeter strength against heavy top loads',
      'Effortless opening and inspection without cutting or destroying the outer container',
      'Dust-proof fit keeps internal machinery components and precision goods pristine',
      'Exceptional resistance to vertical corner bulging and pallet overhang compression'
    ],
    applications: 'Heavy metal hardware, precision machine parts, automotive spares, electrical panels, high-end export goods.'
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
    id: 'hsc-double-wall',
    title: 'HSC Double Wall Boxes with Liner Bags',
    subtitle: 'Half-Slotted Containers with Telescopic Lids & Moisture Defense',
    image: '/assets/images/hsc-double-wall.jpg',
    category: 'Corrugated & Pallet Boxes',
    badge: 'Double Wall 5-Ply',
    description: 'Heavy industrial Half-Slotted Containers (HSC 0200) engineered with open tops, matching deep telescopic corrugated lids, and integrated polyethylene liner bags for sanitary and contamination-free handling.',
    specs: [
      { label: 'Configuration', value: 'HSC bottom container with independent top tray cover' },
      { label: 'Board Caliper', value: 'Heavy 5-ply double wall with moisture-resistant glue' },
      { label: 'Liner Option', value: 'Food-grade or industrial polyethylene inner barrier bag' },
      { label: 'Stitching', value: 'Heavy-gauge galvanized anti-rust wire stitching' }
    ],
    features: [
      'Wide-open top allows rapid loading and automated hopper bulk filling',
      'Telescopic lid provides airtight top seal against dust and transit debris',
      'Exceptional corner stiffness withstands high dynamic road vibration',
      'Liner bag prevents moisture ingress and keeps goods pristine'
    ],
    applications: 'Food processing, bulk confectionery, chemicals, frozen seafood, agricultural harvest, auto spare parts.'
  },
  {
    id: 'refrigerator-appliance-box',
    title: 'White Goods & Refrigerator Box',
    subtitle: 'Up to 1,700 mm Tall Heavy Appliance Packaging with Clamp-Safe Markings',
    image: '/assets/images/refrigerator-appliance-box.jpg',
    category: 'Custom & Large Format',
    badge: 'Appliance Grade',
    description: 'Heavy-duty corrugated upright carton engineered for large domestic refrigerators, commercial coolers, and washing appliances (up to 1,700 mm height). Designed with clamp-truck handling zones, ventilation handholds, and comprehensive ISO handling symbols.',
    specs: [
      { label: 'Standard Dimensions', value: '1700 mm (67") H × 700 mm (27.5") W × 650 mm (25.5") D' },
      { label: 'Caliper & Flute', value: 'Heavy 5-ply BC Flute / 7-ply AAA Flute high-compression board' },
      { label: 'Clamp Rating', value: 'Reinforced lower sidewall zone for hydraulic forklift clamp handling' },
      { label: 'Ergonomics', value: 'Die-cut oval handholds rated for 75+ kg manual lifting' },
      { label: 'Markings', value: 'Standardized clamp zones, center-of-gravity, and upright symbols' },
      { label: 'BCT Strength', value: 'Box Compression Test engineered for 3-high vertical warehouse stacking' }
    ],
    features: [
      'High vertical column strength prevents buckling under heavy top loads in high-bay warehouses',
      'Clamp-safe indicator zones guide forklift operators to prevent side compression denting',
      'Built-in handholds make domestic distribution and home delivery effortless and safe',
      'Multi-panel flexographic printing displays corporate brand, energy star labels, and specs'
    ],
    applications: 'Refrigerators, commercial bottle coolers, washing machines, HVAC air conditioning units, water heaters.'
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
      'Can be supplied with edge protector angle boards for maximum perimeter stiffness'
    ],
    applications: 'Mattress manufacturers, flat-pack furniture, solar panels, large display panels, architectural doors.'
  },
  {
    id: 'honeywell-stitched-box',
    title: 'Reinforced Wire-Stitched Box with Cap',
    subtitle: 'High-Tensile Wire Stitching with Telescopic Lid & Custom OEM Branding',
    image: '/assets/images/honeywell-stitched-box.jpg',
    category: 'Custom & Large Format',
    badge: 'Wire-Stitched Heavy Armor',
    description: 'Heavy-duty industrial corrugated carton reinforced with anti-corrosive zinc-coated wire stitched corner joints and a matching top cap. Engineered for multinational OEMs requiring maximum seam burst strength under severe transport vibrations.',
    specs: [
      { label: 'Joint Technology', value: 'Continuous heavy-gauge galvanized wire stitched seams' },
      { label: 'Board Type', value: '5-Ply heavy double wall (BC Flute) with virgin kraft liners' },
      { label: 'Closure System', value: 'Drop-over telescoping corrugated cap with friction interlock' },
      { label: 'Branding', value: 'Custom 2-color OEM logo printing with international handling icons' },
      { label: 'Bursting Strength', value: '24 to 30 kg/cm² seam burst retention' },
      { label: 'Quality Standard', value: '100% compliant with global OEM packaging audit specifications' }
    ],
    features: [
      'Wire-stitched seams will not pop open even in extreme desert heat or freezing transit conditions',
      'Heavy telescoping cap allows swift unboxing and re-inspection at factory receiving docks',
      'Pre-printed with ISO handling warnings (Fragile, This Way Up, Keep Dry, Max Stacking)',
      'Tested to withstand rigorous drop and incline impact shock tests'
    ],
    applications: 'OEM electronics, industrial automation equipment, aerospace sub-assemblies, heavy instrumentation.'
  },
  {
    id: 'tall-industrial-carton-esti',
    title: 'Extra-Tall Vertical Industrial Carton (2+ Meters)',
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
    id: 'bottle-partition-boxes',
    title: 'Bottle Partition Outer Cartons & Beverage Shippers',
    subtitle: 'Zero-Breakage Corrugated Shippers for Glass Bottles & Liquids',
    image: '/assets/images/bottle-partition-box.jpg',
    category: 'Die-Cut & Partitions',
    badge: 'Fragile Goods Defense',
    description: 'Heavy-duty master corrugated shippers fitted with full-height internal cell dividers specifically designed to cushion and protect glass bottles containing wine, spirits, agro-chemicals, and oils during transit.',
    specs: [
      { label: 'Bottle Capacities', value: '6-bottle, 12-bottle, and 24-bottle standard carton layouts' },
      { label: 'Cushioning Height', value: 'Full-height partition walls cradle bottle neck and shoulder' },
      { label: 'Drop Resistance', value: 'Engineered to survive multi-angle conveyor drop impacts' },
      { label: 'Outer Box', value: 'High-puncture resistant 5-ply double wall master carton' }
    ],
    features: [
      'Eliminates bottle-to-bottle clinking and accidental glass fracture',
      'Absorptive corrugated liners contain localized leaks if primary seals breach',
      'Stackable up to 5 tiers high in palletized warehousing without side bulge',
      'Custom printed graphics for premium liquor and chemical branding'
    ],
    applications: 'Wines, craft beers, edible oils, pharmaceutical syrups, laboratory reagents, agrochemical bottles.'
  },
  {
    id: 'honeycomb-packaging',
    title: 'Honeycomb Sheets & Die-Cut Inserts',
    subtitle: 'High-Compression 100% Recyclable Paper Dunnage & Cushioning',
    image: '/assets/images/honeycomb-packaging.jpg',
    category: 'Honeycomb Packaging',
    badge: '100% Eco-Friendly',
    description: 'Hexagonal honeycomb paper core structures sandwiched between heavy kraft linerboards. Delivers extraordinary vertical load-bearing strength and shock absorption, serving as a sustainable alternative to EPS thermocol.',
    specs: [
      { label: 'Cell Diameters', value: '10 mm, 15 mm, 20 mm, and 25 mm cell geometry' },
      { label: 'Thickness Range', value: '10 mm up to 100 mm continuous thickness' },
      { label: 'Compression Strength', value: 'Up to 40+ metric tons/m² uniform surface load' },
      { label: 'Weight Advantage', value: 'Up to 60% lighter than solid timber or fiberboard' }
    ],
    features: [
      'Zero-abrasion paper surface prevents damage to delicate painted surfaces',
      'Approved for global export air freight and ocean container dunnage',
      '100% biodegradable and compliant with global plastic ban mandates',
      'Custom die-cut cavity shapes engineered for glass, solar, and electronics'
    ],
    applications: 'Solar panels, automotive glass, electrical motors, furniture buffer pads, export cargo dunnage.'
  },
  {
    id: 'angle-boards',
    title: 'Angle Boards & Edge Protectors (V-Boards)',
    subtitle: 'Multi-Ply Rigid Corner Protectors for Pallet Stacking & Strapping Defense',
    image: '/assets/images/angle-edge-boards.jpg',
    category: 'Edge Protection',
    badge: 'Pallet Stability',
    description: 'Rigid, multi-ply compressed laminated kraft paper corner boards that protect carton edges from strap damage during tensioning and dramatically increase vertical box column stacking strength on export skids.',
    specs: [
      { label: 'Leg Dimensions', value: '25 x 25 mm up to 100 x 100 mm (Equal & Unequal wings)' },
      { label: 'Caliper / Thickness', value: '2.0 mm to 8.0 mm heavy-duty multi-ply kraft' },
      { label: 'Lengths', value: 'Cut to customer dimensions from 100 mm up to 3,000 mm' },
      { label: 'Finishes', value: 'Natural Brown Kraft, White coated, Water-resistant film' }
    ],
    features: [
      'Prevents steel and polyester strapping tension from cutting into cartons',
      'Increases warehouse pallet stacking height by up to 2-3 extra tiers safely',
      'Distributes load tension uniformly across the entire pallet perimeter',
      '100% recyclable alternative to plastic or metal corner guards'
    ],
    applications: 'Palletized export goods, paper ream skids, appliances, sheet metal coils, ceramic tile boxes.'
  },
  {
    id: 'paper-core-tubes',
    title: 'Paper Core Tubes (Spiral Wound)',
    subtitle: 'Industrial High-Crush Cores for Film, Textiles, Paper & Wire Winding',
    image: '/assets/images/paper-core-tubes.jpg',
    category: 'Paper Cores',
    badge: 'High Radial Strength',
    description: 'High-strength spiral wound paper cores manufactured using high-grade kraft board and specialized bonding adhesives, engineered for smooth high-speed rewinding and zero core collapse under heavy tension.',
    specs: [
      { label: 'Inner Diameter (ID)', value: '25 mm to 300 mm (1 inch to 12 inches standard)' },
      { label: 'Wall Thickness', value: '1.5 mm to 18.0 mm heavy radial wall' },
      { label: 'Lengths', value: 'Manufactured to custom lengths from 50 mm up to 4,000 mm' },
      { label: 'Adhesive Grade', value: 'High-tack moisture-resistant bonding resins' }
    ],
    features: [
      'High radial crush resistance prevents deformation during mechanical clamping',
      'Precision dimensional tolerances for automated high-speed winding machinery',
      'Custom printing with client logo or batch coding inside or outside the core',
      'Eco-friendly and fully recyclable'
    ],
    applications: 'Flexible packaging film (BOPP/PET), textile fabric rolls, paper mills, adhesive tapes, industrial wire.'
  },
  {
    id: 'printed-tapes',
    title: 'Self-Adhesive Printed Packaging Tapes',
    subtitle: 'Branded Multi-Color Corporate Logo Tapes & Tamper-Evident Security',
    image: '/assets/images/printed-tapes.jpg',
    category: 'Packaging Accessories',
    badge: 'Custom Logo Branding',
    description: 'High-performance BOPP and reinforced Kraft packaging tapes featuring custom multi-color corporate logo printing, ensuring brand visibility and tamper-evident carton sealing throughout your supply chain.',
    specs: [
      { label: 'Tape Widths', value: '24 mm, 36 mm, 48 mm, and 72 mm standard widths' },
      { label: 'Roll Lengths', value: '65 m, 100 m hand rolls up to 1000 m machine rolls' },
      { label: 'Adhesive Type', value: 'Pressure-sensitive water-based acrylic / Hot melt rubber' },
      { label: 'Print Capabilities', value: 'Up to 3-color rotogravure / flexo custom logo printing' }
    ],
    features: [
      'High-shear tack ensures permanent bond to all kraft and recycled carton surfaces',
      'Acts as immediate visual anti-tamper security against pilferage',
      'Weather-resistant formulation withstands high humidity and temperature changes',
      'Enhances corporate brand presentation on every dispatched carton'
    ],
    applications: 'Carton box sealing, export shipping, e-commerce fulfillment, cold storage packaging, brand marketing.'
  }
];


export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(PRODUCTS_CATALOG[0].id);

  const categories = [
    'All',
    'Corrugated & Pallet Boxes',
    'Custom & Large Format',
    'UN Certified Boxes',
    'Die-Cut & Partitions',
    'Honeycomb Packaging',
    'Edge Protection',
    'Paper Cores',
    'Packaging Accessories'
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight font-sans">
            Comprehensive <span className="text-emerald-700">Product Portfolio</span>
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
            

            return (
              <div
                key={product.id}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-300 transition-all shadow-sm hover:shadow-md font-sans"
              >
                {/* Product Header & Main Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8">
                  
                  {/* Product Image Showcase (5 cols on lg) */}
                  <div className="lg:col-span-5 flex flex-col space-y-3 font-sans">
                    <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-50 border border-slate-200 group flex items-center justify-center p-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                        {product.badge}
                      </div>
                    </div>

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
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-sans mt-1">
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
                          title="Open in Gmail"
                        >
                          <Mail className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Email Us</span>
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
    </section>
  );
}
