// Regenerates every site icon from the ESTI "E" emblem:
//   node generate-favicons.cjs
// Icons are the emblem centred on a solid white square with generous padding, so they
// stay whole when Google / Android crop them into a circle or rounded square.
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SRC = path.join(__dirname, 'public', 'assets', 'images', 'esti-logo-emblem.png');
const OUT = path.join(__dirname, 'public');
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

// The emblem PNG has a faint white glow on its left edge: trim transparent/near-white
// borders so only the blue mark remains.
async function emblem() {
  // Keep only the blue mark: any pixel that is not clearly blue (the grey/white glow) becomes white.
  const { data, info } = await sharp(SRC).flatten({ background: WHITE }).raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += info.channels) {
    const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
    if (b - Math.max(r, g) < 45) { data[i] = 255; data[i + 1] = 255; data[i + 2] = 255; }
  }
  return sharp(data, { raw: info }).trim({ background: '#ffffff', threshold: 10 }).png().toBuffer();
}

// Emblem centred on white; `fill` = share of the canvas the emblem's longest side uses.
async function icon(size, fill) {
  const mark = await emblem();
  const inner = Math.round(size * fill);
  const resized = await sharp(mark).resize(inner, inner, { fit: 'inside', kernel: 'lanczos3' }).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: WHITE } })
    .composite([{ input: resized, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

// Minimal .ico writer (PNG-compressed entries, supported by all modern browsers).
function ico(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const dir = Buffer.alloc(16 * pngs.length);
  let offset = 6 + dir.length;
  pngs.forEach(({ size, data }, i) => {
    const o = i * 16;
    dir.writeUInt8(size >= 256 ? 0 : size, o);
    dir.writeUInt8(size >= 256 ? 0 : size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(data.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += data.length;
  });
  return Buffer.concat([header, dir, ...pngs.map((p) => p.data)]);
}

(async () => {
  const sizes = [
    ['favicon-16x16.png', 16, 0.94],
    ['favicon-32x32.png', 32, 0.9],
    ['favicon-48x48.png', 48, 0.8],
    ['favicon-180x180.png', 180, 0.72],
    ['apple-touch-icon.png', 180, 0.72],
    ['favicon-192x192.png', 192, 0.7],
    ['favicon-512x512.png', 512, 0.7],
    // Android adaptive icons crop to the central 80% circle → smaller mark.
    ['icon-maskable-512x512.png', 512, 0.56],
  ];
  for (const [name, size, fill] of sizes) {
    fs.writeFileSync(path.join(OUT, name), await icon(size, fill));
    console.log(`  ✓ ${name}`);
  }
  const icoEntries = [];
  for (const [size, fill] of [[16, 0.94], [32, 0.9], [48, 0.8]]) icoEntries.push({ size, data: await icon(size, fill) });
  fs.writeFileSync(path.join(OUT, 'favicon.ico'), ico(icoEntries));
  console.log('  ✓ favicon.ico (16, 32, 48)');
})();
