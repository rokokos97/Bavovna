import React, { useState } from 'react';
import styles from './TextField.module.scss';
import disabledStyles from './TextFieldDisabled.module.scss';
import PropTypes from 'prop-types';
import CleatFormIcon from '../../../svg/ClearFormIcon/CleatFormIcon';
import ShowPasswordIcon from '../../../svg/passwordIcons/ShowPasswordIcon/ShowPasswordIcon';
import HidePasswordIcon from '../../../svg/passwordIcons/HidePasswordIcon/HidePasswordIcon';
const TextField = ({
  label,
  name,
  type,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  disabled,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const clearInput = () => {
    onChange({ target: { value: '', name: name } });
  };
  const isFieldTouched = () => {
    return touched && touched[name];
  };
  return (
    <div
      className={`${styles.textField} ${error && isFieldTouched() ? styles.hasError : ''}`}
      data-testid="TextField"
    >
      <label htmlFor={name} className={disabled ? disabledStyles.label : styles.label}>
        {label}
        <span>{label ? '*' : ''}</span>
      </label>
      <div className={disabled ? disabledStyles.inputBlock : styles.inputBlock}>
        <input
          disabled={disabled}
          id={name}
          name={name}
          type={showPassword ? 'text' : type}
          placeholder={
            type === 'password' && disabled ? 'Enter current password before' : placeholder
          }
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          autoComplete="off"
        />
        {value && type !== 'password' && (
          <button
            aria-label="clear input"
            className={styles.clearButton}
            type="button"
            onClick={clearInput}
          >
            <CleatFormIcon />
          </button>
        )}
        {type === 'password' && value && (
          <button aria-label="show/hide password" type="button" onClick={toggleShowPassword}>
            {!showPassword ? <ShowPasswordIcon /> : <HidePasswordIcon />}
          </button>
        )}
      </div>
      {error && isFieldTouched() ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};
TextField.defaultProps = {
  type: 'text',
};
TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  touched: PropTypes.object,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
export default TextField;
