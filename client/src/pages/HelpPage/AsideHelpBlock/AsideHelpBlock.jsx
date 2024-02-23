import React from 'react';
import {NavLink} from 'react-router-dom';
import {helps} from '../helps.service';
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

export default AsideHelpBlock;
