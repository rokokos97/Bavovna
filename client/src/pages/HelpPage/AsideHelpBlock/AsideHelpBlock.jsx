import React from 'react';
import {NavLink} from 'react-router-dom';
import {helps} from '../helps.service';
import ChevronUp from '../../../components/svg/ChevronUp/ChevronUp';
import useDeviceDetect from '../../../utils/useDeviceDetect';
import styles from './AsideHelpBlock.module.scss';

const AsideHelpBlock = () => {
  const {isMobile} = useDeviceDetect();
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
              <div className={styles.helpField}>
                {help.name}
                {isMobile && (
                  <div className={styles.helpChevron}>
                    <ChevronUp />
                  </div>
                )}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsideHelpBlock;
