import { NextResponse } from "next/server";

const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

export async function POST(request: Request) {
  if (!accessKey) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Formuläret saknar WEB3FORMS_ACCESS_KEY i Netlify. Se README.",
      },
      { status: 500 },
    );
  }

  const incoming = await request.formData();
  const body = new FormData();
  body.append("access_key", accessKey);
  body.append("subject", "Ny förfrågan – Trygg Vardag Skåne (portfolio)");
  body.append("from_name", "Trygg Vardag Skåne – kontaktformulär");

  for (const [key, value] of incoming.entries()) {
    if (key === "bot-field") continue;
    if (typeof value === "string") {
      body.append(key, value);
    }
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body,
  });

  const data = (await response.json()) as { success: boolean; message?: string };

  if (!data.success) {
    return NextResponse.json(
      { success: false, message: data.message ?? "Kunde inte skicka." },
      { status: 400 },
    );
  }

  return NextResponse.json({ success: true });
}
