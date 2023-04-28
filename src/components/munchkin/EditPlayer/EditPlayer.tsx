import Close from "assets/munchkin/close.svg";
import Text from "components/core/Text/Text";
import Urls from "constants/Urls";
import { GameContext } from "contexts/gameContext";
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Player } from "types/munchkin/types";

import Button from "../Button";
import PlayerForm from "../PlayerForm/PlayerForm";

function EditPlayer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  function handlePlayerUpdate(player: Player) {
    const newData = [...players];

    const playerIndex = players.findIndex((p) => {
      return p.id === player.id;
    });
    newData[playerIndex] = player;

    setPlayers(newData);
    navigate(Urls.routes.configure);
  }

  return (
    <>
      <div className="edit-player__heading flex justify-between mb-7 items-center">
        <Text as="h1" size="large" theme="munchkin-default">
          Edit Player
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
        defaultFormData={players.find((p) => p.id === id)}
        onSave={(player) => {
          handlePlayerUpdate(player as Player);
        }}
      />
    </>
  );
}

export default EditPlayer;
