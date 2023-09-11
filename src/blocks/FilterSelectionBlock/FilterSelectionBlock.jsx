import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../components/svg/closeIcon/CloseIcon';
import styles from './FilterSelectionBlock.module.scss';

const FilterSelectionBlock = ({setIsFilter}) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterSelection}>
        <div className={styles.closeIcon} onClick={() => setIsFilter(false)}>
          <CloseIcon />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, ea.
        </p>
        <div className={styles.filtersBlock}></div>
      </div>
    </div>
  );
};

FilterSelectionBlock.propTypes = {
  setIsFilter: PropTypes.func,
};

export default FilterSelectionBlock;
