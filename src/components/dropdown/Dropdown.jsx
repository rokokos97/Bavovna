import React, {useState} from 'react';
import {BiChevronDown, BiChevronUp} from 'react-icons/bi';
import PropTypes from 'prop-types';
// import {useClickOutside} from '../../services/useClickOutside';
import styles from './Dropdown.module.scss';

const Dropdown = ({id, label, name, inner}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const dropdownRef = useRef(null);
  // useClickOutside(dropdownRef, () => {
  //   setIsOpen(false);
  // });

  return (
    <div className="dropdown">
      <button
        data-path={name}
        id={id}
        onClick={() => setIsOpen(!isOpen)}
        className={styles.dropdownBtn}
      >
        {label}
        {!isOpen ? (
          <BiChevronDown className={styles.icon} />
        ) : (
          <BiChevronUp className={styles.icon} />
        )}
      </button>
      {isOpen && (
        <div data-target={name} className={styles.description}>
          <p>{inner}</p>
        </div>
      )}
    </div>
  );
};
Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inner: PropTypes.string.isRequired,
};

export {Dropdown};
