import React from 'react';
import PropTypes from 'prop-types';
import { useDataCard } from '../../providers/CardMasterProvider';
import { filtersValues } from '../../services/filtersValues.service';

import styles from './SizeList.module.scss';

const noSize = 'Choose a size';

const SizesList = ({ sizes, selectedSize, setSelectedSize }) => {
  const { itemData, setItemData } = useDataCard();
  const { sizeValues } = filtersValues;

  const handleChange = (event) => {
    setSelectedSize(event.target.value);
    setItemData({ ...itemData, itemSize: event.target.value });
  };

  return (
    <>
      <pre>
        Size:&nbsp;
        {!selectedSize ? (
          <span style={{ color: 'rgb(255, 0, 0)' }}>{noSize}</span>
        ) : (
          <span>{selectedSize}</span>
        )}
      </pre>
      <ul className={styles.sizeList}>
        {sizeValues.map((size) => (
          <li key={size.label} className={styles.sizeListItem}>
            <input
              type="radio"
              name="size"
              value={size.value}
              id={size.value}
              onChange={handleChange}
              disabled={!sizes.includes(size.value)}
            />
            <label htmlFor={size.value}>{size.label}</label>
          </li>
        ))}
      </ul>
    </>
  );
};

SizesList.propTypes = {
  sizes: PropTypes.array.isRequired,
  selectedSize: PropTypes.string,
  setSelectedSize: PropTypes.func,
};

export { SizesList };
