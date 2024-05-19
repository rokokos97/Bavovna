import React from 'react';
import styles from './LogOutBlock.module.scss';
import {userLogOut} from '../../../store/userSlice';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

const LogOutBlock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(userLogOut());
    navigate('/');
  };
  return (
    <>
      <section className={styles.logOutBlock} >
        <p className={styles.logOutBlock__title}>exit</p>
        <p className={styles.logOutBlock__description}>
          Are you sure you want to log out?<br/>
          Logging out will end your current session
          and you may lose any unsaved changes.
        </p>
        <div className={styles.logOutBlock__buttonsBlock}>
          <button className={styles.logOutBlock__buttonStay}>
            <span>Stay Logged In</span>
          </button>
          <button
            onClick={handleLogOut}
            className={styles.logOutBlock__buttonLogOut}>
            <span>log out</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default LogOutBlock;
