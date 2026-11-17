export type Lang = "id" | "en";

type Item = { title: string; text: string };

export type Dictionary = {
  nav: {
    home: string;
    collection: string;
    howItWorks: string;
    contact: string;
    whatsapp: string;
    menu: string;
    closeMenu: string;
    skip: string;
    language: string;
    mainNav: string;
    home_aria: string;
  };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleEmphasis: string;
    titleAfter: string;
    text: string;
    ctaPrimary: string;
    ctaSecondary: string;
    facts: { value: string; label: string }[];
  };
  collection: {
    eyebrow: string;
    title: string;
    text: string;
    previewAlt: (name: string) => string;
    livePreview: string;
    orderNow: string;
    regularPrice: string;
    openingPrice: string;
    newTab: string;
  };
  products: Record<string, { description: string }>;
  special: { title: string; text: string; note: string };
  why: { eyebrow: string; title: string; items: Item[] };
  how: { eyebrow: string; title: string; steps: Item[] };
  service: { eyebrow: string; title: string; text: string; items: Item[] };
  contact: { title: string; text: string; cta: string; numberLabel: string };
  footer: {
    menu: string;
    contact: string;
    rights: string;
    watermark: string;
  };
  whatsapp: {
    order: (name: string, price: string) => string;
    general: string;
  };
};

