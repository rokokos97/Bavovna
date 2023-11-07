import React from 'react';
import styles from './userPage.module.scss';
import SideNavigation from '../../components/sideNavigation/sideNavigation';
import {useDispatch} from 'react-redux';
import {verifyEmail} from '../../store/userSlice';


const UserPage = () => {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  if ( urlParams.has('email') && urlParams.has('token') ) {
    const email = urlParams.get('email');
    const token = urlParams.get('token');
    dispatch(verifyEmail(token, email));
  }
  return (
    <div className={styles.userPage} data-testid="UserPage">
      <SideNavigation/>
    </div>
  );
};
export default UserPage;
