import React from 'react';
import styles from './CheckboxField.module.scss';
import PropTypes from 'prop-types';
import {useDataShopPage} from '../../../../providers/ShopPageMasterProvider';

const CheckboxField = ({name, value, onChange, error, children, id, option, label}) => {
  const {handleFilterChange, selectedFilters} = useDataShopPage();
  const handleOnChange = (e) => {
    handleFilterChange(option, e.target.id);
  };
  return (
    <section className={`${styles.checkboxField} ${error? styles.hasError: ''}`} data-testid="CheckboxField">
      <div className={styles.checkbox}>
        <input
          title = {name}
          aria-label={`checkbox ${name}`}
          type='checkbox'
          id={id || name}
          name={name}
          checked={selectedFilters[option].includes(id)}
          onChange={onChange && ((e) => handleOnChange(e))}
          value={value}/>
        <label
          htmlFor="license"
        >
          {label}
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
  label: PropTypes.string,
  option: PropTypes.string,
  id: PropTypes.string,
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
