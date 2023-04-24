import classNames from "classnames";
import times from "lodash/times";
import { ReactNode, useContext } from "react";

import Cell from "./Cell";
import { MinerContext } from "./DiceMiner";

type Props = {
  cellRenderer: (cellIndex: number) => ReactNode;
  cellClassName?: string;
};

export default function BaseRow({ cellRenderer, cellClassName }: Props) {
  const { numberOfPlayers } = useContext(MinerContext);
  return (
    <div className="flex items-center flex-1">
      {times(numberOfPlayers, (columnIndex) => {
        return (
          <Cell
            key={columnIndex}
            className={classNames(
              "even:bg-dm-aquamarine-50 min-w-dm-cell flex-1",
              cellClassName
            )}
          >
            {cellRenderer(columnIndex)}
          </Cell>
        );
      })}
    </div>
  );
}
