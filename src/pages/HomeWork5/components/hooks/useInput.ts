import { useEffect, useState } from "react";

export const useInput = <T>(initialValue: T, delay = 400): T => {
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
