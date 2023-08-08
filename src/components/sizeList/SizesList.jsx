import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';

import styles from './SizeList.module.scss';

const SizesList = ({sizes}) => {
  let [selectedSize, setSelectedSize] = useState('');

  const handleChange = (event) => {
    setSelectedSize((selectedSize = event.target.value));
  };

  return (
    <>
      <ul className={styles.sizeList}>
        {sizes.map((size) => (
          <li key={size} className={styles.sizeListItem}>
            <input
              type="radio"
              name="size"
              value={size}
              id={size}
              onChange={handleChange}
            />
            <label htmlFor={size}>{size}</label>
          </li>
        ))}
      </ul>
      <div>Selected size: {selectedSize}</div>
    </>
  );
};
SizesList.propTypes = {
  sizes: PropTypes.array.isRequired,
};

export {SizesList};
