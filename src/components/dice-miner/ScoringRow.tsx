import { useContext } from "react";
import { useIntl } from "react-intl";

import BaseRow from "./BaseRow";
import { MinerContext } from "./DiceMiner";
import { Player } from "./types";

type Props = {
  fieldType: "text" | "number";
  field: keyof Player;
  label: string;
};

export default function ScoringRow({ fieldType, field, label }: Props) {
  const { players, updatePlayer } = useContext(MinerContext);
  const intl = useIntl();

  return (
    <BaseRow
      cellClassName="border-b"
      cellRenderer={(columnIndex) => {
        return (
          <>
            {fieldType === "text" ? (
              <label className="sr-only">{label}</label>
            ) : (
              <label className="sr-only">{`${label} score`}</label>
            )}
            <input
              className="px-4 text-center w-full h-12 bg-inherit focus:outline-none border-4 border-transparent hover:border-gray-200 focus:border-dm-topaz font-dm-display text-lg"
              type={fieldType}
              value={players[columnIndex][field]}
              placeholder={
                fieldType === "text"
                  ? intl.formatMessage({
                      id: "dice-miner__name",
                      defaultMessage: "Name",
                    })
                  : undefined
              }
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
          </>
        );
      }}
    />
  );
}
