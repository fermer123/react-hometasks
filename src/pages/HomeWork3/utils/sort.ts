import { TSortDirection, isNumberArray, isStringArray } from "../types/types";

export const sort = <T>(
  arr: T[],
  direction: TSortDirection = "asc",
  column: keyof T
): T[] => {
  const sortedArr = [...arr];
  if (isNumberArray(sortedArr.map((e) => e[column]))) {
    if (direction === "asc") {
      return sortedArr.sort(
        (a, b) => (a[column] as number) - (b[column] as number)
      );
    }
    if (direction === "desc") {
      return sortedArr.sort((a, b) => {
        return (b[column] as number) - (a[column] as number);
      });
    }
  }
  if (isStringArray(sortedArr.map((e) => e[column]))) {
    if (direction === "asc") {
      return sortedArr.sort((a, b) =>
        (a[column] as string).localeCompare(b[column] as string)
      );
    }
    if (direction === "desc") {
      return sortedArr.sort((a, b) =>
        (b[column] as string).localeCompare(a[column] as string)
      );
    }
  }
  if (column === undefined) {
    return sortedArr;
  }
  return sortedArr;
};
