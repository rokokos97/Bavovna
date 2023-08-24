import React, {useState} from 'react';
import styles from './RegisterForm.module.scss';
import {useFormik} from 'formik';
import {validationSchema} from '../../utils/validationSchema';
import {NavLink} from 'react-router-dom';
import 'react-phone-number-input/style.css';
import GoogleIcon from '../svg/googleIcon/googleIcon';
import AppleIcon from '../svg/appleIcon/appleIcon';

const RegisterForm = () => {
  const [error] = useState('');
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      familyName: '',
      phoneNumber: '',
      city: '',
      street: '',
      houseNumber: '',
      apartmentNumber: '',
      postalCode: '',
      novaPoshtaCity: '',
      novaPoshtaOffice: '',
      favorite: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={styles.registerForm}>
      <div className={styles.titleBlock}>
        Sign up
        <span>
          Welcome! Please enter your details
        </span>
      </div>
      <div className={styles.inputsBlock}>
        <form
          className={styles.form}
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.input}>
            <label htmlFor="name">
              <span>
                Full name *
              </span>
              <span className={styles.error}>
                {error ? error : null}
              </span>
            </label>
            <input
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.error}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={styles.input}>
            <label htmlFor="email">
              <span>
                Email *
              </span>
              <span className={styles.error}>
                {error ? error : null}
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
              <span className={styles.error}>
                {error ? error : null}
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
          <button className={styles.button}>
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
          <div className={styles.socialButton}>
            <GoogleIcon />
            <span>Sign up with Google</span>
          </div>
          <div className={styles.socialButton}>
            <AppleIcon />
            <span>Sign up with Apple</span>
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
