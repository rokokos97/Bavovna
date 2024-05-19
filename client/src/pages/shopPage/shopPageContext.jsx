import React from 'react';
import HeadShopPageBlock from './HeadShopPageBlock/HeadShopPageBlock';
import SelectionBlock from './selectionBlock/SelectionBlock';
import CardsCatalogBlock from './CardsCatalogBlock/CardsCatalogBlock';
import styles from './shopPage.module.scss';
import BreadcrumbsNavigation from '../../components/breadcrumbsNavigation/BreadcrumbsNavigation';
import useDeviceDetect from '../../utils/useDeviceDetect';
import {useNavigate} from 'react-router-dom';

const ShopPageContext = () => {
  const navigate = useNavigate();
  const isMobile = useDeviceDetect();
  const handleSideNavigationClose = () => {
    if (isMobile) {
      navigate('/');
    }
  };
  const options = [
    {label: '/ Shop', to: ''},

  ];
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <div className={styles.navigation}>
          <BreadcrumbsNavigation options={options} handleSideNavigationClose={handleSideNavigationClose}/>
        </div>
        <HeadShopPageBlock />
        <SelectionBlock />
        <CardsCatalogBlock />
      </div>
    </section>
  );
};

export default ShopPageContext;
