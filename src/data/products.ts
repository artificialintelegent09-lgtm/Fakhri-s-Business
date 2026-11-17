export type ProductTheme = "classic" | "modern" | "botanical";

export type Product = {
  slug: string;
  name: string;
  /** Regular price in rupiah (shown struck through). */
  originalPrice: number;
  /** Current special opening price in rupiah. */
  price: number;
  demoUrl: string;
  theme: ProductTheme;
};

// Descriptions live in src/data/dictionaries.ts (keyed by slug) so they can be translated.
export const products: Product[] = [
  {
    slug: "classic-luxury",
    name: "Classic Luxury",
    originalPrice: 159000,
    price: 129000,
    demoUrl: "https://ameliarafael.vercel.app/",
    theme: "classic",
  },
  {
    slug: "modern-muse",
    name: "Modern Muse",
    originalPrice: 179000,
    price: 149000,
    demoUrl: "https://ameliarafael2.vercel.app/",
    theme: "modern",
  },
  {
    slug: "botanical-romance",
    name: "Botanical Romance",
    originalPrice: 199000,
    price: 169000,
    demoUrl: "https://ameliarafael3.vercel.app/",
    theme: "botanical",
  },
];
