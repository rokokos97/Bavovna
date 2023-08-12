import React from 'react';
import styles from './MainPage.module.scss';

const MainPage = () => (
  <div className={styles.mainPage} data-testid="MainPage">
    <div className={styles.newCollectionBlock}>
      <p className={styles.newCollection}>
        new collection
      </p>
      <p className={styles.manifest}>
        Together, we can transform the way we consume
        and create a brighter, greener future for generations to come
      </p>
      <button className={styles.buttons}>
        <div className={styles.buttonText}>shop now</div>
      </button>
    </div>
  </div>
);

export default MainPage;
