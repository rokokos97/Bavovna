import React from 'react';
import styles from './userPage.module.scss';
import SideNavigation from '../../components/sideNavigation/sideNavigation';


const UserPage = () => {
  return (
    <div className={styles.userPage} data-testid="UserPage">
      <SideNavigation/>
    </div>
  );
};
export default UserPage;
