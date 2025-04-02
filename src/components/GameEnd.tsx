import styles from '../styles/Lose.module.css';

type LoseProps = {
  title: string;
  score: number;
  bestScore: number;
  displaying: boolean;
  quit: () => void;
};

export default function Lose({
  title,
  score,
  bestScore,
  displaying,
  quit,
}: LoseProps) {
  return (
    <div
      className={`${styles.container} ${
        displaying ? styles['displaying'] : styles['not-displaying']
      }`}
    >
      <div className={`${styles.lose}`}>
        <h1>{title}</h1>
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
    </div>
  );
}
