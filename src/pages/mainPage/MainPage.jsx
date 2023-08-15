import React from 'react';
import styles from './MainPage.module.scss';
import NewArrivalsBlock from '../../blocks/NewArrivalsBlock/NewArrivalsBlock';
import NewCollectionBlock from '../../blocks/NewCollectionBlock/NewCollectionBlock';
import SaleBlock from '../../blocks/SaleBlock/SaleBlock';

const MainPage = () => {
  return (
    <>
      <div className={styles.mainPage} data-testid="MainPage">
        <NewCollectionBlock />
        <NewArrivalsBlock />
        <SaleBlock />
      </div>
    </>
  );
};

export default MainPage;
