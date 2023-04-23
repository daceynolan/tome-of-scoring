import sum from "lodash/sum";
import { useContext } from "react";

import BaseRow from "./BaseRow";
import { MinerContext } from "./DiceMiner";
import Text from "./Text";
import { PlayerKeys } from "./types";

type Props = {
  borderClassName?: string;
  roundsToSum: number[];
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

export default function TotalRow({ roundsToSum, borderClassName }: Props) {
  const { players } = useContext(MinerContext);
  const fieldsToSum = getFieldsToSum(roundsToSum);

  return (
    <BaseRow
      cellClassName={borderClassName}
      cellRenderer={(columnIndex) => {
        const player = players[columnIndex];
        const total = sum(
          fieldsToSum.map((field) => {
            return player[field];
          })
        );

        return (
          <Text className="flex items-center justify-center h-full">
            {total}
          </Text>
        );
      }}
    />
  );
}
