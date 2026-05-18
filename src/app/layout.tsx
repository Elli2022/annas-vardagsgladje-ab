import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://annas-vardagsgladje-ab.netlify.app"),
  title: "Annas VardagsGlädje AB | Sällskap och ledsagning i Skåne",
  description:
    "Tryggt sällskap, ledsagning och vardagsglädje för äldre i Skåne. Utomhus- och inomhusaktiviteter utifrån dina önskemål.",
  openGraph: {
    title: "Annas VardagsGlädje AB",
    description:
      "Tryggt sällskap, ledsagning och vardagsglädje för äldre i Skåne.",
    images: ["/og-image.png"],
    locale: "sv_SE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${cormorant.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
