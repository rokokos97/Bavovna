import React from 'react';
import PropTypes from 'prop-types';
import styles from './AsideHelpBlock.module.scss';

const AsideHelpBlock = ({helps, selectedHelpId, handleHelpSelect}) => {
  return (
    <div className={styles.aside}>
      <ul className={styles.asideList}>
        {helps.map((help) => (
          <li key={help.id} onClick={() => handleHelpSelect(help.id)}>
            <span
              className={
                help.id === selectedHelpId ? styles.selected : styles.unselected
              }
            >
              {help.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

AsideHelpBlock.propTypes = {
  helps: PropTypes.array,
  selectedHelpId: PropTypes.number,
  handleHelpSelect: PropTypes.func,
};

export default AsideHelpBlock;
