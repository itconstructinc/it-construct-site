export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="text-4xl font-semibold tracking-tight">
        Request received.
      </h1>
      <p className="mt-3 text-neutral-600">
        We’ll follow up soon to schedule your consultation.
      </p>

      <a
        href="/"
        className="mt-8 inline-flex rounded-xl border px-4 py-2 text-sm font-medium"
      >
        Back to Home
      </a>
    </main>
  );
}
