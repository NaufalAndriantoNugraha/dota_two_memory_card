import styles from '../styles/Welcome.module.css';

interface WelcomeProps {
  onTap: () => void;
}

export default function Welcome({ onTap }: WelcomeProps) {
  return (
    <div className={styles.welcome}>
      <h1>
        <span>
          <img src="/assets/icons8-dota-2-logo.svg" alt="Dota 2 Logo" />
          <span>DOTA 2</span>
        </span>
        <span>Memory Card</span>
      </h1>

      <p>
        Play a memory card game with over a hundred iconic and legendary Dota
        Heroes!
      </p>

      <button type="button" onClick={onTap}>
        PLAY
      </button>
    </div>
  );
}
