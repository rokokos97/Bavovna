import React from 'react';
import {ShopPageMasterProvider} from '../../Providers/ShopPageMasterProvider';
import ShopPageContext from './shopPageContext';
import Loader from '../../components/loader/loader';
import {useSelector} from 'react-redux';
import {getItemsLoadingStatus} from '../../store/itemsSlice';

const ShopPage = () => {
  const isItemsLoading = useSelector(getItemsLoadingStatus());
  return (
    <ShopPageMasterProvider>
      {isItemsLoading && <Loader />}
      <ShopPageContext />
    </ShopPageMasterProvider>
  );
};

export default ShopPage;
