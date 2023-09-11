import React, {useState} from 'react';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';

const Catalogue = () => {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <HeadCatalogBlock />
        <SelectionBlock isFilter={isFilter} setIsFilter={setIsFilter} />
        <CardsCatalogBlock isFilter={isFilter} setIsFilter={setIsFilter} />
      </div>
    </section>
  );
};

export default Catalogue;
