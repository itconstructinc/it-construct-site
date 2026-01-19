export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-neutral-200 p-10 shadow-sm">
          <div className="text-xs uppercase tracking-widest text-neutral-400">
            IT Construct Inc
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
  Network Infrastructure You Don’t Have to Worry About — Built with Precision
</h1>

<p className="mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600">
  IT Construct Inc delivers professional network engineering, structured
  cabling, Wi-Fi deployment, and security camera infrastructure for
  businesses, builders, and property owners. Clean installs, clear
  documentation, and projects completed on schedule.
</p>

<p className="mt-4 text-sm font-medium text-neutral-700">
  Licensed • Bonded • Background-Checked Crews
</p>


          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/request-consultation"
              className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Request a Consultation
            </a>

            <a
              href="/network-engineering"
              className="inline-flex items-center justify-center rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900"
            >
              Network Engineering
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
