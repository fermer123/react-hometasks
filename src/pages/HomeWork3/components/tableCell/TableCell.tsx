import { FC } from "react";
import style from "./TableCell.module.css";

interface ITableCell {
  rowItem: string | number;
  icon?: React.ReactElement | React.ReactNode;
}

const TableCell: FC<ITableCell> = ({ rowItem, icon }) => {
  return (
    <div className={style.tableCell_container}>
      <span>{rowItem}</span>
      <button>{icon}</button>
    </div>
  );
};

export default TableCell;
