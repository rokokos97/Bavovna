import React, {useEffect} from 'react';
import styles from './LoginForm.module.scss';
import {useFormik} from 'formik';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {clearUserResponse, getIsLoggedIn, getResponse, logInWithPassword, loginWithGoogle} from '../../store/userSlice';
import GoogleIcon from '../../components/svg/googleIcon/googleIcon';
import {useGoogleLogin} from '@react-oauth/google';
import {validationSchemaLoginForm} from '../../utils/validationSchema';
import TextField from '../../components/formFields/textField/textField';
import CheckboxField from '../../components/formFields/checkboxField/checkboxField';
import googleService from '../../services/google.service';
import transformErrorMessage from '../../utils/generateErrorMessage';
const LoginForm = () => {
  // Використання Redux hooks для диспетчеризації дій і отримання даних зі store
  const dispatch = useDispatch();
  // Використання селектора для отримання відповіді з redux store
  const response = useSelector(getResponse());
  // Використання стану для відображення помилок сервера при вході в систему
  const isLoggedIn = useSelector(getIsLoggedIn());
  const navigate = useNavigate();
  // Ініціалізація форми за допомогою Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
      license: false,
    },
    validationSchema: validationSchemaLoginForm,
    onSubmit: (values) => {
      dispatch(logInWithPassword({payload: values}));
    },
  });

  // Інтеграція Google OAuth
  const googleLoginHook = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      googleService
          .get(accessToken)
          .then((userInfo) => dispatch(loginWithGoogle(userInfo)));
    },
  });
  const googleLogin = () => {
    googleLoginHook();
  };
  useEffect(() => {
    if (response) {
      dispatch(clearUserResponse());
    }
    if (isLoggedIn) {
      navigate('/');
    }
  }, [formik.values, dispatch, isLoggedIn]);
  // Рендер компоненту форми входу
  const renderMessagesBlockStyle = () => {
    if (response && response.code === 200) {
      return styles.successMessagesBlock;
    } else {
      return styles.errorMessagesBlock;
    }
  };
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
      {response ?
        <div className={renderMessagesBlockStyle()}>
          <p>{transformErrorMessage[response.message]}</p>
        </div> : null}
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
            disabled={!formik.isValid || !formik.dirty}
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
            <button
              type='button'
              className={styles.googleButton}
              onClick={googleLogin}
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
