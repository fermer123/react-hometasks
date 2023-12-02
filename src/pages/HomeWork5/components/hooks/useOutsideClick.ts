import { RefObject, useEffect } from "react";

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  fn: () => void
) => {
  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) fn();
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [fn, ref]);
};
