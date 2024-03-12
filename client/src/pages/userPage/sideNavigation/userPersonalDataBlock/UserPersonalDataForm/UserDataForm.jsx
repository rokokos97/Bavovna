import React from 'react';
import 'react-phone-input-2/lib/style.css';
import styles from './UserDataForm.module.scss';
import TextField from '../../../../../components/form/formFields/TextField/TextField';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {getResponse, getUser, updateUserData} from '../../../../../store/userSlice';
import {validationSchemaUserDataForm} from '../../../../../utils/validationSchema';
import PhoneField from '../../../../../components/form/formFields/PhoneField/PhoneField';
import transformErrorMessage from '../../../../../utils/generateErrorMessage';
const UserDataForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const response = useSelector(getResponse);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      currentPassword: '',
      newPassword: '',
    },
    validationSchema: validationSchemaUserDataForm,
    onSubmit: () => {
      const changedFields = getChangedFields(formik.values);
      const updatedUser = {...user, ...changedFields};
      dispatch(updateUserData(updatedUser));
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
  //  useEffect(() => {
  //    if (response) {
  //      dispatch(userClearResponse());
  //    }
  //  }, [formik.values.currentPassword, dispatch]);
  return ( user && (
    <article className={styles.userDataForm} data-testid="UserDataForm">
      <p className={styles.userDataForm__title}>personal data</p>
      <form
        className={styles.userDataForm__userPersonalDataForm}
        onSubmit={formik.handleSubmit}
      >
        <div className={styles.userDataForm__submitWrapper}>
          <section className={styles.userDataForm__column}>
            <TextField
              label='First name'
              name='firstName'
              placeholder={user.firstName}
              value={formik.values.firstName || user.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.firstName}
              touched={formik.touched.firstName}
            />
            <TextField
              label='Last name'
              name='lastName'
              placeholder={user.lastName}
              value={formik.values.lastName || user.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.lastName}
              touched={formik.touched.lastName}
            />
            <TextField
              disabled = {!user.isVerified}
              label='Email'
              name='email'
              placeholder={user.email}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
          </section>
          <section
            className={styles.userDataForm__column}
          >
            <PhoneField
              value={formik.values.phoneNumber || user.phoneNumber}
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
              error={response ? transformErrorMessage[response.message] : formik.errors.currentPassword}
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
