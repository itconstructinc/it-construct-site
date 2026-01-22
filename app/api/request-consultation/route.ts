import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const reqId = crypto.randomUUID();

  try {
    const formData = await req.formData();

    // --- Basic anti-spam: honeypot field (add an input named "website" in the form, hidden via CSS)
    const honeypot = String(formData.get("website") ?? "");
    if (honeypot.trim()) {
      console.warn(`[lead:${reqId}] Honeypot triggered`);
      return NextResponse.json({ ok: true }, { status: 200 }); // silently accept
    }

    // --- Required env vars
    const APPS_SCRIPT_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL;
    const SECRET = process.env.GOOGLE_APPS_SCRIPT_SECRET;

    if (!APPS_SCRIPT_URL) {
      console.error(`[lead:${reqId}] Missing GOOGLE_SHEETS_WEBAPP_URL`);
      return NextResponse.json(
        { error: "Missing GOOGLE_SHEETS_WEBAPP_URL" },
        { status: 500 }
      );
    }
    if (!SECRET) {
      console.error(`[lead:${reqId}] Missing GOOGLE_APPS_SCRIPT_SECRET`);
      return NextResponse.json(
        { error: "Missing GOOGLE_APPS_SCRIPT_SECRET" },
        { status: 500 }
      );
    }

    // --- Build payload
    const payload = {
      secret: SECRET,
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      location: String(formData.get("location") ?? ""),
      timeline: String(formData.get("timeline") ?? ""),
      services: formData.getAll("services").map((v) => String(v)),
      details: String(formData.get("details") ?? ""),
      source: "Website",
      reqId,
      submittedAt: new Date().toISOString(),
    };

    // --- Minimal safe logging (don’t log full details in production)
    console.log(`[lead:${reqId}] Incoming`, {
      name: payload.name,
      email: payload.email,
      location: payload.location,
      servicesCount: payload.services.length,
    });

    console.log(`[lead:${reqId}] Sending to Apps Script...`);

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseText = await res.text();
    console.log(`[lead:${reqId}] Apps Script response`, res.status, responseText);

    if (!res.ok) {
      console.error(`[lead:${reqId}] Apps Script failed`, res.status, responseText);
      return NextResponse.json(
        { error: "Apps Script failed", status: res.status, details: responseText },
        { status: 500 }
      );
    }

    // success -> redirect to thanks (GET)
    return NextResponse.redirect(
      new URL("/request-consultation/thanks", req.url),
      303
    );
  } catch (err: any) {
    console.error(`[lead:${reqId}] Unhandled error`, err?.message || err);
    return NextResponse.json(
      { error: "Server error", details: err?.message || String(err) },
      { status: 500 }
    );
  }
}
