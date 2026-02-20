import type { SpanishCourtsListProps } from "../model/types";

export function SpanishCourtsListFeature({ courts }: SpanishCourtsListProps) {
  return (
    <section className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] p-5">
      <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Spanish Tennis Courts Listing</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {courts.map((court) => (
          <article key={court.id} className="rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface-base)] p-4">
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">{court.name}</p>
            <p className="mt-1 text-xs text-[var(--color-text-secondary)]">{court.city}</p>
            <p className="mt-2 text-xs text-[var(--color-text-secondary)]">Surface: {court.surface}</p>
            <p className="text-xs text-[var(--color-text-secondary)]">{court.indoor ? "Indoor" : "Outdoor"}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
