import StoneTexture from "assets/dice_miner/stone_texture.jpeg";
import Container from "components/core/Container/Container";
import times from "lodash/times";
import { createContext, useState } from "react";
import Helmet from "react-helmet";

import ScoringGrid from "./ScoringGrid";
import Text from "./Text";
import { MinerContextType, Player, PlayerKeys } from "./types";

const initialPlayers = times(4, () => {
  return {
    name: "",
    round_1_sequences: 0,
    round_1_treasure: 0,
    round_1_hazards: 0,
    round_2_sequences: 0,
    round_2_treasure: 0,
    round_2_hazards: 0,
    round_3_sequences: 0,
    round_3_treasure: 0,
    round_3_hazards: 0,
  };
});

export const MinerContext = createContext<MinerContextType>({
  players: [],
  updatePlayer() {},
});

export default function DiceMiner() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);

  function updatePlayer(
    playerIndex: number,
    field: PlayerKeys,
    value: string | number
  ) {
    setPlayers(
      players.map((player, index) => {
        if (index === playerIndex) {
          return {
            ...player,
            [field]: value,
          };
        } else {
          return player;
        }
      })
    );
  }

  return (
    <>
      <Helmet>
        <title>Dice Miner | Tome of Scoring</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Balthazar&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <MinerContext.Provider value={{ updatePlayer, players }}>
        <div
          className="p-4 md:p-8"
          style={{
            backgroundImage: `url(${StoneTexture})`,
          }}
        >
          <Container className="bg-white">
            <div className="bg-dm-aquamarine-100 pt-8 pb-4">
              <div className="border-dm-aquamarine-400 border-y-4 px-12 flex items-center space-x-8 py-1">
                <Text as="h1" size="large">
                  Dice Miner
                </Text>
                <Text className="capitalize" theme="light" as="h2">
                  Multi-player Score Sheet
                </Text>
              </div>
            </div>
            <ScoringGrid round={1} />
            <ScoringGrid round={2} />
            <ScoringGrid round={3} />
          </Container>
        </div>
      </MinerContext.Provider>
    </>
  );
}