const id: Dictionary = {
  nav: {
    home: "Beranda",
    collection: "Koleksi",
    howItWorks: "Cara Pesan",
    contact: "Kontak",
    whatsapp: "Chat WhatsApp",
    menu: "Buka menu",
    closeMenu: "Tutup menu",
    skip: "Lewati ke konten utama",
    language: "Bahasa",
    mainNav: "Navigasi utama",
    home_aria: "RiWed — kembali ke atas",
  },
  hero: {
    eyebrow: "Undangan Pernikahan Digital",
    titleBefore: "Undangan Digital ",
    titleEmphasis: "Elegan",
    titleAfter: " untuk Hari Istimewamu.",
    text: "Rayakan kisah cinta dengan undangan pernikahan berbasis website yang dirancang indah, personal, dan mudah dibagikan.",
    ctaPrimary: "Jelajahi Koleksi",
    ctaSecondary: "Pesan Sekarang",
    facts: [
      { value: "3", label: "Template pilihan" },
      { value: "1 Tahun", label: "Masa aktif" },
      { value: "3–5", label: "Hari kerja" },
    ],
  },
  collection: {
    eyebrow: "Koleksi",
    title: "Koleksi Kami",
    text: "Temukan desain yang paling sesuai untuk hari istimewamu.",
    previewAlt: (name) => `Pratinjau template ${name}`,
    livePreview: "Live Preview",
    orderNow: "Pesan Sekarang",
    regularPrice: "Harga normal",
    openingPrice: "Harga pembukaan",
    newTab: "membuka tab baru",
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
  special: {
    title: "SPECIAL OPENING PRICE",
    text: "Rayakan awal kisahmu dengan harga spesial dari RiWed.",
    note: "Harga yang tampil adalah harga pembukaan saat ini, sedangkan harga coret adalah harga normal.",
  },
  why: {
    eyebrow: "Mengapa RiWed",
    title: "Sederhana, anggun, dan personal.",
    items: [
      {
        title: "Desain Elegan",
        text: "Template undangan pernikahan yang dikurasi dengan cermat.",
      },
      {
        title: "Dipersonalisasi untukmu",
        text: "Nama, foto, detail acara, dan informasi pribadimu disesuaikan ke dalam undangan.",
      },
      {
        title: "Mudah Dibagikan",
        text: "Bagikan undanganmu lewat satu tautan website yang sederhana.",
      },
      {
        title: "Pemesanan Mudah",
        text: "Hubungi kami langsung melalui WhatsApp tanpa registrasi yang rumit.",
      },
    ],
  },
  how: {
    eyebrow: "Cara Pemesanan",
    title: "Tiga langkah sederhana.",
    steps: [
      {
        title: "Pilih Desainmu",
        text: "Lihat koleksi yang tersedia dan pilih template favoritmu.",
      },
      {
        title: "Kirim Detailmu",
        text: "Hubungi RiWed melalui WhatsApp, lalu kirimkan data pernikahan, foto, dan materi lain yang dibutuhkan.",
      },
      {
        title: "Terima Undanganmu",
        text: "RiWed menyesuaikan template pilihanmu dan mengirimkan website undangan yang sudah jadi.",
      },
    ],
  },
  service: {
    eyebrow: "Informasi Layanan",
    title: "Perlu diketahui sebelum memesan.",
    text: "Ketentuan layanan RiWed kami rangkum agar proses pemesanan terasa jelas dan nyaman.",
    items: [
      { title: "Revisi", text: "Maksimal 3 kali revisi minor." },
      {
        title: "Estimasi Pengerjaan",
        text: "3–5 hari kerja setelah pembayaran dan seluruh materi lengkap diterima.",
      },
      { title: "Masa Aktif", text: "Website undangan aktif selama 1 tahun." },
      {
        title: "Pemesanan",
        text: "Pemesanan diproses secara manual melalui WhatsApp.",
      },
      {
        title: "Desain & Fitur",
        text: "Desain dan fitur yang tersedia mengikuti template yang dipilih.",
      },
      {
        title: "Fitur Kustom",
        text: "Pengembangan fitur kustom saat ini belum tersedia.",
      },
    ],
  },
  contact: {
    title: "Mari wujudkan hari istimewamu yang tak terlupakan.",
    text: "Sudah punya desain pilihan? Mari kita buat undangan yang indah untuk momen istimewamu.",
    cta: "Pesan via WhatsApp",
    numberLabel: "WhatsApp",
  },
  footer: {
    menu: "Menu",
    contact: "Kontak",
    rights: "Hak cipta dilindungi.",
    watermark: "Digital Invitation by RiWed.",
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
    howItWorks: "How It Works",
    contact: "Contact",
    whatsapp: "Chat on WhatsApp",
    menu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to main content",
    language: "Language",
    mainNav: "Main navigation",
    home_aria: "RiWed — back to top",
  },
  hero: {
    eyebrow: "Digital Wedding Invitations",
    titleBefore: "Your ",
    titleEmphasis: "Love Story",
    titleAfter: ", Beautifully Invited.",
    text: "Celebrate your love with a thoughtfully designed digital wedding invitation, made to share your special moment beautifully.",
    ctaPrimary: "Explore Collection",
    ctaSecondary: "Order Now",
    facts: [
      { value: "3", label: "Curated templates" },
      { value: "1 Year", label: "Active period" },
      { value: "3–5", label: "Business days" },
    ],
  },
  collection: {
    eyebrow: "Collection",
    title: "Our Collection",
    text: "Find the perfect design for your special day.",
    previewAlt: (name) => `${name} template preview`,
    livePreview: "Live Preview",
    orderNow: "Order Now",
    regularPrice: "Regular price",
    openingPrice: "Opening price",
    newTab: "opens in a new tab",
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
  special: {
    title: "SPECIAL OPENING PRICE",
    text: "Celebrate your beginning with a special price from RiWed.",
    note: "The prices shown are the current opening prices; the struck-through prices are the regular prices.",
  },
  why: {
    eyebrow: "Why RiWed",
    title: "Simple, elegant, and personal.",
    items: [
      {
        title: "Elegant Designs",
        text: "Carefully curated wedding invitation templates.",
      },
      {
        title: "Personalized for You",
        text: "Your names, photos, wedding details, and personal information are customized.",
      },
      {
        title: "Easy to Share",
        text: "Share your invitation through a simple website link.",
      },
      {
        title: "Simple Ordering",
        text: "Contact us directly through WhatsApp without complicated registration.",
      },
    ],
  },
  how: {
    eyebrow: "How It Works",
    title: "Three simple steps.",
    steps: [
      {
        title: "Choose Your Design",
        text: "Browse the available collection and select your favorite template.",
      },
      {
        title: "Send Your Details",
        text: "Contact RiWed through WhatsApp and provide your wedding information, photos, and other required materials.",
      },
      {
        title: "Receive Your Invitation",
        text: "RiWed personalizes the selected template and sends you the finished invitation website.",
      },
    ],
  },
  service: {
    eyebrow: "Service Information",
    title: "Good to know before you order.",
    text: "We've summarized RiWed's service terms so ordering feels clear and comfortable.",
    items: [
      { title: "Revisions", text: "Up to 3 minor revisions." },
      {
        title: "Estimated Completion",
        text: "3–5 business days after payment and complete materials are received.",
      },
      {
        title: "Active Period",
        text: "The invitation website stays active for 1 year.",
      },
      {
        title: "Ordering",
        text: "Orders are handled manually through WhatsApp.",
      },
      {
        title: "Design & Features",
        text: "Available designs and features follow the selected template.",
      },
      {
        title: "Custom Features",
        text: "Custom feature development is currently unavailable.",
      },
    ],
  },
  contact: {
    title: "Let's make your special day unforgettable.",
    text: "Have a design in mind? Let's create a beautiful invitation for your special moment.",
    cta: "Order via WhatsApp",
    numberLabel: "WhatsApp",
  },
  footer: {
    menu: "Menu",
    contact: "Contact",
    rights: "All rights reserved.",
    watermark: "Digital Invitation by RiWed.",
  },
  whatsapp: {
    order: (name, price) =>
      `Hello RiWed! I'm interested in ordering a digital invitation with the ${name} template priced at ${price}. Could you share more information about the ordering process?`,
    general:
      "Hello RiWed! I'm interested in a digital wedding invitation from RiWed. Could you share more information?",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { id, en };
