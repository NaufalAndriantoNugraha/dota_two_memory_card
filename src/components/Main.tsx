import Welcome from './Welcome';
import styles from '../styles/Main.module.css';
import CardDeck from './CardDeck';

interface MainProps {
  isGameStart: boolean;
  startTheGame: () => void;
}

export default function Main({ isGameStart, startTheGame }: MainProps) {
  return (
    <div className={styles.main}>
      {isGameStart ? <CardDeck /> : <Welcome onTap={startTheGame} />}
    </div>
  );
}
