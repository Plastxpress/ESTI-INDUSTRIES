// Reference values for corrugated flute profiles.
export const LINER_MM = 0.3;

export const FLUTES = {
  A: { height: 4.7, perMetre: 110, use: 'Cushioning and stacking strength' },
  B: { height: 2.5, perMetre: 154, use: 'Crush resistance and a flat print face' },
  C: { height: 3.6, perMetre: 128, use: 'The general-purpose shipping board' },
  E: { height: 1.5, perMetre: 295, use: 'Thin wall with a premium print surface' },
};

export const PLIES = [
  {
    ply: 3,
    wall: 'Single wall',
    combos: ['C', 'B', 'A', 'E'],
    note: 'One fluted layer between two liners. The everyday shipper.',
  },
  {
    ply: 5,
    wall: 'Double wall',
    combos: ['BC', 'AC', 'BB', 'EB'],
    note: 'Two fluted layers. Heavier loads, longer transit, export.',
  },
  {
    ply: 7,
    wall: 'Triple wall',
    combos: ['BCA', 'AAA', 'BAA'],
    note: 'Three fluted layers. Jumbo boxes and near-crate strength.',
  },
];

export const caliper = (combo) =>
  [...combo].reduce((t, f) => t + FLUTES[f].height, 0) +
  (combo.length + 1) * LINER_MM;

export const APPLICATION = {
  C: 'General freight, e-commerce, FMCG outers',
  B: 'Retail-ready outers, canned and bottled goods',
  A: 'Light but bulky goods needing cushioning',
  E: 'Printed retail packs and slim product boxes',
  BC: 'Export cartons, appliances, engineering parts',
  AC: 'Tall stacked loads and heavy consumer durables',
  BB: 'Dense loads where board thickness is capped',
  EB: 'Printed export packs needing a fine outer face',
  BCA: 'Jumbo and pallet boxes to 500 kg',
  AAA: 'Maximum cushioning for fragile heavy plant',
  BAA: 'Bulk chemical and rubber bale packaging',
};
