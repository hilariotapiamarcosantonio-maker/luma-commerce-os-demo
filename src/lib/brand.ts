import { getActiveNiche } from "@/config/niches";

const activeNiche = getActiveNiche();

export const brand = {
  productName: activeNiche.name,
  parentBrand: "Nexa Store",
  workspaceName: activeNiche.nicheName,
  tagline: activeNiche.claimHero,
  description: activeNiche.subtitleHero,
};
