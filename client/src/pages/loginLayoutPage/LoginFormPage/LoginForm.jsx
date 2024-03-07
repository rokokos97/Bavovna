import React from 'react';
import styles from './LoginForm.module.scss';
import {NavLink} from 'react-router-dom';
import LoginFormBlock from '../../../components/form/formBlocks/LoginFormBlock/LoginFormBlock';
const LoginForm = () => {
  return (
    <article className={styles.loginForm}>
      <section className={styles.loginForm__titleBlock}>
        <p>
          Sign In
        </p>
        <span>
            Welcome back! Please enter your details
        </span>
      </section>
      <LoginFormBlock/>
      <p className={styles.toRegisterForm}>
        Don’t have an account?
        <NavLink
          to="signUp"
          aria-label='go to sign up page'
          role="button"
        >
          <span>&nbsp;Sign up</span>
        </NavLink>
      </p>
    </article>
  );
};
export default LoginForm;
