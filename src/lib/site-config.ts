/** Formulär-mottagare (visas inte på sidan) */
export const formRecipientEmail = "eleonora.nocentini@gmail.com";

export const siteConfig = {
  name: "Trygg Vardag Skåne",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://trygg-vardag-portfolio.netlify.app",
  description:
    "Tryggt sällskap, ledsagning och vardagsglädje för äldre i Malmö och Skåne. Personligt stöd för äldre och anhöriga – promenader, fika, aktiviteter och enkla ärenden.",
  longDescription:
    "Trygg Vardag Skåne erbjuder personligt sällskap och ledsagning för äldre med utgångspunkt i Malmö och verksamhet i hela Skåne. Vi är ett komplement till hemtjänst med fokus på gemenskap, trygghet och meningsfulla stunder.",
  keywords: [
    "sällskap för äldre",
    "ledsagning äldre",
    "ledsagning Malmö",
    "sällskap Malmö",
    "ledsagning Skåne",
    "sällskap Skåne",
    "vardagsglädje äldre",
    "stöd för anhöriga äldre",
    "aktiviteter för äldre",
    "Trygg Vardag Skåne",
  ],
  locale: "sv_SE",
  addressLocality: "Malmö",
  addressRegion: "Skåne",
  addressCountry: "SE",
  areaServed: ["Malmö", "Skåne", "Sverige"],
  services: [
    "Sällskap för äldre",
    "Ledsagning",
    "Vardagsaktiviteter",
    "Stöd för anhöriga",
  ],
} as const;
