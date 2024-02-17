import React, {useEffect} from 'react';
import styles from './CheckOutPageDelivery.module.scss';
import CheckOutShoppingCartBlock from '../shoppingCartBlock/CheckOutShoppingCartBlock';
import DeliveryOptionsSection from './deliveryOptionsSection/DeliveryOptionsSection';
import {useSelector} from 'react-redux';
import {getCart} from '../../../store/cartSlice';
import {useNavigate} from 'react-router-dom';
import {getUserInfo} from '../../../store/ordersSlice';
const CheckOutPageDeliveryInfo = () => {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  const userInfo = useSelector(getUserInfo());
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
    if (!userInfo.firstName) {
      navigate('/cart');
    }
  }, [cart]);
  return (
    <div className={styles.checkOutPage} data-testid="CheckOutPageDelivery">
      <DeliveryOptionsSection/>
      <CheckOutShoppingCartBlock/>
    </div>
  );
};

export default CheckOutPageDeliveryInfo;
