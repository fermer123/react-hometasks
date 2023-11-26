import { FC, useMemo, useState, useCallback } from "react";
import { ITableProps, TSortDirection } from "../../types/types";
import TableRow from "../tableRow/TableRow";
import Header from "../header/Header";
import { sort } from "../../utils/sort";

export const SortableTable: FC<ITableProps> = ({ rows }) => {
  const [direction, setDirection] = useState<string>("");

  const diretion = useCallback(
    (param: TSortDirection) => {
      setDirection(param);
    },
    [setDirection]
  );
  const sortedRows = useMemo(() => sort(rows, "desc", ""), [rows, direction]);

  console.log(sortedRows);
  return (
    <div>
      <Header rows={rows} />
      {sortedRows.map((row) => (
        <TableRow row={row} />
      ))}
    </div>
  );
};
