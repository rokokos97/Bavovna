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
      {id === 'rightArrowDropdown' ?
      (<button
        data-path={name}
        id={id}
        onClick={toggleIsOpen}
        className={styles.dropdownRightBtn}
      >
        {placeholder}
        {!isOpen ? <ChevronDown /> : <ChevronUp />}
      </button>) :
            (<button
              data-path={name}
              id={id}
              onClick={toggleIsOpen}
              className={styles.dropdownLeftBtn}
            >
              {!isOpen ? <ChevronDown /> : <ChevronUp />}
              {placeholder}
            </button>)
      }
      {isOpen && (
        <div data-target={name} className={styles.description}>
          {inner}
        </div>
      )}
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
