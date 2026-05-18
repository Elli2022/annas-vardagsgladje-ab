import { contact } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e8ddd6] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-[#5a6a62] md:px-10">
        <p className="font-medium text-[#3f4a44]">
          Trygg närvaro, mänsklig värme och tid för det som betyder mest.
        </p>
        <p className="mt-2">
          Telefon:{" "}
          <a href={contact.phoneHref} className="underline">
            {contact.phone}
          </a>{" "}
          · E-post:{" "}
          <a href={`mailto:${contact.email}`} className="underline">
            {contact.email}
          </a>
        </p>
        <p className="mt-4 text-xs text-[#7a8a82]">
          © {new Date().getFullYear()} Annas VardagsGlädje AB
        </p>
      </div>
    </footer>
  );
}
