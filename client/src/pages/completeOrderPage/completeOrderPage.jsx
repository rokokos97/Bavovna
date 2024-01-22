import React from 'react';
import styles from './completeOrderPage.module.scss';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/userSlice';
import ProductCardInCart from '../../components/productCardInCart/productCardInCart';

const CompleteOrderPage = () => {
  const {id} = useParams();
  const user = useSelector(getUser);
  const currentOrder = user?user.orders.find((order)=> order._id ===id):null;
  console.log(currentOrder);
  return ( currentOrder &&
    <div className={styles.completeOrderPage} data-testid="CompleteOrderPage">
      <div className={styles.titleBlock}>
        <p className={styles.title}>orders</p>
        <button className={styles.backButton}>
          <span>&larr;</span>
          <span>
            {`order #${currentOrder._id}`}
          </span>
        </button>
      </div>
      <div>
        {currentOrder.items.map((item) =>(<ProductCardInCart key={item.id} item={item}/>))}
      </div>
    </div>
  );
};

export default CompleteOrderPage;
