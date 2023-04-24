import StoneTexture from "assets/dice_miner/stone_texture.jpeg";
import Container from "components/core/Container/Container";
import times from "lodash/times";
import { createContext, useState } from "react";
import Helmet from "react-helmet";
import { FormattedMessage } from "react-intl";

import ScoringInputs from "./ScoringInputs";
import ScoringLabels from "./ScoringLabels";
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
    value: string | number | null
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
              <div className="border-dm-aquamarine-400 border-y-4 px-12 md:space-x-8 py-1 flex flex-col md:flex-row items-center">
                <Text as="h1" size="large">
                  Dice Miner
                </Text>
                <Text className="capitalize" theme="light" as="h2">
                  <FormattedMessage
                    id="dice-miner__subheading"
                    defaultMessage="Multi-player Score Sheet"
                  />
                </Text>
              </div>
            </div>
            <div className="flex">
              <div>
                <ScoringLabels round={1} />
                <ScoringLabels round={2} />
                <ScoringLabels round={3} />
              </div>
              <div className="overflow-hidden flex-1">
                <div className="overflow-y-auto">
                  <ScoringInputs round={1} />
                  <ScoringInputs round={2} />
                  <ScoringInputs round={3} />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </MinerContext.Provider>
    </>
  );
}
