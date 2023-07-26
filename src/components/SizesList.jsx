import React from 'react';
import {useState} from 'react';

const SizesList = ({sizes}) => {
  let [selectedSize, setSelectedSize] = useState('');

  const handleChange = (event) => {
    setSelectedSize((selectedSize = event.target.value));
  };

  return (
    <>
      <ul className="size-list">
        {sizes.map((size) => (
          <li key={size} className="size-list__item">
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

export {SizesList};
