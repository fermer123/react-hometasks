import { useMemo, useState } from "react";

const useGetDotNumber = () => {
  const [cubeNumber, setCubeNumber] = useState<number>();

  function getRndCubeNumber(min: number, max: number): void {
    setCubeNumber(Math.floor(Math.random() * (max - min + 1)) + min);
  }

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
export default useGetDotNumber;
