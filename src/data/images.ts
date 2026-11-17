import type { Lang } from "@/data/dictionaries";

/**
 * Central photo mapping. To use your own photos, replace the file at `src`
 * (keep the same name, or change `src` here) and adjust `position` if the crop
 * needs it. No component changes are required.
 *
 * All current photos are temporary Unsplash images (see PHOTO-CREDITS.md).
 */
export type Photo = {
  src: string;
  alt: Record<Lang, string>;
  /** CSS object-position, used to keep the subject in frame when cropping. */
  position?: string;
  credit: { author: string; url: string };
};

export const heroCouple: Photo = {
  src: "/images/hero/hero-couple.webp",
  alt: {
    id: "Pasangan pengantin dalam busana pernikahan adat berwarna putih",
    en: "Couple in white traditional wedding attire",
  },
  position: "40% 32%",
  credit: {
    author: "Galuh hari setiawan",
    url: "https://unsplash.com/photos/a-man-and-a-woman-dressed-in-wedding-attire-Lr834aonJ70",
  },
};

export const heroBouquet: Photo = {
  src: "/images/hero/hero-bouquet.webp",
  alt: {
    id: "Pengantin memegang buket mawar peach dan putih",
    en: "Bride holding a peach and white rose bouquet",
  },
  position: "50% 55%",
  credit: {
    author: "Tom The Photographer",
    url: "https://unsplash.com/photos/woman-holding-white-and-pink-rose-flower-bouquet-8yPA6ZYq0-s",
  },
};

export const whyPhoto: Photo = {
  src: "/images/why/why-details.webp",
  alt: {
    id: "Tangan pengantin dengan cincin di atas bunga mawar putih",
    en: "Newlyweds' hands with rings resting on white roses",
  },
  position: "50% 30%",
  credit: {
    author: "Céline Druguet",
    url: "https://unsplash.com/photos/a-close-up-of-two-people-holding-hands-over-a-bouquet-of-flowers-Rnton6rhDe4",
  },
};

export const ctaPhoto: Photo = {
  src: "/images/cta/cta-couple.webp",
  alt: {
    id: "Pasangan tertawa bahagia di bawah tudung pengantin",
    en: "Couple laughing together under a bridal veil",
  },
  position: "55% 35%",
  credit: {
    author: "Vino Li",
    url: "https://unsplash.com/photos/man-in-black-suit-jacket-kissing-woman-in-white-wedding-dress-dSe8sD9Y8vk",
  },
};

/**
 * Mood photos for each template, keyed by product slug. These are reference
 * photos of invitation stationery, not screenshots of the live templates.
 */
export const productPhotos: Record<string, Photo> = {
  "classic-luxury": {
    src: "/images/classic-luxury/cover.webp",
    alt: {
      id: "Foto referensi undangan pernikahan bergaya klasik dengan nampan emas",
      en: "Reference photo of a classic wedding invitation on a gilded tray",
    },
    position: "50% 50%",
    credit: {
      author: "Fiona Murray-deGraaff",
      url: "https://unsplash.com/photos/a-wedding-stationery-with-a-black-and-white-envelope-a0BlHWem6l0",
    },
  },
  "modern-muse": {
    src: "/images/modern-muse/cover.webp",
    alt: {
      id: "Foto referensi undangan pernikahan minimalis modern",
      en: "Reference photo of a modern minimalist wedding invitation",
    },
    position: "42% 50%",
    credit: {
      author: "Micah & Sammie Chaffin",
      url: "https://unsplash.com/photos/a-close-up-of-a-wedding-stationery-on-a-table-AuZp_2LGSCs",
    },
  },
  "botanical-romance": {
    src: "/images/botanical-romance/cover.webp",
    alt: {
      id: "Foto referensi undangan pernikahan dengan ilustrasi bunga liar dan mawar",
      en: "Reference photo of a wildflower wedding invitation with roses",
    },
    position: "55% 55%",
    credit: {
      author: "Pau Patterson Photography",
      url: "https://unsplash.com/photos/a-wedding-suite-with-flowers-and-a-ribbon-lxHHTpPfA4w",
    },
  },
};
