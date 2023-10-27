import React, {useEffect, useState} from 'react';
import styles from './LoginForm.module.scss';
import {useFormik} from 'formik';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthErrors, getIsLoggedIn, login, loginWithGoogle} from '../../store/userSlice';
import GoogleIcon from '../svg/googleIcon/googleIcon';
import {useGoogleLogin} from '@react-oauth/google';
import {validationSchemaLoginForm} from '../../utils/validationSchema';
import googleService from '../../services/google.service';
import TextField from '../formFields/textField/textField';
import CheckboxField from '../formFields/checkboxField/checkboxField';

const LoginForm = () => {
  // Використання Redux hooks для диспетчеризації дій і отримання даних зі store
  const dispatch = useDispatch();
  const authError = useSelector(getAuthErrors());
  // Використання стану для відображення помилок сервера при вході в систему
  const [loginError, setLoginError] = useState(null);
  const isLoggedIn = useSelector(getIsLoggedIn());
  const navigate = useNavigate();
  useEffect(()=>{
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);
  // Ініціалізація форми за допомогою Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLoginForm,
    onSubmit: async (values) => {
      if (!isFormValid) return;
      setLoginError(authError);
      console.log(JSON.stringify(values, null, 2));
      dispatch(login({payload: values}));
    },
  });

  // Інтеграція Google OAuth
  const googleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      googleService
          .get(accessToken)
          .then((userInfo) => dispatch(loginWithGoogle(userInfo)));
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
        <p>
          Sign In
        </p>
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
        <form
          className={styles.form}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            label='Email'
            name='email'
            placeholder={'example@ex.com'}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
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
            touched={formik.touched.password}
          />
          <CheckboxField
            name='rememberMe'
            value={formik.values.rememberMe}
            onChange={formik.handleChange}
          >
            Remember me
          </CheckboxField>
          <CheckboxField
            name='license'
            value={formik.values.license}
            onChange={formik.handleChange}
            error={formik.errors.license}

          >
            I agree to the terms and conditions of use.
          </CheckboxField>
          <button
            type='submit'
            disabled={!isFormValid}
            className={styles.button}
          >
            <span>
                Sign In
            </span>
            <div/>
          </button>
          <Link
            to='forgotPassword'
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
          <div>
            <div
              id='signUpDiv'>
            </div>
            <button className={styles.googleButton}
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
        <NavLink
          to="signUp"
          role="button"
        >
          {' '}
          <span>Sign up</span>
        </NavLink>
      </p>
    </div>
  );
};
export default LoginForm;
