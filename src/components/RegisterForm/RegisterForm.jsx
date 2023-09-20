import React, {useEffect} from 'react';
import styles from './RegisterForm.module.scss';
import {useFormik} from 'formik';
import {validationSchemaRegisterForm} from '../../utils/validationSchema';
import {NavLink} from 'react-router-dom';
import 'react-phone-number-input/style.css';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthErrors, signUp} from '../../store/userSlice';
import config from '../../config.json';

const RegisterForm = () => {
  const registerError = useSelector(getAuthErrors());
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchemaRegisterForm,
    onSubmit: (values) => {
      if (!isValid) return;
      console.log(JSON.stringify(values, null, 2));
      dispatch(signUp(values));
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
    dispatch(signUp(googleUser));
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
    <div className={styles.registerForm}>
      <div className={styles.titleBlock}>
        Sign up
        <span>
          Welcome! Please enter your details
        </span>
      </div>
      {registerError &&
        <div className={styles.registerError}>
          <span>
            {registerError}
          </span>
        </div> }
      <div className={styles.inputsBlock}>
        <form
          className={styles.form}
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.input}>
            <label htmlFor="name">
              <span>
                First name *
              </span>
            </label>
            <input
              id="name"
              name="name"
              type="name"
              placeholder="Enter your first name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <div className={styles.error}>{formik.errors.name}</div>
            ) : null}
          </div>
          <div className={styles.input}>
            <label htmlFor="surname">
              <span>
                Last name *
              </span>
            </label>
            <input
              id="surname"
              name="surname"
              type="name"
              placeholder="Enter your last name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.surname}
            />
            {formik.errors.name ? (
              <div className={styles.error}>{formik.errors.surname}</div>
            ) : null}
          </div>
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
            {formik.errors.email ? (
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
              autoComplete='new password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.errors.password ? (
            <div className={styles.error}>{formik.errors.password}</div>
          ) : null}
          </div>
          <div className={styles.input}>
            <label htmlFor="confirmPassword">
              <span>
                Confirm password *
              </span>
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="**********"
              autoComplete='new password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {formik.errors.confirmPassword ? (
            <div className={styles.error}>
              {formik.errors.confirmPassword}
            </div>
          ) : null}
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={!isValid}
          >
            <span>
              Sign up
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
        </div>
      </div>
      <p>
        Already have account?{'  '}
        <NavLink
          to="login"
          role="button"
          className="link-dark"
        >
          {' '}
          Sign in
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterForm;
