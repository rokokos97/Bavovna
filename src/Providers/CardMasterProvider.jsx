import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext(null);

export const CardMasterProvider = ({children}) => {
  const [itemData, setItemData] = useState({
    itemName: '',
    itemPrice: '',
    itemColor: null,
    itemSize: '',
    itemImg: '',
    itemQuantity: 1,
  });

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
