import { existsSync } from "node:fs";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public");
const COVER_EXTENSIONS = ["webp", "jpg", "jpeg", "png"];

/** Public path of the logo if the file has been added, otherwise null. */
export function getLogoSrc(): string | null {
  return existsSync(path.join(publicDir, "images", "riwed-logo.png"))
    ? "/images/riwed-logo.png"
    : null;
}

/**
 * Public path of a product preview (`public/images/<slug>/cover.<ext>`)
 * if one has been added, otherwise null so a CSS placeholder is shown.
 */
export function getProductCoverSrc(slug: string): string | null {
  for (const ext of COVER_EXTENSIONS) {
    if (existsSync(path.join(publicDir, "images", slug, `cover.${ext}`))) {
      return `/images/${slug}/cover.${ext}`;
    }
  }
  return null;
}
