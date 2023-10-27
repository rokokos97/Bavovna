import React from 'react';
import styles from './resetPasswordForm.module.scss';
import TextField from '../formFields/textField/textField';
import {useFormik} from 'formik';
import {validationSchemaRegisterForm} from '../../utils/validationSchema';

const ResetPasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchemaRegisterForm,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={styles.resetPasswordForm} data-testid="ResetPasswordForm">
      <div
        className={styles.titleBlock}
      >
        <p className={styles.title}>Reset PASSWORD</p>
        <p>Please enter a new password:</p>
      </div>
      <form
        className={styles.form}
        onSubmit={formik.handleSubmit}
      >
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
        <TextField
          type='password'
          label='Confirm password'
          name='confirmPassword'
          placeholder='**********'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
        />
        <button
          className={styles.button}
          type="submit"
          disabled={!formik.isValid}>
          <span>
            Reset
          </span>
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
