import React from 'react';
import AboutBlock from '../../blocks/AboutBlock/AboutBlock';
import ProposeBlock from '../../blocks/ProposeBlock/ProposeBlock';
import FashionBlock from '../../blocks/FashionBlock/FashionBlock';

import styles from './AboutUsPage.module.scss';

const AboutUsPage = () => {
  return (
    <section className={styles.aboutUs} data-testid='AboutUsPage'>
      <p className={styles.navigation}>Home / About us</p>
      <div className={styles.aboutUsContainer}>
        <AboutBlock />
        <ProposeBlock />
        <FashionBlock />
      </div>
    </section>
  );
};

export default AboutUsPage;
