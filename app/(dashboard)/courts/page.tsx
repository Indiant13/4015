import { SpanishCourtsListFeature } from "../../../features/spanish-courts-list";
import { getSpanishCourts } from "../../../services/court/application/getSpanishCourts";

export default async function CourtsDashboardPage() {
  const courts = await getSpanishCourts();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SpanishCourtsListFeature courts={courts} />
    </main>
  );
}
