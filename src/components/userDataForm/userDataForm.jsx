import React, {useEffect} from 'react';
import styles from './userDataForm.module.scss';
import TextField from '../formFields/textField/textField';
import {useSelector} from 'react-redux';
import {useFormik} from 'formik';
import {getUser} from '../../store/userSlice';
import {validationSchemaUserDataForm} from '../../utils/validationSchema';
import SelectField from '../formFields/selectField/selectField';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const UserDataForm = () => {
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
    onSubmit: (values) => {
      if (!formik.isValid) return;
      console.log(values.phone);
    }},
  );
  useEffect(() => {
    if (user) {
      formik.setValues({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [user]);
  console.log(formik.values);
  const onSelect = () => {};
  return (
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
              placeholder={'Enter your first name'}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.firstName}
              touched={formik.touched.firstName}
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
          </div>
          <div className={styles.column}>
            <p>Phone *</p>
            <PhoneInput
              value={formik.values.phone}
              onChange={(phone)=> {
                formik.setFieldValue('phone', phone);
              }}
              placeholder={'+380671234567'}
              containerStyle={{
                fontFamily: 'Fixel Display Regular, self-serif',
                fontSize: '1.6rem',
                backgroundColor: '#fafafa',
                display: 'flex',
                alignItems: 'center',
                padding: '0',
                border: '1px solid #727272',
                height: '4.8rem',
                alignContent: 'center',
              }}
              inputStyle={{
                border: 'none',
                paddingLeft: '5rem',
                paddingTop: '0.5rem',
              }}
              dropdownStyle={{
                paddingLeft: '1.6rem',
                border: 'none',
                textAlign: 'start',
              }}
            />
            {/* <TextField*/}
            {/*  type='phone'*/}
            {/*  label='Phone'*/}
            {/*  name='phone'*/}
            {/*  placeholder=''*/}
            {/*  value={formik.values.phone}*/}
            {/*  onChange={formik.handleChange}*/}
            {/*  onBlur={formik.handleBlur}*/}
            {/*  error={formik.errors.phone}*/}
            {/* />*/}
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
              name='newPassword'
              placeholder='**********'
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
          className={styles.deliveryTitle}
        >
          delivery
        </p>
        <div className={styles.deliveryBlock}>
          <div className={styles.deliveryBlockColumn}>
            <p>
              Saved delivery method
            </p>
            Content
          </div>
          <div className={styles.deliveryBlockColumn}>
            <p>
              Add new delivery method
            </p>
            <form className={styles.userPersonalDataForm}>
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
      </div>
    </div>
  );
};


export default UserDataForm;
