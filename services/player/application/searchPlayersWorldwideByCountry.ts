import type { Player } from "../../../entities/player/types/player";
import { MOCK_PLAYERS } from "./mockPlayers";

export type PlayersByCountry = {
  country: string;
  players: Player[];
};

export async function searchPlayersWorldwideByCountry(countries: string[]): Promise<PlayersByCountry[]> {
  return countries.map((country) => ({
    country,
    players: MOCK_PLAYERS.filter((player) => player.country === country),
  }));
}
