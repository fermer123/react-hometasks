import { useMemo, useState } from "react";

export const useGetDotNumber = (min: number, max: number) => {
  const [cubeNumber, setCubeNumber] = useState<number>();

  //зависит от стейта (setCubeNumber)
  const getRndCubeNumber = (): void => {
    setCubeNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  };

  const showCubeNumber = useMemo(() => {
    const dotArray: number[] = [];
    if (cubeNumber) {
      for (let i = 0; i < cubeNumber; i++) {
        dotArray.push(i);
      }
      return dotArray;
    }
  }, [cubeNumber]);
  return { showCubeNumber, getRndCubeNumber };
};
