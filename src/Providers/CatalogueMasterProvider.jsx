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
  console.log('Selected filters: ', selectedFilters);

  useEffect(() => {
    setFilteredItems(items);
    setSelectedFilters(initialFilters);
  }, [items]);

  const changeIsFilter = () => {
    setIsFilter((prevValue) => !prevValue);
  };

  const onSortItems = (sortOrder) => {
    let sortedItems = [];
    if (sortOrder === 'lowToHigh') {
      sortedItems = [...items];
      sortedItems.sort((a, b) => a.price - b.price);
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'highToLow') {
      sortedItems = [...items];
      sortedItems.sort((a, b) => b.price - a.price);
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

  const handleFilterChange = (categoryType, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [categoryType]: prevFilters[categoryType].includes(value) ?
        prevFilters[categoryType].filter((item) => item !== value) :
        [...prevFilters[categoryType], value],
    }));
  };

  useEffect(()=>{
    const newItems = items.filter((item) => {
      return (
        selectedFilters.category.length === 0 || selectedFilters.category
            .some((category) => item.category.includes(category))
      ) && (
        selectedFilters.size.length === 0 || selectedFilters.size.some((size) => item.size.includes(size))
      ) && (
        selectedFilters.color.length === 0 || selectedFilters.color.some((color) => item.color.includes(color))
      );
    });
    console.log('newItems: ', newItems);
    setFilteredItems(newItems);
  }, [selectedFilters]);

  return (
    <DataCatalogueContext.Provider
      value={{
        isFilter,
        filteredItems,
        changeIsFilter,
        onSortItems,
        handleFilterChange,
      }}
    >
      {children}
    </DataCatalogueContext.Provider>
  );
};

export const useDataCatalogue = () => {
  const data = useContext(DataCatalogueContext);
  if (!data) {
    throw new Error(
        'Can not "useData" outside of the "CatalogueMasterProvider"',
    );
  }
  return data;
};

CatalogueMasterProvider.propTypes = {
  children: PropTypes.element,
};
