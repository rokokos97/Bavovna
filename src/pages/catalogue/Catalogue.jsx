import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../../store/itemsSlice';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';
import {useEffect} from 'react';

const Catalogue = () => {
  const items = useSelector(getItems());
  const [isFilter, setIsFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  console.log(filteredItems);

  const changeIsFilter = () => {
    setIsFilter((prevValue) => !prevValue);
  };

  const onSortItems = (sortOrder) => {
    let sortedItems = [];
    if (sortOrder === 'lowToHigh') {
      sortedItems = [...items].sort((a, b) => (a.price - b.price));
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'highToLow') {
      sortedItems = [...items].sort((a, b) => (b.price - a.price));
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'best') {
      sortedItems = [...items].filter((item) => item.status === 'sale');
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'new') {
      sortedItems = [...items].filter((item) => item.status === 'new');
      setFilteredItems(sortedItems);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <HeadCatalogBlock />
        <SelectionBlock handlerIsFilter={changeIsFilter} handlerSortBy={onSortItems}/>
        <CardsCatalogBlock
          items={filteredItems}
          isFilter={isFilter}
          handlerIsFilter={changeIsFilter}
        />
      </div>
    </section>
  );
};

export default Catalogue;
