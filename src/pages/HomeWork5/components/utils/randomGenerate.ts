import { useEffect, useCallback, useState } from "react";

export const useRandomGenerate = (quantity: number) => {
  const [arrWords, setArrWords] = useState<string[]>([]);
  const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const generateRandomWord = useCallback(() => {
    const wordsArray: string[] = [];
    for (let i = 0; i <= quantity; i += 1) {
      let word: string = "";
      for (let i = 0; i < 6; i++) {
        word += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
      }
      wordsArray.push(word);
    }
    setArrWords(wordsArray);
  }, [quantity]);

  useEffect(() => {
    generateRandomWord();
  }, [generateRandomWord]);

  return arrWords;
};
