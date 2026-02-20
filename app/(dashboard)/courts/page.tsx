"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SpanishCourtsListFeature } from "../../../features/spanish-courts-list";
import { getSpanishCourts } from "../../../services/court/application/getSpanishCourts";

export default function CourtsDashboardPage() {
  const router = useRouter();
  const [courts, setCourts] = useState<Awaited<ReturnType<typeof getSpanishCourts>>>([]);

  useEffect(() => {
    const loadData = async () => {
      const loadedCourts = await getSpanishCourts();
      setCourts(loadedCourts);
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

      <SpanishCourtsListFeature courts={courts} />
    </main>
  );
}
