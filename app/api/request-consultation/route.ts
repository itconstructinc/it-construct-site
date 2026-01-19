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


  console.log("New consultation request:", payload);

  return NextResponse.redirect(
  new URL("/request-consultation/thanks", req.url),
  303
);

}
