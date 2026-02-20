"use client";

import Link from "next/link";
import { useState } from "react";

const DISCOVERY_LINKS = [
  { href: "/players", label: "Players in Spain" },
  { href: "/players?scope=global", label: "Global Players" },
  { href: "/courts", label: "Spanish Courts" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/news", label: "Tennis News" },
] as const;

export function DiscoveryMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-2 rounded-xl border border-clay-500 bg-clay-100 px-4 py-2 text-sm font-medium text-[var(--color-text-primary)] transition hover:scale-105"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        Discover
        <span aria-hidden="true" className="text-xs">▼</span>
      </button>

      {isOpen ? (
        <div className="absolute left-0 top-full z-20 mt-2 min-w-56 rounded-xl border border-clay-500 bg-clay-100 p-2 shadow-md">
          <nav className="flex flex-col" aria-label="Discovery links">
            {DISCOVERY_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-[var(--color-text-primary)] transition hover:bg-tennis-500"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
