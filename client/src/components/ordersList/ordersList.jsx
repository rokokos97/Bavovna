import React from 'react';
import styles from './ordersList.module.scss';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/userSlice';

const OrdersList = () => {
  const user = useSelector(getUser);
  return user && (
    <div className={styles.ordersList} data-testid="OrdersList">
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ORDER</th>
            <th>DATUM</th>
            <th>PAYMENT STATUS</th>
            <th>SHIPPING STATUS</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {user.orders.map((order)=>
            <tr key={order._id} >
              <td>{`#${order._id}`}</td>
              <td>{order.date}</td>
              <td>{order.paymentStatus}</td>
              <td>{order.deliveryStatus}</td>
              <td>{`$ ${order.totalPrice}`}</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
