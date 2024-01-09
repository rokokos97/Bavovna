import React, {createContext, useContext, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../store/itemsSlice';
import {getCategories} from '../store/categorySlice';
import {getColors} from '../store/colorsSlice';

import {useLocation, useNavigate} from 'react-router-dom';
import queryString from 'query-string';

import PropTypes from 'prop-types';

const DataCatalogueContext = createContext(null);
// const FILTER_KEYS = ['new', 'sale'];

export const CatalogueMasterProvider = ({children}) => {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  console.log('CatalogueMasterProvider query: ', Object.keys(query)[0]);
  const initialFilters = {
    category: [],
    size: [],
    color: [],
    availability: [],
    status: [],
  };
  const items = useSelector(getItems());
  const categories = useSelector(getCategories());
  const colors = useSelector(getColors());
  const [isFilter, setIsFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  // console.log('selectedFilters: ', selectedFilters);
  // console.log('items: ', items);
  // console.log('categories: ', categories);
  // console.log('colors: ', colors);
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

  useEffect(() => {
    if (Object.keys(query).length > 0) {
      const categoryType = Object.keys(query)[0];
      const value = query[categoryType];
      handleFilterChange(categoryType, value);
    } else {
      navigate('/catalogue');
    }
  }, []);

  const handleCleanFilter = () => {
    setSelectedFilters(initialFilters);
    filterCheckboxes.forEach((checkbox) => console.log(checkbox.checked));
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
