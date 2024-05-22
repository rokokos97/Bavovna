import React, {useEffect, useState} from 'react';
import styles from './RecoveryPasswordForm.module.scss';
import TextField from '../../../components/form/formFields/TextField/TextField';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  getError,
  getResponse, getUserLoadingStatus,
  recoveryUserPassword, userClearResponse,
} from '../../../store/userSlice';
import transformErrorMessage from '../../../utils/generateErrorMessage';
import LoaderIconSmall from '../../../components/svg/loaderIcons/LoaderSmallIcon/LoaderIconSmall';
import {validationSchemaEmail} from '../../../utils/validationSchema';

const RecoveryPasswordForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getUserLoadingStatus);
  const response = useSelector(getResponse);
  const error = useSelector(getError);
  const [message, setMessage] = useState();
  const [isLoaderRun, setIsLoaderRun] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchemaEmail,
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
        <p>
          Please enter your e-mail address:
        </p>
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
          value={formik.values.email.toLowerCase()}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched}
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
      <p className={styles.forgotPasswordForm__backToSignIn}>
        Do you remember your password?&nbsp;
        <NavLink
          to="/signIn"
          title='go to sign in page'
          aria-label='go to sign in page'
          className={styles.forgotPasswordForm__backToSignInLink}
        >
          <span>Back to sign in</span>
        </NavLink>
      </p>
    </div>
  );
};

export default RecoveryPasswordForm;
