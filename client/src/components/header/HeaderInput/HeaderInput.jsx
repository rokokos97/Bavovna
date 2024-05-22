import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {SearchContext} from '../../../App/App';
import useDeviceDetect from '../../../utils/useDeviceDetect';
import SearchIcon from '../../svg/SearchIcon/SearchIcon';
import CloseIcon from '../../svg/CloseIcon/CloseIcon';
import ChevronLeft from '../../svg/ChevronLeft/ChevronLeft';
import styles from './HeaderInput.module.scss';

const HeaderInput = ({handleIsSearch}) => {
  const {searchValue, setSearchValue} = useContext(SearchContext);
  const {isMobile} = useDeviceDetect();

  const onCloseSearch = () => {
    handleIsSearch();
    setSearchValue('');
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.newsLetterBlock__inputSection}>
        {isMobile ? (
          <button
            type='button'
            onClick={onCloseSearch}
            className={styles.chevronLeftBtn}
          >
            <ChevronLeft />
          </button>
        ) : (
          <SearchIcon />
        )}
        <input
          value={searchValue}
          type='text'
          placeholder='Search'
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
      {isMobile ? ( searchValue ?
        <button
          className={styles.closeIcon}
          type='button'
          aria-label='Clears the search input'
          onClick={() => setSearchValue('')}
        >
          <CloseIcon />
        </button> : null
      ) : (
        <button
          className={styles.closeIcon}
          type='button'
          aria-label='Closes the search input'
          onClick={onCloseSearch}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

HeaderInput.propTypes = {
  handleIsSearch: PropTypes.func,
};

export default HeaderInput;
