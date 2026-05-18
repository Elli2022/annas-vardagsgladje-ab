import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-[#e0e0e0] bg-background">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:px-10 md:py-20">
            <div className="space-y-6">
              <span className="logo-surface inline-flex rounded-3xl p-1">
                <Image
                  src="/logo.png"
                  alt="Annas VardagsGlädje AB"
                  width={140}
                  height={140}
                  className="h-28 w-28 md:h-36 md:w-36"
                  priority
                />
              </span>
              <div className="space-y-4">
                <p className="inline-flex rounded-full bg-[#eef4ef] px-4 py-1 text-sm font-medium text-[#5a7560]">
                  Sällskap och ledsagning i Skåne
                </p>
                <h1 className="section-title text-4xl font-semibold leading-tight text-[#2f3a34] md:text-5xl">
                  Vardagsglädje med trygg närvaro
                </h1>
                <p className="text-lg leading-relaxed text-[#5a6a62]">
                  Vi erbjuder personligt sällskap och enkla aktiviteter för dig
                  som vill ha mer glädje, gemenskap och trygghet i vardagen.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="rounded-full bg-[#6d8b72] px-6 py-3 font-medium text-white transition hover:bg-[#5a7560]"
                >
                  Skicka förfrågan
                </a>
                <a
                  href={contact.phoneHref}
                  className="rounded-full border border-[#c9bfb5] px-6 py-3 font-medium text-[#4a5a52] transition hover:bg-white"
                >
                  Ring {contact.phone}
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-[#f3eee8] p-4">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={sallyImage}
                  alt="Sally, maskot och följeslagare för Annas VardagsGlädje AB."
                  placeholder="blur"
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  quality={80}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-[#6a7a72]">
                Sally påminner oss om värme, närhet och glädje i varje möte.
              </p>
            </div>
          </div>
        </section>

        {/* För vem */}
        <section id="for-vem" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="För vem?"
              title="När hemtjänsten inte räcker till – eller när du bara vill ha mer liv i vardagen"
            />
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#5a6a62]">
              Vissa har hemtjänst men vill ha mer fokuserat sällskap en stund.
              Andra bor hemma och önskar hjälp med enklare vardagssysslor
              tillsammans med ett socialt utbyte. För anhöriga kan vi vara ett
              tryggt komplement som ger lugn och avlastning.
            </p>
          </div>
        </section>

        {/* Verksamhetsområde */}
        <section className="bg-[#eef4ef] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
            <SectionHeading
              eyebrow="Verksamhetsområde"
              title="Utgångsort Malmö – vi arbetar i hela Skåne"
              centered
            />
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5a6a62]">
              Beroende på dag och uppdrag kan vi följa med som följeslagare
              eller sällskap där det passar dig bäst.
            </p>
          </div>
        </section>

        {/* Så kommer du igång */}
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

        {/* Tjänster */}
        <section id="tjanster" className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="Tjänster vi erbjuder"
              title="Sällskap, ledsagning och vardagsstöd"
            />
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#5a6a62]">
              Vi är inte hemtjänst – vi är ett komplement som fokuserar på
              närvaro, aktivitet och trygghet. Du väljer tempo och innehåll,
              vi följer med som stöd i det som känns meningsfullt för dig.
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

        {/* Aktiviteter */}
        <section id="aktiviteter" className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SectionHeading
              eyebrow="Aktiviteter"
              title="Exempel på vad vi kan göra tillsammans"
            />
            <p className="mt-4 max-w-3xl text-[#5a6a62]">
              Här är exempel från Annas material – vi anpassar alltid efter
              dina önskemål och dagsform.
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

        {/* Om oss */}
        <section id="om-oss" className="bg-[#f3eee8] py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-10">
            <div>
              <SectionHeading eyebrow="Om oss" title="Varför vi finns" />
              <p className="mt-6 leading-relaxed text-[#5a6a62]">
                Annas VardagsGlädje AB startades med önskan om att skapa mer
                glädje, gemenskap och meningsfulla stunder i vardagen. Vi tror
                på ett respektfullt och lugnt sätt att mötas – där du känner dig
                sedd, trygg och delaktig.
              </p>
              <p className="mt-4 leading-relaxed text-[#5a6a62]">
                Vi arbetar med omtanke, tydlighet och en varm ton. Fakturering
                sker månadsvis och RUT-avdrag hanteras i samband med det.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <span className="logo-surface inline-flex rounded-3xl p-2">
                <Image
                  src="/logo.png"
                  alt="Annas VardagsGlädje AB logotyp"
                  width={280}
                  height={280}
                  className="h-56 w-56 md:h-72 md:w-72"
                />
              </span>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:px-10">
            <div>
              <SectionHeading eyebrow="Kontakt" title="Hör av dig – vi återkommer snart" />
              <p className="mt-4 leading-relaxed text-[#5a6a62]">
                Fyll i formuläret så hör vi av oss för ett första samtal. Du
                kan också ringa eller mejla direkt.
              </p>
              <ul className="mt-6 space-y-3 text-[#4a5a52]">
                <li>
                  Telefon:{" "}
                  <a href={contact.phoneHref} className="font-medium underline">
                    {contact.phone}
                  </a>
                </li>
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
