import { createContext } from "react";
import { Game } from "types/munchkin/types";

export const GameContext = createContext<Game>({
  usePlayers: [[], () => {}],
});
