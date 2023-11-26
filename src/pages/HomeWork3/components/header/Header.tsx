import { FC } from "react";
import style from "./Header.module.css";
import { ESort, ITableProps } from "../../types/types";
import TableCell from "../tableCell/TableCell";
import { ReactComponent as ReactLogoDown } from "../../assets/down.svg";
import { ReactComponent as ReactLogoUp } from "../../assets/up.svg";
import { ReactComponent as ReactLogonone } from "../../assets/none.svg";

interface IHeaderProps {
  rows: ITableProps["rows"];
  onSetDirection: (item: string) => void;
  direction?: string;
}

const Header: FC<IHeaderProps> = ({ rows, onSetDirection, direction }) => {
  const selectIcon = () => {
    if (direction === undefined) {
      return <ReactLogonone />;
    }
    if (direction === ESort.asc) {
      return <ReactLogoUp />;
    }
    if (direction === ESort.desc) {
      return <ReactLogoDown />;
    }
  };
  return (
    <div className={style.header_container}>
      <TableCell
        onSetDirection={onSetDirection}
        icon={selectIcon()}
        rowItem={"id"}
      />
      <TableCell
        onSetDirection={onSetDirection}
        icon={selectIcon()}
        rowItem={"userId"}
      />
      <TableCell
        onSetDirection={onSetDirection}
        icon={selectIcon()}
        rowItem={"title"}
      />
    </div>
  );
};

export default Header;
