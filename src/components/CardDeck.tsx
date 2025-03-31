import styles from '../styles/CardDeck.module.css';
import { useEffect, useState } from 'react';
import { Hero } from '../utils/Hero';
import getRandomHeroes from '../utils/getRandomHeroes';
import Card from './Card';

export default function CardDeck() {
  const [heroes, setHeroes] = useState<Array<Hero>>([]);
  useEffect(() => {
    async function getHeroes() {
      const res = await fetch('https://api.opendota.com/api/heroStats');
      const data = await res.json();
      const length = data.length;
      const hero: Array<Hero> = [];
      for (let i = 0; i < 6; i++) {
        let index = getRandomHeroes(length);
        const newHero: Hero = {
          name: data[index]['localized_name'],
          id: data[index]['id'],
          image: `https://cdn.cloudflare.steamstatic.com${data[index]['img']}`,
        };
        hero.push(newHero);
        index = getRandomHeroes(length);
      }
      setHeroes(hero);
    }
    getHeroes();
  }, []);
  return (
    <div className={styles['card-deck']}>
      <div className={styles.score}>
        <span>Score: 0</span>
        <span>Best Score: 0</span>
        <span>Hero remaining: 0/6</span>
      </div>
      <div className={styles['card-section']}>
        {heroes.map((hero) => {
          return <Card key={hero.id} name={hero.name} imgUrl={hero.image} />;
        })}
      </div>
    </div>
  );
}
