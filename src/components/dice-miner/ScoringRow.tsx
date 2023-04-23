import { useContext } from "react";

import BaseRow from "./BaseRow";
import { MinerContext } from "./DiceMiner";
import { Player } from "./types";

type Props = {
  fieldType: "text" | "number";
  field: keyof Player;
};

export default function ScoringRow({ fieldType, field }: Props) {
  const { players, updatePlayer } = useContext(MinerContext);
  return (
    <BaseRow
      cellClassName="border-b"
      cellRenderer={(columnIndex) => {
        return (
          <input
            className="px-4 text-center w-full h-12 bg-inherit focus:outline-none border-4 border-transparent hover:border-gray-200 focus:border-dm-topaz font-dm-display text-lg"
            type={fieldType}
            value={players[columnIndex][field]}
            placeholder={fieldType === "text" ? "Name" : undefined}
            onChange={(e) => {
              const value = e.target.value;

              if (value) {
                updatePlayer(
                  columnIndex,
                  field,
                  fieldType === "number"
                    ? Number(e.target.value)
                    : e.target.value
                );
              } else {
                updatePlayer(columnIndex, field, null);
              }
            }}
          />
        );
      }}
    />
  );
}
