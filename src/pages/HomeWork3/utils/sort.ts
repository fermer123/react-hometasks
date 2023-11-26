import { TSortDirection, isNumberArray, isStringArray } from "../types/types";

export const sort = <T>(
  arr: T[],
  direction: TSortDirection = "asc",
  column: keyof T
): T[] => {
  const sortedArr = [...arr];
  if (isNumberArray(sortedArr.map((e) => e[column]))) {
    if (direction === "asc") {
      const arrToSort = sortedArr
        .map((e) => e[column])
        .sort((a, b) => (a as number) - (b as number));
      sortedArr.forEach((el, idx) => {
        return (el[column] = arrToSort[idx]);
      });
      return sortedArr;
    }
    if (direction === "desc") {
      const arrToSort = sortedArr
        .map((e) => e[column])
        .sort((a, b) => {
          return (b as number) - (a as number);
        });
      sortedArr.forEach((el, idx) => {
        return (el[column] = arrToSort[idx]);
      });
      return sortedArr;
    }
  }
  if (isStringArray(sortedArr.map((e) => e[column]))) {
    if (direction === "asc") {
      const arrToSort = sortedArr
        .map((e) => e[column])
        .sort((a, b) => (a as string).localeCompare(b as string));
      sortedArr.forEach((el, idx) => {
        return (el[column] = arrToSort[idx]);
      });
      return sortedArr;
    }
    if (direction === "desc") {
      const arrToSort = sortedArr
        .map((e) => e[column])
        .sort((a, b) => (b as string).localeCompare(a as string));
      sortedArr.forEach((el, idx) => {
        return (el[column] = arrToSort[idx]);
      });
      return sortedArr;
    }
  }
  if (column === undefined) {
    return sortedArr;
  }
  return sortedArr;
};
