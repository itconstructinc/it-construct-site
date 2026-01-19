import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} IT Construct Inc.</p>
          <div className="flex gap-4">
            <Link href="/request-consultation" className="hover:text-black">
              Request a Consultation
            </Link>
            <Link href="/" className="hover:text-black">
              Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
