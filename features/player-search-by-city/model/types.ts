import type { Player } from "../../../entities/player/types/player";

export type PlayerSearchByCityItem = {
  city: string;
  players: Player[];
};

export type PlayerSearchByCityProps = {
  results: PlayerSearchByCityItem[];
};
