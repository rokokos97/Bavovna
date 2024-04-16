import React, {useEffect, useState} from 'react';
import styles from './ResetPasswordForm.module.scss';
import TextField from '../../../../components/form/formFields/TextField/TextField';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {userClearResponse, getResponse, getUserLoadingStatus, setNewUserPassword} from '../../../../store/userSlice';
import * as Yup from 'yup';
import transformErrorMessage from '../../../../utils/generateErrorMessage';
import LoaderIconSmall from '../../../../components/svg/loaderIcons/LoaderSmallIcon/LoaderIconSmall';

const ResetPasswordForm = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const email = urlParams.get('email');
  const dispatch = useDispatch();
  const isLoading = useSelector(getUserLoadingStatus);
  const response = useSelector(getResponse);
  const [isLoaderRun, setIsLoaderRun] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object().shape({
      confirmPassword: Yup.string()
          .required('Password confirmation is required')
          .oneOf([Yup.ref('password'), null], 'Passwords must match'),
      password: Yup.string()
          .required('Password is required')
          .min(8, 'Password has to be longer than 8 characters')
          .matches(/(?=.*[0-9])/, 'Password must contain at least one number')
          .matches(/(?=.*[!_$%&*"])/, 'Password must contain at ' +
            'least one of symbols !_$%&*')
          .matches(/(?=.*[A-Z])/, 'Password must contain at' +
            ' least one capital letter')
          .max(16, 'Password hasn\'t\' to be longer than 16 characters'),
    }),
    onSubmit: (values) => {
      dispatch(setNewUserPassword({token, email, values}));
      formik.resetForm();
    },
  });
  useEffect(() => {
    dispatch(userClearResponse());
  }, []);
  useEffect(() => {
    if (isLoading) {
      setIsLoaderRun(true);
    } else {
      setIsLoaderRun(false);
    }
  }, [isLoading]);
  return (
    <div className={styles.resetPasswordForm} data-testid="ResetPasswordForm">
      <div
        className={styles.resetPasswordForm__titleBlock}
      >
        <p>Reset password</p>
        <span>Please enter a new password:</span>
      </div>
      {response ?
        <div className={(response.code !== 200) ? styles.resetPasswordForm__errorMessagesBlock : styles.resetPasswordForm__successMessagesBlock}>
          <p>{transformErrorMessage[response.message]}</p>
        </div> : null}
      <form
        className={styles.resetPasswordForm__form}
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
          className={styles.resetPasswordForm__button}
          type="submit"
          disabled={!formik.isValid}>
          {
            isLoaderRun ?
              <LoaderIconSmall/> :
          <span>
            Reset
          </span>
          }
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
