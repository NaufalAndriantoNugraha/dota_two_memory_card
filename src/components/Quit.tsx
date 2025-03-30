import styles from '../styles/Quit.module.css';

interface QuitProps {
  displaying: boolean;
  disconnectTheGame: () => void;
  closePopup: () => void;
}

export default function Quit({
  displaying,
  disconnectTheGame,
  closePopup,
}: QuitProps) {
  return (
    <div
      className={`${styles.quit} ${
        displaying ? styles['displaying'] : styles['not-displaying']
      }`}
    >
      <div className={styles.prompt}>
        <h1>Disconnect from the current game?</h1>
        <p>
          Are you sure you want to disconnect from the current game? If you do,
          your current stats will reset when you start playing the game again.
        </p>
      </div>
      <div className={styles.buttons}>
        <button
          type="button"
          className={styles.button}
          onClick={disconnectTheGame}
        >
          YES
        </button>
        <button type="button" className={styles.button} onClick={closePopup}>
          NO
        </button>
      </div>
    </div>
  );
}
