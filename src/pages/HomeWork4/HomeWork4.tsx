import { useCallback, useEffect, useRef, useState } from "react";

export const HomeWork4 = () => {
  const [color, setColor] = useState<string>("red");

  const handleChangeButtonColor = useCallback(() => {
    setColor((prev) => (prev === "red" ? "blue" : "red"));
  }, []);

  useEffect(() => {
    const btn = document.getElementById("btn");
    if (btn) {
      btn.addEventListener("click", handleChangeButtonColor);
      return () => btn.removeEventListener("click", handleChangeButtonColor);
    }
  }, [handleChangeButtonColor]);

  return (
    <div style={{ margin: "0 auto" }}>
      <button
        key="btn"
        id="btn"
        style={{ backgroundColor: color, width: "100px", height: "50px" }}
      >
        button
      </button>
    </div>
  );
};
