import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e0e0e0] bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="logo-surface inline-flex rounded-2xl p-0.5">
            <Image
              src="/logo.png"
              alt="Annas VardagsGlädje AB"
              width={56}
              height={56}
              className="h-12 w-12 md:h-14 md:w-14"
            />
          </span>
          <span className="hidden text-sm font-medium text-[#3f4a44] sm:block">
            Annas VardagsGlädje AB
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#4a5a52] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[#6d8b72]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="rounded-full bg-[#6d8b72] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5a7560]"
        >
          Kontakta oss
        </a>
      </div>
    </header>
  );
}
