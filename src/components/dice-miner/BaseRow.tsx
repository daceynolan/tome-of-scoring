import classNames from "classnames";
import times from "lodash/times";
import { ReactNode } from "react";

import Cell from "./Cell";

type Props = {
  cellRenderer: (cellIndex: number) => ReactNode;
  cellClassName?: string;
};

export default function BaseRow({ cellRenderer, cellClassName }: Props) {
  return (
    <div className="flex items-center flex-1">
      {times(4, (columnIndex) => {
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
