import { FC } from "react";
import TableCell from "../tableCell/TableCell";
import style from "./TableRow.module.css";

interface IRow {
  row: Record<string, string | number>;
}

const TableRow: FC<IRow> = ({ row }) => {
  const { id, userId, title } = row;

  return (
    <div className={style.tableRow_container}>
      <TableCell rowItem={id} />
      <TableCell rowItem={userId} />
      <TableCell rowItem={title} />
    </div>
  );
};

export default TableRow;
