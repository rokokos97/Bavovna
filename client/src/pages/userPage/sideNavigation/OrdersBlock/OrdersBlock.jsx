import React from 'react';
import styles from './OrdersBlock.module.scss';
import {useSelector} from 'react-redux';
import {getUser} from '../../../../store/userSlice';
import Loader from '../../../../components/Loader/Loader';
import EmptyBlock from '../../../../blocks/EmptyBlock/EmptyBlock';
import OrdersList from '../../../../components/OrdersList/OrdersList';

const OrdersBlock = () => {
  const user = useSelector(getUser);
  if (!user) {
    return <Loader/>;
  }
  return (
    <>
      <div className={styles.ordersBlock} data-testid="OrdersBlock">
        <p className={styles.ordersBlock__title}>orders</p>
        <div>
          {user.orders.length > 0?
            <OrdersList
              ordersArray={user.orders}
            />:
            <EmptyBlock description='You do not have any orders yet'/>}
        </div>
      </div>
    </>
  );
};

export default OrdersBlock;
