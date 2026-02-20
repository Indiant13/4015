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

  const closeCard = (playerId: string) => {
    setFlippedById((prev) => ({
      ...prev,
      [playerId]: false,
    }));
  };

  return (
    <section aria-label="Registered players showcase" className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {players.map((player) => {
          const isFlipped = Boolean(flippedById[player.id]);

          return (
            <article key={player.id} className="w-full">
              <div
                className={`relative w-full aspect-square [perspective:1000px] transition-transform duration-500 [transform-style:preserve-3d] ${
                  isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
                }`}
              >
                <div className="absolute inset-0 overflow-hidden rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] [backface-visibility:hidden]">
                  <button
                    type="button"
                    onClick={() => toggleCard(player.id)}
                    className="relative block h-full w-full"
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
                </div>

                <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-clay-500 bg-clay-100 p-4 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <button
                    type="button"
                    onClick={() => closeCard(player.id)}
                    className="absolute top-3 right-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-clay-300 text-sm font-semibold text-clay-700"
                    aria-label={`Close ${player.name} card`}
                  >
                    X
                  </button>

                  <div className="flex flex-col items-center justify-center gap-3">
                    <Link
                      href="/register?intent=challenge"
                      className="rounded-xl bg-tennis-500 px-4 py-3 text-sm font-semibold text-clay-700 transition hover:scale-105"
                    >
                      Challenge to Match
                    </Link>
                    <Link
                      href="/register?intent=chat"
                      className="rounded-xl bg-clay-500 px-6 py-2 text-sm font-semibold text-white transition hover:scale-105"
                    >
                      Chat
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-b-xl bg-clay-100 px-3 py-2">
                <p className="truncate text-sm font-medium text-clay-700">{player.name}</p>
                <div className="mt-1 flex items-center justify-between">
                  <p className="truncate text-xs text-clay-500">{player.country}</p>
                  <div className="flex items-center gap-1" aria-label={`Rating: ${player.rating} out of 5`}>
                    {Array.from({ length: player.rating }).map((_, index) => (
                      <span key={`${player.id}-rating-${index}`} className="relative h-3 w-3 rounded-full bg-tennis-500">
                        <span className="absolute -left-[1px] top-[1px] h-2.5 w-1.5 rounded-full border border-gray-400 border-r-0" />
                        <span className="absolute -right-[1px] top-[1px] h-2.5 w-1.5 rounded-full border border-gray-400 border-l-0" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
