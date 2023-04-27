import Urls from "constants/Urls";
import { GameContext } from "contexts/gameContext";
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Player } from "types/munchkin/types";

import Button from "../Button";
import PlayerForm from "../PlayerForm/PlayerForm";

const EditPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const handlePlayerUpdate = (player: Player) => {
    const newData = [...players];

    const playerIndex = players.findIndex((p) => {
      return p.id === player.id;
    });
    newData[playerIndex] = player;

    setPlayers(newData);
    navigate(Urls.routes.configure);
  };

  return (
    <>
      <div className="edit-player__heading flex justify-between mb-7 items-center">
        <h1 className="text-3xl font-semibold text-m-mud-500">Edit Player</h1>
        <Button as={Link} to={Urls.routes.configure} styleReset>
          X
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
};

export default EditPlayer;
