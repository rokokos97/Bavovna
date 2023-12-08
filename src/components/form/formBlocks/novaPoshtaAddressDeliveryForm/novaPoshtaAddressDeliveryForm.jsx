import React from 'react';
import styles from './novaPoshtaAddressDeliveryForm.module.scss';
import SelectField from '../../formFields/selectField/selectField';
import TextField from '../../formFields/textField/textField';
import PropTypes from 'prop-types';
const NovaPoshtaAddressDeliveryForm = ({formik, handleCityChange, citiesList}) => (
  <form
    onSubmit={formik.handleSubmit}
    className={styles.novaPoshtaAddressDeliveryForm}
    data-testid="NovaPoshtaAddressDeliveryForm"
  >
    <SelectField
      label='City'
      name='city'
      onChange={handleCityChange}
      defaultValue={{label: 'Select a city', value: ''}}
      options={citiesList? citiesList: []}
    />
    <TextField
      disabled={!!formik.values.warehouse.value}
      label='Street'
      name='street'
      placeholder='Enter your street name'
      onChange={formik.handleChange}
      value={formik.values.street}
      error={formik.errors.street}
      onBlur={formik.handleBlur}
      touched={formik.touched.street}
    />
    <TextField
      disabled={!!formik.values.warehouse.value}
      label='House number'
      name='houseNumber'
      placeholder='Enter your street name'
      onChange={formik.handleChange}
      value={formik.values.houseNumber}
      error={formik.errors.houseNumber}
      onBlur={formik.handleBlur}
      touched={formik.touched.houseNumber}
    />
    <TextField
      disabled={!!formik.values.warehouse.value}
      label='Flat Number'
      name='flatNumber'
      placeholder='Enter your flat number'
      onChange={formik.handleChange}
      value={formik.values.flatNumber}
      error={formik.errors.flatNumber}
      onBlur={formik.handleBlur}
      touched={formik.touched.flatNumber}
    />
    <button
      type='submit'
      disabled={
        (!formik.values.warehouse.value && formik.values.street.length === 0)
      }
      className={styles.button}
    >
      <span>
                  add address
      </span>
    </button>
  </form>
);

NovaPoshtaAddressDeliveryForm.propTypes= {
  formik: PropTypes.object,
  handleCityChange: PropTypes.func,
  citiesList: PropTypes.array,
};
export default NovaPoshtaAddressDeliveryForm;
