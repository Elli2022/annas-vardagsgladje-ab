import Image from "next/image";
import Link from "next/link";
import { contact } from "@/lib/site-data";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#faf7f4] px-6 py-10 text-[#2f3a34] md:px-10 md:py-14">
      <main className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm md:p-12">
        <Image
          src="/logo.png"
          alt="Annas VardagsGlädje AB"
          width={100}
          height={100}
          className="mx-auto h-24 w-24"
        />
        <span className="mt-6 inline-flex rounded-full bg-[#eef4ef] px-4 py-1 text-sm font-medium text-[#5a7560]">
          Tack för din förfrågan
        </span>
        <h1 className="section-title mt-4 text-3xl font-semibold md:text-4xl">
          Vi har tagit emot ditt meddelande
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#5a6a62]">
          Tack för att du kontaktade Annas VardagsGlädje AB. Vi hör av oss så
          snart vi kan.
        </p>
        <p className="mt-2 text-[#5a6a62]">
          Vid brådskande ärende kan du ringa oss på{" "}
          <a href={contact.phoneHref} className="font-medium underline">
            {contact.phone}
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
