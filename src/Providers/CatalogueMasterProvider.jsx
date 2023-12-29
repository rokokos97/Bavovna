import React, {createContext, useContext, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../store/itemsSlice';
import {getCategories} from '../store/categorySlice';
import {getColors} from '../store/colorsSlice';

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
  const categories = useSelector(getCategories());
  const colors = useSelector(getColors());
  const [isFilter, setIsFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  console.log('selectedFilters: ', selectedFilters);
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

  const handleCleanFilter = () => {
    setSelectedFilters(initialFilters);
    filterCheckboxes.forEach((checkbox) => console.log(checkbox.checked));
  };

  let downloadedItems = [];

  if (items) {
    downloadedItems = [...items];
    console.log('downloadedItems: ', downloadedItems);
  }
  useEffect(() => {
    const newItems = downloadedItems.filter((item) => {
      return (
        (selectedFilters.category.length === 0 ||
          selectedFilters.category.some((category) =>
            item.category.includes(category),
          )) &&
        (selectedFilters.size.length === 0 ||
          selectedFilters.size.some((size) => item.size.includes(size))) &&
        (selectedFilters.color.length === 0 ||
          selectedFilters.color.some((color) => item.color.includes(color)))
      );
    });
    setFilteredItems(newItems);
  }, [selectedFilters, items]);

  return (
    <DataCatalogueContext.Provider
      value={{
        isFilter,
        filteredItems,
        categories,
        colors,
        changeIsFilter,
        onSortItems,
        handleFilterChange,
        handleCleanFilter,
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
