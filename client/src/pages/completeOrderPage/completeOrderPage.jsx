import React, {useEffect, useState} from 'react';
import styles from './completeOrderPage.module.scss';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/userSlice';
import ProductCardInCart from '../../components/productCardInCart/productCardInCart';


const CompleteOrderPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const user = useSelector(getUser);
  const [currentOrder, setCurrentOrder] = useState(null);
  useEffect(() => {
    if (user) {
      setCurrentOrder(user.orders.find((order)=> order._id ===id));
    }
  }, [user]);
  return (user && currentOrder &&
    <div className={styles.completeOrderPage} data-testid="CompleteOrderPage">
      <div className={styles.titleBlock}>
        <p className={styles.title}>orders</p>
        <button
          className={styles.backButton}
          onClick={()=>navigate(-1)}
        >
          <span>&larr;</span>
          <span>
            {`order #${currentOrder._id}`}
          </span>
        </button>
      </div>
      <div>
        {currentOrder.items.map((item) =>(<ProductCardInCart key={item._id} item={item} type='2'/>))}
      </div>
      <div className={styles.orderInfoBlock}>
        <div className={styles.title}>
          <p>order amount</p>
          <p>{currentOrder.orderAmount} $</p>
        </div>
        {currentOrder.promoCodeDiscount && <div className={styles.title}>
          <p>Promo code discount</p>
          <p>{`-${currentOrder.orderAmount * currentOrder.promoCodeDiscount} $`}</p>
        </div>}
        <div className={styles.title}>
          <p>delivery</p>
          <p>{currentOrder.deliveryInfo.deliveryPrice} $</p>
        </div>
        <div className={styles.totalPrice}>
          <p>total</p>
          <p>{currentOrder.promoCodeDiscount?
            currentOrder.orderAmount-(currentOrder.orderAmount * currentOrder.promoCodeDiscount)+currentOrder.deliveryInfo.deliveryPrice:
            currentOrder.orderAmount+currentOrder.deliveryInfo.deliveryPrice} $</p>
        </div>
        <div className={styles.deliveryInfoBlock}>
          <div className={styles.infoSection}>
            <p className={styles.title}>delivery method</p>
            <p>{currentOrder.deliveryInfo.deliveryMethod}</p>
          </div>
          <div
            className={styles.infoSection}>
            <p className={styles.title}>selection point</p>
            <p>{currentOrder.deliveryInfo.label}</p>
          </div>
          <div className={styles.infoSection}>
            <p className={styles.title}>contact details</p>
            <div>
              <p>{currentOrder.userInfo.firstName} {currentOrder.userInfo.lastName}</p>
              <p>+{currentOrder.userInfo.phoneNumber}</p>
              <p>{currentOrder.userInfo.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteOrderPage;
