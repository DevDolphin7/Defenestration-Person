import { commonWords } from "../data/words.json";

export function getRandomInt(words) {
  return Math.floor(Math.random() * (words.length - 1));
}

export function getRandomWordLetters() {
  const randomWord = commonWords[getRandomInt(commonWords)].toUpperCase();
  return randomWord.split("");
}
