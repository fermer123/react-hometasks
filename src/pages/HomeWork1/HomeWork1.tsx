import style from "./HomeWork1.module.css";
import DotMaping from "./components/DotMaping";

import useGetDotNumber from "./hooks/useGetDotNumber";
export const HomeWork1 = () => {
  const { showCubeNumber, getRndCubeNumber } = useGetDotNumber();

  return (
    <div className={style.homeWork_container}>
      <h1 className={style.title}>Решение домашнего задания №1</h1>
      <DotMaping
        showCubeNumber={showCubeNumber}
        getRndCubeNumber={getRndCubeNumber}
      />
      <button
        className={style.cube_button}
        type="button"
        onClick={() => getRndCubeNumber(1, 6)}
      >
        Бросить кубик
      </button>
    </div>
  );
};
