export const siteConfig = {
  name: "Trygg Vardag Skåne",
  /** Portfolio-demo – inget riktigt företag */
  isPortfolioDemo: true,
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://trygg-vardag-portfolio.netlify.app",
  description:
    "Tryggt sällskap, ledsagning och vardagsglädje för äldre i Skåne. Personligt stöd för äldre och anhöriga – promenader, fika, aktiviteter och enkla ärenden.",
  keywords: [
    "sällskap för äldre",
    "ledsagning äldre",
    "vardagsglädje äldre",
    "sällskap Skåne",
    "ledsagning Skåne",
    "stöd för anhöriga äldre",
    "aktiviteter för äldre",
    "Trygg Vardag Skåne",
  ],
  email: "eleonora.nocentini@gmail.com",
  addressLocality: "Skåne",
  addressRegion: "Skåne",
  addressCountry: "SE",
  areaServed: ["Skåne", "Sverige"],
  services: [
    "Sällskap för äldre",
    "Ledsagning",
    "Vardagsaktiviteter",
    "Stöd för anhöriga",
  ],
} as const;
