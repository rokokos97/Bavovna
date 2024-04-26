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
        <p>
            Welcome back! Please enter your details
        </p>
      </section>
      <LoginFormBlock/>
      <p className={styles.toRegisterForm}>
        Don’t have an account?&nbsp;
        <NavLink
          to="signUp"
          title='go to sign up page'
          aria-label='go to sign up page'
          className={styles.toSignUpLink}
        >
          <span>Sign up</span>
        </NavLink>
      </p>
    </article>
  );
};
export default LoginForm;
