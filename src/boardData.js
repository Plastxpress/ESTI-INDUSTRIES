// Reference values for corrugated flute profiles.
export const LINER_MM = 0.3;

export const FLUTES = {
  A: { height: 4.7, perMetre: 110, use: 'Cushioning and stacking strength' },
  B: { height: 2.5, perMetre: 154, use: 'Crush resistance and a flat print face' },
  C: { height: 3.6, perMetre: 128, use: 'The general-purpose shipping board' },
};

// Owner-confirmed final flute combinations.
export const PLIES = [
  {
    ply: 3,
    wall: 'Single wall',
    combos: ['B', 'C', 'A'],
    note: 'One fluted layer between two liners. The everyday shipper.',
  },
  {
    ply: 5,
    wall: 'Double wall',
    combos: ['BB', 'BC', 'BA', 'CA', 'AA'],
    note: 'Two fluted layers. Heavier loads, longer transit, export.',
  },
  {
    ply: 7,
    wall: 'Triple wall',
    combos: ['BCA', 'ACA', 'AAA'],
    note: 'Three fluted layers. Jumbo boxes and near-crate strength.',
  },
];

export const caliper = (combo) =>
  [...combo].reduce((t, f) => t + FLUTES[f].height, 0) +
  (combo.length + 1) * LINER_MM;

// "Typical use" lines — only the existing ones; combinations without one show none.
export const APPLICATION = {
  C: 'General freight, e-commerce, FMCG outers',
  B: 'Retail-ready outers, canned and bottled goods',
  A: 'Light but bulky goods needing cushioning',
  BC: 'Export cartons, appliances, engineering parts',
  BB: 'Dense loads where board thickness is capped',
  BCA: 'Jumbo and pallet boxes to 500 kg',
  AAA: 'Maximum cushioning for fragile heavy plant',
};
