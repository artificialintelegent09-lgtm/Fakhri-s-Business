export type ProductTheme = "classic" | "modern" | "botanical";

export type Product = {
  slug: string;
  name: string;
  description: string;
  /** Regular price in rupiah (shown struck through). */
  originalPrice: number;
  /** Current special opening price in rupiah. */
  price: number;
  demoUrl: string;
  theme: ProductTheme;
};

export const products: Product[] = [
  {
    slug: "classic-luxury",
    name: "Classic Luxury",
    description: "Timeless elegance for your special day.",
    originalPrice: 159000,
    price: 129000,
    demoUrl: "https://ameliarafael.vercel.app/",
    theme: "classic",
  },
  {
    slug: "modern-muse",
    name: "Modern Muse",
    description: "Modern, minimal, and effortlessly beautiful.",
    originalPrice: 179000,
    price: 149000,
    demoUrl: "https://ameliarafael2.vercel.app/",
    theme: "modern",
  },
  {
    slug: "botanical-romance",
    name: "Botanical Romance",
    description: "A romantic story inspired by nature.",
    originalPrice: 199000,
    price: 169000,
    demoUrl: "https://ameliarafael3.vercel.app/",
    theme: "botanical",
  },
];
