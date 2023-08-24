import React from 'react';
import AboutBlock from '../../blocks/AboutBlock/AboutBlock';
import styles from './AboutUsPage.module.scss';

const AboutUsPage = () => {
  return (
    <section className={styles.aboutUs}>
      <AboutBlock />
      <div className={styles}></div>
      <div className={styles}></div>
    </section>
  );
};

export default AboutUsPage;
