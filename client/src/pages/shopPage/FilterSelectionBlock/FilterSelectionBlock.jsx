import React from 'react';
import CloseIcon from '../../../components/svg/CloseIcon/CloseIcon';
import Dropdown from '../../../components/Dropdown/Dropdown';
import CheckboxBlock from '../CheckboxBlock/CheckboxBlock';
import { useDataShopPage } from '../../../providers/ShopPageMasterProvider';
import { filtersValues } from '../../../services/filtersValues.service';
import styles from './FilterSelectionBlock.module.scss';
import useDeviceDetect from '../../../utils/useDeviceDetect';
import PropTypes from 'prop-types';

const FilterSelectionBlock = ({ isFilter }) => {
  const { isMobile } = useDeviceDetect();
  const { changeIsFilter, handleCleanFilter, categories, colors } = useDataShopPage();

  const { sizeValues, statusValues } = filtersValues;
  return (
    <div className={styles.filterContainer} data-testid="FilterSelectionBlock">
      <div className={styles.filterSelection}>
        <div className={styles.closeIcon} onClick={changeIsFilter}>
          <CloseIcon />
        </div>
        <div className={styles.selectsContainer}>
          {categories && (
            <Dropdown
              id="category"
              placeholder="Category"
              name="category"
              inner={categories.map((category) => (
                <CheckboxBlock
                  key={category._id}
                  id={category._id}
                  value={category._id}
                  label={category.name}
                  option="category"
                />
              ))}
            />
          )}
          {sizeValues && (
            <Dropdown
              id="size"
              placeholder="Size"
              name="size"
              inner={sizeValues.map((sizeValue) => (
                <CheckboxBlock
                  key={sizeValue.value}
                  id={sizeValue.value}
                  value={sizeValue.value}
                  label={sizeValue.label}
                  option="size"
                />
              ))}
            />
          )}
          {colors && (
            <Dropdown
              id="color"
              placeholder="Color"
              name="color"
              inner={colors.map((color) => (
                <CheckboxBlock
                  key={color._id}
                  id={color._id}
                  value={color.value}
                  label={color.name}
                  option="color"
                />
              ))}
            />
          )}
          {/* <Dropdown
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
          /> */}
        </div>
        <div className={styles.checkboxBlock}>
          {statusValues.map((statusValue) => (
            <CheckboxBlock
              key={statusValue.value}
              id={statusValue.value}
              value={statusValue.value}
              label={statusValue.label}
              option="status"
            />
          ))}
        </div>
        {isFilter && isMobile ? (
          <button type="button" className={styles.filterButtonMobile} onClick={changeIsFilter}>
            <span>view products</span>
          </button>
        ) : (
          <button type="button" className={styles.filterBtn} onClick={handleCleanFilter}>
            <span>clean filter</span>
          </button>
        )}
      </div>
    </div>
  );
};

FilterSelectionBlock.propTypes = {
  isFilter: PropTypes.bool,
};

export default FilterSelectionBlock;
