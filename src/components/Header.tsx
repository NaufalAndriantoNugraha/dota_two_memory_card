import styles from '../styles/Header.module.css';

interface HeaderProps {
  isGameStart: boolean;
  disconnectTheGame: () => void;
}

export default function Header({
  isGameStart,
  disconnectTheGame,
}: HeaderProps) {
  return (
    <div className={styles.header}>
      <div>
        <img src="assets/icons8-dota-2-logo.svg" alt="Dota 2 Logo" />
        <h1>DOTA 2 Memory Card</h1>
      </div>
      <menu>
        {isGameStart ? (
          <button
            type="button"
            className={styles.connected}
            onClick={disconnectTheGame}
          >
            <span>Disconnect</span>
          </button>
        ) : (
          <button type="button" disabled className={styles['not-connected']}>
            Not Connected
          </button>
        )}
      </menu>
    </div>
  );
}
