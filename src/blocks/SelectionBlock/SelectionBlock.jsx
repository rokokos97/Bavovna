import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilterIcon from '../../components/svg/filterIcon/filterIcon';
import SortIcon from '../../components/svg/sortIcon/sortIcon';

import styles from './SelectionBlock.module.scss';

const SelectionBlock = ({handlerIsFilter}) => {
  const [sortIsOpen, setSortIsOpen] = useState(false);
  const sortList = [
    'New Arrivals',
    'Best Selling',
    'Price Low to Hight',
    'Price Hight to Low',
  ];
  const onToggleSortIsOpen = () => {
    setSortIsOpen(!sortIsOpen);
  };

  return (
    <div className={styles.selection}>
      <button className={styles.iconBtn} onClick={handlerIsFilter}>
        <FilterIcon />
        Filter
      </button>
      <div className={styles.sortBlock}>
        <button className={styles.iconBtn} onClick={onToggleSortIsOpen}>
          Sort by
          <SortIcon />
        </button>
        {sortIsOpen && (
          <div className={styles.sortPopup}>
            <ul>
              {sortList.map((name, index) => (
                <li key={index} className={styles.activeName}>
                  {name}
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
};

export default SelectionBlock;
