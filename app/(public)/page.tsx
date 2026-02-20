import Link from "next/link";
import { getPublicPlayers } from "../../services/player/application/getPublicPlayers";
import { PlayerPromoGrid } from "../../widgets/PlayerPromoGrid";

export default async function PublicStartPage() {
  const players = await getPublicPlayers();

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-6xl px-4 pb-4 pt-10 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-secondary)]">Welcome to 40:15</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          The global tennis network built around players, matches, and community.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-[var(--color-text-secondary)] sm:text-base">
          Join players from every court and every time zone. Discover a growing community already registered on 40:15.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
          <Link
            href="/register"
            className="mx-auto block rounded-2xl bg-tennis-500 px-10 py-5 text-lg font-semibold text-[var(--color-text-primary)] shadow-lg transition hover:scale-105"
          >
            Join Now
          </Link>
          <p className="mt-3 text-sm text-[var(--color-text-secondary)]">Become part of the global tennis community</p>
        </div>
      </section>

      <PlayerPromoGrid players={players} />
    </main>
  );
}
