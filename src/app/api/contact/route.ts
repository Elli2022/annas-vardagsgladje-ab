import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Formuläret saknar WEB3FORMS_ACCESS_KEY i Netlify. Spara variabeln och deploya om.",
      },
      { status: 500 },
    );
  }

  try {
    const incoming = await request.formData();
    const body = new FormData();
    body.append("access_key", accessKey);
    body.append("subject", "Ny förfrågan – Trygg Vardag Skåne");
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

    const data = (await response.json()) as {
      success: boolean;
      message?: string;
    };

    if (!data.success) {
      return NextResponse.json(
        { success: false, message: data.message ?? "Kunde inte skicka." },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Tekniskt fel vid skickning." },
      { status: 500 },
    );
  }
}
