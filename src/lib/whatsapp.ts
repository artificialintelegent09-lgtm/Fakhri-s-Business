import { brand } from "@/data/content";
import { dictionaries, type Lang } from "@/data/dictionaries";
import type { Product } from "@/data/products";

export function formatRupiah(amount: number): string {
  return `Rp${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${brand.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function productOrderUrl(product: Product, lang: Lang): string {
  return whatsappUrl(
    dictionaries[lang].whatsapp.order(product.name, formatRupiah(product.price)),
  );
}

export function generalInquiryUrl(lang: Lang): string {
  return whatsappUrl(dictionaries[lang].whatsapp.general);
}
