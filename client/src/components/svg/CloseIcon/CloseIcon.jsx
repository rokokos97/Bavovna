import React from 'react';
import styles from './CloseIcon.module.scss';

const CloseIcon = () => {
  return (
    <div className={styles.closeIcon}>
      <svg
        width='32'
        height='32'
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M24 8L8 24M8 8L24 24'
          stroke='#101828'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};

export default CloseIcon;
