import classNames from "classnames";
import times from "lodash/times";
import { ReactNode } from "react";

import Cell from "./Cell";

type Props = {
  cellRenderer: (cellIndex: number) => ReactNode;
};

export default function BaseRow({ cellRenderer }: Props) {
  return (
    <div className="flex items-center flex-1">
      {times(4, (columnIndex) => {
        return (
          <Cell
            key={columnIndex}
            className="even:bg-dm-aquamarine-50 min-w-dm-cell flex-1 border-b"
          >
            {cellRenderer(columnIndex)}
          </Cell>
        );
      })}
    </div>
  );
}
