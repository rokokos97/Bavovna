import React from 'react';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';

const CatalogueContext = () => {
  // const filteredProducts = filteredItems.filter((item) => {
  //   return Object.keys(selectedFilters).every((category) => {
  //     if (selectedFilters[category].length === 0) {
  //       return true;
  //     }
  //     return selectedFilters[category].includes(item[category]);
  //   });
  // });

  // console.log(filteredProducts);

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
