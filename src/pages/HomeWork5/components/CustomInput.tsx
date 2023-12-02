import { useState, useRef, useMemo, useDeferredValue } from "react";
import { useOutsideClick } from "./hooks/useOutsideClick";
import { useInput } from "./hooks/useInput";
import style from "./CustomInput.module.css";
import { useRandomGenerate } from "./utils/randomGenerate";
export const CustomInput = ({}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const options = useRandomGenerate(10000);
  const [text, setText] = useState("");
  const value = useInput(text, 400);
  useOutsideClick(mainRef, () => {
    setOpen(false);
  });
  const sortedOption = useMemo(() => {
    return options.filter((e) => e.includes(value));
  }, [options, value]);

  return (
    <div ref={mainRef} className={style.input_container}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
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
