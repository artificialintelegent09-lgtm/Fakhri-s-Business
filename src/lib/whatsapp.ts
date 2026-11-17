import { brand } from "@/data/content";
import type { Product } from "@/data/products";

const WHATSAPP_BASE_URL = `https://wa.me/${brand.whatsappNumber}`;

export function formatRupiah(amount: number): string {
  return `Rp${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}

export function whatsappUrl(message?: string): string {
  return message
    ? `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`
    : WHATSAPP_BASE_URL;
}

export function productOrderUrl(product: Product): string {
  return whatsappUrl(
    `Halo RiWed! Saya tertarik memesan undangan digital dengan template ${product.name} seharga ${formatRupiah(product.price)}. Boleh minta informasi lebih lanjut mengenai proses pemesanannya?`,
  );
}

export const generalInquiryUrl = whatsappUrl(
  "Halo RiWed! Saya tertarik dengan undangan digital pernikahan dari RiWed. Boleh minta informasi lebih lanjut?",
);
