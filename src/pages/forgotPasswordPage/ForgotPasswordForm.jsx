import React, {useEffect} from 'react';
import styles from './ForgotPasswordForm.module.scss';
import TextField from '../../components/formFields/textField/textField';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {
  clearUserResponse,
  getResponse,
  resetPassword,
} from '../../store/userSlice';
import transformErrorMessage from '../../utils/generateErrorMessage';

const ForgotPasswordForm = () => {
  const dispatch = useDispatch();

  // Використання селектора для отримання відповіді з redux store
  const response = useSelector(getResponse());

  // Ініціалізація formik для управління станом форми та валідації
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
          .required('Email is required')
          .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Invalid email address'),
    }),
    onSubmit: (values) => {
      if (!formik.isValid) return;
      dispatch(resetPassword({payload: values}));
    },
  });

  // Очищення відповіді користувача після кожної зміни у формі
  useEffect(() => {
    if (response) {
      dispatch(clearUserResponse());
    }
  }, [formik.values, dispatch]);

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
      {response ?
        <div className={(response.code !== 200) ? styles.errorMessagesBlock : styles.successMessagesBlock}>
          <p>{transformErrorMessage[response.message]}</p>
        </div> : null}
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
          className={styles.button}
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
