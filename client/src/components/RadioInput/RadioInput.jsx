import React from 'react';
import styles from './RadioInput.module.scss';
import RadioButtonCheckedIcon from '../svg/radioButtonIcons/RadioButtonCheckedIcon/RadioButtonCheckedIcon';
import RadioButtonEmptyIcon from '../svg/radioButtonIcons/RadioButtonEmptyIcon/RadioButtonEmptyIcon';
import PropTypes from 'prop-types';

const RadioInput = ({ method, currentValue, handleChangeCurrentValue }) => {
  return (
    <section key={method._id} className={styles.radioOption}>
      <input
        id={method._id}
        type="radio"
        name="customRadio"
        value={method.value}
        checked={currentValue === method._id}
        className={styles.radioInput}
        onChange={() => {}}
      />
      <label
        htmlFor={method._id}
        className={styles.radioLabel}
        onClick={() => handleChangeCurrentValue(method._id)}
      >
        <div
          onClick={() => handleChangeCurrentValue(method._id)}
          className={styles.radioLabel__radioButton}
        >
          {currentValue === method._id ? <RadioButtonCheckedIcon /> : <RadioButtonEmptyIcon />}
        </div>
        <div>{method.label}</div>
      </label>
      {currentValue === method._id ? (
        <div className={styles.radioInput__value}>{method.value}</div>
      ) : null}
    </section>
  );
};
RadioInput.propTypes = {
  method: PropTypes.object,
  currentValue: PropTypes.string,
  handleChangeCurrentValue: PropTypes.func,
};
export default RadioInput;
