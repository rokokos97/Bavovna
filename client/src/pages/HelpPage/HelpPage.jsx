import React from 'react';
import styles from './HelpPage.module.scss';
import {helps} from './helps.service';
import SideNavigation from '../../components/sideNavigation/SideNavigation';


const HelpPage = () => {
  const navOptions = [
    {label: '/ help', to: 'help'},
  ];
  console.log(helps);
  return (
    <section className={styles.helpPage}>
      <SideNavigation options={helps} navOptions={navOptions}/>
    </section>

  );
};

export default HelpPage;
