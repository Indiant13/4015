import Image from "next/image";
import type { TennisNewsFeedProps } from "../model/types";

export function TennisNewsFeedFeature({ articles }: TennisNewsFeedProps) {
  return (
    <section className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] p-5">
      <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Tennis News Feed</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article key={article.id} className="overflow-hidden rounded-xl border border-[var(--color-border-soft)] bg-[var(--color-surface-base)]">
            <div className="relative h-40 w-full">
              <Image src={article.imageUrl} alt={article.title} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">{article.title}</p>
              <p className="mt-2 text-xs text-[var(--color-text-secondary)]">{article.source}</p>
              <p className="text-xs text-[var(--color-text-secondary)]">{article.publishedAt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
