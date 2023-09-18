import React from 'react';
import PropTypes from 'prop-types';
import {useData} from '../../Providers/CardMasterProvider';
import styles from './ColorsList.module.scss';

const noColor = 'Choose a color';

const ColorsList = ({colors}) => {
  let {selectedColor, setSelectedColor} = useData();

  const handleChange = (event) => {
    setSelectedColor((selectedColor = event.target.id));
  };

  return (
    <>
      <pre>
        Color:&nbsp;
        {!selectedColor ? (
          <span style={{color: 'rgb(255, 0, 0)'}}>{noColor}</span>
        ) : (
          <span>{selectedColor}</span>
        )}
      </pre>
      <ul className={styles.colorList}>
        {colors.map((color) => (
          <li key={color.name} className={styles.colorListItem}>
            <input
              type='radio'
              name='color'
              value={color.value}
              id={color.name}
              onChange={handleChange}
            />
            <label
              style={{backgroundColor: `${color.value}`}}
              htmlFor={color.name}
            ></label>
          </li>
        ))}
      </ul>
    </>
  );
};

ColorsList.propTypes = {
  colors: PropTypes.array.isRequired,
};

export default ColorsList;
