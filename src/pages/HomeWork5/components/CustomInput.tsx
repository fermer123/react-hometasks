import { useState, useRef, useMemo } from "react";
import { useOutsideClick } from "./hooks/useOutsideClick";
import { useInput } from "./hooks/useInput";
import style from "./CustomInput.module.css";
import { useRandomGenerate } from "./utils/randomGenerate";
export const CustomInput = ({}) => {
  const [isOpen, setOpen] = useState<boolean>(true);
  const mainRef = useRef<HTMLDivElement>(null);
  const value = useInput("");
  const options = useRandomGenerate(100);
  useOutsideClick(mainRef, () => {
    setOpen(false);
  });

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
        sortedOption.length > 0 ? (
          <div className={style.dropDown_container}>
            {sortedOption.map((e, idx) => (
              <p key={idx}>{e}</p>
            ))}
          </div>
        ) : (
          <div className={style.dropDown_container}>не найдено</div>
        )
      ) : null}
    </div>
  );
};
