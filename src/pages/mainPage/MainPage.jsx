import React from 'react';
import styles from './MainPage.module.scss';
import NewArrivalsBlock from '../../blocks/NewArrivalsBlock/NewArrivalsBlock';
import NewCollectionBlock from '../../blocks/NewCollectionBlock/NewCollectionBlock';
import SaleBlock from '../../blocks/SaleBlock/SaleBlock';
import BavovnaBlock from '../../blocks/BavovnaBlock/BavovnaBlock';
import NewsLettersBlock from '../../blocks/NewsLettersBlock/NewsLettersBlock';
import BavovnaImgBlock from '../../blocks/BavovnaImgBlock/BavovnaImgBlock';

const MainPage = () => {
  return (
    <>
      <div className={styles.mainPage} data-testid='MainPage'>
        <NewCollectionBlock />
        <NewArrivalsBlock />
        <SaleBlock />
        <BavovnaBlock />
        <BavovnaImgBlock/>
        <NewArrivalsBlock />
        <NewsLettersBlock />
      </div>
    </>
  );
};

export default MainPage;
