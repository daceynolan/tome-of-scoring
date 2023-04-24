import DiceIcon from "assets/dice_miner/dice_icon.png";
import GemIcon from "assets/dice_miner/gem_icon.png";
import HazardIcon from "assets/dice_miner/hazard_icon.png";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import Cell from "./Cell";
import Text from "./Text";

type Props = {
  round: 1 | 2 | 3;
};

const roundBackgroundClassMap = {
  1: "bg-dm-aquamarine-100",
  2: "bg-dm-aquamarine-200",
  3: "bg-dm-aquamarine-400",
};

export default function ScoringLabels({ round }: Props) {
  return (
    <div
      className={classNames(
        "grid grid-cols-2 grid-rows-5",
        roundBackgroundClassMap[round]
      )}
    >
      {round === 1 && (
        <div className="bg-white col-span-2 flex items-center justify-center">
          <Text>
            <FormattedMessage id="dice-miner__player" defaultMessage="Player" />
          </Text>
        </div>
      )}
      <div className="row-span-3 relative" style={{ height: 144 }}>
        <Text
          theme="light"
          className="absolute -rotate-90 left-1/2 -translate-x-1/2 whitespace-nowrap top-1/2 -translate-y-1/2"
        >
          <FormattedMessage id="dice-miner__round" defaultMessage="Round" />{" "}
          {round}
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
        <Text theme="light">
          <FormattedMessage id="dice-miner__total" defaultMessage="Total" />
        </Text>
      </Cell>
      {round === 2 && (
        <Cell className="bg-dm-aquamarine-300 col-span-2 flex items-center justify-center">
          <Text theme="light">1 + 2</Text>
        </Cell>
      )}
      {round === 3 && (
        <Cell className="bg-white col-span-2 flex items-center justify-center h-12">
          <Text>
            <FormattedMessage id="dice-miner__game" defaultMessage="Game" />
          </Text>
        </Cell>
      )}
    </div>
  );
}
