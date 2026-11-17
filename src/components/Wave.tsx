const paths = [
  "M0 80V44C150 12 310 2 480 20s330 58 520 46c170-11 320-50 440-34V80Z",
  "M0 80V28c170 36 340 44 530 22S890 2 1090 12c150 8 250 26 350 48V80Z",
];

/**
 * A soft wave that sits on top of a section and takes the section's colour
 * (set it with a text colour class, e.g. `text-cream`), so sections melt into
 * each other instead of meeting at a hard line. The parent must be `relative`.
 */
export default function Wave({
  className = "",
  variant = 0,
}: {
  className?: string;
  variant?: 0 | 1;
}) {
  return (
    <svg
      aria-hidden
      focusable="false"
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 top-0 h-7 w-full -translate-y-[calc(100%-1px)] fill-current md:h-14 ${className}`}
    >
      <path d={paths[variant]} />
    </svg>
  );
}
