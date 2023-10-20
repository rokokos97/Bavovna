import React, {useState} from 'react';
import FilterIcon from '../../components/svg/filterIcon/filterIcon';
import SortIcon from '../../components/svg/sortIcon/sortIcon';
import {useDataCatalogue} from '../../Providers/CatalogueMasterProvider';

import styles from './SelectionBlock.module.scss';

const SelectionBlock = () => {
  const {changeIsFilter, onSortItems} = useDataCatalogue();
  const [isSort, setIsSort] = useState(false);

  const sortList = [
    {new: 'New Arrivals'},
    {best: 'Best Selling'},
    {lowToHigh: 'Price Low to Hight'},
    {highToLow: 'Price Hight to Low'},
  ];

  const onToggleIsSort = () => {
    setIsSort(!isSort);
  };

  const closeIsSort = () => {
    setIsSort(false);
  };

  const onClickToSort = (sortBy) => {
    onSortItems(sortBy);
    closeIsSort();
  };

  const handleMouseLeave = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsSort(false);
    }
  };

  return (
    <div className={styles.selection} data-testid='SelectionBlock'>
      <button className={styles.iconBtn} onClick={changeIsFilter}>
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
            <ul onMouseLeave={handleMouseLeave}>
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

export default SelectionBlock;
