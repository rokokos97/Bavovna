import React from 'react';
import PropTypes from 'prop-types';
import styles from './AsideHelpBlock.module.scss';

const AsideHelpBlock = ({selectedHelp, handleHelpSelect}) => {
  const helps = [
    'Delivery information',
    'Return information',
    'Payment',
    'FAQ',
    'Cookies settings',
    'Privacy policy',
  ];

  return (
    <div className={styles.aside}>
      <ul className={styles.asideList}>
        {helps.map((help, index) => (
          <li key={index} onClick={() => handleHelpSelect(index)}>
            <span
              className={
                index === selectedHelp ? styles.selected : styles.unselected
              }
            >
              {help}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

AsideHelpBlock.propTypes = {
  selectedHelp: PropTypes.number,
  handleHelpSelect: PropTypes.func,
};

export default AsideHelpBlock;
