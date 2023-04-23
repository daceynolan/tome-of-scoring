import classNames from "classnames";
import times from "lodash/times";

import Cell from "./Cell";

type Props = {
  cellType: "text" | "number" | "readOnly";
};

const columnBorderClassMap = {
  default: "border-t",
  oneAndTwo: "border-t-2 border-dm-aquamarine-200",
  game: "border-t-2 border-b-0 border-dm-aquamarine-400",
};

export default function ScoringRow({ cellType }: Props) {
  return (
    <div className="grid grid-cols-4 flex-1">
      {times(4, (columnIndex) => {
        return (
          <Cell
            key={columnIndex}
            className={classNames(
              "even:bg-dm-aquamarine-50",
              columnIndex !== 4 && columnBorderClassMap.default
            )}
          >
            {cellType === "readOnly" ? (
              <div className="flex items-center justify-center h-full">--</div>
            ) : (
              <input
                className="px-4 text-center w-full h-12 bg-inherit focus:outline-none border-4 border-transparent hover:border-gray-200 focus:border-dm-topaz font-dm-display text-xl"
                type={cellType}
              />
            )}
          </Cell>
        );
      })}
    </div>
  );
}
