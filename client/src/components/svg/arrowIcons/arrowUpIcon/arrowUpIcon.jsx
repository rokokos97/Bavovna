import React from 'react';
import styles from './arrowUpIcon.module.scss';

const ArrowUpIcon = () => (
  <div className={styles.arrowUpIcon} data-testid="ArrowUpIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#040404" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default ArrowUpIcon;
