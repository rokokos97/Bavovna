import React from 'react';
import styles from './UserPage.module.scss';
import SideNavigation from './sideNavigation/SideNavigation';
import {useDispatch} from 'react-redux';
import {verifyUserEmail} from '../../store/userSlice';
import {Link} from 'react-router-dom';
import ChevronUp from '../../components/svg/ChevronUp/ChevronUp';


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
      <nav
        className={styles.userPage__navigation}>
        <Link
          className={styles.userPage__navigationHome}
          to={'/'}>
          <ChevronUp/>
           Home&nbsp;
        </Link>
        <Link
          li className={styles.userPage__navigationAccount}
          to={''}>
            / My account
        </Link>
      </nav>
      <SideNavigation/>
    </section>
  );
};
export default UserPage;
