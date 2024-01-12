import React from 'react';
import HeadShopPageBlock from './headShopPageBlock/headShopPageBlock';
import SelectionBlock from './selectionBlock/selectionBlock';
import CardsCatalogBlock from './cardsCatalogBlock/cardsCatalogBlock';
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
