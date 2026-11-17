import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "gold";

const base =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium tracking-wide transition-[background-color,color,border-color,transform] duration-300 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-cherry-deep text-cream-light hover:bg-cocoa",
  secondary:
    "border border-cocoa/40 text-cocoa hover:border-cocoa hover:bg-cocoa hover:text-cream",
  // For dark (cocoa) backgrounds.
  gold: "bg-butter text-cocoa hover:bg-cream",
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
