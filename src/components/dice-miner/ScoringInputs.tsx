import classNames from "classnames";

import ScoringRow from "./ScoringRow";
import TotalRow from "./TotalRow";

type Props = {
  round: 1 | 2 | 3;
};

const roundTotalClassMap = {
  1: "border-b-dm-aquamarine-100",
  2: "border-b-dm-aquamarine-200",
  3: "border-b-dm-aquamarine-400",
};

export default function ScoringInputs({ round }: Props) {
  return (
    <div className="flex-1">
      {/* Player Name Row (Only for round 1) */}
      {round === 1 && <ScoringRow label="name" field="name" fieldType="text" />}
      {/* All rounds have three rows for numeric inputs */}
      <ScoringRow
        label={`round ${round} sequences`}
        field={`round_${round}_sequences`}
        fieldType="number"
      />
      <ScoringRow
        label={`round ${round} treasure`}
        field={`round_${round}_treasure`}
        fieldType="number"
      />
      <ScoringRow
        label={`round ${round} hazards`}
        field={`round_${round}_hazards`}
        fieldType="number"
      />
      {/* All rounds have an individual total row */}
      <TotalRow
        borderClassName={classNames("border-b-2", roundTotalClassMap[round])}
        roundsToSum={[round]}
      />
      {/* Round 2 has a total for round 1 + 2 */}
      {round === 2 && (
        <TotalRow
          borderClassName="border-b-2 border-b-dm-aquamarine-300"
          roundsToSum={[1, 2]}
        />
      )}
      {/* Round 3 has a game total */}
      {round === 3 && <TotalRow roundsToSum={[1, 2, 3]} />}
    </div>
  );
}
