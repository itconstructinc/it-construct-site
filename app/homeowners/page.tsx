export default function HomeownersPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-10">
          <div className="text-sm font-semibold text-neutral-500">
            Homeowners
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Whole-Home Connectivity, Built Like Infrastructure
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Fast, stable Wi-Fi. Clean hardline drops. Smart camera readiness.
            Built with a white-glove standard—so your home works the way it
            should.
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
          <h2 className="text-xl font-semibold">Home Services</h2>
          <p className="mt-3 text-neutral-600">
            Built to reduce dead zones, improve performance, and keep your setup
            clean and future-ready.
          </p>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Whole-home Wi-Fi planning & access point placement",
              "Hardline connectivity (Cat6/Cat6A drops) for key rooms",
              "Home office optimization (wired + Wi-Fi performance)",
              "Security camera infrastructure (prewire & clean installs)",
              "Structured wiring panel organization & labeling",
              "Network device placement & tidy rack/shelf setup",
              "Basic segmentation options (guest vs private)",
              "Troubleshooting & remediation (coverage, speed, stability)",
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
            <h3 className="text-base font-semibold">Common outcomes</h3>
            <ul className="mt-3 grid gap-2 text-sm text-neutral-700 md:grid-cols-2">
              <li>• Stronger Wi-Fi coverage across the home</li>
              <li>• Less buffering and fewer drops on calls</li>
              <li>• Wired reliability for gaming/office/streaming</li>
              <li>• Cleaner, labeled infrastructure you can trust</li>
              <li>• Camera-ready perimeter with a professional finish</li>
              <li>• A setup that scales with new devices</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

