import { useState } from 'react';
import BoardSection from './BoardSection';
import { PLIES, FLUTES, APPLICATION, caliper } from '../boardData';

export default function BoardSpec() {
  const [plyIndex, setPlyIndex] = useState(0);
  const [combo, setCombo] = useState('C');

  const spec = PLIES[plyIndex];
  const thickness = caliper(combo);
  const flutes = [...combo].map((f) => ({ code: f, ...FLUTES[f] }));

  const pickPly = (i) => {
    setPlyIndex(i);
    setCombo(PLIES[i].combos[0]);
  };

  return (
    <div id="board" className="py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col">
            <h2 className="w-expanded text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-[1.02] tracking-[-0.025em]">
              Start from the board, not the box
            </h2>
            <p className="mt-5 measure-sm text-[16px] leading-[1.65] text-ink-soft">
              Ply count and flute decide almost everything that matters later —
              what the pack can carry, how high it stacks and what it costs. Build
              a section here and see the caliper it comes out at.
            </p>

            <div className="mt-9 border-t border-rule pt-6">
              <p className="measure-sm text-[15px] leading-[1.6] text-ink-soft">{spec.note}</p>

              <dl className="mt-6 space-y-5">
                {flutes.map((f) => (
                  <div key={f.code} className="flex gap-4">
                    <dt className="nums w-6 shrink-0 text-[17px] font-bold text-ultra">
                      {f.code}
                    </dt>
                    <dd>
                      <p className="nums text-[15px] font-semibold">{f.height} mm flute</p>
                      <p className="mt-1 text-[14px] leading-[1.55] text-slate">{f.use}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-10 measure-sm text-[15px] leading-[1.6] text-ink-soft lg:mt-auto lg:pt-12">
              Not sure which grade the job needs?{' '}
              <a
                href="mailto:esteepack@gmail.com?subject=Board%20grade%20enquiry"
                className="font-semibold text-ultra underline decoration-1 underline-offset-4 transition-colors hover:text-ultra-lift"
              >
                Send us the load
              </a>{' '}
              and we will specify the board against it.
            </p>
          </div>

          <div className="rounded-md border border-rule bg-mist p-5 sm:p-7">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="w-semi text-[13px] font-bold tracking-[0.02em]">Board build-up</h3>
              <p className="nums text-[12px] text-slate">
                {spec.ply}-ply · {spec.wall}
              </p>
            </div>

            <div className="mt-5 rounded-sm border border-rule bg-white px-5 py-6">
              <BoardSection combo={combo} />
            </div>

            <div className="mt-6 space-y-4">
              <Control label="Plies">
                {PLIES.map((p, i) => (
                  <Chip key={p.ply} on={i === plyIndex} onClick={() => pickPly(i)}>
                    {p.ply}
                  </Chip>
                ))}
              </Control>

              <Control label="Flute">
                {spec.combos.map((c) => (
                  <Chip key={c} on={c === combo} onClick={() => setCombo(c)}>
                    {c}
                  </Chip>
                ))}
              </Control>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-rule pt-5 text-[13px]">
              <Row term="Caliper">
                <span className="nums">{thickness.toFixed(1)} mm</span>
              </Row>
              <Row term="Flutes / metre">
                <span className="nums">{flutes.map((f) => f.perMetre).join(' · ')}</span>
              </Row>
              <div className="col-span-2">
                <Row term="Typical use">{APPLICATION[combo]}</Row>
              </div>
            </dl>

            <p className="mt-5 text-[12px] leading-relaxed text-slate">
              Reference profiles. We confirm the final grade against your own load,
              stack height and transit profile in our testing lab.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Control({ label, children }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-14 shrink-0 text-[13px] text-slate">{label}</span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Chip({ on, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={on}
      className={`nums min-w-11 rounded-sm border px-3 py-2 text-[14px] font-semibold transition-colors ${
        on ? 'border-ultra bg-ultra text-white' : 'border-rule bg-white text-ink hover:border-slate'
      }`}
    >
      {children}
    </button>
  );
}

function Row({ term, children }) {
  return (
    <div>
      <dt className="text-slate">{term}</dt>
      <dd className="mt-1 font-semibold">{children}</dd>
    </div>
  );
}
