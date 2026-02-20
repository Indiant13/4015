"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { PlayerGlobalSearchFeature } from "../../../features/player-global-search";
import { PlayerSearchByCityFeature } from "../../../features/player-search-by-city";
import { getGlobalPlayerCountries, getSpanishCities } from "../../../services/geo/application/getLocations";
import { searchPlayersByCities } from "../../../services/player/application/searchPlayersByCities";
import { searchPlayersWorldwideByCountry } from "../../../services/player/application/searchPlayersWorldwideByCountry";

export default function PlayersDashboardPage() {
  const router = useRouter();
  const [cityResults, setCityResults] = useState<Awaited<ReturnType<typeof searchPlayersByCities>>>([]);
  const [countryResults, setCountryResults] = useState<Awaited<ReturnType<typeof searchPlayersWorldwideByCountry>>>([]);

  useEffect(() => {
    const loadData = async () => {
      const spanishCities = await getSpanishCities();
      const loadedCityResults = await searchPlayersByCities(spanishCities);

      const countries = await getGlobalPlayerCountries();
      const loadedCountryResults = await searchPlayersWorldwideByCountry(countries);

      setCityResults(loadedCityResults);
      setCountryResults(loadedCountryResults);
    };

    void loadData();
  }, []);

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => router.push("/")}
        className="mb-4 flex cursor-pointer items-center gap-2 text-sm text-clay-700 hover:underline"
      >
        <span aria-hidden="true">←</span>
        Back
      </button>

      <PlayerSearchByCityFeature results={cityResults} />
      <PlayerGlobalSearchFeature results={countryResults} />
    </main>
  );
}
