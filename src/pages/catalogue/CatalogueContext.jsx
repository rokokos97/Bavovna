import React from 'react';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';

const CatalogueContext = () => {
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <HeadCatalogBlock />
        <SelectionBlock />
        <CardsCatalogBlock />
      </div>
    </section>
  );
};

export default CatalogueContext;
