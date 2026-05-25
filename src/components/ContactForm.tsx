export function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      action="/tack"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />

      <p className="hidden" aria-hidden="true">
        <label>
          Fyll inte i detta fält: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

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
          type="tel"
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
