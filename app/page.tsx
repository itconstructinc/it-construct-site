export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-neutral-200 p-10 shadow-sm">
          <div className="text-sm font-semibold text-neutral-500">
            IT Construct Inc
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Infrastructure built right — from homes to businesses to new
            construction.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
            Nationwide services for structured cabling, Wi-Fi deployment,
            security camera infrastructure, and network engineering &
            configuration.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
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
