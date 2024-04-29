import React, {Suspense} from 'react';
import styles from './LoginLayout.module.scss';
import {Route, Routes} from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
const LoginForm = React.lazy(()=> import('./LoginFormPage/LoginForm'));
const RegisterForm = React.lazy(()=> import('./RegisterFormPage/RegisterForm'));
const RecoveryPasswordForm = React.lazy(()=> import('./recoveryPasswordPage/RecoveryPasswordForm'));
const ResetPasswordForm = React.lazy(()=> import('./recoveryPasswordPage/ResetPasswordPage/ResetPasswordForm'));
const Page404 = React.lazy(()=> import('../Page404/Page404'));
const LoginLayout = () => (
  <section className={styles.loginLayout} data-testid="LoginLayout">
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="signUp" element={<RegisterForm />} />
        <Route path="recoveryPassword" element={<RecoveryPasswordForm />}/>
        <Route path="resetPassword" element={<ResetPasswordForm />}/>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </Suspense>
  </section>
);

export default LoginLayout;
