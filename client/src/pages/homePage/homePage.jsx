import React from 'react';
import styles from './homePage.module.css';


const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.topMenu}>
        <div className={styles.left}>
          <span className={styles.logo}>TRADEO</span>
        </div>
        <div className={styles.center}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search..." />
            <span className={styles.searchIcon}>🔍</span>
          </div>
        </div>
        <div className={styles.right}>
          <span className={styles.icon}>❤️</span>
          <span className={styles.icon}>🛒</span>
          <span className={styles.icon}>🔔</span>
          <span className={styles.icon}>👤</span>
        </div>
      </div>
       {/* Nowy div z obrazem logo */}
       
    </div>
    
  );
};

export default HomePage;
