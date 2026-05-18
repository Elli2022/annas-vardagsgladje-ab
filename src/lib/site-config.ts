export const siteConfig = {
  name: "Annas VardagsGlädje AB",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://annas-vardagsgladje-ab.netlify.app",
  description:
    "Tryggt sällskap, ledsagning och vardagsglädje för äldre i Malmö och Skåne. Personligt stöd för äldre och anhöriga – promenader, fika, aktiviteter och enkla ärenden.",
  keywords: [
    "sällskap för äldre",
    "ledsagning äldre",
    "vardagsglädje äldre",
    "sällskap Malmö",
    "ledsagning Skåne",
    "stöd för anhöriga äldre",
    "aktiviteter för äldre",
    "Annas VardagsGlädje",
  ],
  email: "anna.vardagsgladje@gmail.com",
  phone: "+46724420041",
  phoneDisplay: "072-442 00 41",
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
