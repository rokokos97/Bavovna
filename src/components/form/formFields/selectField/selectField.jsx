import React from 'react';
import styles from './selectField.module.scss';
import Select from 'react-select';
import PropTypes from 'prop-types';


const SelectField = ({defaultValue, onChange, options, label, error}) => {
  return (
    <div className={styles.selectField} data-testid="SelectField">
      <p className={styles.label}>{label}
        <span>
                 *
        </span>
      </p>
      <Select
        autoComplete='off'
        classNamePrefix='custom'
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
      />
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : null}
    </div>
  );
};
SelectField.propTypes = {
  defaultValue: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.object,
};
export default SelectField;
