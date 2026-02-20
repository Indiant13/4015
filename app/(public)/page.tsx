import { getPublicPlayers } from "../../services/player/application/getPublicPlayers";
import { DiscoveryNavigation } from "../../widgets/DiscoveryNavigation";
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

      <DiscoveryNavigation />
      <PlayerPromoGrid players={players} />
    </main>
  );
}
