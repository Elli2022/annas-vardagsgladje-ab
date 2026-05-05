import Image from "next/image";

const offerings = [
  "Sällskap hemma: prata, fika, titta på TV",
  "Aktiviteter tillsammans: spela spel, läsa, lyssna på musik",
  "Promenader och tid utomhus",
  "Följa med och handla",
  "Hjälp med enklare vardagsärenden",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff8f7] text-[#2d1f21]">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-10 md:px-10 md:py-14">
        <section className="grid items-center gap-8 rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(124,62,72,0.12)] md:grid-cols-2 md:p-12">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-[#fde9ed] px-4 py-1 text-sm font-medium text-[#8b4b59]">
              Trygg närvaro i vardagen
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-[#24181a] md:text-5xl">
              Annas vardagsglädje AB
            </h1>
            <p className="text-lg leading-relaxed text-[#5d474b]">
              Annas vardagsglädje AB erbjuder tryggt och personligt sällskap för
              äldre. Vi skapar fina stunder i vardagen genom närvaro, samtal
              och enkla aktiviteter utifrån personens önskemål och dagsform.
            </p>
            <p className="leading-relaxed text-[#5d474b]">
              För anhöriga är Annas vardagsglädje AB ett extra stöd som ger lugn,
              avlastning och trygghet.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="rounded-full bg-[#8b4b59] px-6 py-3 font-medium text-white transition hover:bg-[#723b47]"
              >
                Skicka förfrågan
              </a>
              <a
                href="tel:+46724420041"
                className="rounded-full border border-[#d9b7be] px-6 py-3 font-medium text-[#5a333c] transition hover:bg-[#fff4f6]"
              >
                Ring oss
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-[#fff4f6] p-5">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/sally.jpg"
                alt="Sally, maskot och följeslagare för Annas vardagsglädje AB."
                width={1200}
                height={1400}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#6d4a51]">
              Sally är vår varma maskot och påminnelse om närhet, trygghet och
              vänlighet i varje möte.
            </p>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <article className="rounded-3xl bg-white p-8 shadow-[0_10px_35px_rgba(124,62,72,0.12)]">
            <h2 className="text-2xl font-semibold text-[#24181a]">
              Vad vi kan hjälpa till med
            </h2>
            <ul className="mt-5 space-y-3 text-[#5d474b]">
              {offerings.map((offering) => (
                <li key={offering} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[#c77788]" />
                  <span>{offering}</span>
                </li>
              ))}
            </ul>
          </article>

          <article id="kontakt" className="rounded-3xl bg-white p-8 shadow-[0_10px_35px_rgba(124,62,72,0.12)]">
            <h2 className="text-2xl font-semibold text-[#24181a]">
              Skicka en förfrågan
            </h2>
            <p className="mt-3 text-[#5d474b]">
              Berätta gärna kort om behov och önskemål, så återkommer vi för
              ett första samtal.
            </p>
            <form
              action="https://formsubmit.co/anna.vardagsglädje@gmail.com"
              method="POST"
              className="mt-6 space-y-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="Ny förfrågan från Annas vardagsglädje AB"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#4f3239]" htmlFor="name">
                  Namn
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-[#e8cfd5] bg-[#fffdfd] px-4 py-3 outline-none ring-[#be7081] transition focus:ring-2"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#4f3239]" htmlFor="email">
                  E-post
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-[#e8cfd5] bg-[#fffdfd] px-4 py-3 outline-none ring-[#be7081] transition focus:ring-2"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#4f3239]" htmlFor="phone">
                  Telefonnummer
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="w-full rounded-xl border border-[#e8cfd5] bg-[#fffdfd] px-4 py-3 outline-none ring-[#be7081] transition focus:ring-2"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#4f3239]" htmlFor="message">
                  Meddelande
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-[#e8cfd5] bg-[#fffdfd] px-4 py-3 outline-none ring-[#be7081] transition focus:ring-2"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#8b4b59] px-5 py-3 font-medium text-white transition hover:bg-[#723b47]"
              >
                Skicka förfrågan
              </button>
            </form>
          </article>
        </section>

        <footer className="rounded-3xl bg-white p-6 text-sm text-[#5d474b] shadow-[0_10px_35px_rgba(124,62,72,0.12)]">
          <p className="font-medium text-[#3b272b]">
            Trygg närvaro, mänsklig värme och tid för det som betyder mest.
          </p>
          <p className="mt-2">
            Telefon: <a href="tel:+46724420041" className="underline">072-442 00 41</a> ·
            E-post:{" "}
            <a href="mailto:anna.vardagsglädje@gmail.com" className="underline">
              anna.vardagsglädje@gmail.com
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
