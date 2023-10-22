import React from 'react';
import {NavLink} from 'react-router-dom';
import {helps} from '../../services/helps.service';
// import PropTypes from 'prop-types';
import styles from './AsideHelpBlock.module.scss';

const AsideHelpBlock = () => {
  return (
    <div className={styles.aside}>
      <ul className={styles.asideList}>
        {helps.map((help) => (
          <li key={help.id} className={styles.help}>
            <NavLink
              to={help.path}
              className={({isActive}) =>
                isActive ? styles.active : styles.unactive
              }
            >
              {help.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

// AsideHelpBlock.propTypes = {
//   helps: PropTypes.array,
//   selectedHelpId: PropTypes.number,
//   handleHelpSelect: PropTypes.func,
// };

export default AsideHelpBlock;
