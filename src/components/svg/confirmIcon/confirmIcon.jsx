import React from 'react';
import styles from './confirmIcon.module.scss';

const ConfirmIcon = () => (
  <div className={styles.confirmIcon} data-testid="ConfirmIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
      <path d="M2 9.58039L11.6 21.1004L27.6 1.90039" stroke="#15503A" strokeWidth="5"/>
    </svg>
  </div>
);

export default ConfirmIcon;
