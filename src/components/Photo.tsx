import Image from "next/image";
import type { Lang } from "@/data/dictionaries";
import type { Photo } from "@/data/images";

type PhotoImageProps = {
  photo: Photo;
  lang: Lang;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Fills its (relatively positioned, aspect-ratio'd) parent with the mapped photo. */
export default function PhotoImage({
  photo,
  lang,
  sizes,
  priority = false,
  className = "",
}: PhotoImageProps) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt[lang]}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      style={{ objectPosition: photo.position }}
    />
  );
}
