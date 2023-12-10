import React from 'react';
import styles from './checkOutNavigationBlock.module.scss';

const CheckOutNavigationBlock = () => (
  <div className={styles.checkOutNavigationBlock} data-testid="CheckOutNavigationBlock">
    <div className="progress-tracker">
      <ul>
        <li className="active">SHOPPING BAG</li>
        <li>CONTACT DETAILS</li>
        <li>DELIVERY</li>
        <li>PAYMENT</li>
        <li>ORDER CONFIRMATION</li>
      </ul>
    </div>
  </div>
);

export default CheckOutNavigationBlock;
