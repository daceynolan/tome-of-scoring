import Urls from "constants/Urls";
import { GameContext } from "contexts/gameContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Player as PlayerType } from "types/munchkin/types";
import { createNewPlayer } from "utils/player";

import Button from "../Button";
import PlayerForm from "../PlayerForm";

const CreatePlayer = () => {
  const navigate = useNavigate();
  const game = useContext(GameContext);
  const [players, setPlayers] = game.usePlayers;

  const handlePlayerCreate = (player: PlayerType) => {
    const newData = [...players];

    newData.push(createNewPlayer({ ...player }));

    setPlayers(newData);
    navigate(Urls.routes.configure);
  };

  return (
    <>
      <div className="flex justify-between mb-7 items-center">
        <h1 className="text-3xl font-semibold text-m-mud-500">Create Player</h1>
        <Button as={Link} to={Urls.routes.configure} styleReset>
          X
        </Button>
      </div>
      <PlayerForm
        onSave={(player) => {
          handlePlayerCreate(player as PlayerType);
        }}
      />
    </>
  );
};

export default CreatePlayer;
