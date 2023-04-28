import Swords from "assets/munchkin/swords.svg";
import Text from "components/core/Text/Text";
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
        <Text as="h1" size="large" theme="munchkin-default">
          Combat
        </Text>
        <img className="w-10 m-2" src={Swords} alt="" />
      </div>
      <div className="mb-8">
        <Text theme="munchkin-default" size="medium" className="mb-2">
          Munchkin(s): <span>{munchkinScore}</span>
        </Text>
        <CombatScoreInput
          combatant="munchkin"
          onAdjustmentClick={(adjustment) =>
            setMunchkinScore(munchkinScore + adjustment)
          }
        />
      </div>
      <div className="mb-8">
        <Text theme="munchkin-default" size="medium" className="mb-2">
          Monster(s): <span>{monsterScore}</span>
        </Text>
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
