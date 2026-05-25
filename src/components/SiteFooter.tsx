import { siteConfig } from "@/lib/site-config";
import { contact } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border-warm)] bg-[var(--accent-cream)]">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-[var(--muted)] md:px-10">
        <p className="font-medium text-[var(--foreground)]">
          Trygg närvaro, mänsklig värme och tid för det som betyder mest.
        </p>
        <p className="mt-2">
          E-post:{" "}
          <a href={`mailto:${contact.email}`} className="underline decoration-[var(--accent-warm)]">
            {contact.email}
          </a>
        </p>
        <p className="mt-4 text-xs text-[#7a8a82]">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
