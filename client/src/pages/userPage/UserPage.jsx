import React from 'react';
import styles from './UserPage.module.scss';
import { useDispatch } from 'react-redux';
import { verifyUserEmail } from '../../store/userSlice';
import { options } from './user.service';
import SideNavigation from '../../components/sideNavigation/SideNavigation';
const UserPage = () => {
  const dispatch = useDispatch();
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('email') && urlParams.has('token')) {
    const email = urlParams.get('email');
    const token = urlParams.get('token');
    dispatch(verifyUserEmail({ token, email }));
  }
  const navOptions = [{ label: '/ my account', to: '' }];
  return (
    <section className={styles.userPage} data-testid="UserPage">
      <SideNavigation options={options} navOptions={navOptions} />
    </section>
  );
};
export default UserPage;
