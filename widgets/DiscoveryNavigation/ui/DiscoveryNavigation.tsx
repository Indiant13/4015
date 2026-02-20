import Link from "next/link";

const NAV_ITEMS = [
  { href: "/players", label: "Players in Spain" },
  { href: "/players?scope=global", label: "Global Players" },
  { href: "/courts", label: "Spanish Courts" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/news", label: "Tennis News" },
] as const;

export function DiscoveryNavigation() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8" aria-label="Discovery navigation">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-xl border border-clay-500 bg-clay-100 px-6 py-3 text-center text-sm font-medium text-[var(--color-text-primary)] transition hover:scale-105 hover:bg-tennis-500"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
