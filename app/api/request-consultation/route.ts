import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const payload = {
    secret: "itconstruct-2026",
    name: formData.get("name"),
    company: formData.get("company"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    location: formData.get("location"),
    timeline: formData.get("timeline"),
    services: formData.getAll("services"),
    details: formData.get("details"),
    submittedAt: new Date().toISOString(),
  };

  const APPS_SCRIPT_URL = process.env.GOOGLE_SHEETS_WEBAPP_URL;

  if (!APPS_SCRIPT_URL) {
    return NextResponse.json(
      { error: "Missing GOOGLE_SHEETS_WEBAPP_URL" },
      { status: 500 }
    );
  }

  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: "Apps Script failed", details: text },
      { status: 500 }
    );
  }

  return NextResponse.redirect(
    new URL("/request-consultation/thanks", req.url)
  );
}
