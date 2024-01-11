import React, {createContext, useContext, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../store/itemsSlice';
import {getCategories} from '../store/categorySlice';
import {getColors} from '../store/colorsSlice';

import {useLocation, useNavigate} from 'react-router-dom';
import queryString from 'query-string';

import PropTypes from 'prop-types';

const DataCatalogueContext = createContext(null);

const STATUS_KEYS = ['new', 'sale'];
const INITIAL_FILTERS = {
  category: [],
  size: [],
  color: [],
  availability: [],
  status: [],
};

export const CatalogueMasterProvider = ({children}) => {
  const items = useSelector(getItems());
  // console.log('items: ', items);
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const categories = useSelector(getCategories());
  const colors = useSelector(getColors());
  const [isFilter, setIsFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  // console.log(filteredItems);
  const [selectedFilters, setSelectedFilters] = useState(INITIAL_FILTERS);
  const [statusKey, setStatusKey] = useState(query.status);
  // console.log('statusKey: ', statusKey);
  // const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  const changeIsFilter = () => {
    setIsFilter((prevValue) => !prevValue);
  };

  const onSortItems = (sortOrder) => {
    let sortedItems = [];
    if (sortOrder === 'lowToHigh') {
      sortedItems = [...filteredItems];
      sortedItems.sort((a, b) => a.price - b.price);
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'highToLow') {
      sortedItems = [...filteredItems];
      sortedItems.sort((a, b) => b.price - a.price);
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'best') {
      sortedItems = filteredItems.filter((item) => item.status === 'sale');
      setFilteredItems(sortedItems);
    }
    if (sortOrder === 'new') {
      sortedItems = filteredItems.filter((item) => item.status === 'new');
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
    setSelectedFilters(INITIAL_FILTERS);
  };

  useEffect(() => {
    if (items) {
      const newItems = [...items].filter((item) => {
        return (
          (selectedFilters.category.length === 0 ||
          selectedFilters.category.some((category) =>
            item.category.includes(category),
          )) &&
        (selectedFilters.size.length === 0 ||
          selectedFilters.size.some((size) => item.size.includes(size))) &&
        (selectedFilters.color.length === 0 ||
          selectedFilters.color.some((color) => item.color.includes(color))) &&
        (selectedFilters.status.length === 0 ||
          selectedFilters.status.some((status) => item.status.includes(status)))
        );
      });
      setFilteredItems(newItems);
    }
  }, [selectedFilters, items]);

  useEffect(() => {
    if (!STATUS_KEYS.includes(statusKey) || query.status === undefined) {
      navigate('.');
      setStatusKey(undefined);
      setFilteredItems(items);
    } else {
      setFilteredItems((prevItems) => {
        return prevItems.filter((item) => item.status === statusKey);
      });
      // setStatusKey(query.status);
    }
  }, [statusKey, navigate]);

  return (
    <DataCatalogueContext.Provider
      value={{
        isFilter,
        filteredItems,
        categories,
        colors,
        selectedFilters,
        setSelectedFilters,
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
