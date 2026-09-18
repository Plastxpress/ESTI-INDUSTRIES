import { useEffect, useMemo, useState } from 'react';

/**
 * A FEFCO 0201 regular slotted carton, drawn from the dimensions you type.
 *
 * Flat view is the die-line as it goes to the slotter — solid lines cut, dash-dot
 * lines crease. Folded view is the same carton assembled. The readout says how many
 * blanks come off one 1800 × 3500 sheet, which is the number that decides the price.
 */

const SHEET = { long: 3500, short: 1800 }; // printer slotter format, mm
const TAB = 40; // glue tab
const SLOT = 6; // slot cut between adjacent flaps
const PAD = 64; // room around the drawing for dimension lines

const clamp = (n, lo, hi) => Math.min(hi, Math.max(lo, n));
const toNum = (v, fallback) => {
  const n = Number.parseFloat(v);
  return Number.isFinite(n) ? n : fallback;
};
const mm = (n) => Math.round(n).toLocaleString('en-GB');

const FIELDS = [
  ['L', 'Length'],
  ['W', 'Width'],
  ['H', 'Height'],
];

const CUT = { stroke: 'var(--color-ink)', strokeWidth: 1.6, fill: 'none', vectorEffect: 'non-scaling-stroke' };
const CREASE = {
  stroke: 'var(--color-ultra)',
  strokeWidth: 1.3,
  fill: 'none',
  strokeDasharray: '9 4 2 4',
  vectorEffect: 'non-scaling-stroke',
};

