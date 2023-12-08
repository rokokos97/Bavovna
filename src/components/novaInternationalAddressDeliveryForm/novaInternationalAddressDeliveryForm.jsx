import React from 'react';
import styles from './novaInternationalAddressDeliveryForm.module.scss';
import PropTypes from 'prop-types';
import TextAreaField from '../form/formFields/textAreaField/textAreaField';
const NovaInternationalAddressDeliveryForm = ({formik}) => (
  <form
    className={styles.novaInternationalAddressDeliveryForm}
    data-testid="NovaInternationalAddressDeliveryForm"
    onSubmit={formik.handleSubmit}
  >
    <TextAreaField
      label='Delivery address '
      name='intDeliveryAddress'
      placeholder='Enter delivery address'
      onChange={formik.handleChange}
      value={formik.values.intDeliveryAddress}
      error={formik.errors.intDeliveryAddress}
      onBlur={formik.handleBlur}
      touched={formik.touched.intDeliveryAddress}
    />
    <button
      type='submit'
      disabled={
        (formik.values.intDeliveryAddress.length === 0)
      }
      className={styles.button}
    >
      <span>
                  add address
      </span>
    </button>
  </form>
);
NovaInternationalAddressDeliveryForm.propTypes = {
  formik: PropTypes.object,
};
export default NovaInternationalAddressDeliveryForm;
