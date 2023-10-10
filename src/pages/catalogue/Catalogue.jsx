import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../../store/itemsSlice';
import {sortItems} from '../../services/sort.service';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';

const Catalogue = () => {
  const items = useSelector(getItems());
  const [isFilter, setIsFilter] = useState(false);
  const [sortBy, setSortBy] = useState('');
  let sortedItems = null;

  const changeIsFilter = () => {
    setIsFilter((prevValue) => !prevValue);
  };

  if (items) {
    console.log(items);
    sortedItems = sortItems(sortBy, items);
  }

  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <HeadCatalogBlock />
        <SelectionBlock handlerIsFilter={changeIsFilter} handlerSortBy={setSortBy}/>
        <CardsCatalogBlock
          items={sortedItems}
          isFilter={isFilter}
          handlerIsFilter={changeIsFilter}
        />
      </div>
    </section>
  );
};

export default Catalogue;
