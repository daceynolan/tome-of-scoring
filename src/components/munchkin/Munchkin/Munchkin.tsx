import { GameContext } from "contexts/gameContext";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { createNewPlayer } from "utils/player";

import Card from "../Card";
import GithubLink from "../GithubLink";
import Logo from "../Logo";

//version local storage key to prevent stale data with app changes
const LOCAL_STORAGE_KEY = "munchkin_v1";

const Munchkin = () => {
  const localGame = localStorage.getItem(LOCAL_STORAGE_KEY);
  const [players, setPlayers] = useState(
    localGame
      ? JSON.parse(localGame)
      : Array(2)
          .fill(null)
          .map(() => createNewPlayer())
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(players));
  }, [JSON.stringify(players)]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex mt-6 flex-col items-center p-2">
      <Logo />
      <GithubLink />
      <GameContext.Provider
        value={{
          usePlayers: [players, setPlayers],
        }}
      >
        <Card>
          <Outlet />
        </Card>
      </GameContext.Provider>
    </div>
  );
};

export default Munchkin;
