import React from 'react';
import {ShopPageMasterProvider} from '../../Providers/ShopPageMasterProvider';
import ShopPageContext from './shopPageContext';

const ShopPage = () => {
  return (
    <ShopPageMasterProvider>
      <ShopPageContext />
    </ShopPageMasterProvider>
  );
};

export default ShopPage;