export default function DieLine() {
  const [raw, setRaw] = useState({ L: '400', W: '300', H: '250' });
  const [folded, setFolded] = useState(false);
  const [compact, setCompact] = useState(false);

  // Small screens get a tighter user-unit box, so labels do not shrink to nothing.
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const on = () => setCompact(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);

  const L = clamp(toNum(raw.L, 400), 40, 1600);
  const W = clamp(toNum(raw.W, 300), 40, 1600);
  const H = clamp(toNum(raw.H, 250), 40, 1600);

  const blank = useMemo(() => {
    const width = 2 * (L + W) + TAB; // tab plus four panels
    const height = H + W; // body plus a half-width flap top and bottom
    const perSheet = Math.max(
      Math.floor(SHEET.long / width) * Math.floor(SHEET.short / height),
      Math.floor(SHEET.long / height) * Math.floor(SHEET.short / width),
    );
    return { width, height, perSheet, area: (width * height) / 1e6 };
  }, [L, W, H]);

  const vbW = compact ? 640 : 1000;
  const font = compact ? 19 : 15;
  const view = folded ? isoLayout(L, W, H, vbW) : flatLayout(blank, vbW);

  return (
    <figure className="mt-14 overflow-hidden rounded-md border border-rule bg-white lg:mt-16">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule px-5 py-4 sm:px-7">
        <h3 className="w-semi text-[13px] font-bold tracking-[0.02em]">
          Die-line · FEFCO 0201 regular slotted carton
        </h3>
        <div className="flex gap-2" role="group" aria-label="Drawing view">
          {[
            [false, 'Flat blank'],
            [true, 'Folded'],
          ].map(([v, label]) => (
            <button
              key={label}
              type="button"
              onClick={() => setFolded(v)}
              aria-pressed={folded === v}
              className={`rounded-sm border px-3 py-1.5 text-[13px] font-semibold transition-colors ${
                folded === v
                  ? 'border-ultra bg-ultra text-white'
                  : 'border-rule bg-white text-ink hover:border-slate'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-mist/40 px-4 py-5 sm:px-7 sm:py-6">
        <svg
          viewBox={`0 0 ${vbW} ${view.h}`}
          className="block w-full"
          role="img"
          aria-label={
            folded
              ? `Assembled carton, ${mm(L)} by ${mm(W)} by ${mm(H)} millimetres internal.`
              : `Flat die-line for a ${mm(L)} by ${mm(W)} by ${mm(H)} millimetre carton. The blank measures ${mm(blank.width)} by ${mm(blank.height)} millimetres.`
          }
        >
          {folded ? (
            <Folded L={L} W={W} H={H} view={view} font={font} />
          ) : (
            <Flat L={L} W={W} H={H} blank={blank} view={view} font={font} />
          )}
        </svg>
      </div>

      <figcaption className="border-t border-rule">
        <div className="flex flex-wrap items-end gap-x-8 gap-y-5 px-5 py-5 sm:px-7">
          {FIELDS.map(([k, label]) => (
            <label key={k} className="block">
              <span className="block text-[12px] text-slate">{label}</span>
              <span className="mt-1.5 flex items-baseline gap-1.5">
                <input
                  type="number"
                  inputMode="numeric"
                  min="40"
                  max="1600"
                  value={raw[k]}
                  onChange={(e) => setRaw({ ...raw, [k]: e.target.value })}
                  className="nums w-24 rounded-sm border border-rule bg-white px-3 py-2 text-[15px] font-semibold outline-none transition-colors focus:border-ultra"
                />
                <span className="text-[13px] text-slate">mm</span>
              </span>
            </label>
          ))}
          <p className="text-[13px] leading-snug text-slate">
            Internal size.
            <br />
            Solid lines cut, dash-dot lines crease.
          </p>
        </div>

        <dl className="grid gap-px border-t border-rule bg-rule sm:grid-cols-3">
          <Stat term="Blank size">
            {mm(blank.width)} × {mm(blank.height)} mm
          </Stat>
          <Stat term="Off one 1800 × 3500 sheet">
            {blank.perSheet > 0
              ? `${blank.perSheet} blank${blank.perSheet === 1 ? '' : 's'}`
              : 'Bigger than the sheet'}
          </Stat>
          <Stat term="Board per box">{blank.area.toFixed(2)} m²</Stat>
        </dl>

        <p className="border-t border-rule px-5 py-4 text-[12px] leading-relaxed text-slate sm:px-7">
          Reference geometry. Slot, tab and crease allowances shift with the board
          caliper you end up on, so we cut to the drawing we have tested, not to this one.
        </p>
      </figcaption>
    </figure>
  );
}

function Stat({ term, children }) {
  return (
    <div className="bg-white px-5 py-4 sm:px-7">
      <dt className="text-[12px] text-slate">{term}</dt>
      <dd className="nums mt-1 text-[17px] font-bold tracking-[-0.01em]">{children}</dd>
    </div>
  );
}

/* ---- Layout: fit the drawing, then let the box take the height it needs -- */

function fit(w, h, vbW, minH, maxH) {
  const s = (vbW - PAD * 2) / w;
  const boxH = clamp(h * s + PAD * 2, minH, maxH);
  const scale = Math.min(s, (boxH - PAD * 2) / h);
  return { scale, h: boxH, ox: (vbW - w * scale) / 2, oy: (boxH - h * scale) / 2 };
}

function flatLayout(blank, vbW) {
  const f = fit(blank.width, blank.height, vbW, 230, 560);
  return { ...f, X: (v) => f.ox + v * f.scale, Y: (v) => f.oy + v * f.scale };
}

function isoLayout(L, W, H, vbW) {
  const c = Math.cos(Math.PI / 6);
  const s = Math.sin(Math.PI / 6);
  const proj = (x, y, z) => [(x - y) * c, (x + y) * s - z];
  const corners = [
    [0, 0, 0], [L, 0, 0], [L, W, 0], [0, W, 0],
    [0, 0, H], [L, 0, H], [L, W, H], [0, W, H],
  ].map(([x, y, z]) => proj(x, y, z));
  const xs = corners.map((q) => q[0]);
  const ys = corners.map((q) => q[1]);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  const f = fit(Math.max(...xs) - minX, Math.max(...ys) - minY, vbW, 300, 560);
  const at = (x, y, z) => {
    const [a, b] = proj(x, y, z);
    return [f.ox + (a - minX) * f.scale, f.oy + (b - minY) * f.scale];
  };
  // Centre of the projected solid, used to push dimension lines clear of it.
  const cx = corners.reduce((t, q) => t + q[0], 0) / 8;
  const cy = corners.reduce((t, q) => t + q[1], 0) / 8;
  return { ...f, at, centre: [f.ox + (cx - minX) * f.scale, f.oy + (cy - minY) * f.scale] };
}

/* ---- Flat die-line ------------------------------------------------------ */

function Flat({ L, W, H, blank, view, font }) {
  const { X, Y } = view;
  const flap = W / 2;
  const xs = [0, TAB, TAB + L, TAB + L + W, TAB + 2 * L + W, TAB + 2 * L + 2 * W];
  const ys = [0, flap, flap + H, blank.height];
  const panels = [
    [xs[1], xs[2], L],
    [xs[2], xs[3], W],
    [xs[3], xs[4], L],
    [xs[4], xs[5], W],
  ];
  // A real glue tab is chamfered so it feeds without catching.
  const chamfer = Math.min(TAB * 0.55, H * 0.18);

  return (
    <g>
      <rect x={X(xs[1])} y={Y(ys[0])} width={(xs[5] - xs[1]) * view.scale} height={blank.height * view.scale} fill="#efe4d5" />
      <path
        fill="#efe4d5"
        d={`M${X(xs[1])},${Y(ys[1])} H${X(xs[0]) + chamfer * view.scale} L${X(xs[0])},${Y(ys[1] + chamfer)} V${Y(ys[2] - chamfer)} L${X(xs[0]) + chamfer * view.scale},${Y(ys[2])} H${X(xs[1])} Z`}
      />

      {/* Cut outline: chamfered tab, then flaps and body */}
      <path
        {...CUT}
        d={`M${X(xs[1])},${Y(ys[1])} H${X(xs[0]) + chamfer * view.scale} L${X(xs[0])},${Y(ys[1] + chamfer)} V${Y(ys[2] - chamfer)} L${X(xs[0]) + chamfer * view.scale},${Y(ys[2])} H${X(xs[1])}`}
      />
      <path
        {...CUT}
        d={`M${X(xs[1])},${Y(ys[1])} V${Y(ys[0])} H${X(xs[5])} V${Y(ys[3])} H${X(xs[1])} V${Y(ys[2])}`}
      />
      {/* Slots between adjacent flaps */}
      {[xs[2], xs[3], xs[4]].map((x) => (
        <g key={x}>
          <path {...CUT} d={`M${X(x - SLOT / 2)},${Y(ys[0])} V${Y(ys[1])} H${X(x + SLOT / 2)} V${Y(ys[0])}`} />
          <path {...CUT} d={`M${X(x - SLOT / 2)},${Y(ys[3])} V${Y(ys[2])} H${X(x + SLOT / 2)} V${Y(ys[3])}`} />
        </g>
      ))}

      {/* Creases */}
      <path {...CREASE} d={`M${X(xs[1])},${Y(ys[1])} H${X(xs[5])}`} />
      <path {...CREASE} d={`M${X(xs[1])},${Y(ys[2])} H${X(xs[5])}`} />
      {[xs[1], xs[2], xs[3], xs[4]].map((x) => (
        <path key={x} {...CREASE} d={`M${X(x)},${Y(ys[1])} V${Y(ys[2])}`} />
      ))}

      {/* Panel sizes, set in the body */}
      {panels.map(([a, b, v]) => (
        <text
          key={a}
          x={X((a + b) / 2)}
          y={Y((ys[1] + ys[2]) / 2)}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={font}
          fill="var(--color-ink-soft)"
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {mm(v)}
        </text>
      ))}

      <Dim a={[X(xs[0]), Y(ys[3]) + 32]} b={[X(xs[5]), Y(ys[3]) + 32]} text={`${mm(blank.width)} mm`} font={font} />
      <Dim a={[X(xs[5]) + 32, Y(ys[0])]} b={[X(xs[5]) + 32, Y(ys[3])]} text={`${mm(blank.height)} mm`} font={font} />
      <Dim a={[X(xs[0]) - 30, Y(ys[1])]} b={[X(xs[0]) - 30, Y(ys[2])]} text={`${mm(H)} mm`} font={font} />
    </g>
  );
}

/* ---- Folded carton ------------------------------------------------------ */

function Folded({ L, W, H, view, font }) {
  const { at, centre } = view;
  const pts = (...c) => c.map(([x, y, z]) => at(x, y, z).join(',')).join(' ');
  const edge = { stroke: 'var(--color-ink)', strokeWidth: 1.5, vectorEffect: 'non-scaling-stroke' };

  // The camera sits at +x, +y, +z, so the faces that face it are x=L, y=W and z=H.
  const seamA = at(0, W / 2, H);
  const seamB = at(L, W / 2, H);

  return (
    <g>
      <polygon points={pts([L, 0, 0], [L, W, 0], [L, W, H], [L, 0, H])} fill="#a97f4f" {...edge} />
      <polygon points={pts([0, W, 0], [L, W, 0], [L, W, H], [0, W, H])} fill="#c4a176" {...edge} />
      <polygon points={pts([0, 0, H], [L, 0, H], [L, W, H], [0, W, H])} fill="#dcc09a" {...edge} />
      {/* Where the two top flaps meet */}
      <line
        x1={seamA[0]}
        y1={seamA[1]}
        x2={seamB[0]}
        y2={seamB[1]}
        stroke="var(--color-ink)"
        strokeWidth="1.1"
        strokeDasharray="7 5"
        vectorEffect="non-scaling-stroke"
      />

      <Dim a={at(0, W, 0)} b={at(L, W, 0)} away={centre} off={30} text={`${mm(L)} I.D.`} font={font} />
      <Dim a={at(L, W, 0)} b={at(L, 0, 0)} away={centre} off={30} text={`${mm(W)} I.D.`} font={font} />
      <Dim a={at(0, W, 0)} b={at(0, W, H)} away={centre} off={30} text={`${mm(H)} I.D.`} font={font} />
    </g>
  );
}

/* ---- A dimension line, the way the customers' own drawings show them ----- */

function Dim({ a, b, text, font = 15, away, off = 0 }) {
  let [x1, y1] = a;
  let [x2, y2] = b;
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  let nx = -(y2 - y1) / len;
  let ny = (x2 - x1) / len;

  if (away) {
    // Push the line to the outside of the solid.
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    if ((mx - away[0]) * nx + (my - away[1]) * ny < 0) {
      nx = -nx;
      ny = -ny;
    }
    x1 += nx * off;
    y1 += ny * off;
    x2 += nx * off;
    y2 += ny * off;
  }

  const ux = (x2 - x1) / len;
  const uy = (y2 - y1) / len;
  const A = 5;
  const tip = (px, py, sx, sy) =>
    `${px},${py} ${px + sx * A * 2 + nx * A},${py + sy * A * 2 + ny * A} ${px + sx * A * 2 - nx * A},${py + sy * A * 2 - ny * A}`;

  // Keep the label upright whatever the line is doing.
  let deg = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  if (deg > 90) deg -= 180;
  if (deg < -90) deg += 180;
  const lx = (x1 + x2) / 2 + nx * 13;
  const ly = (y1 + y2) / 2 + ny * 13;

  return (
    <g stroke="var(--color-ultra)" fill="var(--color-ultra)">
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
      <polygon points={tip(x1, y1, ux, uy)} stroke="none" />
      <polygon points={tip(x2, y2, -ux, -uy)} stroke="none" />
      <text
        x={lx}
        y={ly}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={font}
        fontWeight="600"
        stroke="none"
        transform={`rotate(${deg} ${lx} ${ly})`}
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {text}
      </text>
    </g>
  );
}