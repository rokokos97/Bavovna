import React, {useEffect, useState} from 'react';
import styles from './LoginForm.module.scss';
import {useFormik} from 'formik';
import {Link, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthErrors, login, loginWithGoogle} from '../../store/userSlice';
import GoogleIcon from '../svg/googleIcon/googleIcon';
import {useGoogleLogin} from '@react-oauth/google';
import {validationSchemaLoginForm} from '../../utils/validationSchema';

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
    validationSchema: validationSchemaLoginForm,
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
  return (
    <div className={styles.loginForm}>
      <div className={styles.titleBlock}>
      Sign In
        <span>
            Welcome back! Please enter your details
        </span>
      </div>
      <div>
        {loginError && <div className={styles.loginError}>{loginError}</div>}
      </div>
      <div className={styles.inputsBlock}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.inputs}>
            <label htmlFor="email">
              Email
              <span>*</span>
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
            {formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}
          </div>
          <div className={styles.inputs}>
            <label htmlFor="password">
              Password
              <span>
                *
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
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rememberMe}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className={styles.checkboxBlock}>
            <div className={styles.checkbox}>
              <input
                type='checkbox'
                id="license"
                name="license"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.license}/>
              <label
                htmlFor="license"
              >
                I agree to the terms and conditions of use.
              </label>
            </div>
            {formik.errors.license ? (
              <div className={styles.error}>{formik.errors.license}</div>
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
          <Link
            to='/forgotPassword'
            className={styles.forgotPassword}
          >
            <span>Forgot password?</span>
          </Link>
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
