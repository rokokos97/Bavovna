import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';

import styles from './SizeList.module.scss';

const allSizes = [
  {size: 'xs', available: false},
  {size: 's', available: false},
  {size: 'm', available: false},
  {size: 'l', available: false},
  {size: 'xl', available: false},
];

const SizesList = ({sizes}) => {
  let [selectedSize, setSelectedSize] = useState('');

  const correctSizes = allSizes.map((item) =>
    sizes.includes(item.size) ? {...item, available: true} : item,
  );

  const handleChange = (event) => {
    setSelectedSize((selectedSize = event.target.value));
  };

  return (
    <>
      <span>Size: {selectedSize}</span>
      <ul className={styles.sizeList}>
        {correctSizes.map((item) => (
          <li key={item.size} className={styles.sizeListItem}>
            <input
              type="radio"
              name="size"
              value={item.size}
              id={item.size}
              onChange={handleChange}
              disabled={!item.available}
            />
            <label htmlFor={item.size}>{item.size}</label>
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
