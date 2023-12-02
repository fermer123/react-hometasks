import { useEffect, useState } from "react";

export const useInput = (initialValue = "", delay = 400) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(initialValue);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [initialValue, delay]);

  return value;
};
