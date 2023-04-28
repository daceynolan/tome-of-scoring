import Close from "assets/munchkin/close.svg";
import Text from "components/core/Text/Text";
import Urls from "constants/Urls";
import { GameContext } from "contexts/gameContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Player as PlayerType } from "types/munchkin/types";
import { createNewPlayer } from "utils/player";

import Button from "../Button";
import PlayerForm from "../PlayerForm";

function CreatePlayer() {
  const navigate = useNavigate();
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  function handlePlayerCreate(player: PlayerType) {
    const newData = [...players];

    newData.push(createNewPlayer({ ...player }));

    setPlayers(newData);
    navigate(Urls.routes.configure);
  }

  return (
    <>
      <div className="flex justify-between mb-7 items-center">
        <Text as="h1" size="large" theme="munchkin-default">
          Create Player
        </Text>
        <Button
          as={Link}
          to={Urls.routes.configure}
          styleReset
          theme="ghost"
          aria-label="Cancel"
        >
          <img className="w-4 text-m-mud-500" src={Close} alt="" />
        </Button>
      </div>
      <PlayerForm
        onSave={(player) => {
          handlePlayerCreate(player as PlayerType);
        }}
      />
    </>
  );
}

export default CreatePlayer;
