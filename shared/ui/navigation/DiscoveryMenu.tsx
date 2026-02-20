"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { KebabIcon } from "../icons/KebabIcon";

const DISCOVERY_LINKS = [
  { href: "/players", label: "Players in Spain" },
  { href: "/players?scope=global", label: "Global Players" },
  { href: "/courts", label: "Spanish Courts" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/news", label: "Tennis News" },
] as const;

export function DiscoveryMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;

      if (!target) {
        return;
      }

      if (menuRef.current && !menuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerOutside);
    document.addEventListener("touchstart", handlePointerOutside);

    return () => {
      document.removeEventListener("mousedown", handlePointerOutside);
      document.removeEventListener("touchstart", handlePointerOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-clay-500 transition hover:bg-clay-100"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Open discovery navigation"
      >
        <KebabIcon />
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
