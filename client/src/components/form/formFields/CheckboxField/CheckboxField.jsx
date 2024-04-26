import React from 'react';
import styles from './CheckboxField.module.scss';
import PropTypes from 'prop-types';

const CheckboxField = ({name, value, onChange, error, children}) => {
  return (
    <section className={`${styles.checkboxField} ${error? styles.hasError: ''}`} data-testid="CheckboxField">
      <div className={styles.checkbox}>
        <input
          title = {name}
          aria-label={`checkbox ${name}`}
          type='checkbox'
          id={name}
          name={name}
          onChange={onChange}
          value={value}/>
        <label
          htmlFor="license"
        >
          {children}
        </label>
      </div>
      {error ? (
        <p className={styles.error}>{error}</p>
      ) : null}
    </section>
  );
};
CheckboxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  error: PropTypes.string,
};

export default CheckboxField;
