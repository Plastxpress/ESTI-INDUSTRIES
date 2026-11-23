// Photos and videos of the ESTI plant (from Media/company images, provided by the owner).
// Captions only describe what is visible in each photo.
export const PLANT_PHOTOS = [
  { src: '/assets/images/plant/plant-printer-slotter-line.jpg', caption: 'Printer slotter line' },
  { src: '/assets/images/plant/plant-flexo-printing-unit.jpg', caption: 'Flexo printing unit' },
  { src: '/assets/images/plant/plant-automatic-stitcher.jpg', caption: 'Automatic stitcher' },
  { src: '/assets/images/plant/plant-stacked-corrugated-board.jpg', caption: 'Stacked corrugated board' },
  { src: '/assets/images/plant/plant-printer-slotter-sheets.jpg', caption: 'Printer slotter with corrugated sheets' },
  { src: '/assets/images/plant/plant-sheets-and-paper-reels.jpg', caption: 'Corrugated sheets and paper reels' },
  { src: '/assets/images/plant/plant-printer-slotter.jpg', caption: 'Printer slotter' },
  { src: '/assets/images/plant/plant-sheet-feed-conveyor.jpg', caption: 'Sheet feed conveyor and printing unit' },
  { src: '/assets/images/plant/plant-automatic-stitcher-2.jpg', caption: 'Automatic stitcher' },
  { src: '/assets/images/plant/plant-roller-conveyor.jpg', caption: 'Roller conveyor' },
  { src: '/assets/images/plant/plant-corrugated-board-edge.jpg', caption: 'Corrugated board flute profile' },
  { src: '/assets/images/plant/plant-machinery.jpg', caption: 'Plant machinery' },
];

export const PLANT_VIDEOS = [
  { src: '/assets/videos/plant-printer-slotter-line.mp4', poster: '/assets/videos/posters/plant-printer-slotter-line.webp', caption: 'Printer slotter line in operation' },
  { src: '/assets/videos/plant-stitching-line.mp4', poster: '/assets/videos/posters/plant-stitching-line.webp', caption: 'Stitching line in operation' },
];

export const altFor = (ph) => `${ph.caption} at the ESTI Packaging plant`;
