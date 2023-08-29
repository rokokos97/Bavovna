import React from 'react';
import FilterIcon from '../../components/svg/filterIcon/filterIcon';
import SortIcon from '../../components/svg/sortIcon/sortIcon';

import styles from './SelectionBlock.module.scss';

const SelectionBlock = () => {
  return (
    <div className={styles.selection}>
      <button className={styles.iconBtn}>
        <FilterIcon></FilterIcon>
        Filter
      </button>
      <button className={styles.iconBtn}>
        Sort by
        <SortIcon></SortIcon>
      </button>
    </div>
  );
};

export default SelectionBlock;
