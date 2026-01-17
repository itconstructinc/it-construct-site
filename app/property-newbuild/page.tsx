export default function PropertyNewBuildPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10">
          <div className="text-sm font-semibold text-neutral-500">
            Property / New Construction
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Pre-wire, build-out, and upgrades — done clean and documented.
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            We partner with builders, developers, and property teams to install
            structured cabling, Wi-Fi infrastructure, and device readiness
            before the structure is even complete.
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
          <h2 className="text-xl font-semibold">Services</h2>
          <p className="mt-3 text-neutral-600">
            Built for schedule, scalability, and a white-glove finish.
          </p>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "New construction low-voltage pre-wire (Cat6/Cat6A)",
              "Access point placement & Wi-Fi infrastructure planning",
              "Camera pre-wire & NVR readiness (clean routes, labeled)",
              "MDF/IDF build-outs + rack/closet organization",
              "Build-to-spec documentation (labels, maps, as-built notes)",
              "Retrofits & upgrades for existing properties",
              "Coordination with GCs/electricians for clean pathways",
              "Turnover refresh: cleanup, re-terminate, re-label, test",
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
            <h3 className="text-base font-semibold">Ideal projects</h3>
            <ul className="mt-3 grid gap-2 text-sm text-neutral-700 md:grid-cols-2">
              <li>• Multi-unit residential / mixed use</li>
              <li>• Retail plazas / strip centers</li>
              <li>• Hotels / hospitality upgrades</li>
              <li>• New-build homes with high-end networking</li>
              <li>• Light commercial build-outs</li>
              <li>• Portfolio-wide standardization</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
