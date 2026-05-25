import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tack för din förfrågan",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-10 text-[#2f3a34] md:px-10 md:py-14">
      <main className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-[var(--accent-pink)]/20 md:p-12">
        <BrandLogo size="xl" className="mx-auto" />
        <span className="mt-6 inline-flex rounded-full bg-[var(--background-sage)] px-4 py-1 text-sm font-medium text-[var(--accent-green-dark)]">
          Tack för din förfrågan
        </span>
        <h1 className="section-title mt-4 text-3xl font-semibold md:text-4xl">
          Vi har tagit emot ditt meddelande
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#5a6a62]">
          Tack för att du kontaktade {siteConfig.name}. Vi hör av oss så snart vi
          kan.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[var(--accent-green)] px-6 py-3 font-medium text-white transition hover:bg-[var(--accent-green-dark)]"
        >
          Tillbaka till startsidan
        </Link>
      </main>
    </div>
  );
}
