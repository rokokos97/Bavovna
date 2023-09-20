import React, {useEffect, useState} from 'react';
import styles from './LoginForm.module.scss';
// Імпорт бібліотек і компонентів необхідних для форми
import {useFormik} from 'formik';
import {Link, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthErrors, login, loginWithGoogle} from '../../store/userSlice';
import GoogleIcon from '../svg/googleIcon/googleIcon';
import {useGoogleLogin} from '@react-oauth/google';
import {validationSchemaLoginForm} from '../../utils/validationSchema';
import googleService from '../../services/google.service';
import TextField from '../formFields/textField/textField';

const LoginForm = () => {
  // Використання Redux hooks для диспетчеризації дій і отримання даних зі store
  const dispatch = useDispatch();
  const authError = useSelector(getAuthErrors());
  // Використання стану для відображення помилок сервера при вході в систему
  const [loginError, setLoginError] = useState(null);

  // Ініціалізація форми за допомогою Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLoginForm,
    onSubmit: (values) => {
      if (!isFormValid) return;
      setLoginError(authError);
      console.log(JSON.stringify(values, null, 2));
      const redirect = '/';
      dispatch(login({payload: values, redirect}));
    },
  });

  // Інтеграція Google OAuth
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      googleService.get(accessToken).then((userInfo) => dispatch(loginWithGoogle(userInfo)));
    },
  });
  // Перевірка на наявність помилок у формі
  const isFormValid = Object.keys(formik.errors).length === 0;
  // Встановлення помилок аутентифікації
  useEffect(() => {
    setLoginError(authError);
  }, [authError]);

  // Очищення помилок входу в систему при зміні значень форми
  useEffect(() => {
    setLoginError(null);
  }, [formik.values]);

  // Рендер компоненту форми входу
  return (
    <div className={styles.loginForm}>
      <div className={styles.titleBlock}>
      Sign In
        <span>
            Welcome back! Please enter your details
        </span>
      </div>
      <div>
        {loginError &&
          <div className={styles.loginError}>
            <span>
              {loginError}
            </span>
          </div>
        }
      </div>
      <div className={styles.inputsBlock}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <TextField
            label='Email'
            name='email'
            placeholder={'example@ex.com'}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
          />
          <TextField
            type='password'
            label='Password'
            name='password'
            placeholder='**********'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
          />
          <div className={styles.checkbox}>
            <input
              type='checkbox'
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // value={formik.values.rememberMe}
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
            {formik.errors?.license ? (
              <div className={styles.error}>{formik.errors.license}</div>
            ) : null}
          </div>
          <button
            disabled={!isFormValid}
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
