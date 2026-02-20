import { PlayerGlobalSearchFeature } from "../../../features/player-global-search";
import { PlayerSearchByCityFeature } from "../../../features/player-search-by-city";
import { getGlobalPlayerCountries, getSpanishCities } from "../../../services/geo/application/getLocations";
import { searchPlayersByCities } from "../../../services/player/application/searchPlayersByCities";
import { searchPlayersWorldwideByCountry } from "../../../services/player/application/searchPlayersWorldwideByCountry";

export default async function PlayersDashboardPage() {
  const spanishCities = await getSpanishCities();
  const cityResults = await searchPlayersByCities(spanishCities);

  const countries = await getGlobalPlayerCountries();
  const countryResults = await searchPlayersWorldwideByCountry(countries);

  return (
    <main className="mx-auto w-full max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg:px-8">
      <PlayerSearchByCityFeature results={cityResults} />
      <PlayerGlobalSearchFeature results={countryResults} />
    </main>
  );
}
