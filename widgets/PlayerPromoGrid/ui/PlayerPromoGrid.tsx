"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { PlayerPromoGridProps } from "../model/types";

export function PlayerPromoGrid({ players }: PlayerPromoGridProps) {
  const [flippedById, setFlippedById] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setFlippedById({});
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleCard = (playerId: string) => {
    setFlippedById((prev) => ({
      ...prev,
      [playerId]: !prev[playerId],
    }));
  };

  return (
    <section aria-label="Registered players showcase" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
            Global Community
          </p>
          <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] sm:text-3xl">
            Registered Players
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {players.map((player) => {
          const isFlipped = Boolean(flippedById[player.id]);

          return (
            <article key={player.id} className="w-full [perspective:1000px]">
              <div
                className={`relative min-h-[260px] w-full rounded-xl transition-transform duration-500 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
                }`}
              >
                <div className="absolute inset-0 overflow-hidden rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] [backface-visibility:hidden]">
                  <button
                    type="button"
                    onClick={() => toggleCard(player.id)}
                    className="relative block aspect-square w-full"
                    aria-label={`Flip ${player.name} card`}
                  >
                    <Image
                      src={player.avatarUrl}
                      alt={`${player.name} from ${player.country}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      className="object-cover"
                    />
                  </button>
                  <div className="px-3 py-3">
                    <p className="truncate text-sm font-medium text-[var(--color-text-primary)]">{player.name}</p>
                    <p className="truncate text-xs text-[var(--color-text-secondary)]">{player.country}</p>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-clay-500 bg-clay-100 p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <Link
                    href="/register?intent=challenge"
                    className="rounded-xl bg-tennis-500 px-4 py-3 text-sm font-semibold text-clay-700 transition hover:scale-105"
                  >
                    Challenge to Match
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
