import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilterIcon from '../../components/svg/filterIcon/filterIcon';
import SortIcon from '../../components/svg/sortIcon/sortIcon';

import styles from './SelectionBlock.module.scss';

const SelectionBlock = ({handlerIsFilter, handlerSortBy}) => {
  const [isSort, setIsSort] = useState(false);
  const sortList = [
    {new: 'New Arrivals'},
    {best: 'Best Selling'},
    {low: 'Price Low to Hight'},
    {hight: 'Price Hight to Low'},
  ];
  const onToggleIsSort = () => {
    setIsSort(!isSort);
  };

  const onClickToSort = (sortBy) => {
    handlerSortBy(sortBy);
  };

  return (
    <div className={styles.selection}>
      <button className={styles.iconBtn} onClick={handlerIsFilter}>
        <FilterIcon />
        Filter
      </button>
      <div className={styles.sortBlock}>
        <button className={styles.iconBtn} onClick={onToggleIsSort}>
          Sort by
          <SortIcon />
        </button>
        {isSort && (
          <div className={styles.sortPopup}>
            <ul>
              {sortList.map((item, index) => (
                <li key={index} className={styles.activeName} onClick={() => onClickToSort(Object.keys(item)[0])}>
                  {Object.values(item)[0]}
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
  handlerSortBy: PropTypes.func,
};

export default SelectionBlock;
