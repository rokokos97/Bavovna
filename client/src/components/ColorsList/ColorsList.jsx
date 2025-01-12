import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getColors, getColorsLoadingStatus } from '../../store/colorsSlice';
import { useDataCard } from '../../providers/CardMasterProvider';
import styles from './ColorsList.module.scss';

const noColor = 'Choose a color';

const ColorsList = ({ itemColors, selectedColor, setSelectedColor }) => {
  const { itemData, setItemData } = useDataCard();
  const isColorLoaded = useSelector(getColorsLoadingStatus);
  const allColors = useSelector(getColors);

  const handleChange = (event) => {
    setSelectedColor(event.target.id);
    setItemData({ ...itemData, itemColor: event.target.value });
  };

  return (
    <>
      <pre>
        Color:&nbsp;
        {!selectedColor ? (
          <span style={{ color: 'rgb(255, 0, 0)' }}>{noColor}</span>
        ) : (
          <span>{selectedColor}</span>
        )}
      </pre>
      <ul className={styles.colorList}>
        {!isColorLoaded &&
          allColors.map((color) => (
            <li key={color.name} className={styles.colorListItem}>
              <input
                type="radio"
                name="color"
                value={color.value}
                id={color.name}
                onChange={handleChange}
                disabled={!itemColors.includes(color._id)}
              />
              <label style={{ backgroundColor: `${color.value}` }} htmlFor={color.name}></label>
            </li>
          ))}
      </ul>
    </>
  );
};

ColorsList.propTypes = {
  itemColors: PropTypes.array.isRequired,
  selectedColor: PropTypes.string,
  setSelectedColor: PropTypes.func,
};

export default ColorsList;
