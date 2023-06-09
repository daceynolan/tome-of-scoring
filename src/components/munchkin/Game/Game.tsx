import Swords from "assets/munchkin/swords.svg";
import Text from "components/core/Text/Text";
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

function Game() {
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

  function updatePlayer(
    playerId: string,
    field: string,
    value: string | number
  ) {
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
  }

  function resetGame() {
    setPlayers(
      Array(2)
        .fill(null)
        .map(() => createNewPlayer())
    );
    navigate(Urls.routes.munchkin);
  }

  function rematchGame() {
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
  }

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
                    <Status
                      theme="warning"
                      aria-live="assertive"
                      aria-label={`${player.name} gets all discards`}
                    >
                      Discards
                    </Status>
                  )}
                  {highestPlayerLevel === player.level && (
                    <Status
                      theme="success"
                      aria-live="assertive"
                      aria-label={`${player.name} is currently in first place`}
                    >
                      First
                    </Status>
                  )}
                  <Button
                    className="game-player__sex"
                    aria-label={`Change ${player.name}'s sex to ${
                      player.sex === "M" ? "Female" : "Male"
                    }`}
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
                  <Text
                    as="p"
                    theme="munchkin-default"
                    size="xs"
                    className="font-normal"
                  >
                    Level
                  </Text>
                  <ScoreInput
                    scoreType="level"
                    player={player.name}
                    min={1}
                    max={99}
                    currentScore={player.level}
                    onChange={(newLevel: number) =>
                      updatePlayer(player.id, "level", newLevel)
                    }
                  />
                </div>
                <div>
                  <Link
                    className="text-xs"
                    to={`${Urls.routes.combat}?score=${
                      player.level + player.bonus
                    }`}
                  >
                    <div className="flex items-center flex-col text-center hover:underline">
                      <img className="w-9" src={Swords} alt="" />
                      Enter combat
                    </div>
                  </Link>
                </div>
                <div className="text-center text-xs">
                  <Text
                    as="p"
                    theme="munchkin-default"
                    size="small"
                    className="font-normal"
                  >
                    Bonus
                  </Text>
                  <ScoreInput
                    scoreType="bonus"
                    player={player.name}
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
        <Button as={Link} to={Urls.routes.configure} type="button">
          &lt;
        </Button>
        <Button onClick={rematchGame} type="button">
          Rematch
        </Button>
        <Button onClick={resetGame} type="button">
          End Game
        </Button>
      </div>
    </>
  );
}

export default Game;
