import React, {useState} from 'react';
import styles from './LoginForm.module.scss';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';


const LoginForm = () => {
  const [showPassword] = useState(false);
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
      console.log(JSON.stringify(values, null, 2));
    },
  });
  //  const toggleShowPassword = () => {
  //    setShowPassword((prevState) => !prevState);
  //  };
  return (
    <div className={styles.loginForm}>
      <div className={styles.titleBlock}>
      Sign In
        <span>
            Welcome back! Please enter your details
        </span>
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
              type={showPassword ? 'text' : 'password'}
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
          </div>
          <div className={styles.socialButton}>
            <span>Sign in with Google</span>
          </div>
          <div className={styles.socialButton}>
            <div>
              <span>Sign in with Apple</span>
            </div>
          </div>
        </div>
      </div>
      <p>
      Dont have account?{'  '}
        <NavLink to="signUp"
          role="button"
        >
          {' '}
        Sign Up
        </NavLink>
      </p>

    </div>
  );
};

export default LoginForm;
