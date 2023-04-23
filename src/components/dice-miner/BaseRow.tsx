import classNames from "classnames";
import times from "lodash/times";
import { ReactNode } from "react";

import Cell from "./Cell";

type Props = {
  cellRenderer: (cellIndex: number) => ReactNode;
  rowClassName?: string;
};

export default function BaseRow({ cellRenderer, rowClassName }: Props) {
  return (
    <div className="grid grid-cols-4 flex-1">
      {times(4, (columnIndex) => {
        return (
          <Cell
            key={columnIndex}
            className={classNames("even:bg-dm-aquamarine-50", rowClassName)}
          >
            {cellRenderer(columnIndex)}
          </Cell>
        );
      })}
    </div>
  );
}
