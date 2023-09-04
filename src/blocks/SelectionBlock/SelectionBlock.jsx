import React from 'react';
import PropTypes from 'prop-types';
import FilterIcon from '../../components/svg/filterIcon/filterIcon';
import SortIcon from '../../components/svg/sortIcon/sortIcon';

import styles from './SelectionBlock.module.scss';

const SelectionBlock = ({isFilter, setIsFilter}) => {
  return (
    <div className={styles.selection}>
      <button className={styles.iconBtn} onClick={() => setIsFilter(!isFilter)}>
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

SelectionBlock.propTypes = {
  setIsFilter: PropTypes.func,
  isFilter: PropTypes.bool,
};

export default SelectionBlock;
