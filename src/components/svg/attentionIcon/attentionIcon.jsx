import React from 'react';
import styles from './attentionIcon.module.scss';

const AttentionIcon = () => (
  <div className={styles.attentionIcon} data-testid="AttentionIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* eslint-disable-next-line max-len */}
      <path d="M12.0001 8V12M12.0001 16H12.0101M22.0001 12C22.0001 17.5228 17.523 22 12.0001 22C6.47727 22 2.00012 17.5228 2.00012 12C2.00012 6.47715 6.47727 2 12.0001 2C17.523 2 22.0001 6.47715 22.0001 12Z" stroke="#EA001B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default AttentionIcon;
