import { FC } from "react";
import { ITableProps } from "../../types/types";
import TableRow from "../tableRow/TableRow";
import Header from "../header/Header";

export const SortableTable: FC<ITableProps> = ({ rows }) => {
  return (
    <div>
      <Header rows={rows} />
      {rows.map((row) => (
        <TableRow row={row} />
      ))}
    </div>
  );
};
