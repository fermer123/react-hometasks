import { useCallback, useEffect, useState } from "react";

const Button = () => {
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
  }, [color]);

  return (
    <button
      key="btn"
      id="btn"
      style={{
        backgroundColor: color,
        width: "100px",
        height: "50px",
        border: "1px solid",
      }}
    >
      button
    </button>
  );
};

export default Button;
