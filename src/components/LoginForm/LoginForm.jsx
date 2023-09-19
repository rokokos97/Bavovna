import React, {useEffect, useState} from 'react';
import styles from './LoginForm.module.scss';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthErrors, login, loginWithGoogle} from '../../store/userSlice';
import GoogleIcon from '../svg/googleIcon/googleIcon';
import {useGoogleLogin} from '@react-oauth/google';

const LoginForm = () => {
  const [loginError, setLoginError] = useState(null);
  const authError = useSelector(getAuthErrors());
  useEffect(()=> {
    setLoginError(authError);
  }, [authError]);
  const fetchUserData = async (accessToken) => {
    const endpoint = 'https://www.googleapis.com/oauth2/v2/userinfo';
    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const data = await response.json();
      console.log(data); // тут ви побачите дані користувача
      return data;
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };
  const googleLogin = useGoogleLogin(
      {
        onSuccess: (tokenResponse) => {
          const accessToken = tokenResponse.access_token;
          fetchUserData(accessToken).then((userInfo) => dispatch(loginWithGoogle(userInfo)));
        },
      },
  );
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
      setLoginError(authError);
      console.log(JSON.stringify(values, null, 2));
      const redirect = '/';
      dispatch(login({payload: values, redirect}));
    },
  });
  useEffect(()=>{
    setLoginError(null);
  }, [formik.values]);
  const isValid = Object.keys(formik.errors).length === 0;
  console.log(formik);
  return (
    <div className={styles.loginForm}>
      <div className={styles.titleBlock}>
      Sign In
        <span>
            Welcome back! Please enter your details
        </span>
      </div>
      <div>
        {loginError && <div className={styles.registerError}>{loginError}</div>}
      </div>
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
              placeholder="example@ex.com"
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
              placeholder="**********"
              autoComplete='off'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}
          </div>
          <button
            disabled={!isValid}
            type='submit'
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
          <div className={styles.googleButton}>
            <div
              id='signUpDiv'>
            </div>
            <button
              onClick={()=> googleLogin()}
            >
              <GoogleIcon />
              <span>
                Sign in with Google
              </span>
            </button>
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
