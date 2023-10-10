import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../../store/itemsSlice';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';

const Catalogue = () => {
  const items = useSelector(getItems());
  const [isFilter, setIsFilter] = useState(false);
  const [sortBy, setSortBy] = useState('');
  console.log('Catalogue: ', sortBy);

  const changeIsFilter = () => {
    setIsFilter((prevValue) => !prevValue);
  };

  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <HeadCatalogBlock />
        <SelectionBlock handlerIsFilter={changeIsFilter} handlerSortBy={setSortBy}/>
        <CardsCatalogBlock
          items={items}
          isFilter={isFilter}
          handlerIsFilter={changeIsFilter}
        />
      </div>
    </section>
  );
};

export default Catalogue;
