import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styles from './App.module.css';
import { useState } from 'react';

export default function App() {
  const [isGameStart, setIsGameStart] = useState(false);
  const [quitPopup, setQuitPopup] = useState(false);

  const startTheGame = () => {
    setIsGameStart(true);
  };

  const disconnectTheGame = () => {
    setIsGameStart(false);
    closeQuitPopup();
  };

  const openQuitPopup = () => {
    setQuitPopup(true);
  };

  const closeQuitPopup = () => {
    setQuitPopup(false);
  };

  return (
    <div className={styles.app}>
      <Header
        isGameStart={isGameStart}
        disconnectTheGame={disconnectTheGame}
        quitPopup={quitPopup}
        closeQuitPopup={closeQuitPopup}
        openQuitPopup={openQuitPopup}
      />
      <Main isGameStart={isGameStart} startTheGame={startTheGame} />
      <Footer />
    </div>
  );
}
