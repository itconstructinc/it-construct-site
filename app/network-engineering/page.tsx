export default function NetworkEngineeringPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10">
          <div className="text-sm font-semibold text-neutral-500">
            Network Engineering & Configuration
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Network Engineering That Matches the Infrastructure Beneath It
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Project-based network configuration, optimization, and documentation
            for homes, businesses, and new construction—built for reliability,
            clarity, and long-term performance.
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
          <h2 className="text-xl font-semibold">Configuration Services</h2>
          <p className="mt-3 text-neutral-600">
            Broad enough for real-world environments, specific enough to be
            actionable.
          </p>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Router & switch configuration (project-based)",
              "VLAN design & segmentation (guest / ops / management)",
              "Trunking & access port design and cleanup",
              "Wi-Fi configuration (SSIDs, segmentation, roaming basics)",
              "Firewall baseline + secure remote access options",
              "Site-to-site VPN and secure connectivity (scope-dependent)",
              "Network audits, remediation plans, and optimization",
              "Documentation: diagrams, inventories, and configuration summaries",
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
            <h3 className="text-base font-semibold">What you receive</h3>
            <ul className="mt-3 grid gap-2 text-sm text-neutral-700 md:grid-cols-2">
              <li>• Configuration summary (what changed & why)</li>
              <li>• Simple network diagram</li>
              <li>• Device inventory + IP plan (as needed)</li>
              <li>• Validation checklist (basic health checks)</li>
              <li>• Recommendations for next steps (optional)</li>
              <li>• One accountable partner from physical to logical</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

