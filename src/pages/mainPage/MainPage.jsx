import React from 'react';
import styles from './MainPage.module.scss';
import NewArrivalsBlock from '../../blocks/NewArrivalsBlock/NewArrivalsBlock';
import NewCollectionBlock from '../../blocks/NewCollectionBlock/NewCollectionBlock';

const MainPage = () => {
  return (
    <>
      <div className={styles.mainPage} data-testid="MainPage">
        <NewCollectionBlock />
        <NewArrivalsBlock />
      </div>
    </>
  );
};

export default MainPage;
