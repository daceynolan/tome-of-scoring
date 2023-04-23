import classNames from "classnames";

import ScoringRow from "./ScoringRow";
import TotalRow from "./TotalRow";

type Props = {
  round: 1 | 2 | 3;
};

// const roundContainerClassMap = {
//   1: "border-b-2 border-b-dm-aquamarine-100",
//   2: "border-b-2 border-b-dm-aquamarine-400",
//   3: "",
// };

export default function ScoringInputs({ round }: Props) {
  return (
    <div className="flex-1">
      {/* Player Name Row (Only for round 1) */}
      {round === 1 && <ScoringRow field="name" fieldType="text" />}
      {/* All rounds have three rows for numeric inputs */}
      <ScoringRow field={`round_${round}_sequences`} fieldType="number" />
      <ScoringRow field={`round_${round}_treasure`} fieldType="number" />
      <ScoringRow field={`round_${round}_hazards`} fieldType="number" />
      {/* All rounds have an individual total row */}
      <TotalRow roundsToSum={[round]} />
      {/* Round 2 has a total for round 1 + 2 */}
      {round === 2 && <TotalRow roundsToSum={[1, 2]} />}
      {/* Round 3 has a game total */}
      {round === 3 && <TotalRow roundsToSum={[1, 2, 3]} />}
    </div>
  );
}
