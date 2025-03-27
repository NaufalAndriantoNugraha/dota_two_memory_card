import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
