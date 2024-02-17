import React from 'react';
import styles from './LoginLayout.module.scss';
import {Route, Routes} from 'react-router-dom';
import LoginForm from './LoginFormPage/LoginForm';
import RegisterForm from './RegisterFormPage/RegisterForm';
import RecoveryPasswordForm from './recoveryPasswordPage/RecoveryPasswordForm';
import Page404 from '../Page404/Page404';
import ResetPasswordForm from './recoveryPasswordPage/ResetPasswordPage/ResetPasswordForm';

const LoginLayout = () => (
  <div className={styles.loginLayout} data-testid="LoginLayout">
    <Routes>
      <Route index element={<LoginForm />} />
      <Route path="signUp" element={<RegisterForm />} />
      <Route path="recoveryPassword" element={<RecoveryPasswordForm />}/>
      <Route path="resetPassword" element={<ResetPasswordForm />}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  </div>
);

export default LoginLayout;
