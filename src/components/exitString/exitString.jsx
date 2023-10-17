import React from 'react';
import styles from './exitString.module.scss';
import ExitIcon from '../svg/exitIcon/exitIcon';

const ExitString = () => (
  <div className={styles.exitString} data-testid="ExitString">
    <span>exit</span>
    <ExitIcon/>
  </div>
);

export default ExitString;
