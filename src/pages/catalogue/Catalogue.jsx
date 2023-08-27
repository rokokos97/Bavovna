import React from 'react';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';

const Catalogue = () => {
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <HeadCatalogBlock></HeadCatalogBlock>
        <SelectionBlock></SelectionBlock>
        <CardsCatalogBlock></CardsCatalogBlock>
      </div>
    </section>
  );
};

export default Catalogue;
