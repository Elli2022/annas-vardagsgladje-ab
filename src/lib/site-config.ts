export const siteConfig = {
  name: "Trygg Vardag Skåne",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://trygg-vardag-portfolio.netlify.app",
  description:
    "Tryggt sällskap, ledsagning och vardagsglädje för äldre i Skåne. Personligt stöd för äldre och anhöriga – promenader, fika, aktiviteter och enkla ärenden.",
  longDescription:
    "Trygg Vardag Skåne erbjuder personligt sällskap och ledsagning för äldre i hela Skåne. Vi är ett komplement till hemtjänst med fokus på gemenskap, trygghet och meningsfulla stunder – hemma, ute eller vid enklare ärenden.",
  keywords: [
    "sällskap för äldre",
    "ledsagning äldre",
    "ledsagning Skåne",
    "sällskap Skåne",
    "vardagsglädje äldre",
    "stöd för anhöriga äldre",
    "aktiviteter för äldre",
    "omsorg äldre privat",
    "följeslagare äldre",
    "Trygg Vardag Skåne",
  ],
  email: "eleonora.nocentini@gmail.com",
  locale: "sv_SE",
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
