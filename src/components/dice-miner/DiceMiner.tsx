import StoneTexture from "assets/dice_miner/stone_texture.jpeg";
import Button from "components/core/Button";
import Container from "components/core/Container/Container";
import Urls from "constants/Urls";
import { ChangeEvent, createContext, useEffect, useState } from "react";
import Helmet from "react-helmet";
import { FormattedMessage } from "react-intl";

import ScoringInputs from "./ScoringInputs";
import ScoringLabels from "./ScoringLabels";
import Text from "./Text";
import { MinerContextType, Player, PlayerKeys } from "./types";

//version local storage key to prevent stale data with app changes
const LOCAL_STORAGE_KEY = "dice-miner_v1.0.0";

const DEFAULT_NUMBER_OF_PLAYERS = 4;

export const MinerContext = createContext<MinerContextType>({
  players: [],
  updatePlayer() {},
  numberOfPlayers: DEFAULT_NUMBER_OF_PLAYERS,
});

const DEFAULT_PLAYER_DATA = {
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

export default function DiceMiner() {
  const localGame = localStorage.getItem(LOCAL_STORAGE_KEY);

  const LocalGameNUmberOfPlayers = localGame && JSON.parse(localGame).length;

  const [numberOfPlayers, setNumberOfPlayers] = useState(
    localGame ? LocalGameNUmberOfPlayers : DEFAULT_NUMBER_OF_PLAYERS
  );
  const [players, setPlayers] = useState<Player[]>(
    localGame
      ? JSON.parse(localGame)
      : Array(DEFAULT_NUMBER_OF_PLAYERS).fill(DEFAULT_PLAYER_DATA)
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(players));
  }, [JSON.stringify(players)]); // eslint-disable-line react-hooks/exhaustive-deps

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

  function changeNumberOfPlayers(e: ChangeEvent<HTMLSelectElement>) {
    const newNumberOfPlayers = Number(e.target.value);
    const currentNumberOfPlayers = players.length;
    setNumberOfPlayers(newNumberOfPlayers);

    if (newNumberOfPlayers > currentNumberOfPlayers) {
      const newPlayersCount = newNumberOfPlayers - currentNumberOfPlayers;
      const newPlayerData = Array(newPlayersCount).fill(DEFAULT_PLAYER_DATA);
      setPlayers([...players, ...newPlayerData]);
    } else if (newNumberOfPlayers < currentNumberOfPlayers) {
      const newPlayers = players.slice(0, newNumberOfPlayers);
      setPlayers(newPlayers);
    } else {
    }
  }

  function resetGame() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    document.location.href = Urls.routes["dice-miner"];
  }

  function rematch() {
    setPlayers(
      players.map((player) => {
        return {
          ...player,
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
      <MinerContext.Provider
        value={{
          updatePlayer,
          players,
          numberOfPlayers,
        }}
      >
        <div
          className="p-4 md:p-8"
          style={{
            backgroundImage: `url(${StoneTexture})`,
          }}
        >
          <Container className="bg-white">
            <div className="bg-dm-aquamarine-100 py-4">
              <Text className="capitalize flex justify-center mb-4 mr-0 md:justify-end md:mr-4">
                <label htmlFor="number-of-players">
                  <FormattedMessage
                    id="dice-miner__number-of-players"
                    defaultMessage="Number of players"
                  />
                </label>
                <select
                  className="rounded ml-4"
                  name="number-of-players"
                  id="number-of-players"
                  onChange={(e) => changeNumberOfPlayers(e)}
                  value={numberOfPlayers}
                >
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </Text>

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
          <Container>
            <div className="flex p-4 bg-white mt-4 flex-col gap-4 md:flex-row md:justify-between">
              <Button onClick={resetGame}>
                <FormattedMessage
                  id="dice-miner__end"
                  defaultMessage="End game"
                />
              </Button>
              <Button onClick={rematch}>
                <FormattedMessage
                  id="dice-miner__rematch"
                  defaultMessage="Rematch"
                />
              </Button>
            </div>
          </Container>
        </div>
      </MinerContext.Provider>
    </>
  );
}
