import Swords from "assets/munchkin/swords.svg";
import Urls from "constants/Urls";
import { GameContext } from "contexts/gameContext";
import { useContext, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getHighestLevel from "utils/getHighestLevel";
import getLowestUniqueLevel from "utils/getLowestUniqueLevel";
import { createNewPlayer } from "utils/player";

import Avatar from "../Avatar";
import Button from "../Button";
import PlayerCard from "../PlayerCard/PlayerCard";
import ScoreInput from "../ScoreInput/ScoreInput";
import Status from "../Status";

const Game = () => {
  const game = useContext(GameContext);
  const navigate = useNavigate();
  const [players, setPlayers] = game.usePlayers;
  const [lowestPlayerLevel, setLowestPlayerLevel] = useState<number | null>();
  const [highestPlayerLevel, setHightestPlayerLevel] = useState<number>();

  useLayoutEffect(() => {
    const levels: number[] = players.map((player) => player.level);
    setLowestPlayerLevel(getLowestUniqueLevel(levels));
    setHightestPlayerLevel(getHighestLevel(levels));
  }, [players]);

  const updatePlayer = (
    playerId: string,
    field: string,
    value: string | number
  ) => {
    setPlayers(
      players.map((player) => {
        if (player.id === playerId) {
          return {
            ...player,
            [field]: value,
          };
        }
        return player;
      })
    );
  };

  const resetGame = () => {
    setPlayers(
      Array(2)
        .fill(null)
        .map(() => createNewPlayer())
    );
    navigate(Urls.routes.munchkin);
  };

  const rematchGame = () => {
    setPlayers(
      players.map((player) => {
        return {
          ...player,
          level: 1,
          bonus: 0,
          sex: player.originalSex,
        };
      })
    );
  };

  return (
    <>
      <div>
        {players.map((player) => (
          <PlayerCard key={player.id}>
            <div className="game-player">
              <div className="flex mb-2.5 justify-between">
                <div className="flex items-center">
                  <Avatar id={player.avatar} />
                  <div className="ml-2 text-xl">{player.name}</div>
                </div>
                <div className="flex items-center gap-2">
                  {lowestPlayerLevel === player.level && (
                    <Status theme="warning">Discards</Status>
                  )}
                  {highestPlayerLevel === player.level && (
                    <Status theme="success">First</Status>
                  )}
                  <Button
                    className="game-player__sex"
                    aria-label={`Change ${player.name}'s sex`}
                    onClick={() =>
                      updatePlayer(
                        player.id,
                        "sex",
                        player.sex === "M" ? "F" : "M"
                      )
                    }
                    theme="info"
                  >
                    {player.sex}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-center text-xs">
                  <div className="actions__score">Level</div>
                  <ScoreInput
                    min={1}
                    max={99}
                    currentScore={player.level}
                    onChange={(newLevel: number) =>
                      updatePlayer(player.id, "level", newLevel)
                    }
                  />
                </div>
                <div className="actions__combat">
                  <Link
                    to={`${Urls.routes.combat}?score=${
                      player.level + player.bonus
                    }`}
                  >
                    <img
                      className="w-9"
                      src={Swords}
                      alt={`Enter combat with ${player.name}`}
                    />
                  </Link>
                  <div className="text-center">
                    {player.level + player.bonus}
                  </div>
                </div>
                <div className="text-center text-xs">
                  <div className="actions__score">Bonus</div>
                  <ScoreInput
                    currentScore={player.bonus}
                    onChange={(newBonus: number) =>
                      updatePlayer(player.id, "bonus", newBonus)
                    }
                  />
                </div>
              </div>
            </div>
          </PlayerCard>
        ))}
      </div>
      <div className="flex justify-between mt-7">
        <Button as={Link} to={Urls.routes.configure}>
          &lt;
        </Button>
        <Button onClick={rematchGame}>Rematch</Button>
        <Button onClick={resetGame}>End Game</Button>
      </div>
    </>
  );
};

export default Game;
