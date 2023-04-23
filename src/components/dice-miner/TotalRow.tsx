import sum from "lodash/sum";
import { useContext } from "react";

import BaseRow from "./BaseRow";
import { MinerContext } from "./DiceMiner";
import { PlayerKeys } from "./types";

type Props = {
  roundsToSum: number[];
  rowClassName?: string;
};

const SCORING_METHODS = ["sequences", "treasure", "hazards"];

function getFieldsToSum(roundsToSum: number[]) {
  let fields: PlayerKeys[] = [];

  roundsToSum.forEach((round) => {
    SCORING_METHODS.forEach((method) => {
      fields.push(`round_${round}_${method}` as PlayerKeys);
    });
  });

  return fields;
}

export default function TotalRow({ roundsToSum, rowClassName }: Props) {
  const { players } = useContext(MinerContext);
  const fieldsToSum = getFieldsToSum(roundsToSum);

  return (
    <BaseRow
      rowClassName={rowClassName}
      cellRenderer={(columnIndex) => {
        const player = players[columnIndex];
        const total = sum(
          fieldsToSum.map((field) => {
            return player[field];
          })
        );

        return (
          <div className="pr-4 flex items-center justify-center h-full">
            {total}
          </div>
        );
      }}
    />
  );
}
