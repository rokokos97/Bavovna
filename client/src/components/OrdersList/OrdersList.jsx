import React from 'react';
import styles from './OrdersList.module.scss';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/userSlice';
import {Link} from 'react-router-dom';
import ChevronDown from '../svg/ChevronDown/ChevronDown';

const OrdersList = () => {
  const user = useSelector(getUser);
  return user && (
    <div className={styles.ordersList} data-testid="OrdersList">
      <table className={styles.orderList__table}>
        <thead className={styles.orderList__table_thead}>
          <tr>
            <th>ORDER</th>
            <th>DATUM</th>
            <th>PAYMENT STATUS</th>
            <th>SHIPPING STATUS</th>
            <th>TOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={styles.orderList__table_tbody}>
          {user.orders.map((order)=>
            <tr
              className={styles.orderList__table_tbody_tr}
              key={order._id} >
              <td>
                <span className={styles.orderList__table_tbody_title}>
                  order
                </span>
                {`#${order._id}`}
                <Link
                  className={styles.orderList__table_tbody_chevronMob}
                  to={`order/${order._id}`}>
                  {<ChevronDown/>}
                </Link>
              </td>
              <td><span className={styles.orderList__table_tbody_title}>datum</span>{order.date}</td>
              <td><span className={styles.orderList__table_tbody_title}>payment status</span>{order.paymentStatus}</td>
              <td><span className={styles.orderList__table_tbody_title}>shipping status</span>{order.deliveryStatus}</td>
              <td>
                <span className={styles.orderList__table_tbody_title}>total</span>
                {`₴ ${order.orderAmount+order.deliveryPrice-(order.orderAmount*order.promoCodeDiscount)}`}
              </td>
              <td className={styles.orderList__table_tbody_chevron}>
                <Link to={`order/${order._id}`}>
                  {<ChevronDown/>}
                </Link>
              </td>
            </tr>,
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
