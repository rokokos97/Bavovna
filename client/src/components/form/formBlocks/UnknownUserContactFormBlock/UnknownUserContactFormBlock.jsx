import React from 'react';
import styles from './UnknownUserContactFormBlock.module.scss';
import TextField from '../../formFields/TextField/TextField';
import PropTypes from 'prop-types';
import PhoneField from '../../formFields/PhoneField/PhoneField';
const UnknownUserContactFormBlock = ({formik}) => {
  return (
    <div className={styles.anonimUserContactFormBlock} data-testid="AnonimUserContactFormBlock">
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
      <PhoneField
        value={formik.values.phoneNumber}
        onChange={(value) => formik.setFieldValue('phoneNumber', value)}
        onBlur={()=> formik.setFieldTouched('phoneNumber', true)}
        error={formik.errors.phoneNumber}
        phoneNumber={formik.values.phoneNumber}
      />
    </div>
  );
};
UnknownUserContactFormBlock.propTypes = {
  formik: PropTypes.object.isRequired,
};
export default UnknownUserContactFormBlock;
