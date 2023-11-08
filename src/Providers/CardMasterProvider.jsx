import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext(null);

const initialItemData = {
  _id: '',
  itemName: '',
  itemPrice: 0,
  itemColor: '',
  itemSize: '',
  itemImg: '',
  itemQuantity: 1,
};

export const CardMasterProvider = ({children}) => {
  const [itemData, setItemData] = useState(initialItemData);

  const collectData = (data) => {
    const jsonData = {...data};
    console.log(jsonData);
  };

  return (
    <DataContext.Provider value={{itemData, setItemData, collectData}}>
      {children}
    </DataContext.Provider>
  );
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
