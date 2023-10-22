import React, {useState} from 'react';
import styles from './textField.module.scss';
import PropTypes from 'prop-types';
import ShowPasswordIcon from '../../svg/showPasswordIcon/showPasswordIcon';
import HidePasswordIcon from '../../svg/hidePasswordIcon/hidePasswordIcon';

const TextField = ({label, name, type, value, onChange, onBlur, error, touched, placeholder}) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div className={styles.textField} data-testid="TextField">
      <label
        htmlFor={name}
        className={styles.label}
      >
        {label}
        <span>*</span>
      </label>
      <div className={styles.inputBlock}>
        <input
          id={name}
          name={name}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          autoComplete='off'
        />
        {type === 'password' && (
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
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  style: PropTypes.string,
};
export default TextField;
