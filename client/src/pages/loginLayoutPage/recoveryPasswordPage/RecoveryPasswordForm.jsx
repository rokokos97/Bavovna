import React, {useEffect, useState} from 'react';
import styles from './RecoveryPasswordForm.module.scss';
import TextField from '../../../components/form/formFields/TextField/TextField';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import * as Yup from 'yup';
import {
  getError,
  getResponse, getUserLoadingStatus,
  recoveryUserPassword, userClearResponse,
} from '../../../store/userSlice';
import transformErrorMessage from '../../../utils/generateErrorMessage';
import LoaderIconSmall from '../../../components/svg/loaderIcons/LoaderSmallIcon/LoaderIconSmall';

const RecoveryPasswordForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getUserLoadingStatus);
  const [message, setMessage] = useState();
  const response = useSelector(getResponse);
  const error = useSelector(getError);
  const [isLoaderRun, setIsLoaderRun] = useState(false);
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
      dispatch(recoveryUserPassword({payload: values}));
      formik.setFieldValue('email', '');
      formik.setFieldTouched('email', false);
    },
  });
  useEffect(() => {
    if (response) {
      setMessage(response);
    }
    if (error) {
      setMessage(error);
    }
  }, [error, response]);
  useEffect(() => {
    if (isLoading) {
      setIsLoaderRun(true);
    } else {
      setIsLoaderRun(false);
    }
  }, [isLoading]);
  useEffect(() => {
    const clearErrorMessage = () => {
      if (message ) {
        setMessage(null);
        dispatch(userClearResponse());
      }
    };
    window.addEventListener('click', clearErrorMessage);
    return () => {
      window.removeEventListener('click', clearErrorMessage);
    };
  }, [message]);
  return (
    <div className={styles.forgotPasswordForm} data-testid="RecoveryPasswordForm">
      <div className={styles.forgotPasswordForm__titleBlock}>
        <p>
          recover password
        </p>
        <span>
          Please enter your e-mail address:
        </span>
      </div>
      {message ?
        <div className={(message.code !== 200) ? styles.forgotPasswordForm__errorMessagesBlock : styles.forgotPasswordForm__successMessagesBlock}>
          <p>{transformErrorMessage[message.message]}</p>
        </div> : null}
      <form
        className={styles.forgotPasswordForm__form}
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
          className={styles.forgotPasswordForm__button}
          type='submit'
          disabled={!formik.isValid || !formik.dirty}
        >{
          isLoaderRun ?
            <LoaderIconSmall/> :
          <span>
            recover
          </span>
          }
        </button>
      </form>
      <p>
        Do you remember your password?
        <span>
          <NavLink
            to="/signIn"
            role="button"
          >
            &nbsp;Back to sign in
          </NavLink>
        </span>
      </p>
    </div>
  );
};

export default RecoveryPasswordForm;
