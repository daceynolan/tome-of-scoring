import DiceIcon from "assets/dice_miner/dice_icon.png";
import GemIcon from "assets/dice_miner/gem_icon.png";
import HazardIcon from "assets/dice_miner/hazard_icon.png";
import classNames from "classnames";
import times from "lodash/times";

import Cell from "./Cell";
import ScoringRow from "./ScoringRow";
import Text from "./Text";

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
        {round === 1 && <ScoringRow cellType="text" />}
        {/* All rounds have three rows for numeric inputs */}
        <ScoringRow cellType="number" />
        <ScoringRow cellType="number" />
        <ScoringRow cellType="number" />
        {/* All rounds have an individual total row */}
        <ScoringRow cellType="readOnly" />
        {/* Round 2 has a total for round 1 + 2 */}
        {round === 2 && <ScoringRow cellType="readOnly" />}
        {/* Round 3 has a game total */}
        {round === 3 && <ScoringRow cellType="readOnly" />}
        {/* {times(3, (rowIndex) => {
          return (
            <div className="grid grid-cols-4 flex-1" key={rowIndex}>
              {times(4, (columnIndex) => {
                return (
                  <Cell
                    key={columnIndex}
                    className={classNames(
                      "even:bg-dm-aquamarine-50",
                      (round === 1 || columnIndex !== 4) &&
                        rowBorderClassMap.default,
                      round === 2 &&
                        columnIndex === 4 &&
                        rowBorderClassMap.oneAndTwo,
                      round === 3 && columnIndex === 4 && rowBorderClassMap.game
                    )}
                  >
                    <input
                      className="px-4 text-center w-full h-12 bg-inherit focus:outline-none border-4 border-transparent hover:border-gray-200 focus:border-dm-topaz font-dm-display text-xl"
                      type="number"
                    />
                  </Cell>
                );
              })}
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
