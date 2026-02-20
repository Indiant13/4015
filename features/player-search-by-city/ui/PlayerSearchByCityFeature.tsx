import Image from "next/image";
import type { PlayerSearchByCityProps } from "../model/types";

export function PlayerSearchByCityFeature({ results }: PlayerSearchByCityProps) {
  return (
    <section className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] p-5">
      <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Search Players by Spanish Cities</h2>
      <div className="mt-4 space-y-6">
        {results.map((group) => (
          <div key={group.city}>
            <h3 className="mb-3 text-sm uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">{group.city}</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.players.map((player) => (
                <article key={player.id} className="flex items-center gap-3 rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface-base)] p-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={player.avatarUrl} alt={player.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">{player.name}</p>
                    <p className="text-xs text-[var(--color-text-secondary)]">{player.city}, {player.country}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
