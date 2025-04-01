import styles from '../styles/Lose.module.css';

type LoseProps = {
  score: number;
  bestScore: number;
  displaying: boolean;
  quit: () => void;
};

export default function Lose({
  score,
  bestScore,
  displaying,
  quit,
}: LoseProps) {
  return (
    <div
      className={`${styles.lose} ${
        displaying ? styles['displaying'] : styles['not-displaying']
      }`}
    >
      <h1>LOSE</h1>
      <div className={styles.stats}>
        <p>Your final stats</p>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <div className={styles.buttons}>
        <button type="button" className={styles.button} onClick={quit}>
          QUIT
        </button>
      </div>
    </div>
  );
}
