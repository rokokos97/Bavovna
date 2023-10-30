import React, {useState} from 'react';
import styles from './textField.module.scss';
import disabledStyles from './textFieldDisabled.module.scss';
import PropTypes from 'prop-types';
import ShowPasswordIcon from '../../svg/showPasswordIcon/showPasswordIcon';
import HidePasswordIcon from '../../svg/hidePasswordIcon/hidePasswordIcon';
import CleatFormIcon from '../../svg/cleatFormIcon/cleatFormIcon';

const TextField = ({label, name, type, value, onChange, onBlur, error, touched, placeholder, disabled}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const clearInput = () => {
    onChange({target: {value: '', name: name}});
  };
  return (
    <div className={`${styles.textField} ${touched && error? styles.hasError: ''}`} data-testid="TextField">
      <label
        htmlFor={name}
        className={disabled? disabledStyles.label : styles.label}
      >
        {label}
        <span>*</span>
      </label>
      <div className={disabled? disabledStyles.inputBlock :styles.inputBlock}>
        <input
          disabled={disabled}
          id={name}
          name={name}
          type={showPassword ? 'text' : type}
          placeholder={(type==='password' && disabled)? 'Enter current password before': placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          autoComplete='off'
        />
        {value && type!=='password' && (
          <button
            type='button'
            onClick={clearInput}
          >
            <CleatFormIcon/>
          </button>
        )}
        {type === 'password' && value &&(
          <button
            type='button'
            onClick={toggleShowPassword}>
            {!showPassword ?
              <ShowPasswordIcon/> :
              <HidePasswordIcon/>
            }
          </button>
        )}
      </div>
      {touched && error ? (
          <div className={styles.error}>{error}</div>
        ) : null}
    </div>
  );
};
TextField.defaultProps = {
  type: 'text',
};
TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  style: PropTypes.string,
  disabled: PropTypes.bool,
};
export default TextField;
