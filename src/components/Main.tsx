import Welcome from './Welcome';
import styles from '../styles/Main.module.css';
import CardDeck from './CardDeck';

type MainProps = {
  isGameStart: boolean;
  displaying: boolean;
  startTheGame: () => void;
  disconnectTheGame: () => void;
  openGameEndDisplay: () => void;
};

export default function Main({
  isGameStart,
  startTheGame,
  displaying,
  disconnectTheGame,
  openGameEndDisplay,
}: MainProps) {
  return (
    <div className={styles.main}>
      {isGameStart ? (
        <CardDeck
          displaying={displaying}
          openGameEndDisplay={openGameEndDisplay}
          disconnectTheGame={disconnectTheGame}
        />
      ) : (
        <Welcome onTap={startTheGame} />
      )}
    </div>
  );
}
