import { NextResponse } from "next/server";

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const naam = String(body?.naam ?? "").trim();
    const organisatie = String(body?.organisatie ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const telefoon = String(body?.telefoon ?? "").trim();
    const bericht = String(body?.bericht ?? "").trim();

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY ontbreekt voor /api/contact");
      return NextResponse.json({ error: "Server configuratiefout" }, { status: 500 });
    }

    const from = process.env.LEADS_FROM_EMAIL || "Zorgbewaking.nl <noreply@snelrie.nl>";
    const to = process.env.LEADS_TO_EMAIL || "zorg@praesidion.nl";

    const html = `
      <h3>Nieuw contactverzoek via zorgbewaking.nl</h3>
      <table>
        <tr><td><b>Naam:</b></td><td>${esc(naam)}</td></tr>
        <tr><td><b>Organisatie:</b></td><td>${esc(organisatie || "—")}</td></tr>
        <tr><td><b>E-mail:</b></td><td><a href="mailto:${esc(email)}">${esc(email)}</a></td></tr>
        <tr><td><b>Telefoon:</b></td><td>${esc(telefoon || "—")}</td></tr>
        <tr><td><b>Bericht:</b></td><td>${esc(bericht).replace(/\n/g, "<br>")}</td></tr>
      </table>
      <p style="color:#888;font-size:12px;">Automatisch gegenereerd via zorgbewaking.nl</p>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `Nieuw zorgbewaking contactverzoek van ${naam}`,
        html,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Resend error zorgbewaking:", errText);
      return NextResponse.json({ error: "Email verzenden mislukt" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
