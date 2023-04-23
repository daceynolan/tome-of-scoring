import DiceIcon from "assets/dice_miner/dice_icon.png";
import GemIcon from "assets/dice_miner/gem_icon.png";
import HazardIcon from "assets/dice_miner/hazard_icon.png";
import classNames from "classnames";

import Cell from "./Cell";
import ScoringRow from "./ScoringRow";
import Text from "./Text";
import TotalRow from "./TotalRow";

type Props = {
  round: 1 | 2 | 3;
};

const roundBackgroundClassMap = {
  1: "bg-dm-aquamarine-100",
  2: "bg-dm-aquamarine-200",
  3: "bg-dm-aquamarine-400",
};

const roundContainerClassMap = {
  1: "border-b-2 border-b-dm-aquamarine-100",
  2: "border-b-2 border-b-dm-aquamarine-400",
  3: "",
};

const rowBorderClassMap = {
  default: "border-t",
  oneAndTwo: "border-t-2 border-dm-aquamarine-200",
  game: "border-t-2 border-b-0 border-dm-aquamarine-400",
};

export default function ScoringGrid({ round }: Props) {
  return (
    <div className={classNames("flex", roundContainerClassMap[round])}>
      <div
        className={classNames(
          "grid grid-cols-2 grid-rows-5",
          roundBackgroundClassMap[round]
        )}
      >
        {round === 1 && (
          <div className="bg-white col-span-2 flex items-center justify-center">
            <Text>Player</Text>
          </div>
        )}
        <div className="row-span-3 relative" style={{ height: 144 }}>
          <Text
            theme="light"
            className="absolute -rotate-90 left-1/2 -translate-x-1/2 whitespace-nowrap top-1/2 -translate-y-1/2"
          >
            Round {round}
          </Text>
        </div>
        <Cell>
          <img className="w-12" src={DiceIcon} alt="" />
        </Cell>
        <Cell>
          <img className="w-12" src={GemIcon} alt="" />
        </Cell>
        <Cell>
          <img className="w-12" src={HazardIcon} alt="" />
        </Cell>
        <Cell className="col-span-2 justify-center items-center flex">
          <Text theme="light">Total</Text>
        </Cell>
        {round === 2 && (
          <Cell className="bg-dm-aquamarine-300 col-span-2 flex items-center justify-center">
            <Text theme="light">1 + 2</Text>
          </Cell>
        )}
        {round === 3 && (
          <Cell
            className={classNames(
              "bg-white col-span-2 flex items-center justify-center h-12",
              rowBorderClassMap.game
            )}
          >
            <Text>Game</Text>
          </Cell>
        )}
      </div>
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
        {round === 2 && (
          <TotalRow
            rowClassName="border-t-2 border-dm-aquamarine-200"
            roundsToSum={[1, 2]}
          />
        )}
        {/* Round 3 has a game total */}
        {round === 3 && (
          <TotalRow
            rowClassName="border-t-2 border-b-0 border-dm-aquamarine-400"
            roundsToSum={[1, 2, 3]}
          />
        )}
      </div>
    </div>
  );
}
