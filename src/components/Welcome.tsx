import styles from '../styles/Welcome.module.css';

export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <h1>
        <span>
          <img src="/public/assets/icons8-dota-2-logo.svg" alt="Dota 2 Logo" />
          <span>DOTA 2</span>
        </span>
        <span>Memory Card</span>
      </h1>

      <p>
        Play a memory card game with over a hundred iconic and legendary Dota
        Heroes!
      </p>

      <button type="button">PLAY</button>
    </div>
  );
}
