import React from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';

const CatalogueContext = () => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  console.log('catalogueContext query: ', query);
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <p className={styles.navigation}>Home / Catalogue</p>
        <HeadCatalogBlock />
        <SelectionBlock />
        <CardsCatalogBlock />
      </div>
    </section>
  );
};

export default CatalogueContext;
