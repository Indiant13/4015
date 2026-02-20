import Image from "next/image";
import type { PlayerPromoGridProps } from "../model/types";

export function PlayerPromoGrid({ players }: PlayerPromoGridProps) {
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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {players.map((player) => (
          <article
            key={player.id}
            className="group rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)]"
          >
            <div className="relative aspect-square">
              <Image
                src={player.avatarUrl}
                alt={`${player.name} from ${player.country}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="h-full w-full rounded-t-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="px-3 py-3">
              <p className="truncate text-sm font-medium text-[var(--color-text-primary)]">{player.name}</p>
              <p className="truncate text-xs text-[var(--color-text-secondary)]">{player.country}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
