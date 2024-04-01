import React from 'react';
import styles from './OrderSuccessPage.module.scss';
import {useSelector} from 'react-redux';
import {getOrders, getOrdersLoadingStatus} from '../../store/ordersSlice';
import ConfirmIcon from '../../components/svg/ConfirmIcon/ConfirmIcon';
import {Link} from 'react-router-dom';
import {getUser} from '../../store/userSlice';

const OrderSuccessPage = () => {
  const isLoadingOrders = useSelector(getOrdersLoadingStatus);
  const order = useSelector(getOrders);
  const user = useSelector(getUser);
  return (!isLoadingOrders &&
    <div className={styles.orderCompletePage} data-testid="OrderCompletePage">
      <div className={styles.orderCompletePage__titleBlock}>
        <ConfirmIcon/>
        <p className={styles.orderCompletePage__title}>Your order has been confirmed</p>
      </div>
      <div className={styles.orderCompletePage__numberBlock}>
        <p>order # {order._id}</p>
        <p>date: {order.date}</p>
      </div>
      <div className={styles.orderCompletePage__textBlock}>
        <p>Thank you for shopping in our store!</p>
        <p>You will receive an email notification when your order is shipped.</p>
      </div>
      <div className={styles.orderCompletePage__buttonsBlock}>
        <Link
          to='/shop'
          aria-label='continue shopping'
        >
          <span>
            &lt;- go to shop
          </span>
        </Link>
        <Link
          to={`${user?('/user/'+ user._id): '/signIn'}`}
          aria-label='view order'
        >
          <span>
            view order
          </span>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
