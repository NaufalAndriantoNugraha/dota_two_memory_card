import styles from '../styles/Card.module.css';
import Tilt from 'react-parallax-tilt';

interface CardProps {
  name: string;
  imgUrl: string;
}

export default function Card({ name, imgUrl }: CardProps) {
  return (
    <Tilt
      tiltReverse={true}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glarePosition="all"
      className={styles.card}
    >
      <div>
        <div>
          <img src={imgUrl} alt={name} />
        </div>
        <div className={styles.back}>
          <img src="assets/icons8-dota-2-logo.svg" alt="#" />
        </div>
      </div>
    </Tilt>
  );
}
