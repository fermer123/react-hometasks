import { FC, useMemo, useState, useCallback } from "react";
import { ESort, ITableProps, TSortDirection } from "../../types/types";
import TableRow from "../tableRow/TableRow";
import Header from "../header/Header";
import { sort } from "../../utils/sort";

export const SortableTable: FC<ITableProps> = ({ rows }) => {
  const [direction, setDirection] = useState<TSortDirection | undefined>();
  const [columnDirection, setColumnDirection] = useState<string>("");

  const handleSetDirection = useCallback(
    (item: string) => {
      if (direction === undefined) {
        setColumnDirection(item);
        setDirection(ESort.asc);
      }
      if (direction === ESort.asc) {
        setColumnDirection(item);
        setDirection(ESort.desc);
      }
      if (direction === ESort.desc) {
        setColumnDirection(item);
        setDirection(undefined);
      }
    },
    [direction]
  );

  const sortedRows = useMemo(
    () => sort(rows, direction, columnDirection),
    [columnDirection, direction, rows]
  );

  return (
    <>
      <Header
        columnDirection={columnDirection}
        direction={direction}
        onSetDirection={handleSetDirection}
      />
      {sortedRows.map((row, idx) => (
        <TableRow key={idx} row={row} />
      ))}
    </>
  );
};
