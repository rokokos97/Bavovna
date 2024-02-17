import React from 'react';
import styles from './NovaPostWarehouseDeliveryFormCheckout.module.scss';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {getCitiesList} from '../../../../../../../store/citiesSlice';
import SelectField from '../../../../../../../components/form/formFields/SelectField/SelectField';

const NovaPostWarehouseDeliveryFormCheckout = ({formik, handleCityChange, handleWarehouseChange, warehousesList}) => {
  const citiesList = useSelector(getCitiesList());
  return (
    <div className={styles.npWarehouseDeliveryFormCheckout} data-testid="NovaPostWarehouseDeliveryFormCheckout">
      <SelectField
        label='City'
        name='city'
        onChange={handleCityChange}
        defaultValue={{label: 'Select a city', value: null}}
        options={citiesList ? citiesList : []}
        error={formik.errors.city}
      />
      <SelectField
        label='Post office'
        name='warehouse'
        onChange={handleWarehouseChange}
        defaultValue={{label: 'Select a post office', value: null}}
        options={warehousesList}
        error={formik.errors.warehouse}
      />
    </div>
  );
};
NovaPostWarehouseDeliveryFormCheckout.propTypes = {
  formik: PropTypes.object,
  handleCityChange: PropTypes.func,
  handleWarehouseChange: PropTypes.func,
  warehousesList: PropTypes.array,
};
export default NovaPostWarehouseDeliveryFormCheckout;
