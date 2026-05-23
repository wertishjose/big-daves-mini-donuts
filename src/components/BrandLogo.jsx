import { publicImage } from "../lib/publicAsset";

const PRIMARY_LOGO_PATH = "/Logos/Photoroom_20251220_203751.jpeg";

export function BrandLogo({ className = "", alt = "Big Dave's Mini Donuts logo" }) {
  return (
    <img
      src={publicImage(PRIMARY_LOGO_PATH)}
      alt={alt}
      className={className}
    />
  );
}

export const primaryLogoPath = PRIMARY_LOGO_PATH;
