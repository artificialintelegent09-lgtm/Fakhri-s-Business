import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "dark";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 text-[0.95rem] font-medium tracking-wide transition-[background-color,color,border-color,transform] duration-300 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  // Pandan fill with espresso text keeps AA contrast.
  primary:
    "bg-pandan text-espresso hover:bg-espresso hover:text-cream focus-visible:outline-espresso",
  secondary:
    "border border-espresso/40 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream",
  dark: "bg-espresso text-cream hover:bg-pandan hover:text-espresso",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
  /** Screen-reader text announced for external links. */
  externalLabel?: string;
};

export default function ButtonLink({
  variant = "primary",
  external = false,
  externalLabel = "opens in a new tab",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...props}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {external && <span className="sr-only"> ({externalLabel})</span>}
    </a>
  );
}
