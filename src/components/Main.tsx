import Welcome from './Welcome';
import styles from '../styles/Main.module.css';

export default function Main() {
  return (
    <div className={styles.main}>
      <Welcome />
    </div>
  );
}
