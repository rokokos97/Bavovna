import React, {useEffect, useState} from 'react';
import 'react-phone-input-2/lib/style.css';
import styles from './UserDataForm.module.scss';
import TextField from '../../../../../components/form/formFields/TextField/TextField';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {getError, getResponse, getUser, updateUserData, userClearResponse} from '../../../../../store/userSlice';
import {validationSchemaUserDataForm} from '../../../../../utils/validationSchema';
import PhoneField from '../../../../../components/form/formFields/PhoneField/PhoneField';
import generateErrorMessage from '../../../../../utils/generateErrorMessage';
const UserDataForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const error = useSelector(getError);
  const response = useSelector(getResponse);
  const [message, setMessage] = useState(null);
  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName ||'',
      email: '',
      phoneNumber: user?.phoneNumber || '',
      currentPassword: '',
      newPassword: '',
    },
    enableReinitialize: true,
    validationSchema: validationSchemaUserDataForm,
    onSubmit: () => {
      const changedFields = getChangedFields(formik.values);
      const updatedUser = {...user, ...changedFields};
      dispatch(updateUserData(updatedUser));
      formik.resetForm();
    }},
  );
  const getChangedFields = (values) => {
    const changes = {};
    for (const key in values) {
      if (values[key] !== '') {
        changes[key] = values[key];
      }
    }
    return changes;
  };
  useEffect(() => {
    const message = error ? generateErrorMessage[error.message]: response? generateErrorMessage[response.message]: null;
    setMessage(message);
  }, [error, response]);
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
  useEffect(() => {
    setMessage(null);
    dispatch(userClearResponse());
  }, []);
  return ( user && (
    <article className={styles.userDataForm} data-testid="UserDataForm">
      <p className={styles.userDataForm__title}>personal data</p>
      {response ?
        <div className={styles.userDataForm__responseMessage}>
          <p>{message}</p>
        </div> : null
      }
      <form
        className={styles.userDataForm__userPersonalDataForm}
        onSubmit={formik.handleSubmit}
      >
        <div className={styles.userDataForm__submitWrapper}>
          <section className={styles.userDataForm__column}>
            <TextField
              label='First name'
              name='firstName'
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.firstName}
              touched={formik.touched.firstName}
            />
            <TextField
              label='Last name'
              name='lastName'
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.lastName}
              touched={formik.touched.lastName}
            />
            <TextField
              disabled = {true}
              label='Email'
              name='email'
              placeholder={user.email}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </section>
          <section
            className={styles.userDataForm__column}
          >
            <PhoneField
              value={formik.values.phoneNumber}
              onChange={(value) => formik.setFieldValue('phoneNumber', value)}
              onBlur={()=> formik.setFieldTouched('phoneNumber', true)}
              touched={formik.touched.phoneNumber}
              error={formik.errors.phoneNumber}
              phoneNumber={formik.values.phoneNumber}
            />
            <TextField
              disabled = {!user.isVerified}
              type='password'
              label='Current password'
              name='currentPassword'
              placeholder='**********'
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={error ? message : formik.errors.currentPassword}
              touched={formik.touched.currentPassword}
            />
            <TextField
              disabled={formik.values.currentPassword.length === 0 || !user.isVerified}
              type='password'
              label='New password'
              name='newPassword'
              placeholder='Enter new password'
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.newPassword}
              touched={formik.touched.newPassword}
            />
          </section>
        </div>
        <button
          type="submit"
          disabled={!formik.isValid || !formik.dirty}
          className={styles.userDataForm__button}
        >
          <span>
            save changes
          </span>
        </button>
      </form>
    </article>
  ));
};


export default UserDataForm;
