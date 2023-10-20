import React from 'react';
import styles from './selectField.module.scss';
import Select from 'react-select';
import PropTypes from 'prop-types';


const SelectField = ({defaultValue, onChange, options}) => {
  return (
    <div className={styles.selectField} data-testid="SelectField">
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
      />
    </div>
  );
};
SelectField.propTypes = {
  defaultValue: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
export default SelectField;
