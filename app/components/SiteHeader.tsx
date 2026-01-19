import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/business", label: "Business" },
  { href: "/homeowners", label: "Homeowners" },
  { href: "/network-engineering", label: "Network Engineering" },
  { href: "/property-newbuild", label: "Property / New Construction" },
];

export default function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          IT Construct Inc
        </Link>

        <nav className="hidden gap-6 text-sm text-neutral-600 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-black">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/request-consultation"
          className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
        >
          Request a Consultation
        </Link>
      </div>
    </header>
  );
}
