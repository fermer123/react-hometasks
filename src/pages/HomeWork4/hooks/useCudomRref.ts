import { useCallback, useEffect, useMemo, useState } from "react";

export const useCustomRef = () => {
  const [color, setColor] = useState<string>("red");
  const [btn, setBtn] = useState<any>(null);

  const setRef = useCallback((elem: any) => {
    setBtn(elem);
  }, []);
  const handleChangeButtonColor = useCallback(() => {
    setColor((prev) => (prev === "red" ? "blue" : "red"));
  }, []);

  useEffect(() => {
    if (btn) {
      btn.style.backgroundColor = color;
    }
  }, [color, btn]);

  return { setRef, handleChangeButtonColor };
};
