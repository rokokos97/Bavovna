import React from 'react';
import styles from './novaPoshtaWarehouseForm.module.scss';
import SelectField from '../../formFields/selectField/selectField';
import PropTypes from 'prop-types';

const NovaPoshtaWarehouseForm = ({
  handleSubmit,
  handleCityChange,
  citiesList,
  handleWarehouseChange,
  warehousesList,
  formik,
}) => (
  <form
    onSubmit={handleSubmit}
    className={styles.novaPoshtaWarehouseForm}
    data-testid="NovaPoshtaWarehouseForm"
  >
    <SelectField
      label='City'
      name='city'
      onChange={handleCityChange}
      defaultValue={{label: 'Select a city', value: ''}}
      options={citiesList? citiesList: []}
    />
    <SelectField
      label='Post office'
      name='warehouse'
      onChange={handleWarehouseChange}
      defaultValue={{label: 'Select a post office', value: ''}}
      options={warehousesList}
    />
  </form>
);
NovaPoshtaWarehouseForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleCityChange: PropTypes.func,
  citiesList: PropTypes.array,
  handleWarehouseChange: PropTypes.func,
  warehousesList: PropTypes.array,
  formik: PropTypes.object,
};

export default NovaPoshtaWarehouseForm;
