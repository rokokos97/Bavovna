import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext(null);

const initialItemData = {
  _id: '',
  itemName: '',
  itemPrice: 0,
  discountPrice: 0,
  itemColor: '',
  itemSize: '',
  itemImg: '',
  itemQuantity: 1,
};

export const CardMasterProvider = ({ children }) => {
  const [itemData, setItemData] = useState(initialItemData);

  return <DataContext.Provider value={{ itemData, setItemData }}>{children}</DataContext.Provider>;
};

export const useDataCard = () => {
  const data = useContext(DataContext);
  if (!data) {
    throw new Error('Can not "useData" outside of the "CardMasterProvider"');
  }
  return data;
};

CardMasterProvider.propTypes = {
  children: PropTypes.element,
};
