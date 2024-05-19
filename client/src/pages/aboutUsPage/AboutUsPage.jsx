import React from 'react';
import AboutBlock from './AboutBlock/AboutBlock';
import ProposeBlock from './ProposeBlock/ProposeBlock';
import FashionBlock from './FashionBlock/FashionBlock';

import styles from './AboutUsPage.module.scss';
import BreadcrumbsNavigation from '../../components/breadcrumbsNavigation/BreadcrumbsNavigation';
import {useNavigate} from 'react-router-dom';
import useDeviceDetect from '../../utils/useDeviceDetect';

const AboutUsPage = () => {
  const navigate = useNavigate();
  const isMobile = useDeviceDetect();
  const handleSideNavigationClose = () => {
    if (isMobile) {
      navigate('/');
    }
  };
  const options = [
    {label: '/ About us', to: ''},
  ];
  return (
    <section className={styles.aboutUs} data-testid='AboutUsPage'>
      <div className={styles.navigation}>
        <BreadcrumbsNavigation options={options} handleSideNavigationClose={handleSideNavigationClose}/>
      </div>
      <div className={styles.aboutUsContainer}>
        <AboutBlock />
        <ProposeBlock />
        <FashionBlock />
      </div>
    </section>
  );
};

export default AboutUsPage;
