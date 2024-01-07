import React from 'react';
import styles from './orderSuccessPage.module.scss';
import {useSelector} from 'react-redux';
import {getOrders, getOrdersLoadingStatus} from '../../store/ordersSlice';
import ConfirmIcon from '../../components/svg/confirmIcon/confirmIcon';

const OrderSuccessPage = () => {
  const isLoadingOrders = useSelector(getOrdersLoadingStatus());
  const orders = useSelector(getOrders());
  return (!isLoadingOrders &&
    <div className={styles.orderCompletePage} data-testid="OrderCompletePage">
      <div className={styles.titleBlock}>
        <ConfirmIcon/>
        <p className={styles.title}>Your order has been confirmed</p>
      </div>
      <div className={styles.numberBlock}>
        <p>order # {orders[0]._id}</p>
        <p>date: {orders[0].date}</p>
      </div>
      <div className={styles.textBlock}>
        <p>Thank you for shopping in our store!</p>
        <p>You will receive an email notification when your order is shipped.</p>
      </div>
      <div className={styles.buttonsBlock}>
        <button>
          <span>
            &lt;- go to shop
          </span>
        </button>
        <button>
          <span>
            view order
          </span>
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
