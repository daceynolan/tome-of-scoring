import Swords from "assets/munchkin/swords.svg";
import Urls from "constants/Urls";
import queryString from "query-string";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import CombatScoreInput from "..//CombatScoreInput";
import Button from "../Button";

function Combat() {
  let location = useLocation();
  const { score } = queryString.parse(location.search);

  const [munchkinScore, setMunchkinScore] = useState(Number(score || 0));
  const [monsterScore, setMonsterScore] = useState(0);

  return (
    <div className="w-full max-w-md">
      <div className="mb-7 flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-m-mud-500">Combat</h1>
        <img className="w-10 m-2" src={Swords} alt="" />
      </div>
      <div className="mb-8">
        <div className="text-m-mud-500 text-2xl mb-2">
          Munchkin(s): <span>{munchkinScore}</span>
        </div>
        <CombatScoreInput
          combatant="munchkin"
          onAdjustmentClick={(adjustment) =>
            setMunchkinScore(munchkinScore + adjustment)
          }
        />
      </div>
      <div className="mb-8">
        <div className="text-m-mud-500 text-2xl mb-2">
          Monster(s): <span>{monsterScore}</span>
        </div>
        <CombatScoreInput
          combatant="monster"
          onAdjustmentClick={(adjustment) =>
            setMonsterScore(monsterScore + adjustment)
          }
        />
      </div>
      <Button as={Link} fluid to={Urls.routes.game}>
        End Combat
      </Button>
    </div>
  );
}

export default Combat;
