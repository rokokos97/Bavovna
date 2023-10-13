import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../../store/itemsSlice';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';

const Catalogue = () => {
  const items = useSelector(getItems());
  const [isFilter, setIsFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    size: [],
    color: [],
    availability: [],
    // new: false,
    // discount: false,
  });

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const changeIsFilter = () => {
    setIsFilter((prevValue) => !prevValue);
  };

  const onSortItems = (sortOrder) => {
    let sortedItems = [];
    if (sortOrder === 'lowToHigh') {
      sortedItems = items.sort((a, b) => (a.price - b.price));
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'highToLow') {
      sortedItems = items.sort((a, b) => (b.price - a.price));
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'best') {
      sortedItems = items.filter((item) => item.status === 'sale');
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'new') {
      sortedItems = items.filter((item) => item.status === 'new');
      setFilteredItems(sortedItems);
    }
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value) ?
        prevFilters[category].filter((item) => item !== value) :
        [...prevFilters[category], value],
    }));
    console.log(selectedFilters);
  };

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
        <SelectionBlock handlerIsFilter={changeIsFilter} handlerSortBy={onSortItems}/>
        <CardsCatalogBlock
          items={filteredItems}
          isFilter={isFilter}
          handlerIsFilter={changeIsFilter}
          handleFilterChange={handleFilterChange}
        />
      </div>
    </section>
  );
};

export default Catalogue;
