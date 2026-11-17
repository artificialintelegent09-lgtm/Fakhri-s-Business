import { existsSync } from "node:fs";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public");
const LOGO_EXTENSIONS = ["png", "jpg", "jpeg", "webp"];

/** Public path of the logo (`public/images/riwed-logo.*`) if present, else null. */
export function getLogoSrc(): string | null {
  for (const ext of LOGO_EXTENSIONS) {
    if (existsSync(path.join(publicDir, "images", `riwed-logo.${ext}`))) {
      return `/images/riwed-logo.${ext}`;
    }
  }
  return null;
}
