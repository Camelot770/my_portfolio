'use client';

import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import { useCopy } from '@/components/CopyProvider';
import { shouldIntercept, useNav } from './kit';

type StationKey = 'brief' | 'request' | 'mis' | 'webapp' | 'launch' | 'pay' | 'booking' | 'ai';

interface Geometry {
  viewBox: string;
  stroke: number;
  casing: number;
  font: number;
  r: number;
  rx: number;
  ring: number;
  train: [number, number];
  /** `over` lines are drawn last, so they pass over the others where there is no station */
  lines: Array<{
    id: 'red' | 'blue' | 'green' | 'violet';
    d: string;
    color: string;
    delay: number;
    dur: number;
    over?: true;
    /** trains on the line, default 2; a short branch carries one */
    trains?: 1 | 2;
  }>;
  stations: Array<{
    key: StationKey;
    x: number;
    y: number;
    big?: boolean;
    color: string;
    delay: number;
    /** `wrap` sets the label on two lines, split at its hyphen or first space */
    label: { x: number; y: number; anchor: 'start' | 'middle' | 'end'; wrap?: true };
  }>;
  /** white casing under an `over` line where it crosses another line without a station */
  crossings: string[];
}

const RED = 'var(--red)';
const BLUE = 'var(--blue)';
const GREEN = 'var(--green)';
const VIOLET = 'var(--violet)';

const DESKTOP: Geometry = {
  viewBox: '0 0 1440 900',
  stroke: 24,
  casing: 40,
  font: 24,
  r: 20,
  rx: 30,
  ring: 8,
  train: [28, 10],
  lines: [
    { id: 'red', d: 'M660 780 H900 L1040 640 V320 L1180 180 H2400', color: RED, delay: 0.15, dur: 20, over: true },
    { id: 'blue', d: 'M760 240 H960 L1040 320 H1300 V580', color: BLUE, delay: 0.45, dur: 15 },
    { id: 'green', d: 'M840 1200 V640 H1260 L1340 720', color: GREEN, delay: 0.7, dur: 16 },
    { id: 'violet', d: 'M1040 320 L1180 460', color: VIOLET, delay: 1.1, dur: 6, trains: 1 },
  ],
  crossings: ['M812 780 H868'],
  stations: [
    { key: 'request', x: 660, y: 780, color: RED, delay: 0.35, label: { x: 660, y: 838, anchor: 'middle' } },
    { key: 'mis', x: 1040, y: 640, big: true, color: GREEN, delay: 0.95, label: { x: 1068, y: 700, anchor: 'start' } },
    { key: 'webapp', x: 1040, y: 320, big: true, color: BLUE, delay: 1.05, label: { x: 1004, y: 374, anchor: 'end' } },
    { key: 'launch', x: 1180, y: 180, color: RED, delay: 1.2, label: { x: 1180, y: 136, anchor: 'start' } },
    { key: 'brief', x: 760, y: 240, color: BLUE, delay: 0.6, label: { x: 760, y: 292, anchor: 'middle' } },
    { key: 'pay', x: 1300, y: 580, color: BLUE, delay: 1.3, label: { x: 1268, y: 589, anchor: 'end' } },
    { key: 'booking', x: 1340, y: 720, color: GREEN, delay: 1.4, label: { x: 1372, y: 784, anchor: 'end' } },
    { key: 'ai', x: 1180, y: 460, color: VIOLET, delay: 1.5, label: { x: 1180, y: 512, anchor: 'middle' } },
  ],
};

const TABLET: Geometry = { ...DESKTOP, viewBox: '560 110 900 740' };

const MOBILE: Geometry = {
  viewBox: '0 0 390 430',
  stroke: 14,
  casing: 24,
  font: 15,
  r: 11,
  rx: 16,
  ring: 5,
  train: [17, 6],
  lines: [
    { id: 'red', d: 'M-40 360 H90 L170 280 V120 L230 60 H460', color: RED, delay: 0.15, dur: 18, over: true },
    { id: 'blue', d: 'M40 70 H120 L170 120 H310 V230', color: BLUE, delay: 0.45, dur: 13 },
    { id: 'green', d: 'M110 490 V280 H300 L350 330', color: GREEN, delay: 0.7, dur: 14 },
    { id: 'violet', d: 'M170 120 L240 190', color: VIOLET, delay: 1.1, dur: 5, trains: 1 },
  ],
  crossings: ['M99 351 L121 329'],
  stations: [
    { key: 'request', x: 40, y: 360, color: RED, delay: 0.35, label: { x: 40, y: 394, anchor: 'middle' } },
    { key: 'mis', x: 170, y: 280, big: true, color: GREEN, delay: 0.95, label: { x: 186, y: 314, anchor: 'start' } },
    { key: 'webapp', x: 170, y: 120, big: true, color: BLUE, delay: 1.05, label: { x: 152, y: 156, anchor: 'end' } },
    { key: 'launch', x: 230, y: 60, color: RED, delay: 1.2, label: { x: 376, y: 40, anchor: 'end' } },
    { key: 'brief', x: 40, y: 70, color: BLUE, delay: 0.6, label: { x: 40, y: 48, anchor: 'middle' } },
    { key: 'pay', x: 310, y: 230, color: BLUE, delay: 1.3, label: { x: 310, y: 262, anchor: 'middle' } },
    { key: 'booking', x: 350, y: 330, color: GREEN, delay: 1.4, label: { x: 378, y: 366, anchor: 'end' } },
    { key: 'ai', x: 240, y: 190, color: VIOLET, delay: 1.5, label: { x: 238, y: 222, anchor: 'middle', wrap: true } },
  ],
};

