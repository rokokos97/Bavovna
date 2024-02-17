import React from 'react';
import HeadShopPageBlock from './HeadShopPageBlock/HeadShopPageBlock';
import SelectionBlock from './selectionBlock/SelectionBlock';
import CardsCatalogBlock from './CardsCatalogBlock/CardsCatalogBlock';
import styles from './shopPage.module.scss';

const ShopPageContext = () => {
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <p className={styles.navigation}>Home / Shop</p>
        <HeadShopPageBlock />
        <SelectionBlock />
        <CardsCatalogBlock />
      </div>
    </section>
  );
};

export default ShopPageContext;
