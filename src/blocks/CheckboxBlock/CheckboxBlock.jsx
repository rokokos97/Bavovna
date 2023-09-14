import React from 'react';
import PropTypes from 'prop-types';
import styles from './CheckboxBlock.module.scss';

const CheckboxBlock = ({value, label}) => {
  return (
    <div className={styles.checkbox}>
      <input
        type='checkbox'
        name={value}
        id={value}
        className={styles.checkboxInput}
      />
      <label htmlFor={value} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
};

CheckboxBlock.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
};

export default CheckboxBlock;
