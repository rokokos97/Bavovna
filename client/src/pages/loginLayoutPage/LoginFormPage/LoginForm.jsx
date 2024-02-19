import React from 'react';
import styles from './LoginForm.module.scss';
import {NavLink} from 'react-router-dom';
import LoginFormBlock from '../../../components/form/formBlocks/LoginFormBlock/LoginFormBlock';
const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.titleBlock}>
        <p>
          Sign In
        </p>
        <span>
            Welcome back! Please enter your details
        </span>
      </div>
      <LoginFormBlock/>
      <p>
        Don’t have an account?{'  '}
        <NavLink
          to="signUp"
          role="button"
        >
          {' '}
          <span>Sign up</span>
        </NavLink>
      </p>
    </div>
  );
};
export default LoginForm;
