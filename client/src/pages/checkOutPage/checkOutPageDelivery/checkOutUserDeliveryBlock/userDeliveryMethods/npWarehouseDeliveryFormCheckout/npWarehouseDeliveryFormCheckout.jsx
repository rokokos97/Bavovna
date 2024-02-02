import React from 'react';
import styles from './npWarehouseDeliveryFormCheckout.module.scss';
import SelectField from '../../../../../../components/form/formFields/selectField/selectField';
import {useSelector} from 'react-redux';
import {getCitiesList} from '../../../../../../store/citiesSlice';
import PropTypes from 'prop-types';

const NpWarehouseDeliveryFormCheckout = ({formik, handleCityChange, handleWarehouseChange, warehousesList}) => {
  const citiesList = useSelector(getCitiesList());
  return (
    <div className={styles.npWarehouseDeliveryFormCheckout} data-testid="NpWarehouseDeliveryFormCheckout">
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
NpWarehouseDeliveryFormCheckout.propTypes = {
  formik: PropTypes.object,
  handleCityChange: PropTypes.func,
  handleWarehouseChange: PropTypes.func,
  warehousesList: PropTypes.array,
};
export default NpWarehouseDeliveryFormCheckout;
