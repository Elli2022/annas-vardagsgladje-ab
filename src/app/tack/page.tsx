import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { siteConfig } from "@/lib/site-config";
import { contact } from "@/lib/site-data";

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
      <main className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">
        <BrandLogo size="xl" surfaceClassName="bg-white" className="mx-auto" />
        <span className="mt-6 inline-flex rounded-full bg-[#eef4ef] px-4 py-1 text-sm font-medium text-[#5a7560]">
          Tack för din förfrågan
        </span>
        <h1 className="section-title mt-4 text-3xl font-semibold md:text-4xl">
          Vi har tagit emot ditt meddelande
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#5a6a62]">
          Tack för att du kontaktade {siteConfig.name}. Vi hör av oss så snart vi
          kan.
        </p>
        <p className="mt-2 text-[#5a6a62]">
          Vid brådskande ärende kan du mejla{" "}
          <a href={`mailto:${contact.email}`} className="font-medium underline">
            {contact.email}
          </a>
          .
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-[#6d8b72] px-6 py-3 font-medium text-white transition hover:bg-[#5a7560]"
        >
          Tillbaka till startsidan
        </Link>
      </main>
    </div>
  );
}
