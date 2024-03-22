import React from 'react';
import styles from './UserPage.module.scss';
import SideNavigation from './sideNavigation/SideNavigation';
import {useDispatch} from 'react-redux';
import {verifyUserEmail} from '../../store/userSlice';


const UserPage = () => {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  if ( urlParams.has('email') && urlParams.has('token') ) {
    const email = urlParams.get('email');
    const token = urlParams.get('token');
    dispatch(verifyUserEmail({token, email}));
  }
  return (
    <section className={styles.userPage} data-testid="UserPage">
      <SideNavigation/>
    </section>
  );
};
export default UserPage;
