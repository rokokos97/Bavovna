import React, {useState} from 'react';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';

const Catalogue = () => {
  const [isFilter, setIsFilter] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');

  const onChangeIsFilter = () => {
    setIsFilter((prevValue) => !prevValue);
  };

  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <HeadCatalogBlock />
        <SelectionBlock
          handlerIsFilter={onChangeIsFilter}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
        <CardsCatalogBlock
          isFilter={isFilter}
          handlerIsFilter={onChangeIsFilter}
          selectedSort={selectedSort}
        />
      </div>
    </section>
  );
};

export default Catalogue;
