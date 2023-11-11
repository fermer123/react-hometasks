import { FC } from "react";

import style from "./DotMaping.module.css";
interface IDotMaping {
  showCubeNumber?: number[];
  getRndCubeNumber: (min: number, max: number) => void;
}
const DotMaping: FC<IDotMaping> = ({ showCubeNumber, getRndCubeNumber }) => {
  return (
    <div className={style.cube}>
      {showCubeNumber?.map((dot, idx) => (
        <div key={idx} className={style.dotCube} />
      )) || (
        <button
          onClick={() => getRndCubeNumber(1, 6)}
          className={style.dotCubeStart}
        >
          Играть
        </button>
      )}
    </div>
  );
};
export default DotMaping;
