// Converts every content image referenced in src/ into resized WebP copies and
// writes their intrinsic sizes to src/data/imageMeta.json (used for width/height).
//
//   npm run optimize:images
//
// Output per source image (in public/assets/images/webp/):
//   <name>.webp        max 1000 px wide  (detail views, zoom)
//   <name>-sm.webp     max 480 px wide   (cards, small slots)
//   <name>-thumb.webp  max 96 px tall    (gallery thumbnail buttons)
//
// The client-logo strip (assets/images/logos/) is intentionally left untouched.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const PUBLIC = path.join(ROOT, 'public');
const OUT = path.join(PUBLIC, 'assets', 'images', 'webp');
const META = path.join(SRC, 'data', 'imageMeta.json');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)],
  );
}

const refs = new Set();
for (const file of walk(SRC)) {
  if (!/\.(jsx?|json)$/.test(file) || file === META) continue;
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(/\/assets\/images\/[\w./-]+\.(?:png|jpe?g)/gi)) {
    if (!m[0].includes('/logos/')) refs.add(m[0]);
  }
}

fs.mkdirSync(OUT, { recursive: true });
const meta = {};
for (const ref of [...refs].sort()) {
  const input = path.join(PUBLIC, ref);
  if (!fs.existsSync(input)) {
    console.warn('missing', ref);
    continue;
  }
  const base = path.basename(ref).replace(/\.(png|jpe?g)$/i, '');
  const img = sharp(input).rotate();
  const full = await img.clone().resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(OUT, `${base}.webp`));
  const sm = await img.clone().resize({ width: 480, withoutEnlargement: true }).webp({ quality: 74 }).toFile(path.join(OUT, `${base}-sm.webp`));
  await img.clone().resize({ height: 96, withoutEnlargement: true }).webp({ quality: 70 }).toFile(path.join(OUT, `${base}-thumb.webp`));
  meta[ref] = { w: full.width, h: full.height, smW: sm.width, smH: sm.height };
  console.log(`${ref}  ${(fs.statSync(input).size / 1024).toFixed(0)} KB -> ${(full.size / 1024).toFixed(0)} KB / ${(sm.size / 1024).toFixed(0)} KB`);
}

fs.writeFileSync(META, JSON.stringify(meta, null, 2) + '\n');
console.log(`\n${Object.keys(meta).length} images written to ${path.relative(ROOT, OUT)}`);
