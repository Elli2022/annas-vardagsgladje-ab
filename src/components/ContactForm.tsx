import { siteConfig } from "@/lib/site-config";
import { contact } from "@/lib/site-data";

export function ContactForm() {
  return (
    <form action={contact.formAction} method="POST" className="space-y-4">
      <input
        type="hidden"
        name="_subject"
        value={`Ny förfrågan från ${siteConfig.name}`}
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={contact.thankYouUrl} />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#3f4a44]" htmlFor="name">
          Namn
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-[#d9cfc6] bg-white px-4 py-3 outline-none ring-[#6d8b72] transition focus:ring-2"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#3f4a44]" htmlFor="email">
          E-post
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="w-full rounded-xl border border-[#d9cfc6] bg-white px-4 py-3 outline-none ring-[#6d8b72] transition focus:ring-2"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#3f4a44]" htmlFor="phone">
          Telefonnummer
        </label>
        <input
          id="phone"
          name="phone"
          className="w-full rounded-xl border border-[#d9cfc6] bg-white px-4 py-3 outline-none ring-[#6d8b72] transition focus:ring-2"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-[#3f4a44]" htmlFor="message">
          Meddelande
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-[#d9cfc6] bg-white px-4 py-3 outline-none ring-[#6d8b72] transition focus:ring-2"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-[#6d8b72] px-5 py-3 font-medium text-white transition hover:bg-[#5a7560]"
      >
        Skicka förfrågan
      </button>
    </form>
  );
}
