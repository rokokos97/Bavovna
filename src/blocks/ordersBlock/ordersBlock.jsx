import React from 'react';
import styles from './ordersBlock.module.scss';
import {useNavigate} from 'react-router-dom';

const OrdersBlock = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.ordersBlock} data-testid="OrdersBlock">
      <p>Orders</p>
      <span>You do not have any orders yet</span>
      <button
        className={styles.button}
        onClick={()=> navigate('/')}
      >
        <span>go to shopping</span>
      </button>
    </div>
  );
};

export default OrdersBlock;
