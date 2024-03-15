import React from 'react';
import {ShopPageMasterProvider} from '../../providers/ShopPageMasterProvider';
import ShopPageContext from './shopPageContext';
import Loader from '../../components/Loader/Loader';
import {useSelector} from 'react-redux';
import {getItemsLoadingStatus} from '../../store/itemsSlice';

const ShopPage = () => {
  const isItemsLoading = useSelector(getItemsLoadingStatus);
  return (
    <ShopPageMasterProvider>
      {isItemsLoading && <Loader />}
      <ShopPageContext />
    </ShopPageMasterProvider>
  );
};

export default ShopPage;
