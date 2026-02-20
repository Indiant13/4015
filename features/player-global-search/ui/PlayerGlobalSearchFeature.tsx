import Image from "next/image";
import type { PlayerGlobalSearchProps } from "../model/types";

export function PlayerGlobalSearchFeature({ results }: PlayerGlobalSearchProps) {
  return (
    <section className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] p-5">
      <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Search Players Worldwide</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {results.map((group) => (
          <div key={group.country} className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface-base)] p-4">
            <h3 className="mb-3 text-sm uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">{group.country}</h3>
            <ul className="space-y-2">
              {group.players.map((player) => (
                <li key={player.id} className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image src={player.avatarUrl} alt={player.name} fill sizes="40px" className="object-cover" />
                  </div>
                  <span className="text-sm text-[var(--color-text-primary)]">{player.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
