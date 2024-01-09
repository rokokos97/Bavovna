import React from 'react';
import styles from './praporIcon.module.scss';

const PraporIcon = () => (
  <div className={styles.praporIcon} data-testid="PraporIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V24H0V0Z" fill="#FFD700"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H32V12H0V0Z" fill="#0057B8"/>
    </svg>
  </div>
);

export default PraporIcon;
