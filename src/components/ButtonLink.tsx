import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "text";

const base =
  "inline-flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal px-6 py-3.5 text-ivory hover:bg-brown",
  secondary:
    "border border-charcoal px-6 py-3.5 text-charcoal hover:bg-charcoal hover:text-ivory",
  text: "border-b border-charcoal/40 pb-0.5 text-charcoal hover:border-charcoal",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
};

export default function ButtonLink({
  variant = "primary",
  external = false,
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
      {external && <span className="sr-only"> (membuka tab baru)</span>}
    </a>
  );
}
