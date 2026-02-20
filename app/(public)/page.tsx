import { DiscoveryNavigation } from "../../widgets/DiscoveryNavigation";
import { PlayerPromoGrid } from "../../widgets/PlayerPromoGrid";

const PROMO_PLAYERS = [
  {
    id: "promo-001",
    name: "Ariana Costa",
    avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=720&q=80",
    country: "Spain",
    city: "Madrid",
  },
  {
    id: "promo-002",
    name: "Sofia Mendes",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=720&q=80",
    country: "Spain",
    city: "Barcelona",
  },
  {
    id: "promo-003",
    name: "Lucia Ferraro",
    avatarUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=720&q=80",
    country: "Italy",
    city: "Rome",
  },
  {
    id: "promo-004",
    name: "Naomi Clarke",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=720&q=80",
    country: "United States",
    city: "San Diego",
  },
  {
    id: "promo-005",
    name: "Mina Park",
    avatarUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=720&q=80",
    country: "South Korea",
    city: "Seoul",
  },
  {
    id: "promo-006",
    name: "Carlos Vega",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=720&q=80",
    country: "Spain",
    city: "Valencia",
  },
  {
    id: "promo-007",
    name: "Olivia Hart",
    avatarUrl: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=720&q=80",
    country: "Australia",
    city: "Melbourne",
  },
  {
    id: "promo-008",
    name: "Camille Roy",
    avatarUrl: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=720&q=80",
    country: "France",
    city: "Paris",
  },
];

export default function PublicStartPage() {
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
      <PlayerPromoGrid players={PROMO_PLAYERS} />
    </main>
  );
}
