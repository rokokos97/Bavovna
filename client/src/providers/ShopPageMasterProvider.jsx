import React, {createContext, useContext, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getItems} from '../store/itemsSlice';
import {getCategories} from '../store/categorySlice';
import {getColors} from '../store/colorsSlice';
import {useLocation, useNavigate} from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';

const DataCatalogueContext = createContext(null);

const INITIAL_FILTERS = {
  category: [],
  size: [],
  color: [],
  availability: [],
  status: [],
};

export const ShopPageMasterProvider = ({children}) => {
  const items = useSelector(getItems());
  const location = useLocation();
  const query = queryString.parse(location.search);
  const navigate = useNavigate();
  const categories = useSelector(getCategories());
  const colors = useSelector(getColors());
  const [isFilter, setIsFilter] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState(INITIAL_FILTERS);
  const [statusKey, setStatusKey] = useState(query.status);
  const [isDiscountVisible, setIsDiscountVisible] = useState(false);

  useEffect(()=>{
    if (items) setFilteredItems([...items]);
  }, [items]);

  const changeIsFilter = () => {
    setIsFilter((prevValue) => !prevValue);
  };

  const onSortItems = (sortOrder) => {
    if (filteredItems && sortOrder === 'lowToHigh') {
      setFilteredItems(items.toSorted((a, b) => a.price - b.price));
    }
    if (filteredItems && sortOrder === 'highToLow') {
      setFilteredItems(items.toSorted((a, b) => b.price - a.price));
    }
    if (filteredItems && sortOrder === 'best') {
      setFilteredItems(items.filter((item) => item.status === 'sold-out'));
    }
    if (filteredItems && sortOrder === 'new') {
      setFilteredItems(items.filter((item) => item.status === 'new'));
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
    setFilteredItems(items);
  };

  useEffect(() => {
    setStatusKey(query.status);
  }, [statusKey, query]);

  useEffect(() => {
    if (statusKey === undefined) {
      navigate('.');
      setFilteredItems(items);
      setIsFilter(false);
      setIsDiscountVisible(false);
    } else if (items && statusKey) {
      if (statusKey === 'sale_10%') {
        setFilteredItems(() => items.filter((item) => item.sale === 10));
      } else if (
        statusKey === 'sale' ||
        statusKey === 'new' ||
        statusKey === 'sold-out'
      ) {
        setFilteredItems(() =>
          items.filter((item) => item.status === statusKey),
        );
        setIsDiscountVisible(false);
      } else {
        setFilteredItems(() =>
          items.filter((item) => item.category === statusKey),
        );
        setIsDiscountVisible(false);
      }
      setIsFilter(false);
    }
  }, [statusKey, navigate]);

  useEffect(() => {
    if (items && isFilter) {
      setFilteredItems(items.filter((item) => {
        return (
          (selectedFilters.category.length === 0 ||
            selectedFilters.category.some((category) =>
              item.category.includes(category),
            )) &&
          (selectedFilters.size.length === 0 ||
            selectedFilters.size.some((size) => item.size.includes(size))) &&
          (selectedFilters.color.length === 0 ||
            selectedFilters.color.some((color) =>
              item.color.includes(color),
            )) &&
          (selectedFilters.status.length === 0 ||
            selectedFilters.status.some((status) =>
              item.status.includes(status),
            ))
        );
      }));
      setStatusKey(undefined);
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
        setStatusKey,
        changeIsFilter,
        onSortItems,
        handleFilterChange,
        handleCleanFilter,
        isDiscountVisible,
        setIsDiscountVisible,
      }}
    >
      {children}
    </DataCatalogueContext.Provider>
  );
};

export const useDataShopPage = () => {
  const data = useContext(DataCatalogueContext);
  if (!data) {
    throw new Error(
        'Can not "useData" outside of the "ShopPageMasterProvider"',
    );
  }
  return data;
};

ShopPageMasterProvider.propTypes = {
  children: PropTypes.array,
};
