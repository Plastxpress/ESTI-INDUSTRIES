const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'public', 'assets', 'images', 'esti-logo-emblem.png');
const publicDir = path.join(__dirname, 'public');

async function generateFavicons() {
  console.log('Generating square favicons from esti-logo-emblem.png...');
  
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log(`Source: ${metadata.width}x${metadata.height}`);
  
  // Make the image square by adding white padding
  const maxDim = Math.max(metadata.width, metadata.height);
  
  const sizes = [
    { name: 'favicon-512x512.png', size: 512 },
    { name: 'favicon-192x192.png', size: 192 },
    { name: 'favicon-180x180.png', size: 180 },
    { name: 'favicon-48x48.png', size: 48 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'favicon-16x16.png', size: 16 },
  ];

  for (const { name, size } of sizes) {
    await sharp(inputPath)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`  ✓ ${name} (${size}x${size})`);
  }

  // Generate ICO file (using 48x48 and 32x32 and 16x16 PNGs)
  // For the ICO, we'll just use the 48x48 PNG — Google accepts PNG favicons
  // But we need a favicon.ico at root for legacy browser support
  const ico48 = await sharp(inputPath)
    .resize(48, 48, {
      fit: 'contain', 
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    })
    .png()
    .toBuffer();
  
  // Create a simple ICO file from the 48x48 PNG
  // ICO header: 2 bytes reserved (0), 2 bytes type (1=icon), 2 bytes count (1)
  // ICO directory entry: 16 bytes
  // Then raw PNG data
  const icoHeader = Buffer.alloc(6);
  icoHeader.writeUInt16LE(0, 0);  // reserved
  icoHeader.writeUInt16LE(1, 2);  // type: icon
  icoHeader.writeUInt16LE(1, 4);  // count: 1 image

  const icoEntry = Buffer.alloc(16);
  icoEntry.writeUInt8(48, 0);     // width
  icoEntry.writeUInt8(48, 1);     // height
  icoEntry.writeUInt8(0, 2);      // color palette
  icoEntry.writeUInt8(0, 3);      // reserved
  icoEntry.writeUInt16LE(1, 4);   // color planes
  icoEntry.writeUInt16LE(32, 6);  // bits per pixel
  icoEntry.writeUInt32LE(ico48.length, 8);  // image size
  icoEntry.writeUInt32LE(22, 12); // offset (6 header + 16 entry = 22)

  const icoBuffer = Buffer.concat([icoHeader, icoEntry, ico48]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('  ✓ favicon.ico (48x48 ICO)');

  console.log('\nAll favicons generated successfully!');
}

generateFavicons().catch(console.error);
