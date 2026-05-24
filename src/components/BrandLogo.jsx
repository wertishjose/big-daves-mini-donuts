import { publicImage } from "../lib/publicAsset";

export const brandAssets = {
  primary: "/Logos/Big Daves Chip REDO-cropped-v2.png",
  greenStack: "/Logos/Photoroom_20250116_133106.png",
  greenBadge: "/Logos/Photoroom_20251220_203751.jpeg",
  miniDonutsToday: "/Logos/UntitleMini Donuts Today PDF.png",
  lilOrbits: "/Logos/Lil' Orbits Logo.png",
};

const PRIMARY_LOGO_PATH = brandAssets.primary;

export function BrandLogo({
  className = "",
  alt = "Big Dave's Mini Donuts logo",
  variant = "primary",
}) {
  return (
    <img
      src={publicImage(brandAssets[variant] ?? PRIMARY_LOGO_PATH)}
      alt={alt}
      className={className}
    />
  );
}

export const primaryLogoPath = PRIMARY_LOGO_PATH;
