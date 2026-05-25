import Image from "next/image";
import { BrandLogo } from "@/components/BrandLogo";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/lib/site-config";
import {
  contact,
  indoorActivities,
  outdoorActivities,
  steps,
} from "@/lib/site-data";
import sallyImage from "../../public/sally.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-[#2f3a34]">
      <JsonLd />
      <SiteHeader />

      <main>
        <section className="hero-gradient border-b border-[var(--border-warm)]">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:px-10 md:py-20">
            <div className="space-y-6">
              <BrandLogo size="md" />
              <div className="space-y-4">
                <p className="inline-flex rounded-full bg-[var(--background-sage)] px-4 py-1 text-sm font-medium text-[var(--accent-green-dark)] ring-1 ring-[var(--accent-pink)]/30">
                  Sällskap och ledsagning i Skåne
                </p>
                <h1 className="section-title text-4xl font-semibold leading-tight text-[#2f3a34] md:text-5xl">
                  Tryggt sällskap och ledsagning för äldre i Skåne
                </h1>
                <p className="text-lg leading-relaxed text-[#5a6a62]">
                  {siteConfig.name} erbjuder personligt sällskap, ledsagning och
                  vardagsaktiviteter i hela Skåne – för dig som vill ha mer glädje,
                  gemenskap och trygghet i vardagen.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="rounded-full bg-[var(--accent-green)] px-6 py-3 font-medium text-white shadow-sm transition hover:bg-[var(--accent-green-dark)]"
                >
                  Skicka förfrågan
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="rounded-full border border-[var(--accent-warm)] bg-white/80 px-6 py-3 font-medium text-[#4a5a52] transition hover:bg-[var(--accent-cream)]"
                >
                  Mejla oss
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-[var(--accent-cream)] p-4 shadow-md ring-1 ring-[var(--border-warm)]">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={sallyImage}
                  alt="Hund som följeslagare – värme och närhet i vardagen"
                  placeholder="blur"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  quality={80}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-[#6a7a72]">
                En trogen följeslagare påminner om värme, närhet och glädje i varje
                möte.
              </p>
            </div>
          </div>
        </section>

        <section id="for-vem" className="section-warm py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="För vem?"
              title="När hemtjänsten inte räcker till – eller när du bara vill ha mer liv i vardagen"
            />
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#5a6a62]">
              Vi hjälper äldre som vill ha mer fokuserat sällskap en stund –
              hemma, ute eller vid enklare ärenden. Tjänsten passar dig som bor
              hemma och önskar socialt utbyte, samt anhöriga som söker trygg
              avlastning och extra stöd utöver hemtjänst.
            </p>
          </div>
        </section>

        <section className="section-sage py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
            <SectionHeading
              eyebrow="Verksamhetsområde"
              title="Vi arbetar i hela Skåne"
              centered
            />
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5a6a62]">
              Vi erbjuder ledsagning och sällskap i Skåne – till exempel
              Helsingborg, Lund, Ängelholm och närliggande orter, beroende på dag
              och uppdrag.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="Så kommer du igång"
              title="Tre enkla steg till trygg vardagsglädje"
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="rounded-2xl border border-[#e8ddd6] bg-white p-6 shadow-sm"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#eef4ef] text-sm font-semibold text-[#5a7560]">
                    {index + 1}
                  </span>
                  <h3 className="section-title mt-4 text-2xl font-semibold text-[#2f3a34]">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[#5a6a62]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tjanster" className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="Tjänster vi erbjuder"
              title="Sällskap, ledsagning och vardagsstöd"
            />
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#5a6a62]">
              Vi är inte hemtjänst – vi är ett komplement med fokus på
              sällskap för äldre, ledsagning och vardagsglädje. Du väljer tempo
              och innehåll, vi följer med som tryggt stöd i det som känns
              meningsfullt för dig.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                "Personligt sällskap hemma",
                "Ledsagning till ärenden och aktiviteter",
                "Enkla vardagsuppgifter tillsammans",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-background p-5 text-center font-medium text-[#4a5a52]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="aktiviteter" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="Aktiviteter"
              title="Exempel på vad vi kan göra tillsammans"
            />
            <p className="mt-4 max-w-3xl text-[#5a6a62]">
              Här är exempel på aktiviteter – vi anpassar alltid efter dina
              önskemål och dagsform.
            </p>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              <ActivityCard
                title="Utomhus – vi kan vara följeslagare"
                items={outdoorActivities}
                accent="border-[#6d8b72]"
              />
              <ActivityCard
                title="Inomhus – vi kan göra tillsammans"
                items={indoorActivities}
                accent="border-[#d49aaa]"
              />
            </div>
          </div>
        </section>

        <section id="om-oss" className="bg-[var(--accent-cream)] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-10">
            <div>
              <SectionHeading eyebrow="Om oss" title="Varför vi finns" />
              <p className="mt-6 leading-relaxed text-[#5a6a62]">
                {siteConfig.name} finns för att skapa mer glädje, gemenskap och
                meningsfulla stunder i vardagen i Skåne. Vi tror på ett
                respektfullt och lugnt sätt att mötas – där du känner dig sedd,
                trygg och delaktig.
              </p>
              <p className="mt-4 leading-relaxed text-[#5a6a62]">
                Vi arbetar med omtanke, tydlighet och en varm ton. Fakturering
                sker månadsvis och RUT-avdrag hanteras i samband med det.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <BrandLogo size="lg" />
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-10">
            <div>
              <SectionHeading eyebrow="Kontakt" title="Hör av dig – vi återkommer snart" />
              <p className="mt-4 leading-relaxed text-[#5a6a62]">
                Fyll i formuläret så hör vi av oss för ett första samtal. Du kan
                också mejla direkt.
              </p>
              <ul className="mt-6 space-y-3 text-[#4a5a52]">
                <li>
                  E-post:{" "}
                  <a href={`mailto:${contact.email}`} className="font-medium underline">
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[#e8ddd6] bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : undefined}>
      <p className="text-sm font-semibold uppercase tracking-wide text-[#6d8b72]">
        {eyebrow}
      </p>
      <h2 className="section-title mt-2 text-3xl font-semibold text-[#2f3a34] md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function ActivityCard({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <article className={`rounded-3xl border-l-4 bg-white p-6 shadow-sm ${accent}`}>
      <h3 className="section-title text-2xl font-semibold text-[#2f3a34]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[#5a6a62]">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6d8b72]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