/** «ИИ-ассистент» → «ИИ-» / «ассистент»; "AI assistant" → "AI" / "assistant" */
function splitLabel(text: string): string[] {
  const i = text.search(/[-\s]/);
  if (i < 0) return [text];
  return text[i] === '-' ? [text.slice(0, i + 1), text.slice(i + 1)] : [text.slice(0, i), text.slice(i + 1)];
}

const TARGETS: Record<StationKey, string> = {
  brief: '#process',
  request: '#contact',
  mis: '/portfolio/zdorovie-semyi',
  webapp: '/services#telegram-max-apps',
  launch: '#process',
  pay: '/portfolio/roza-tsvetov',
  booking: '/portfolio/zdorovie-semyi',
  ai: '/services#ai-integration',
};

function MapSvg({ g, prefix, motion, className }: { g: Geometry; prefix: string; motion: boolean; className: string }) {
  const { copy } = useCopy();
  const labels = copy.home.stations;
  const nav = useNav();
  const ref = useRef<SVGSVGElement>(null);

  // Trains stop when the map leaves the screen.
  useEffect(() => {
    const svg = ref.current;
    if (!svg || !motion) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) svg.unpauseAnimations();
      else svg.pauseAnimations();
    });
    io.observe(svg);
    return () => io.disconnect();
  }, [motion]);

  const go = (e: MouseEvent<Element>, href: string) => {
    if (href.startsWith('#')) return;
    const target = nav ? shouldIntercept(e, href) : null;
    if (!target || !nav) return;
    e.preventDefault();
    nav(target);
  };

  const [tw, th] = g.train;

  const line = (l: Geometry['lines'][number]) => (
    <path
      key={l.id}
      id={`${prefix}-${l.id}`}
      className="map__line"
      d={l.d}
      pathLength={1}
      stroke={l.color}
      strokeWidth={g.stroke}
      style={{ '--d': `${l.delay}s` } as CSSProperties}
    />
  );

  return (
    <svg
      ref={ref}
      className={`map ${className}`}
      viewBox={g.viewBox}
      preserveAspectRatio="xMaxYMax meet"
      role="group"
      aria-label={copy.home.mapLabel}
      style={{ fontSize: g.font }}
    >
      {g.lines.filter((l) => !l.over).map(line)}

      {/* the white casing opens a gap in the lower line on both sides of the line passing over it */}
      {g.crossings.map((d) => (
        <path key={d} className="map__casing" d={d} strokeWidth={g.casing} aria-hidden="true" />
      ))}

      {g.lines.filter((l) => l.over).map(line)}

      {motion &&
        g.lines.map((l) =>
          (l.trains === 1 ? [0] : [0, 0.5]).map((offset) => (
            <rect
              key={`${l.id}-${offset}`}
              className="map__train"
              x={-tw / 2}
              y={-th / 2}
              width={tw}
              height={th}
              rx={th / 2}
              opacity={0}
              aria-hidden="true"
            >
              <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin={`${1.7 + offset * 2}s`} fill="freeze" />
              <animateMotion
                dur={`${l.dur}s`}
                begin={`${1.7 + offset * 2}s`}
                repeatCount="indefinite"
                rotate="auto"
                keyPoints={offset ? '1;0;1' : '0;1;0'}
                keyTimes="0;0.5;1"
                calcMode="spline"
                keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
              >
                <mpath href={`#${prefix}-${l.id}`} />
              </animateMotion>
            </rect>
          ))
        )}

      {g.stations.map((s) => {
        const href = TARGETS[s.key];
        return (
          <a
            key={s.key}
            href={href}
            className="map__stop"
            aria-label={labels[s.key]}
            style={{ '--hl': s.color } as CSSProperties}
            onClick={(e) => go(e, href)}
          >
            <g className="map__st" style={{ '--d': `${s.delay}s` } as CSSProperties}>
              <circle cx={s.x} cy={s.y} r={s.big ? g.rx : g.r} strokeWidth={g.ring} />
            </g>
            <text
              className="map__lab"
              x={s.label.x}
              y={s.label.y}
              textAnchor={s.label.anchor}
              style={{ '--d': `${s.delay + 0.1}s` } as CSSProperties}
            >
              {s.label.wrap
                ? splitLabel(labels[s.key]).map((part, i) => (
                    <tspan key={part} x={s.label.x} dy={i ? '1.05em' : undefined}>
                      {part}
                    </tspan>
                  ))
                : labels[s.key]}
            </text>
          </a>
        );
      })}
    </svg>
  );
}

export function LineMap() {
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setMotion(!mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return (
    <>
      <MapSvg g={DESKTOP} prefix="md" motion={motion} className="map--d" />
      <MapSvg g={TABLET} prefix="mt" motion={motion} className="map--t" />
      <MapSvg g={MOBILE} prefix="mm" motion={motion} className="map--m" />
    </>
  );
}
