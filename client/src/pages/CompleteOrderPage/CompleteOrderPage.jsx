import React, {useEffect, useState} from 'react';
import styles from './CompleteOrderPage.module.scss';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/userSlice';
import ProductCardInCart from '../../components/ProductCardInCart/ProductCardInCart';
import ArrowBackIcon from '../../components/svg/arrowIcons/ArrowBackIcon/ArrowBackIcon';


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
      <div className={styles.completeOrderPage__titleBlock}>
        <p className={styles.completeOrderPage__title}>orders</p>
        <button
          className={styles.completeOrderPage__backButton}
          onClick={()=>navigate(-1)}
        >
          <div
            className={styles.completeOrderPage__backButton__icon}
          ><ArrowBackIcon/></div>
          <span>
            {`order #${currentOrder._id}`}
          </span>
        </button>
      </div>
      <div className={styles.completeOrderPage__itemsList}>
        {currentOrder.items.map((item) =>(<ProductCardInCart key={item._id} item={item} type='2'/>))}
      </div>
      <div className={styles.completeOrderPage__orderInfoBlock}>
        <div className={styles.completeOrderPage__title}>
          <p>order amount</p>
          <p>{currentOrder.orderAmount} $</p>
        </div>
        {currentOrder.promoCodeDiscount && <div className={styles.completeOrderPage__title}>
          <p>Promo code discount</p>
          <p>{`-${parseFloat((currentOrder.orderAmount * currentOrder.promoCodeDiscount).toFixed(1))} $`}</p>
        </div>}
        <div className={styles.completeOrderPage__title}>
          <p>delivery</p>
          <p>{currentOrder.deliveryPrice} $</p>
        </div>
        <div className={styles.completeOrderPage__totalPrice}>
          <p>total</p>
          <p>{currentOrder.promoCodeDiscount?
            currentOrder.orderAmount-(currentOrder.orderAmount * currentOrder.promoCodeDiscount)+currentOrder.deliveryInfo.deliveryPrice:
            currentOrder.orderAmount+currentOrder.deliveryPrice} $</p>
        </div>
        <div className={styles.completeOrderPage__deliveryInfoBlock}>
          <div className={styles.completeOrderPage__infoSection}>
            <p className={styles.completeOrderPage__title}>delivery method</p>
            <div>{currentOrder.deliveryInfo.deliveryMethod}</div>
          </div>
          <div
            className={styles.completeOrderPage__infoSection}>
            <p className={styles.completeOrderPage__title}>selection point</p>
            <div>{currentOrder.deliveryInfo.label}</div>
          </div>
          <div className={styles.completeOrderPage__infoSection}>
            <p className={styles.completeOrderPage__title}>contact details</p>
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
