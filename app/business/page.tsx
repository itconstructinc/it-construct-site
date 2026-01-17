export default function BusinessPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10">
          <div className="text-sm font-semibold text-neutral-500">
            Business
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Business Infrastructure That Stays Fast, Secure, and Clean
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            From POS and guest Wi-Fi to camera infrastructure and structured
            cabling—IT Construct installs and organizes systems so your
            operations don’t slow down.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white"
            >
              Request a Consultation
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-900"
            >
              Back to Home
            </a>
          </div>
        </div>

        <section className="rounded-3xl border border-neutral-200 p-8 shadow-sm">
          <h2 className="text-xl font-semibold">Business Services</h2>
          <p className="mt-3 text-neutral-600">
            Built for uptime, clarity, and scalability—without the mess.
          </p>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Structured cabling (Cat6/Cat6A) for offices, POS, back-of-house",
              "Wi-Fi deployment (staff vs guest segmentation options)",
              "Camera infrastructure & clean installs (NVR-ready)",
              "Network closet cleanup, labeling, and documentation",
              "New device installs: APs, switches, routers, POS peripherals",
              "Troubleshooting: drops, coverage, throughput, stability",
              "Retail / restaurant / hotel / plaza-ready infrastructure support",
              "Basic network design options (VLANs, secure access, tidy layout)",
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <div className="text-sm font-semibold">{item}</div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl bg-neutral-50 p-6">
            <h3 className="text-base font-semibold">Best for</h3>
            <ul className="mt-3 grid gap-2 text-sm text-neutral-700 md:grid-cols-2">
              <li>• Restaurants & cafés</li>
              <li>• Retail stores & POS environments</li>
              <li>• Gas stations / convenience stores</li>
              <li>• Hotels / short-stay properties</li>
              <li>• Small offices & professional services</li>
              <li>• Plazas & multi-tenant commercial spaces</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
