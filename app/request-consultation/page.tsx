export const metadata = {
  title: "Request a Consultation | IT Construct Inc",
  description: "Request a consultation for structured cabling, Wi-Fi, cameras, and low-voltage build-outs.",
};

export default function RequestConsultationPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10">
        <p className="text-sm text-neutral-500">Request a Consultation</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Tell us about the project.
        </h1>
        <p className="mt-3 text-neutral-600">
          Share the basics and we’ll follow up to schedule a site walk or call.
        </p>

        <div className="mt-6 rounded-2xl border p-4 text-sm text-neutral-700">
          <strong>Licensed/Bonded</strong> • <strong>Background-checked crews</strong> • Clean installs • Labeled & documented
        </div>
      </div>

      <form
        className="space-y-6 rounded-2xl border p-6"
        method="post"
        action="/api/request-consultation"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full name" name="name" required />
          <Field label="Company (optional)" name="company" />
          <Field label="Email" name="email" type="email" required />
          <Field label="Phone" name="phone" type="tel" required />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Project address / city" name="location" required />
          <Field label="Timeline (e.g., rough-in date)" name="timeline" required />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Services needed</label>
          <div className="grid gap-2 sm:grid-cols-2 text-sm">
            <Check name="services" value="Structured cabling (Cat6/Cat6A)" />
            <Check name="services" value="Wi-Fi / access point planning" />
            <Check name="services" value="Cameras / NVR readiness" />
            <Check name="services" value="MDF/IDF build-outs / racks" />
            <Check name="services" value="Access control" />
            <Check name="services" value="Other (describe below)" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Project details</label>
          <textarea
            name="details"
            required
            rows={6}
            className="w-full rounded-xl border px-3 py-2"
            placeholder="Square footage / unit count, number of drops, floor count, existing conduit, plans available, etc."
          />
        </div>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-black px-5 py-3 text-white font-medium hover:opacity-90"
        >
          Submit request
        </button>

        <p className="text-xs text-neutral-500">
          We typically respond within 1 business day.
        </p>
      </form>
    </main>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">
        {label} {required ? <span className="text-neutral-400">*</span> : null}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border px-3 py-2"
      />
    </div>
  );
}

function Check({ name, value }: { name: string; value: string }) {
  return (
    <label className="flex items-center gap-2">
      <input type="checkbox" name={name} value={value} className="h-4 w-4" />
      <span>{value}</span>
    </label>
  );
}
