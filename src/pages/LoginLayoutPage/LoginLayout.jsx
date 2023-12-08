import React from 'react';
import styles from './LoginLayout.module.scss';
import {Route, Routes} from 'react-router-dom';
import LoginForm from '../loginFormPage/LoginForm';
import RegisterForm from '../RegisterFormPage/RegisterForm';
import ForgotPasswordForm from '../forgotPasswordPage/ForgotPasswordForm';
import Page404 from '../page404/page404';
import ResetPasswordForm from '../forgotPasswordPage/resetPasswordPage/resetPasswordForm';

const LoginLayout = () => (
  <div className={styles.loginLayout} data-testid="LoginLayout">
    <Routes>
      <Route index element={<LoginForm />} />
      <Route path="signUp" element={<RegisterForm />} />
      <Route path="forgotPassword" element={<ForgotPasswordForm />}/>
      <Route path="resetPassword" element={<ResetPasswordForm />}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
  </div>
);

export default LoginLayout;
