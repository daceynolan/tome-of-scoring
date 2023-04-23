export type Player = {
  name: string;
  round_1_sequences: number;
  round_1_treasure: number;
  round_1_hazards: number;
  round_2_sequences: number;
  round_2_treasure: number;
  round_2_hazards: number;
  round_3_sequences: number;
  round_3_treasure: number;
  round_3_hazards: number;
};

export type PlayerKeys = keyof Player;

export type MinerContextType = {
  players: Player[];
  updatePlayer: (
    playerIndex: number,
    field: PlayerKeys,
    value: number | string | null
  ) => void;
};
