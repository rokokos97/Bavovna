import React from 'react';
import styles from './TextAreaField.module.scss';
import PropTypes from 'prop-types';

const TextAreaField = ({label, name, value, onChange, onBlur, error, placeholder, disabled, type}) => {
  return (
    <div className={`${styles.textAreaField} ${error? styles.hasError: ''}`} data-testid="TextAreaField">
      <label
        htmlFor={name}
        className={styles.label}
      >
        {label}
        <span>*</span>
      </label>
      <div
      >
        <textarea
          type={type}
          className={styles.textarea}
          disabled={disabled}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          autoComplete='off'
        />
      </div>
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : null}
    </div>
  );
};
TextAreaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default TextAreaField;
