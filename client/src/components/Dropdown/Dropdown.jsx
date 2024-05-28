import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ChevronUp from '../svg/ChevronUp/ChevronUp';
import ChevronDown from '../svg/ChevronDown/ChevronDown';
import styles from './Dropdown.module.scss';

const Dropdown = ({id, placeholder, name, inner}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={styles.dropdown} data-testid='Dropdown'>
      <button
        data-path={name}
        id={id}
        onClick={toggleIsOpen}
        className={styles.dropdownRightBtn}
      >
        <span className={styles.dropdownText}>{placeholder}</span>
        <div className={styles.chevron}>
          {!isOpen ? <ChevronDown /> : <ChevronUp />}
        </div>
      </button>
      <div
        data-target={name}
        //          className={styles.description}
        className={`${styles.description} ${isOpen ? styles.show : ''}`}
      >
        {inner}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inner: PropTypes.any,
};

export default Dropdown;
