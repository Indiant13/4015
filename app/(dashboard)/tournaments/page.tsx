"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { TournamentListFeature } from "../../../features/tournament-list";
import { getTournaments } from "../../../services/tournament/application/getTournaments";

export default function TournamentsDashboardPage() {
  const router = useRouter();
  const [tournaments, setTournaments] = useState<Awaited<ReturnType<typeof getTournaments>>>([]);

  useEffect(() => {
    const loadData = async () => {
      const loadedTournaments = await getTournaments();
      setTournaments(loadedTournaments);
    };

    void loadData();
  }, []);

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => router.push("/")}
        className="mb-4 flex cursor-pointer items-center gap-2 text-sm text-clay-700 hover:underline"
      >
        <span aria-hidden="true">←</span>
        Back
      </button>

      <TournamentListFeature tournaments={tournaments} />
    </main>
  );
}
