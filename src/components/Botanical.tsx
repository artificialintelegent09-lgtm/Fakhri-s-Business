type Point = { x: number; y: number };

// Stem: a gentle cubic curve from bottom to top of a 200×320 viewBox.
const P0: Point = { x: 100, y: 312 };
const P1: Point = { x: 96, y: 210 };
const P2: Point = { x: 70, y: 110 };
const P3: Point = { x: 112, y: 14 };

function bezier(t: number): Point {
  const u = 1 - t;
  return {
    x: u ** 3 * P0.x + 3 * u * u * t * P1.x + 3 * u * t * t * P2.x + t ** 3 * P3.x,
    y: u ** 3 * P0.y + 3 * u * u * t * P1.y + 3 * u * t * t * P2.y + t ** 3 * P3.y,
  };
}

/** Direction of the stem at t, in degrees (0 = pointing up). */
function heading(t: number): number {
  const u = 1 - t;
  const dx =
    3 * u * u * (P1.x - P0.x) + 6 * u * t * (P2.x - P1.x) + 3 * t * t * (P3.x - P2.x);
  const dy =
    3 * u * u * (P1.y - P0.y) + 6 * u * t * (P2.y - P1.y) + 3 * t * t * (P3.y - P2.y);
  return (Math.atan2(dx, -dy) * 180) / Math.PI;
}

const LEAF = "M0 0C11-14 11-36 0-56C-11-36-11-14 0 0Z";

// Alternating leaves along the stem, shrinking toward the tip.
const leaves = [0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84].flatMap((t, index) => {
  const { x, y } = bezier(t);
  const base = heading(t);
  const scale = 1 - t * 0.5;
  return [
    { x, y, angle: base - 52, scale, key: `${index}-l` },
    { x, y, angle: base + 52, scale: scale * 0.92, key: `${index}-r` },
  ];
});

/** Decorative leafy sprig drawn in currentColor. Purely ornamental. */
export default function BotanicalSprig({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  const tip = bezier(1);
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      aria-hidden
      focusable="false"
      className={`${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path
        d={`M${P0.x} ${P0.y}C${P1.x} ${P1.y} ${P2.x} ${P2.y} ${P3.x} ${P3.y}`}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {leaves.map((leaf) => (
        <path
          key={leaf.key}
          d={LEAF}
          fill="currentColor"
          fillOpacity="0.85"
          transform={`translate(${leaf.x.toFixed(1)} ${leaf.y.toFixed(1)}) rotate(${leaf.angle.toFixed(1)}) scale(${leaf.scale.toFixed(2)})`}
        />
      ))}
      <path
        d={LEAF}
        fill="currentColor"
        transform={`translate(${tip.x} ${tip.y + 4}) rotate(${heading(1).toFixed(1)}) scale(0.5)`}
      />
    </svg>
  );
}
