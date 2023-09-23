import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext(null);

export const CardMasterProvider = ({children}) => {
  // const [itemPrice, setItemPrice] = useState('');
  // const [itemColor, setItemColor] = useState('');
  // const [itemSize, setItemSize] = useState('');
  // const [itemImg, setItemImg] = useState('');
  // const [quantity, setQuantity] = useState(1);

  const [itemData, setItemData] = useState({
    itemName: '',
    itemPrice: '',
    itemColor: null,
    itemSize: '',
    itemImg: '',
    itemQuantity: 1,
  });

  // eslint-disable-next-line no-unused-vars
  const collectData = () => {
    const jsonData = {...itemData};
    console.log(jsonData);
  };

  return (
    <DataContext.Provider value={{itemData, setItemData, collectData}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const data = useContext(DataContext);
  if (!data) {
    throw new Error('Can not "useData" outside of the "CardMasterProvider"');
  }
  return data;
};

CardMasterProvider.propTypes = {
  children: PropTypes.element,
};
