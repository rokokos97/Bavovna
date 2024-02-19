import React from 'react';
import styles from './NovaPostInternationalDeliveryFormCheckout.module.scss';
import PropTypes from 'prop-types';
import TextAreaField from '../../../../../../../components/form/formFields/TextAreaField/TextAreaField';
const NovaPostInternationalDeliveryFormCheckout = ({formik, type}) => {
  return (
    <div className={styles.npInternationalDeliveryFormCheckout} data-testid="NovaPostInternationalDeliveryFormCheckout">
      <TextAreaField
        type={type}
        label='Delivery address '
        name='intDeliveryAddress'
        placeholder='Enter delivery address'
        onChange={formik.handleChange}
        value={formik.values.intDeliveryAddress}
        error={formik.errors.intDeliveryAddress}
        onBlur={formik.handleBlur}
        touched={formik.touched.intDeliveryAddress}
      />
    </div>
  );
};
NovaPostInternationalDeliveryFormCheckout.propTypes = {
  formik: PropTypes.object,
  type: PropTypes.string,
};
export default NovaPostInternationalDeliveryFormCheckout;
