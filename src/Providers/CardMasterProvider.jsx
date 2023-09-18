import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext(undefined);

export const CardMasterProvider = ({children}) => {
  const [price, setPrice] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const collectData = () => {
    const jsonData = {
      price: price,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
    };
    console.log(jsonData);
  };

  return (
    <DataContext.Provider
      value={{
        price,
        setPrice,
        selectedColor,
        setSelectedColor,
        selectedSize,
        setSelectedSize,
        quantity,
        setQuantity,
        collectData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

CardMasterProvider.propTypes = {
  children: PropTypes.element,
};
