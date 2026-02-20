import type { TournamentListProps } from "../model/types";

export function TournamentListFeature({ tournaments }: TournamentListProps) {
  return (
    <section className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] p-5">
      <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Tournaments Listing</h2>
      <div className="mt-4 space-y-3">
        {tournaments.map((tournament) => (
          <article key={tournament.id} className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface-base)] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">{tournament.title}</p>
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                  {tournament.city}, {tournament.country} · {tournament.surface}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                  {tournament.startDate} - {tournament.endDate}
                </p>
              </div>
              <span className="rounded-full border border-[var(--color-border-soft)] px-2 py-1 text-xs text-[var(--color-text-secondary)]">
                {tournament.isFinished ? "Finished" : "Upcoming"}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
