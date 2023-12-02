import { useState, useRef, useMemo } from "react";
import { useOutsideClick } from "./hooks/useOutsideClick";
import { useInput } from "./hooks/useInput";
import style from "./CustomInput.module.css";
export const CustomInput = ({}) => {
  const [isOpen, setOpen] = useState<boolean>(true);
  const mainRef = useRef<HTMLDivElement>(null);
  const value = useInput("");
  useOutsideClick(mainRef, () => {
    setOpen(false);
  });

  const options = ["123", "456", "789"];

  const sortedOption = useMemo(() => {
    return options.filter((e) => e.includes(value.value));
  }, [options, value]);

  return (
    <div ref={mainRef} className={style.input_container}>
      <input
        {...value}
        onClick={() => setOpen(true)}
        className={style.input_field}
      />
      {isOpen ? (
        <div className={style.dropDown_container}>
          {sortedOption.map((e) => (
            <p>{e}</p>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
