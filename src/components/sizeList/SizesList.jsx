import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';

import styles from './SizeList.module.scss';

const allSizes = ['xs', 's', 'm', 'l', 'xl'];

const SizesList = ({sizes}) => {
  let [selectedSize, setSelectedSize] = useState('');

  const handleChange = (event) => {
    setSelectedSize((selectedSize = event.target.value));
  };

  return (
    <>
      <span>Size: {selectedSize}</span>
      <ul className={styles.sizeList}>
        {allSizes.map((size) => (
          <li key={size} className={styles.sizeListItem}>
            <input
              type="radio"
              name="size"
              value={size}
              id={size}
              onChange={handleChange}
              disabled={!sizes.includes(size)}
            />
            <label htmlFor={size}>{size}</label>
          </li>
        ))}
      </ul>
    </>
  );
};
SizesList.propTypes = {
  sizes: PropTypes.array.isRequired,
};

export {SizesList};
