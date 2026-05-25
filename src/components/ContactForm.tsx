"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export function ContactForm() {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(false);
    setSending(true);

    if (!accessKey) {
      setError(true);
      setSending(false);
      return;
    }

    const form = event.currentTarget;
    const body = new FormData(form);
    body.append("access_key", accessKey);
    body.append("subject", "Ny förfrågan – Trygg Vardag Skåne");
    body.append("from_name", "Trygg Vardag Skåne – kontaktformulär");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body,
      });

      const data = (await response.json()) as { success: boolean };

      if (data.success) {
        router.push("/tack");
        return;
      }
      setError(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="hidden" aria-hidden="true">
        <label>
          Fyll inte i detta fält:{" "}
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
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
          disabled={sending}
          className="w-full rounded-xl border border-[#d9cfc6] bg-white px-4 py-3 outline-none ring-[#6d8b72] transition focus:ring-2 disabled:opacity-60"
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
          disabled={sending}
          className="w-full rounded-xl border border-[#d9cfc6] bg-white px-4 py-3 outline-none ring-[#6d8b72] transition focus:ring-2 disabled:opacity-60"
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
          disabled={sending}
          className="w-full rounded-xl border border-[#d9cfc6] bg-white px-4 py-3 outline-none ring-[#6d8b72] transition focus:ring-2 disabled:opacity-60"
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
          disabled={sending}
          className="w-full rounded-xl border border-[#d9cfc6] bg-white px-4 py-3 outline-none ring-[#6d8b72] transition focus:ring-2 disabled:opacity-60"
        />
      </div>

      {error ? (
        <p className="text-sm text-red-700" role="alert">
          Något gick fel. Kontrollera att NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY finns i
          Netlify och att du deployat om efter det.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-xl bg-[#6d8b72] px-5 py-3 font-medium text-white transition hover:bg-[#5a7560] disabled:opacity-60"
      >
        {sending ? "Skickar…" : "Skicka förfrågan"}
      </button>
    </form>
  );
}
