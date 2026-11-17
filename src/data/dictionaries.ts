export type Lang = "id" | "en";

type Item = { title: string; text: string };

export type Dictionary = {
  nav: {
    home: string;
    collection: string;
    info: string;
    whatsapp: string;
    mainNav: string;
    mobileNav: string;
    language: string;
    skip: string;
    homeAria: string;
  };
  hero: {
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    text: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  collection: {
    title: string;
    text: string;
    specialLabel: string;
    specialNote: string;
    livePreview: string;
    orderNow: string;
    regularPrice: string;
    openingPrice: string;
    newTab: string;
    swipeHint: string;
    productPosition: (index: number, total: number) => string;
    goTo: (name: string) => string;
  };
  products: Record<string, { description: string }>;
  why: { title: string; items: Item[] };
  how: {
    title: string;
    text: string;
    steps: Item[];
    infoTitle: string;
    info: string[];
  };
  cta: { title: string; text: string; button: string; numberLabel: string };
  footer: { about: string; rights: string; watermark: string; photoNote: string };
  whatsapp: {
    order: (name: string, price: string) => string;
    general: string;
  };
};

const id: Dictionary = {
  nav: {
    home: "Home",
    collection: "Koleksi",
    info: "Info",
    whatsapp: "WhatsApp",
    mainNav: "Navigasi utama",
    mobileNav: "Navigasi cepat",
    language: "Bahasa",
    skip: "Lewati ke konten utama",
    homeAria: "RiWed — kembali ke atas",
  },
  hero: {
    titleBefore: "Undangan Digital yang Membuat Momen ",
    titleEmphasis: "Istimewamu",
    titleAfter: " Lebih Berarti.",
    text: "Desain elegan, personal, dan mudah dibagikan.",
    ctaPrimary: "Jelajahi Koleksi",
    ctaSecondary: "Pesan via WhatsApp",
  },
  collection: {
    title: "Koleksi Kami",
    text: "Temukan desain favoritmu.",
    specialLabel: "Special Opening Price",
    specialNote:
      "Harga yang tampil adalah harga pembukaan saat ini. Harga coret adalah harga normal.",
    livePreview: "Live Preview",
    orderNow: "Pesan Sekarang",
    regularPrice: "Harga normal",
    openingPrice: "Harga pembukaan",
    newTab: "membuka tab baru",
    swipeHint: "Geser untuk melihat desain lainnya",
    productPosition: (index, total) => `Desain ${index} dari ${total}`,
    goTo: (name) => `Lihat ${name}`,
  },
  products: {
    "classic-luxury": {
      description: "Keanggunan abadi untuk hari istimewamu.",
    },
    "modern-muse": {
      description: "Modern, minimalis, dan indah tanpa usaha.",
    },
    "botanical-romance": {
      description: "Kisah romantis yang terinspirasi dari alam.",
    },
  },
  why: {
    title: "Mengapa RiWed?",
    items: [
      {
        title: "Dirancang dengan Cermat",
        text: "Setiap template dikurasi dengan perhatian pada detail.",
      },
      {
        title: "Personal untukmu",
        text: "Nama, foto, dan detail acara disesuaikan dengan kisahmu.",
      },
      {
        title: "Mudah Dibagikan",
        text: "Cukup satu tautan untuk keluarga dan tamu undangan.",
      },
    ],
  },
  how: {
    title: "Cara Memesan",
    text: "Tanpa registrasi rumit. Semua proses lewat WhatsApp.",
    steps: [
      {
        title: "Pilih Desainmu",
        text: "Lihat koleksi dan pilih undangan favoritmu.",
      },
      {
        title: "Kirim Detailmu",
        text: "Kirim data pernikahan, foto, dan materi lain lewat WhatsApp.",
      },
      {
        title: "Terima Undanganmu",
        text: "Undangan yang sudah jadi siap kamu bagikan.",
      },
    ],
    infoTitle: "Perlu diketahui",
    info: [
      "Maksimal 3 kali revisi minor",
      "Estimasi 3–5 hari kerja setelah pembayaran dan seluruh materi lengkap diterima",
      "Website undangan aktif selama 1 tahun",
      "Pemesanan diproses manual melalui WhatsApp",
      "Desain dan fitur mengikuti template yang dipilih",
      "Pengembangan fitur kustom saat ini belum tersedia",
    ],
  },
  cta: {
    title: "Kisahmu Layak Mendapat Undangan yang Indah.",
    text: "Sudah menemukan desain favoritmu? Ceritakan kisahmu, kami bantu mewujudkannya.",
    button: "Pesan Undangan Sekarang",
    numberLabel: "WhatsApp",
  },
  footer: {
    about: "RiWed menyediakan undangan pernikahan digital berbasis website.",
    rights: "Hak cipta dilindungi.",
    watermark: "Digital Invitation by RiWed.",
    photoNote: "Foto sementara oleh fotografer Unsplash.",
  },
  whatsapp: {
    order: (name, price) =>
      `Halo RiWed! Saya tertarik memesan undangan digital dengan template ${name} seharga ${price}. Boleh minta informasi lebih lanjut mengenai proses pemesanannya?`,
    general:
      "Halo RiWed! Saya tertarik dengan undangan digital pernikahan dari RiWed. Boleh minta informasi lebih lanjut?",
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    collection: "Collection",
    info: "Info",
    whatsapp: "WhatsApp",
    mainNav: "Main navigation",
    mobileNav: "Quick navigation",
    language: "Language",
    skip: "Skip to main content",
    homeAria: "RiWed — back to top",
  },
  hero: {
    titleBefore: "Digital Invitations That Make Your ",
    titleEmphasis: "Special Moment",
    titleAfter: " More Meaningful.",
    text: "Elegant, personal, and easy to share.",
    ctaPrimary: "Explore Collection",
    ctaSecondary: "Order via WhatsApp",
  },
  collection: {
    title: "The Collection",
    text: "Find your favorite design.",
    specialLabel: "Special Opening Price",
    specialNote:
      "The prices shown are the current opening prices. Struck-through prices are the regular prices.",
    livePreview: "Live Preview",
    orderNow: "Order Now",
    regularPrice: "Regular price",
    openingPrice: "Opening price",
    newTab: "opens in a new tab",
    swipeHint: "Swipe to see more designs",
    productPosition: (index, total) => `Design ${index} of ${total}`,
    goTo: (name) => `Show ${name}`,
  },
  products: {
    "classic-luxury": {
      description: "Timeless elegance for your special day.",
    },
    "modern-muse": {
      description: "Modern, minimal, and effortlessly beautiful.",
    },
    "botanical-romance": {
      description: "A romantic story inspired by nature.",
    },
  },
  why: {
    title: "Why RiWed?",
    items: [
      {
        title: "Thoughtfully Designed",
        text: "Every template is curated with attention to detail.",
      },
      {
        title: "Made Personal",
        text: "Names, photos, and event details tailored to your story.",
      },
      {
        title: "Easy to Share",
        text: "One simple link for your family and guests.",
      },
    ],
  },
  how: {
    title: "How to Order",
    text: "No complicated registration. Everything happens on WhatsApp.",
    steps: [
      {
        title: "Choose Your Design",
        text: "Browse the collection and pick your favorite invitation.",
      },
      {
        title: "Send Your Details",
        text: "Send your wedding details, photos, and other materials via WhatsApp.",
      },
      {
        title: "Receive Your Invitation",
        text: "Your finished invitation, ready to share.",
      },
    ],
    infoTitle: "Good to know",
    info: [
      "Up to 3 minor revisions",
      "Estimated 3–5 business days after payment and complete materials are received",
      "Invitation website stays active for 1 year",
      "Orders are handled manually through WhatsApp",
      "Available designs and features follow the selected template",
      "Custom feature development is currently unavailable",
    ],
  },
  cta: {
    title: "Your Story Deserves a Beautiful Invitation.",
    text: "Found a design you love? Tell us your story and we'll bring it to life.",
    button: "Order Your Invitation Now",
    numberLabel: "WhatsApp",
  },
  footer: {
    about: "RiWed offers website-based digital wedding invitations.",
    rights: "All rights reserved.",
    watermark: "Digital Invitation by RiWed.",
    photoNote: "Temporary photos by Unsplash photographers.",
  },
  whatsapp: {
    order: (name, price) =>
      `Hello RiWed! I'm interested in ordering a digital invitation with the ${name} template priced at ${price}. Could you share more information about the ordering process?`,
    general:
      "Hello RiWed! I'm interested in a digital wedding invitation from RiWed. Could you share more information?",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { id, en };
