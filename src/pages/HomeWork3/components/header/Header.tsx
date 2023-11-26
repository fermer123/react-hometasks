import { FC } from "react";
import style from "./Header.module.css";
import { ITableProps } from "../../types/types";
import TableCell from "../tableCell/TableCell";
import { ReactComponent as ReactLogoDown } from "../../assets/down.svg";
import { ReactComponent as ReactLogoUp } from "../../assets/up.svg";
import { ReactComponent as ReactLogonone } from "../../assets/none.svg";

const Header: FC<ITableProps> = ({ rows }) => {
  return (
    <div className={style.header_container}>
      <TableCell icon={<ReactLogoDown />} rowItem={"id"} />
      <TableCell icon={<ReactLogoUp />} rowItem={"id"} />
      <TableCell icon={<ReactLogonone />} rowItem={"id"} />
    </div>
  );
};

export default Header;
