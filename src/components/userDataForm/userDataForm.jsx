import React from 'react';
import 'react-phone-input-2/lib/style.css';
import styles from './userDataForm.module.scss';
import TextField from '../formFields/textField/textField';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {getUser, updateUser} from '../../store/userSlice';
import {validationSchemaUserDataForm} from '../../utils/validationSchema';
// import SelectField from '../formFields/selectField/selectField';
import PhoneInput from 'react-phone-input-2';

const UserDataForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser());
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      currentPassword: '',
      newPassword: '',
    },
    validationSchema: validationSchemaUserDataForm,
    onSubmit: () => {
      if (!formik.isValid) return;
      const changedFields = getChangedFields(formik.values);
      const newUser = {...user, ...changedFields};
      console.log('newUser', newUser);
      dispatch(updateUser(newUser));
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
  return ( user && (
    <div className={styles.userDataForm} data-testid="UserDataForm">
      <p className={styles.title}>personal data</p>
      <form
        className={styles.userPersonalDataForm}
        onSubmit={formik.handleSubmit}
      >
        <div className={styles.submitWrapper}>
          <div className={styles.column}>
            <TextField
              label='First name'
              name='firstName'
              placeholder={user.firstName}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.firstName}
              touched={formik.touched.firstName}
            />
            <TextField
              label='Last name'
              name='lastName'
              placeholder={user.lastName}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.lastName}
              touched={formik.touched.lastName}
            />
            <TextField
              label='Email'
              name='email'
              placeholder={user.email}
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.email}
              touched={formik.touched.email}
            />
          </div>
          <div className={styles.column}>
            <div>
              <p className={styles.phoneLabel}>Phone
                <span>
                 *
                </span>
              </p>
              <PhoneInput
                onlyCountries={['ua', 'pl', 'ru', 'cz', 'sk', 'de', 'es', 'it']}
                placeholder={'+38 (067) 123 45 67'}
                containerClass={styles.phoneInputContainer}
                inputClass={styles.phoneInputInput}
                buttonClass={styles.phoneInputButton}
                dropdownClass={styles.phoneInputDropdown}
                value={formik.values.phone}
                onChange={(value) => formik.setFieldValue('phone', value)}
                onBlur={()=> formik.setFieldTouched('phone', true)}

              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className={styles.error}>{formik.errors.phone}</div>
              ) : null}
            </div>
            <TextField
              type='password'
              label='Current password'
              name='currentPassword'
              placeholder='**********'
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.currentPassword}
              touched={formik.touched.currentPassword}
            />
            <TextField
              disabled={formik.values.currentPassword.length === 0}
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
          </div>
        </div>
        <button
          type="submit"
          disabled={!formik.isValid || !formik.dirty}
          className={styles.button}
        >
          <span>
save changes
          </span>
        </button>
      </form>
      {/* <div className={styles.deliveryForm}>*/}
      {/*  <p*/}
      {/*    className={styles.deliveryTitle}*/}
      {/*  >*/}
      {/*    delivery*/}
      {/*  </p>*/}
      {/*  <div className={styles.deliveryBlock}>*/}
      {/*    <div className={styles.deliveryBlockColumn}>*/}
      {/*      <p>*/}
      {/*        Saved delivery method*/}
      {/*      </p>*/}
      {/*      Content*/}
      {/*    </div>*/}
      {/*    <div className={styles.deliveryBlockColumn}>*/}
      {/*      <p>*/}
      {/*        Add new delivery method*/}
      {/*      </p>*/}
      {/*      <form className={styles.userPersonalDataForm}>*/}
      {/*        <SelectField onChange={onSelect} defaultValue={{}} options={[]}/>*/}
      {/*        <button*/}
      {/*          type="submit"*/}
      {/*          disabled={!formik.dirty}*/}
      {/*          className={styles.button}*/}
      {/*        >*/}
      {/*          <span>*/}
      {/*            change delivery*/}
      {/*          </span>*/}
      {/*        </button>*/}
      {/*      </form>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/* </div>*/}
    </div>
  ));
};


export default UserDataForm;
