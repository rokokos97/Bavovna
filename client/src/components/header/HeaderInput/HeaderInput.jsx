import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {SearchContext} from '../../../App/App';
import SearchIcon from '../../svg/SearchIcon/SearchIcon';
import CloseIcon from '../../svg/CloseIcon/CloseIcon';
import styles from './HeaderInput.module.scss';

const HeaderInput = ({handleIsSearch}) => {
  const {searchValue, setSearchValue} = useContext(SearchContext);

  const onCloseSearch = () => {
    handleIsSearch();
    setSearchValue('');
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.input}>
        <SearchIcon />
        <input
          value={searchValue}
          type='text'
          placeholder='Search'
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
      </div>
      <button
        className={styles.closeIcon}
        type='button'
        onClick={onCloseSearch}
      >
        <CloseIcon />
      </button>
    </div>
  );
};

HeaderInput.propTypes = {
  handleIsSearch: PropTypes.func,
};

export default HeaderInput;
