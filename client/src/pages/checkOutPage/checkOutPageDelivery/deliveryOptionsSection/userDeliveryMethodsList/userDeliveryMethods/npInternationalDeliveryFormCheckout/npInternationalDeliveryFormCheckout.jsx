import React from 'react';
import styles from './npInternationalDeliveryFormCheckout.module.scss';
import PropTypes from 'prop-types';
import TextAreaField from '../../../../../../../components/form/formFields/textAreaField/textAreaField';
const NpInternationalDeliveryFormCheckout = ({formik}) => {
  return (
    <div className={styles.npInternationalDeliveryFormCheckout} data-testid="NpInternationalDeliveryFormCheckout">
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
    </div>
  );
};
NpInternationalDeliveryFormCheckout.propTypes = {
  formik: PropTypes.object,
};
export default NpInternationalDeliveryFormCheckout;
