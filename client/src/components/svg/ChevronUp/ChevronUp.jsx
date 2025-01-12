import React from 'react';
import styles from './ChevronUp.module.scss';

const ChevronUp = () => {
  return (
    <div className={styles.chevronUp}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 15L12 9L6 15"
          stroke="#101828"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ChevronUp;
