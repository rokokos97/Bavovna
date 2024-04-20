import React from 'react';
import styles from './ArrowBackIcon.module.scss';


const ArrowBackIcon = () => {
  return (
    <div className={styles.arrowBackIcon}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24'
        viewBox='0 -960 960 960'
        width='24'
      >
        <path d='m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z' />
      </svg>
    </div>
  );
};

export default ArrowBackIcon;
