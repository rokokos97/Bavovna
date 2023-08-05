import React from 'react';
import styles from './LoginForm.module.scss';

// import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const LoginForm = () => (
  <div className={styles.loginForm} data-testid="LoginForm">
    <div className={styles.card}>
      <h2>Login Form</h2>
    </div>
  </div>
);

export default LoginForm;
