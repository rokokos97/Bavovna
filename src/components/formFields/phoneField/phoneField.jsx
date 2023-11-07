import React from 'react';
import styles from './phoneField.module.scss';
import PhoneInput from 'react-phone-input-2';
import PropTypes from 'prop-types';

const PhoneField = ({value, phoneNumber, onChange, onBlur, touched, error}) => {
  return (
    <div className={`${styles.phoneField} ${touched && error? styles.hasError: ''}`} data-testid="PhoneField">
      <p className={styles.phoneLabel}>Phone
        <span>
                 *
        </span>
      </p>
      <PhoneInput
        onlyCountries={['ua', 'pl', 'ru', 'cz', 'sk', 'de', 'es', 'it']}
        placeholder={'+38 (067) 123 45 67'}
        country='ua'
        containerClass={styles.phoneInputContainer}
        inputClass={styles.phoneInputInput}
        buttonClass={styles.phoneInputButton}
        dropdownClass={styles.phoneInputDropdown}
        value={value || phoneNumber}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error ? (
        <div className={styles.error}>{error}</div>
      ) : null}
    </div>
  );
};

PhoneField.propTypes = {
  value: PropTypes.string,
  phoneNumber: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  touched: PropTypes.bool,
  error: PropTypes.string,
};

export default PhoneField;
