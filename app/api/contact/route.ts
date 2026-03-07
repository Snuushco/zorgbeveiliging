import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { naam, organisatie, email, telefoon, bericht } = body;

    if (!naam || !email || !bericht) {
      return NextResponse.json({ error: "Vul alle verplichte velden in." }, { status: 400 });
    }

    // Send notification email (can integrate with Resend, SendGrid, etc.)
    // For now, log to console (visible in Vercel logs)
    console.log("=== NIEUW CONTACTVERZOEK ===");
    console.log(`Naam: ${naam}`);
    console.log(`Organisatie: ${organisatie || "-"}`);
    console.log(`Email: ${email}`);
    console.log(`Telefoon: ${telefoon || "-"}`);
    console.log(`Bericht: ${bericht}`);
    console.log("============================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
