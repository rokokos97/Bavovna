import React from 'react';
// import {useLocation, useNavigate} from 'react-router-dom';
// import queryString from 'query-string';
import HeadCatalogBlock from '../../blocks/HeadCatalogBlock/HeadCatalogBlock';
import SelectionBlock from '../../blocks/SelectionBlock/SelectionBlock';
import CardsCatalogBlock from '../../blocks/CardsCatalogBlock/CardsCatalogBlock';
import styles from './Catalogue.module.scss';
// import {useDataCatalogue} from '../../Providers/CatalogueMasterProvider';

const CatalogueContext = () => {
  // const {handleFilterChange} = useDataCatalogue();
  // const location = useLocation();
  // const query = queryString.parse(location.search);
  // const navigate = useNavigate();
  // console.log('catalogueContext query: ', query);

  // useEffect(() => {
  //   if (Object.keys(query).length > 0) {
  //     const categoryType = Object.keys(query)[0];
  //     const value = query[categoryType];
  //     console.log(categoryType);
  //     console.log(value);
  //     handleFilterChange(categoryType, value);
  //   } else {
  //     navigate('/catalogue');
  //     console.log('navigate');
  //   }
  // }, []);

  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <p className={styles.navigation}>Home / Catalogue</p>
        <HeadCatalogBlock />
        <SelectionBlock />
        <CardsCatalogBlock />
      </div>
    </section>
  );
};

export default CatalogueContext;
