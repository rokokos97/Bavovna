import React, {useEffect, useState} from 'react';
import styles from './LoginFormBlock.module.scss';
import TextField from '../../formFields/TextField/TextField';
import CheckboxField from '../../formFields/CheckboxField/CheckboxField';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {validationSchemaLoginForm} from '../../../../utils/validationSchema';
import {
  clearUserResponse,
  getIsLoggedIn,
  getResponse, getUserLoadingStatus,
  loginWithGoogle,
  logInWithPassword,
} from '../../../../store/userSlice';
import {useGoogleLogin} from '@react-oauth/google';
import googleService from '../../../../services/google.service';
import transformErrorMessage from '../../../../utils/generateErrorMessage';
import {useLocation} from 'react-router-dom';
import LoaderIconSmall from '../../../svg/loaderIcons/LoaderSmallIcon/LoaderIconSmall';
import GoogleIcon from '../../../svg/socialMediaIcons/GoogleIcon/GoogleIcon';


const LoginFormBlock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const response = useSelector(getResponse);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getUserLoadingStatus);
  const [isRegularLogin, setIsRegularLogin] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const location = useLocation();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: validationSchemaLoginForm,
    onSubmit: (values) => {
      setIsLoadingGoogle(false);
      setIsRegularLogin(true);
      dispatch(logInWithPassword({payload: values}));
    },
  });

  const googleLoginHook = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      googleService
          .get(accessToken)
          .then((userInfo) => {
            dispatch(loginWithGoogle(userInfo));
          });
    },
  });
  const googleLogin = () => {
    setIsRegularLogin(false);
    setIsLoadingGoogle(true);
    googleLoginHook();
  };
  useEffect(() => {
    if (response) {
      dispatch(clearUserResponse());
    }
    if (isLoggedIn) {
      navigate(location.pathname==='/cart/checkout' ? '/cart/checkout' : '/');
    }
  }, [formik.values, dispatch, isLoggedIn]);
  const renderMessagesBlockStyle = () => {
    if (response && response.code === 200) {
      return styles.successMessagesBlock;
    } else {
      return styles.errorMessagesBlock;
    }
  };
  return (<>
    <section className={styles.loginFormBlock} data-testid="LoginFormBlock">
      {response &&
        <div className={renderMessagesBlockStyle()}>
          <p>{transformErrorMessage[response.message]}</p>
        </div>}
      <form
        className={styles.loginFormBlock__form}
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
        <button
          type='submit'
          aria-label='button confirm sign in'
          disabled={!formik.isValid || !formik.dirty}
          className={styles.loginFormBlock__button}
        >{
          (isLoading && isRegularLogin) ? <LoaderIconSmall/>:<span>
                Sign In
          </span>
          }
        </button>
        <Link
          to='recoveryPassword'
          aria-label='go to recovery password page'
          className={styles.loginFormBlock__forgotPassword}
        >
          <span>Forgot password?</span>
        </Link>
      </form>
      <section className={styles.loginFormBlock__socialButtonsBlock}>
        <div className={styles.divider}>
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <div className={styles.loginFormBlock__googleButtonBlock}>
          <div
            id='signUpDiv'>
          </div>
          <button
            type='button'
            aria-label='go to sign in with google dialog window'
            className={styles.loginFormBlock__googleButton}
            onClick={googleLogin}
          >
            {
              (isLoading && isLoadingGoogle) ?
                <LoaderIconSmall /> :
                  <>
                    <GoogleIcon />
                    <span>
                      Sign in with Google
                    </span>
                  </>
            }
          </button>
        </div>
      </section>
    </section>
  </>
  );
};

export default LoginFormBlock;
