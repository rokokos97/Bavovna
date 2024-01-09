import React from 'react';
import styles from './shoppingCartIcon.module.scss';

const ShoppingCartIcon = () => (
  <div className={styles.shoppingCartIcon} data-testid="ShoppingCartIcon">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      {/* eslint-disable-next-line max-len */}
      <path d="M2.75 5.50004L5.5 1.83337H16.5L19.25 5.50004M2.75 5.50004V18.3334C2.75 18.8196 2.94315 19.2859 3.28697 19.6297C3.63079 19.9736 4.0971 20.1667 4.58333 20.1667H17.4167C17.9029 20.1667 18.3692 19.9736 18.713 19.6297C19.0568 19.2859 19.25 18.8196 19.25 18.3334V5.50004M2.75 5.50004H19.25M14.6667 9.16671C14.6667 10.1392 14.2804 11.0718 13.5927 11.7594C12.9051 12.4471 11.9725 12.8334 11 12.8334C10.0275 12.8334 9.09491 12.4471 8.40728 11.7594C7.71964 11.0718 7.33333 10.1392 7.33333 9.16671" stroke="#040404" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default ShoppingCartIcon;
