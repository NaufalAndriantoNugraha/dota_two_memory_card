import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <a href="https://github.com/NaufalAndriantoNugraha" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
            <span>Naufal Andrianto Nugraha</span>
          </a>
        </li>
        <li>
          <a href="https://docs.opendota.com/" target="_blank">
            OpenDota API
          </a>
        </li>
      </ul>
    </div>
  );
}
