import { FLUTES, LINER_MM, caliper } from '../boardData';

/**
 * A to-scale cross-section through a corrugated board.
 * The viewBox is measured in millimetres, so every layer, flute pitch and
 * paper thickness on screen is the real dimension of the board.
 */

const VIEW_W = 44; // mm of board shown across the drawing
const VIEW_H = 19; // mm of vertical room — a 7-ply AAA board nearly fills it
const PAPER = 0.32; // mm caliper of a single paper web
const GUTTER = 11; // mm reserved at the right for the dimension

function flutePath(top, bottom, pitch) {
  // A corrugation is a run of half-pitch arcs alternately touching each liner.
  const half = pitch / 2;
  const n = Math.ceil(VIEW_W / half) + 1;
  let d = `M 0 ${bottom}`;
  for (let i = 0; i < n; i++) {
    const x0 = i * half;
    const x1 = x0 + half;
    const y1 = i % 2 === 0 ? top : bottom;
    d += ` C ${x0 + half * 0.36} ${i % 2 === 0 ? bottom : top}, ${x1 - half * 0.36} ${y1}, ${x1} ${y1}`;
  }
  return d;
}

export default function BoardSection({ combo }) {
  const total = caliper(combo);
  const top = (VIEW_H - total) / 2;

  // Build the stack from the outside in: liner, flute, liner, flute, ... liner.
  const layers = [];
  let y = top;
  layers.push({ kind: 'liner', y });
  y += LINER_MM;
  for (const f of combo) {
    layers.push({ kind: 'flute', y, flute: f, height: FLUTES[f].height });
    y += FLUTES[f].height;
    layers.push({ kind: 'liner', y });
    y += LINER_MM;
  }

  const bottom = top + total;

  return (
    <svg
      viewBox={`0 0 ${VIEW_W + GUTTER} ${VIEW_H}`}
      className="w-full h-auto"
      role="img"
      aria-label={`Cross-section of ${combo.length * 2 + 1}-ply ${combo} flute board, ${total.toFixed(1)} millimetres thick`}
    >
      <defs>
        <clipPath id="board-clip">
          <rect x="0" y="0" width={VIEW_W} height={VIEW_H} />
        </clipPath>
        <pattern id="board-grid" width="5" height="5" patternUnits="userSpaceOnUse">
          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="var(--color-rule)" strokeWidth="0.08" />
        </pattern>
      </defs>

      <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#board-grid)" opacity="0.7" />

      <g clipPath="url(#board-clip)">
        {layers.map((l, i) =>
          l.kind === 'liner' ? (
            <rect
              key={i}
              x="0"
              y={l.y}
              width={VIEW_W}
              height={LINER_MM}
              fill="var(--color-kraft)"
            />
          ) : (
            <path
              key={i}
              d={flutePath(l.y + PAPER / 2, l.y + l.height - PAPER / 2, 1000 / FLUTES[l.flute].perMetre)}
              fill="none"
              stroke="var(--color-kraft-deep)"
              strokeWidth={PAPER}
              strokeLinecap="round"
            />
          ),
        )}
      </g>

      {/* Caliper dimension, drawn the way it would be on a works drawing. */}
      <g stroke="var(--color-ultra)" strokeWidth="0.12" fill="none">
        <path d={`M ${VIEW_W + 3} ${top} H ${VIEW_W + 7.4}`} />
        <path d={`M ${VIEW_W + 3} ${bottom} H ${VIEW_W + 7.4}`} />
        <path d={`M ${VIEW_W + 5.2} ${top} V ${bottom}`} />
        <path d={`M ${VIEW_W + 4.6} ${top + 0.75} L ${VIEW_W + 5.2} ${top} L ${VIEW_W + 5.8} ${top + 0.75}`} />
        <path d={`M ${VIEW_W + 4.6} ${bottom - 0.75} L ${VIEW_W + 5.2} ${bottom} L ${VIEW_W + 5.8} ${bottom - 0.75}`} />
      </g>
      <text
        x={VIEW_W + 5.2}
        y={top - 1.1}
        textAnchor="middle"
        fill="var(--color-ultra)"
        style={{ font: '700 1.9px Archivo, sans-serif', fontVariantNumeric: 'tabular-nums' }}
      >
        {total.toFixed(1)} mm
      </text>

      {/* Scale bar: proof the drawing is true to size. */}
      <g stroke="var(--color-slate)" strokeWidth="0.11">
        <path d={`M 0 ${VIEW_H - 1} H 10`} fill="none" />
        <path d={`M 0 ${VIEW_H - 1.6} V ${VIEW_H - 0.4}`} />
        <path d={`M 10 ${VIEW_H - 1.6} V ${VIEW_H - 0.4}`} />
      </g>
      <text
        x="11.2"
        y={VIEW_H - 0.5}
        fill="var(--color-slate)"
        style={{ font: '500 1.7px Archivo, sans-serif' }}
      >
        10 mm
      </text>
    </svg>
  );
}
