import React from 'react';
import styles from './LoginLayout.module.scss';
import {Navigate, Route, Routes} from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

const LoginLayout = () => (
  <div className={styles.loginLayout} data-testid="LoginLayout">
    <Routes>
      <Route index element={<LoginForm />} />
      <Route path="signUp" element={<RegisterForm/>} />
      <Route path="*" element={<Navigate to="/login/"/>}/>
    </Routes>
  </div>
);

export default LoginLayout;
