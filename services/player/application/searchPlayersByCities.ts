import type { Player } from "../../../entities/player/types/player";
import { MOCK_PLAYERS } from "./mockPlayers";

export type PlayersByCity = {
  city: string;
  players: Player[];
};

export async function searchPlayersByCities(cities: string[]): Promise<PlayersByCity[]> {
  return cities.map((city) => ({
    city,
    players: MOCK_PLAYERS.filter((player) => player.city === city),
  }));
}
