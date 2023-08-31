import React, {useEffect} from 'react';
import styles from './LoginForm.module.scss';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import AppleIcon from '../svg/appleIcon/appleIcon';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthErrors, getUser, login} from '../../store/userSlice';
import jwtDecode from 'jwt-decode';
import config from '../../config.json';


const LoginForm = () => {
  const user = useSelector(getUser());
  const loginError = useSelector(getAuthErrors());
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
          .required('Password is required'),
      email: Yup.string()
          .matches( /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Email format is not valid')
          .required('Email is required'),
    }),
    onSubmit: (values) => {
      if (!isValid) return;
      console.log(JSON.stringify(values, null, 2));
      const redirect = '/';
      dispatch(login({payload: values, redirect}));
    },
  });
  const isValid = Object.keys(formik.errors).length === 0;
  const handleCallbackResponse = (response) => {
    const userInfo = jwtDecode(response.credential);
    const googleUser = {
      email: userInfo.email,
      name: userInfo.name,
      sub: userInfo.sub,
    };
    dispatch(login({payload: googleUser}));
  };
  useEffect(() => {
    /* google global */
    google.accounts.id.initialize({
      client_id: config.googleClientId,
      callback: handleCallbackResponse,
    });
    window.google.accounts.id.renderButton(document.getElementById('signUpDiv'), {
      theme: 'online',
      width: '400px',
      locale: 'en',
      border_radius: 0,
    });
  }, []);
  return (
    <div className={styles.loginForm}>
      <div className={styles.titleBlock}>
      Sign In
        <span>
            Welcome back! Please enter your details
        </span>
      </div>
      {loginError && <div className={styles.registerError}><span>{loginError}</span></div> }
      {user && <div className={styles.conformationBlock}>
        <span>
          You are logged in
        </span>
      </div>}
      <div className={styles.inputsBlock}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="email">
              <span>
                  Email *
              </span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
          </div>
          <div className={styles.input}>
            <label htmlFor="password">
              <span>
                  Password *
              </span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}
          </div>
          <button
            className={styles.button}
          >
            <span>
                Sign In
            </span>
          </button>
        </form>
        <div className={styles.socialButtonsBlock}>
          <div className={styles.divider}>
            <div></div>
            <span>or</span>
            <div></div>
          </div>
          <div
            id='signUpDiv'>
          </div>
          <div className={styles.socialButton}>
            <AppleIcon />
            <span>Sign in with Apple</span>
          </div>
        </div>
      </div>
      <p>
        Don’t have an account?{'  '}
        <NavLink to="signUp"
          role="button"
        >
          {' '}
          <span>Sign Up</span>
        </NavLink>
      </p>
    </div>
  );
};

export default LoginForm;
