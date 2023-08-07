import React, {useState} from 'react';
import styles from './RegisterForm.module.scss';
import {useFormik} from 'formik';
import {validationSchema} from '../../utils/validationSchema';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      familyName: '',
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
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="email">Email address </label>
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
          <label htmlFor="password">Password </label>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button
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
          <label htmlFor="confirmPassword">Confirm password </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          <button
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
          <label htmlFor="name">Name </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
          <div className={styles.error}>
            {formik.errors.name}
          </div>
        ) : null}
        </div>
        <div className={styles.field}>
          <label htmlFor="familyName">Family name </label>
          <input
            id="familyName"
            name="familyName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.familyName}
          />
          {formik.touched.familyName && formik.errors.familyName ? (
          <div className={styles.error}>
            {formik.errors.familyName}
          </div>
        ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
