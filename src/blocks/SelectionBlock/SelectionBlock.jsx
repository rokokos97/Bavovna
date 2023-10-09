import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilterIcon from '../../components/svg/filterIcon/filterIcon';
import SortIcon from '../../components/svg/sortIcon/sortIcon';

import styles from './SelectionBlock.module.scss';

const SelectionBlock = ({handlerIsFilter, setSelectedSort}) => {
  const [sortIsOpen, setSortIsOpen] = useState(false);
  const sortList = [
    {new: 'New Arrivals'},
    {best: 'Best Selling'},
    {low: 'Price Low to Hight'},
    {hight: 'Price Hight to Low'},
  ];
  const onChangeIsSort = () => {
    setSortIsOpen((prevValue) => !prevValue);
  };
  const handleOptionClick = (option) => {
    setSelectedSort(option);
    onChangeIsSort();
  };

  return (
    <div className={styles.selection}>
      <button className={styles.iconBtn} onClick={handlerIsFilter}>
        <FilterIcon />
        Filter
      </button>
      <div className={styles.sortBlock}>
        <button className={styles.iconBtn} onClick={onChangeIsSort}>
          Sort by
          <SortIcon />
        </button>
        {sortIsOpen && (
          <div className={styles.sortPopup}>
            <ul>
              {sortList.map((option, index) => (
                <li
                  key={index}
                  className={styles.activeName}
                  onClick={() => handleOptionClick(Object.keys(option)[0])}
                >
                  {Object.values(option)[0]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

SelectionBlock.propTypes = {
  handlerIsFilter: PropTypes.func,
  setSelectedSort: PropTypes.func,
};

export default SelectionBlock;
