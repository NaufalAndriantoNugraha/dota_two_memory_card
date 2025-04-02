import { Hero } from './Hero';

function theresDuplicate(indexes: number[]) {
  const setVer = new Set(indexes);
  return indexes.length !== setVer.size ? true : false;
}

function shuffleArray(arr: Array<Hero>): Array<Hero> {
  const newArr = JSON.parse(JSON.stringify(arr));
  let currentIndex = arr.length;
  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex],
    ];
  }
  return newArr;
}

export { theresDuplicate, shuffleArray };
