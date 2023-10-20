import React from 'react';
import styles from './userDataForm.module.scss';
import TextField from '../formFields/textField/textField';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {getUser} from '../../store/userSlice';
import {validationSchemaUserDataForm} from '../../utils/validationSchema';
import SelectField from '../formFields/selectField/selectField';

const UserDataForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser());
  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validationSchema: validationSchemaUserDataForm,
    onSubmit: (values) => {
      if (!formik.isValid) return;
      dispatch(updateUser(values));
    }},
  );
  const onSelect = () => {};
  return (
    <div className={styles.userDataForm} data-testid="UserDataForm">
      <p className={styles.title}>personal data</p>
      <form
        className={styles.userPersonalDataForm}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          label='First name'
          name='firstName'
          placeholder={'Enter your first name'}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.firstName}
        />
        <TextField
          label='Last name'
          name='lastName'
          placeholder={'Enter your last name'}
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.lastName}
        />
        <TextField
          label='Email'
          name='email'
          placeholder={'example@ex.com'}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
        />
        <TextField
          type='phone'
          label='Phone'
          name='phone'
          placeholder='050 123 4567'
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.phone}
        />
        <TextField
          type='password'
          label='Current password'
          name='currentPassword'
          placeholder='**********'
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.currentPassword}
        />
        <TextField
          type='password'
          label='New password'
          name='password'
          placeholder='**********'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
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
        />
        <button
          type="submit"
          disabled={!formik.isValid}
          className={styles.button}
        >
          <span>
save changes
          </span>
        </button>
      </form>
      <div className={styles.deliveryForm}>
        <p
          className={styles.title}
        >
          delivery
        </p>
        <form
          className={styles.userPersonalDataForm}
        >
          <SelectField onChange={onSelect} defaultValue={{}} options={[]}/>
          <button
            type="submit"
            disabled={!formik.isValid}
            className={styles.button}
          >
            <span>
change delivery
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserDataForm;
