import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const payload = {
    name: String(formData.get("name") ?? ""),
    company: String(formData.get("company") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    location: String(formData.get("location") ?? ""),
    timeline: String(formData.get("timeline") ?? ""),
    services: formData.getAll("services").map((v) => String(v)),
    details: String(formData.get("details") ?? ""),
    submittedAt: new Date().toISOString(),
  };

  const url = process.env.GOOGLE_SHEETS_WEBAPP_URL;

  if (!url) {
    return NextResponse.json(
      { ok: false, error: "Missing GOOGLE_SHEETS_WEBAPP_URL env var" },
      { status: 500 }
    );
  }

  // Send to Apps Script
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return NextResponse.json(
      { ok: false, error: "Apps Script error", details: text },
      { status: 502 }
    );
  }

  // Redirect user to thank-you page
  return NextResponse.redirect(new URL("/request-consultation/thanks", req.url));
}

// Optional: makes it not 404 if you visit it in the browser
export function GET() {
  return NextResponse.json({ status: "ready" });
}
