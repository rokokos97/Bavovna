import React from 'react';
import CloseIcon from '../../components/svg/closeIcon/CloseIcon';
import Dropdown from '../../components/dropdown/Dropdown';
import CheckboxBlock from '../CheckboxBlock/CheckboxBlock';
import {useDataCatalogue} from '../../Providers/CatalogueMasterProvider';
import {filtersValues} from '../../services/filtersValues.service';
import styles from './FilterSelectionBlock.module.scss';

const FilterSelectionBlock = () => {
  const {changeIsFilter} = useDataCatalogue();

  const {categoryValues, sizeValues, colorValues, availabilityValues} =
    filtersValues;

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
            inner={categoryValues.map((categoryValue, index) => (
              <CheckboxBlock
                key={index}
                value={categoryValue.value}
                label={categoryValue.label}
                option='category'
              />
            ))}
          />
          <Dropdown
            id='size'
            placeholder='Size'
            name='size'
            inner={sizeValues.map((sizeValue, index) => (
              <CheckboxBlock
                key={index}
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
            inner={colorValues.map((colorValue, index) => (
              <CheckboxBlock
                key={index}
                id='isColor'
                value={colorValue.value}
                label={colorValue.label}
                option='color'
              />
            ))}
          />
          <Dropdown
            id='availability'
            placeholder='Availability'
            name='availability'
            inner={availabilityValues.map((availabilityValue, index) => (
              <CheckboxBlock
                key={index}
                value={availabilityValue.value}
                label={availabilityValue.label}
                option='availability'
              />
            ))}
          />
        </div>
        <div className={styles.checkboxBlock}>
          <CheckboxBlock value='new' label='NEW' />
          <CheckboxBlock value='sale' label='SALE' />
        </div>
        <button type='button' className={styles.filterBtn}>
          <span>Clean filter</span>
        </button>
      </div>
    </div>
  );
};

export default FilterSelectionBlock;
