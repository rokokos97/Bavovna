import React from 'react';
import {CatalogueMasterProvider} from '../../Providers/CatalogueMasterProvider';
import CatalogueContext from './CatalogueContext';

const Catalogue = () => {
  return (
    <CatalogueMasterProvider>
      <CatalogueContext />
    </CatalogueMasterProvider>
  );
};

export default Catalogue;
