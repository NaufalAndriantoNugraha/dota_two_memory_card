import { theresDuplicate } from './arrays_helper';

export default function getRandomHeroesIndex(
  length: number,
  size: number,
): number[] {
  let heroesIndex: number[] = [];
  let looping = true;
  while (looping) {
    for (let i = 1; i <= size; i++) {
      heroesIndex.push(randomIndex(length));
    }
    if (theresDuplicate(heroesIndex)) {
      heroesIndex = [];
      continue;
    } else {
      looping = false;
    }
  }
  return heroesIndex;
}

function randomIndex(length: number) {
  return Math.floor(Math.random() * length);
}
