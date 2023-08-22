import React, {useState} from 'react';
import styles from './RegisterForm.module.scss';
import {useFormik} from 'formik';
import {validationSchema} from '../../utils/validationSchema';
import {NavLink} from 'react-router-dom';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
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
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        Sign up
        <span>
          Welcome back! Please enter your details
        </span>
      </div>
      <form
        className={styles.form}
        onSubmit={formik.handleSubmit}
      >
        <div className={styles.field}>
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
        <div className={styles.field}>
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
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button
            className={styles.showPasswordBtn}
            type='button'
            onClick={toggleShowPassword}
          >
            show password
          </button>
          {formik.errors.password ? (
          <div className={styles.error}>{formik.errors.password}</div>
        ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="confirmPassword">
            <span>
              Confirm password *
            </span>
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          <button
            className={styles.showPasswordBtn}
            type='button'
            onClick={toggleShowPassword}
          >
            show password
          </button>
          {formik.errors.confirmPassword ? (
          <div className={styles.error}>
            {formik.errors.confirmPassword}
          </div>
        ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="phoneNumber">
            <span>
              Phone Number *
            </span>
          </label>
          <div>
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="UA"
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={(value) => formik.setFieldValue('phoneNumber', value)}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className={styles.error}>
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>
        </div>

        <button type="submit">Register</button>
      </form>
      <p>
        Already have account?{'  '}
        <NavLink
          to="login"
          role="button"
          className="link-dark"
        >
          {' '}
          Sign In
        </NavLink>
      </p>
    </div>
  );
};

export default RegisterForm;
