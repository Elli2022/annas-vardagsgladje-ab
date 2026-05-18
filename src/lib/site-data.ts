import { siteConfig } from "@/lib/site-config";

export const contact = {
  phone: siteConfig.phoneDisplay,
  phoneHref: `tel:${siteConfig.phone}`,
  email: siteConfig.email,
  formAction: "https://formsubmit.co/anna.vardagsgladje@gmail.com",
  thankYouUrl: `${siteConfig.url}/tack`,
};

export const navItems = [
  { label: "För vem", href: "#for-vem" },
  { label: "Tjänster", href: "#tjanster" },
  { label: "Aktiviteter", href: "#aktiviteter" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Kontakt", href: "#kontakt" },
];

export const steps = [
  {
    title: "Ta kontakt",
    text: "Hör av dig via formuläret, telefon eller mejl och berätta kort om behov och önskemål.",
  },
  {
    title: "Vi planerar tillsammans",
    text: "Vi går igenom vad som passar bäst – aktivitet, tid och upplägg utifrån dagsform och önskemål.",
  },
  {
    title: "Kom igång",
    text: "När allt känns rätt börjar vi med tryggt sällskap och enkla stunder i vardagen.",
  },
];

export const outdoorActivities = [
  "Handla kläder i din vanliga affär",
  "Fika på ditt favoritcafé",
  "Åka på någon rolig loppis",
  "Träffa doktorn eller frisören",
  "Promenera i en park eller skog",
  "Sitta på en bänk och titta på folk",
  "Gå en golfrunda",
  "Åka till biblioteket",
  "Åka till havet",
  "Träffa vänner och anhöriga",
  "Gå på konsert, fotboll eller hockey",
];

export const indoorActivities = [
  "Prata i lugn och ro",
  "Spela ett roligt spel",
  "Lägga ett pussel",
  "Lösa ett korsord ihop",
  "Baka något gott",
  "Laga en god middag",
  "Sortera källaren eller garderoben",
  "Plantera om blommorna",
  "Byta gardiner",
  "Pynta efter säsong",
  "Lättare städning",
];
