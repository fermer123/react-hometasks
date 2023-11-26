import { FC, useCallback } from "react";
import style from "./Header.module.css";
import { ESort } from "../../types/types";
import TableCell from "../tableCell/TableCell";
import { ReactComponent as ReactLogoDown } from "../../assets/down.svg";
import { ReactComponent as ReactLogoUp } from "../../assets/up.svg";
import { ReactComponent as ReactLogonone } from "../../assets/none.svg";

interface IHeaderProps {
  onSetDirection: (item: string) => void;
  direction?: string;
  columnDirection: string;
}

const Header: FC<IHeaderProps> = ({
  onSetDirection,
  direction,
  columnDirection,
}) => {
  const selectIcon = useCallback(
    (item: string) => {
      if (direction === undefined && item === columnDirection) {
        return <ReactLogonone />;
      }
      if (direction === ESort.asc && item === columnDirection) {
        return <ReactLogoUp />;
      }
      if (direction === ESort.desc && item === columnDirection) {
        return <ReactLogoDown />;
      }
      return <ReactLogonone />;
    },
    [columnDirection, direction]
  );
  return (
    <div className={style.header_container}>
      <TableCell
        onSetDirection={onSetDirection}
        icon={selectIcon}
        rowItem={"id"}
      />
      <TableCell
        onSetDirection={onSetDirection}
        icon={selectIcon}
        rowItem={"userId"}
      />
      <TableCell
        onSetDirection={onSetDirection}
        icon={selectIcon}
        rowItem={"title"}
      />
    </div>
  );
};

export default Header;
