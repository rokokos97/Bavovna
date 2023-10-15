import React, {createContext, useContext, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../store/itemsSlice';
import PropTypes from 'prop-types';

const DataCatalogueContext = createContext(null);

export const CatalogueMasterProvider = ({children}) => {
  const items = useSelector(getItems());
  const [isFilter, setIsFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
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
      sortedItems = [...items];
      sortedItems.sort((a, b) => (a.price - b.price));
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'highToLow') {
      sortedItems = [...items];
      sortedItems.sort((a, b) => (b.price - a.price));
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

  return (
    <DataCatalogueContext.Provider value={{isFilter, filteredItems, changeIsFilter, onSortItems, handleFilterChange}}>
      {children}
    </DataCatalogueContext.Provider>
  );
};

export const useDataCatalogue = () => {
  const data = useContext(DataCatalogueContext);
  if (!data) {
    throw new Error('Can not "useData" outside of the "CatalogueMasterProvider"');
  }
  return data;
};

CatalogueMasterProvider.propTypes = {
  children: PropTypes.element,
};
