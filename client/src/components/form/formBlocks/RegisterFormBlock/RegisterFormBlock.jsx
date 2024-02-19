import React from 'react';
import styles from './RegisterFormBlock.module.scss';
import TextField from '../../formFields/TextField/TextField';
import PropTypes from 'prop-types';
import CheckboxField from '../../formFields/CheckboxField/CheckboxField';
import {useSelector} from 'react-redux';
import {getUserLoadingStatus} from '../../../../store/userSlice';
import LoaderIconSmall from '../../../svg/loaderIcons/LoaderSmallIcon/LoaderIconSmall';
import GoogleIcon from '../../../svg/socialMediaIcons/GoogleIcon/GoogleIcon';

const RegisterFormBlock = ({formik, googleRegister}) => {
  const isLoading = useSelector(getUserLoadingStatus);
  return (
    <div className={styles.registerFormBlock} data-testid="RegisterFormBlock">
      <form
        className={styles.form}
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
          touched={formik.touched.lastName}
        />
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
        <CheckboxField
          name='license'
          value={formik.values.license}
          onChange={formik.handleChange}
          error={formik.errors.license}
        >
          I agree to the terms and conditions of use.
        </CheckboxField>
        <button
          type='submit'
          disabled={!formik.isValid || !formik.dirty}
          className={styles.button}
        >
          {
          (isLoading) ?
            <LoaderIconSmall /> :
            <>
              <span>
                    Sign up
              </span>
              <div/>
            </>
          }
        </button>
      </form>
      <div className={styles.socialButtonsBlock}>
        <div className={styles.divider}>
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <div>
          <div
            id='signUpDiv'>
          </div>
          <button className={styles.googleButton}
            type='button'
            onClick={() => googleRegister()}
          >
            {
              (isLoading) ?
                <LoaderIconSmall/>:
                <>
                  <GoogleIcon />
                  <span>
                      Sign up with Google
                  </span>
                </>
            }
          </button>
        </div>
      </div>
    </div>
  );
};
RegisterFormBlock.propTypes = {
  formik: PropTypes.object.isRequired,
  googleRegister: PropTypes.func.isRequired,
};
export default RegisterFormBlock;
