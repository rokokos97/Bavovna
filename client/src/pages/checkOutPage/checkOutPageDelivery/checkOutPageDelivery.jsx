import React, {useEffect} from 'react';
import styles from './checkOutPageDelivery.module.scss';
import {useSelector} from 'react-redux';
import {getCart} from '../../../store/cartSlice';
import {useNavigate} from 'react-router-dom';
import CheckOutShoppingCartBlock from '../ShoppingCartBlock/checkOutShoppingCartBlock';
import DeliveryOptionsSection from './deliveryOptionsSection/deliveryOptionsSection';
const CheckOutPageDelivery = () => {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart]);
  return (
    <div className={styles.checkOutPage} data-testid="CheckOutPageDelivery">
      <DeliveryOptionsSection/>
      <CheckOutShoppingCartBlock/>
    </div>
  );
};

export default CheckOutPageDelivery;
