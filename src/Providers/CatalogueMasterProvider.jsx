import React, {createContext, useContext, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../store/itemsSlice';
import PropTypes from 'prop-types';

const DataCatalogueContext = createContext(null);

export const CatalogueMasterProvider = ({children}) => {
  const initialFilters = {
    category: [],
    size: [],
    color: [],
    availability: [],
    // new: false,
    // discount: false,
  };
  const items = useSelector(getItems());
  const [isFilter, setIsFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);


  useEffect(() => {
    setFilteredItems(items);
    setSelectedFilters(initialFilters);
    console.log(items);
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
  };


  useEffect(() => {
    filteredItems.filter((item) => {
      return Object.keys(selectedFilters).every((categories) => {
        if (selectedFilters[categories].length === 0) {
          return true;
        }
        return selectedFilters[categories].includes(item[categories]);
      });
    });
    console.log('selectedFilters: ', selectedFilters);
  }, [selectedFilters]);

  // useEffect(()=>{
  //   setFilteredItems(
  //       filteredItems.filter((item) => {
  //         if (selectedFilters.category && item.category !== selectedFilters.category) {
  //           return false;
  //         }
  //         if (selectedFilters.size.length > 0 && !selectedFilters.size.includes(item.size)) {
  //           return false;
  //         }
  //         if (selectedFilters.color.length > 0 && !selectedFilters.color.includes(item.color)) {
  //           return false;
  //         }
  //         return true;
  //       }),
  //   );
  // }, [selectedFilters]);


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
