import styles from '../styles/CardDeck.module.css';
import { useEffect, useState } from 'react';
import { Hero } from '../utils/Hero';
import Card from './Card';
import getRandomHeroesIndex from '../utils/getRandomHeroes';

export default function CardDeck() {
  const [heroes, setHeroes] = useState<Array<Hero>>([]);
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [heroRemaining, setHeroRemaining] = useState<number>(0);

  const incrementScore = () => {
    if (heroRemaining < 6) {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    const incrementBestScore = () => {
      setBestScore(bestScore + 1);
    };
    const incrementHeroRemaining = () => {
      setHeroRemaining(heroRemaining + 1);
    };
    if (heroRemaining < 6) {
      if (bestScore < score) {
        incrementBestScore();
        incrementHeroRemaining();
      }
    } else if (heroRemaining > 6) {
      return;
    }
  }, [score, bestScore, heroRemaining]);

  useEffect(() => {
    const storedHeroes = sessionStorage.getItem('Heroes');
    if (storedHeroes) {
      setHeroes(JSON.parse(storedHeroes));
    }

    async function getHeroes() {
      const res = await fetch('https://api.opendota.com/api/heroStats');
      const data = await res.json();
      const length = data.length;
      const hero: Array<Hero> = [];
      const indexes: number[] = getRandomHeroesIndex(length, 6);
      indexes.forEach((index) => {
        const newHero: Hero = {
          name: data[index]['localized_name'],
          id: data[index]['id'],
          image: `https://cdn.cloudflare.steamstatic.com${data[index]['img']}`,
        };
        hero.push(newHero);
      });
      setHeroes(hero);
      sessionStorage.setItem('Heroes', JSON.stringify(hero));
    }
    getHeroes();
  }, []);
  return (
    <div className={styles['card-deck']}>
      <div className={styles.score}>
        <span>Score: {score}</span>
        <span>Best Score: {bestScore}</span>
        <span>Hero remaining: {heroRemaining}/6</span>
      </div>
      <div className={styles['card-section']}>
        {heroes.map((hero) => {
          return (
            <Card
              key={hero.id}
              name={hero.name}
              imgUrl={hero.image}
              onTap={incrementScore}
            />
          );
        })}
      </div>
    </div>
  );
}
