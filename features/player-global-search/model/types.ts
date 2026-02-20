import type { Player } from "../../../entities/player/types/player";

export type PlayerGlobalSearchItem = {
  country: string;
  players: Player[];
};

export type PlayerGlobalSearchProps = {
  results: PlayerGlobalSearchItem[];
};
