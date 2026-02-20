import { TournamentListFeature } from "../../../features/tournament-list";
import { getTournaments } from "../../../services/tournament/application/getTournaments";

export default async function TournamentsDashboardPage() {
  const tournaments = await getTournaments();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <TournamentListFeature tournaments={tournaments} />
    </main>
  );
}
