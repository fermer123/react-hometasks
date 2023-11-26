import { FC, memo } from "react";
import style from "./TableCell.module.css";

interface ITableCell {
  rowItem: string | number;
  icon?: React.ReactElement | React.ReactNode;
  onSetDirection?: (item: string) => void;
}

const TableCell: FC<ITableCell> = ({ rowItem, icon, onSetDirection }) => {
  return (
    <div className={style.tableCell_container}>
      <span>{rowItem}</span>
      <button onClick={() => onSetDirection?.(rowItem as string)}>
        {icon}
      </button>
    </div>
  );
};

export default memo(TableCell);
