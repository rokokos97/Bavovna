import React from 'react';
import CloseIcon from '../../../components/svg/CloseIcon/CloseIcon';
import Dropdown from '../../../components/Dropdown/Dropdown';
import CheckboxBlock from '../CheckboxBlock/CheckboxBlock';
import {useDataShopPage} from '../../../providers/ShopPageMasterProvider';
import {filtersValues} from '../../../services/filtersValues.service';
import styles from './FilterSelectionBlock.module.scss';

const FilterSelectionBlock = () => {
  const {changeIsFilter, handleCleanFilter, categories, colors} =
    useDataShopPage();

  const {sizeValues, availabilityValues, statusValues} = filtersValues;

  return (
    <div className={styles.filterContainer} data-testid='FilterSelectionBlock'>
      <div className={styles.filterSelection}>
        <div className={styles.closeIcon} onClick={changeIsFilter}>
          <CloseIcon />
        </div>
        <div className={styles.selectsContainer}>
          <Dropdown
            id='category'
            placeholder='Category'
            name='category'
            inner={categories.map((category) => (
              <CheckboxBlock
                key={category._id}
                id={category._id}
                value={category._id}
                label={category.name}
                option='category'
              />
            ))}
          />
          <Dropdown
            id='size'
            placeholder='Size'
            name='size'
            inner={sizeValues.map((sizeValue) => (
              <CheckboxBlock
                key={sizeValue.value}
                id={sizeValue.value}
                value={sizeValue.value}
                label={sizeValue.label}
                option='size'
              />
            ))}
          />
          <Dropdown
            id='color'
            placeholder='Color'
            name='color'
            inner={colors.map((color) => (
              <CheckboxBlock
                key={color._id}
                id={color._id}
                value={color.value}
                label={color.name}
                option='color'
              />
            ))}
          />
          <Dropdown
            id='availability'
            placeholder='Availability'
            name='availability'
            inner={availabilityValues.map((availabilityValue) => (
              <CheckboxBlock
                key={availabilityValue.value}
                id={availabilityValue.value}
                value={availabilityValue.value}
                label={availabilityValue.label}
                option='status'
              />
            ))}
          />
        </div>
        <div className={styles.checkboxBlock}>
          {statusValues.map((statusValue) => (
            <CheckboxBlock key={statusValue.value} id={statusValue.value} value={statusValue.value} label={statusValue.label} option='status'/>
          ))}
        </div>
        <button
          type='button'
          className={styles.filterBtn}
          onClick={handleCleanFilter}
        >
          <span>Clean filter</span>
        </button>
      </div>
    </div>
  );
};

export default FilterSelectionBlock;
