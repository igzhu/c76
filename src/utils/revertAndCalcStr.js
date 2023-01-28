export function revertString(str) {
  let revertedStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    revertedStr += str[i];
  }
  return revertedStr;
}

export function calcStrLenght(str) {
  let revertedStr = revertString(str);
  const words = str.split(' ');
  const chars = str.split('');
  const wordsAndLetters = [];
  wordsAndLetters.push(words, chars);
  return wordsAndLetters;
}