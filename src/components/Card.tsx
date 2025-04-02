import styles from '../styles/Card.module.css';
import Tilt from 'react-parallax-tilt';

type CardProps = {
  name: string;
  imgUrl: string;
  onTap: () => void;
};

export default function Card({ name, imgUrl, onTap }: CardProps) {
  return (
    <Tilt
      tiltReverse={true}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glarePosition="all"
      className={styles.card}
    >
      <div className={styles.inner}>
        <div className={styles.front} onClick={onTap}>
          <img src={imgUrl} alt={name} />
        </div>
        <div className={styles.back}>
          <img src="assets/icons8-dota-2-logo.svg" alt="#" />
        </div>
      </div>
    </Tilt>
  );
}
