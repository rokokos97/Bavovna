import React from 'react';
import styles from './NovaPostHomeDeliveryFormCheckout.module.scss';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {getCitiesList} from '../../../../../../../store/citiesSlice';
import SelectField from '../../../../../../../components/form/formFields/SelectField/SelectField';
import TextField from '../../../../../../../components/form/formFields/TextField/TextField';


const NovaPostHomeDeliveryFormCheckout = ({formik, handleCityChange}) => {
  const citiesList = useSelector(getCitiesList());
  return (
    <div className={styles.npHomeDeliveryFormCheckout} data-testid="NovaPostHomeDeliveryFormCheckout">
      <SelectField
        label='City'
        name='city'
        onChange={handleCityChange}
        defaultValue={{label: 'Select a city', value: ''}}
        options={citiesList ? citiesList : []}
        error={formik.errors.city}
      />
      <TextField
        label='Street'
        name='street'
        placeholder='Enter your street name'
        onChange={formik.handleChange}
        value={formik.values.street}
        error={formik.errors.street}
        onBlur={formik.handleBlur}
      />
      <TextField
        label='House number'
        name='houseNumber'
        placeholder='Enter your street name'
        onChange={formik.handleChange}
        value={formik.values.houseNumber}
        error={formik.errors.houseNumber}
        onBlur={formik.handleBlur}
      />
      <TextField
        label='Flat Number'
        name='flatNumber'
        placeholder='Enter your flat number'
        onChange={formik.handleChange}
        value={formik.values.flatNumber}
        error={formik.errors.flatNumber}
        onBlur={formik.handleBlur}
      />
    </div>
  );
};
NovaPostHomeDeliveryFormCheckout.propTypes = {
  formik: PropTypes.object,
  handleCityChange: PropTypes.func,
};

export default NovaPostHomeDeliveryFormCheckout;
