import { useEffect, useRef } from "react";

export const HomeWork4 = () => {
  const ref = useRef<HTMLButtonElement>(null);
  console.log(ref.current);
  useEffect(() => {
    const btn = ref.current;
    if (btn) {
      btn.style.backgroundColor = "red";
    }
  }, []);
  return (
    <div>
      <button ref={ref}>button</button>
    </div>
  );
};
