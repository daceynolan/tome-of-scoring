import Pencil from "assets/munchkin/pencil.svg";
import Trash from "assets/munchkin/trash.svg";
import Text from "components/core/Text/Text";
import Urls from "constants/Urls";
import { GameContext } from "contexts/gameContext";
import { reverse } from "named-urls";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "../Avatar";
import Button from "../Button";

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 6;

function ConfigureGame() {
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;
  const [playersAreValid, setPlayersAreValid] = useState(false);
  const numberOfPlayers = players.length;

  useEffect(() => {
    if (players.some((player) => !player.name)) {
      setPlayersAreValid(false);
    } else {
      setPlayersAreValid(true);
    }
  }, [JSON.stringify(players)]); // eslint-disable-line react-hooks/exhaustive-deps

  function removePlayer(index: number) {
    const currentPlayers = [...players];
    currentPlayers.splice(index, 1);
    setPlayers(currentPlayers);
  }

  return (
    <div className="flex flex-col">
      <div>
        {players.map((player, index) => {
          return (
            <div
              className="flex justify-between items-center mb-6"
              key={player.id}
            >
              <div className="flex items-center">
                <Avatar id={player.avatar} />
                <Text
                  as="p"
                  className="pl-2.5 whitespace-nowrap"
                  size="medium"
                  theme="munchkin-default"
                >
                  {player.name || "Player's Name"}
                </Text>
              </div>
              <div className="flex">
                <Link
                  aria-label={`Edit ${player.name}`}
                  to={reverse(Urls.routes.editPlayer, { id: player.id })}
                >
                  <img className="w-9" src={Pencil} alt="" />
                </Link>
                {numberOfPlayers > MIN_PLAYERS && (
                  <Button
                    styleReset
                    onClick={() => removePlayer(index)}
                    theme="ghost"
                    aria-label={`Delete ${player.name}`}
                  >
                    <img className="w-9" src={Trash} alt="" />
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end mb-7">
        {numberOfPlayers < MAX_PLAYERS && (
          <Button
            as={Link}
            aria-label="Add a player"
            to={Urls.routes.CreatePlayer}
            styleReset
            theme="link"
          >
            + Add Player
          </Button>
        )}
      </div>

      {playersAreValid && (
        <Button as={Link} fluid to={Urls.routes.game}>
          Start
        </Button>
      )}
    </div>
  );
}

export default ConfigureGame;
