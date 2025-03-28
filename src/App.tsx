import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styles from './App.module.css';
import { useState } from 'react';

export default function App() {
  const [isGameStart, setIsGameStart] = useState(false);

  const startTheGame = () => {
    setIsGameStart(true);
  };

  const disconnectTheGame = () => {
    setIsGameStart(false);
  };

  return (
    <div className={styles.app}>
      <Header isGameStart={isGameStart} disconnectTheGame={disconnectTheGame} />
      <Main isGameStart={isGameStart} startTheGame={startTheGame} />
      <Footer />
    </div>
  );
}
