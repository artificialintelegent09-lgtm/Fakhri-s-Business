import {
  Link2,
  MessageCircle,
  PenLine,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "RiWed",
  tagline: "Your Story, Beautifully Invited.",
  supportingTagline: "A beautiful invitation for your beautiful beginning.",
  watermark: "Digital Invitation by RiWed.",
  copyrightYear: 2026,
  whatsappNumber: "6285842517974",
  whatsappDisplay: "0858-4251-7974",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export const benefits: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Sparkles,
    title: "Elegant Designs",
    text: "Template undangan pernikahan yang dikurasi dengan cermat.",
  },
  {
    icon: PenLine,
    title: "Personalized for You",
    text: "Nama, foto, detail acara, dan informasi pribadi Anda disesuaikan ke dalam undangan.",
  },
  {
    icon: Link2,
    title: "Easy to Share",
    text: "Bagikan undangan Anda melalui satu tautan website yang sederhana.",
  },
  {
    icon: MessageCircle,
    title: "Simple Ordering",
    text: "Hubungi kami langsung melalui WhatsApp tanpa registrasi yang rumit.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Choose Your Design",
    text: "Lihat koleksi yang tersedia dan pilih template favorit Anda.",
  },
  {
    number: "02",
    title: "Send Your Details",
    text: "Hubungi RiWed melalui WhatsApp, lalu kirimkan data pernikahan, foto, dan materi lain yang dibutuhkan.",
  },
  {
    number: "03",
    title: "Receive Your Invitation",
    text: "RiWed menyesuaikan template pilihan Anda dan mengirimkan website undangan yang sudah jadi.",
  },
];

export const serviceInfo = [
  {
    title: "Revisi",
    text: "Maksimal 3 kali revisi minor.",
  },
  {
    title: "Estimasi Pengerjaan",
    text: "3–5 hari kerja setelah pembayaran dan seluruh materi lengkap diterima.",
  },
  {
    title: "Masa Aktif",
    text: "Website undangan aktif selama 1 tahun.",
  },
  {
    title: "Pemesanan",
    text: "Pemesanan diproses secara manual melalui WhatsApp.",
  },
  {
    title: "Desain & Fitur",
    text: "Desain dan fitur yang tersedia mengikuti template yang Anda pilih.",
  },
  {
    title: "Fitur Kustom",
    text: "Pengembangan fitur kustom saat ini belum tersedia.",
  },
];
