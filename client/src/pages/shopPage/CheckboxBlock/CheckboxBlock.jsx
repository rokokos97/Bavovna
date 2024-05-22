import React from 'react';
import PropTypes from 'prop-types';
import {useDataShopPage} from '../../../providers/ShopPageMasterProvider';

import styles from './CheckboxBlock.module.scss';

const CheckboxBlock = ({value, label, option, id}) => {
  console.log(value, label, option, id);
  const {handleFilterChange, selectedFilters} = useDataShopPage();

  const handleOnChange = (e) => {
    handleFilterChange(option, e.target.id);
  };

  return (
    <div className={styles.checkbox} data-testid='CheckboxBlock'>
      <input
        type='checkbox'
        name={value}
        id={id}
        className={styles.checkboxInput}
        checked={selectedFilters[option].includes(id)}
        onChange={(e) => handleOnChange(e)}
      />
      <label htmlFor={id} className={styles.checkboxLabel}>
        {option === 'color' && (
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              marginRight: '0.8rem',
              backgroundColor: `${value}`,
              border: '0.05rem solid #040404',
              cursor: 'pointer',
            }}
          ></div>
        )}
        {label}
      </label>
    </div>
  );
};

CheckboxBlock.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  option: PropTypes.string,
  id: PropTypes.string,
};

export default CheckboxBlock;
