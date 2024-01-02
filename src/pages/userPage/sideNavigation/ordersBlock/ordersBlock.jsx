import React from 'react';
import styles from './ordersBlock.module.scss';
import {useSelector} from 'react-redux';
import Loader from '../../../../components/loader/loader';
import EmptyBlock from '../../../../blocks/emptyBlock/emptyBlock';
import {getUser} from '../../../../store/userSlice';
import OrdersList from '../../../../components/ordersList/ordersList';

const OrdersBlock = () => {
  const user = useSelector(getUser);
  if (!user) {
    return <Loader/>;
  }
  return (
    <div className={styles.ordersBlock} data-testid="OrdersBlock">
      <p className={styles.title}>orders</p>
      <div>
        {user.orders.length > 0?
        <OrdersList
          ordersArray={user.orders}
        />:
        <EmptyBlock description='You do not have any orders yet'/>}
      </div>
    </div>
  );
};

export default OrdersBlock;
