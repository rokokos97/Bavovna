import React from 'react';
import styles from './checkOutNavigationBlock.module.scss';

const CheckOutNavigationBlock = () => {
  const steps = [
    {name: 'SHOPPING BAG', state: 'active', href: '#begining'},
    {name: 'CONTACT DETAILS', state: '', href: '#contacts'},
    {name: 'DELIVERY', state: '', href: '#delivery'},
    {name: 'PAYMENT', state: '', href: '#payment'},
    {name: 'ORDER CONFIRMATION', state: '', href: '#end'},
  ];
  return (
    <div className={styles.checkOutNavigationBlock} data-testid="CheckOutNavigationBlock">
      <div className={styles.progressTracker}>
        <ul>
          {steps.map((step, index) => (
            <li key={index} className={step.state}>
              <a href={step.href}>{step.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckOutNavigationBlock;
