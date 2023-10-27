import React from 'react';
import styles from './ForgotPasswordForm.module.scss';
import TextField from '../formFields/textField/textField';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';
import {reset} from '../../store/userSlice';

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
          .required('Email is required')
          .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Invalid email address'),
    }),
    onSubmit: async (values) => {
      if (!formik.isValid) return;
      console.log(JSON.stringify(values, null, 2));
      dispatch(reset({payload: values}));
    },
  });
  return (
    <div className={styles.forgotPasswordForm} data-testid="ForgotPasswordForm">
      <div className={styles.titleBlock}>
        <p>
          recover password
        </p>
        <span>
        Please enter your e-mail address:
        </span>
      </div>
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
        <button
          disabled={!formik.isValid || !formik.dirty}
        >
          <span>
            recover
          </span>
        </button>
      </form>
      <p>
        Do you remember your password?{'  '}
        <NavLink
          to="/login"
          role="button"
        >
          {' '}
          <span>Back to sign in</span>
        </NavLink>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
