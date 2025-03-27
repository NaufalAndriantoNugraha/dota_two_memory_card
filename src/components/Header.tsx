import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img src="assets/icons8-dota-2-logo.svg" alt="Dota 2 Logo" />
      </div>

      <h1>DOTA 2 Memory Card</h1>
    </div>
  );
}
