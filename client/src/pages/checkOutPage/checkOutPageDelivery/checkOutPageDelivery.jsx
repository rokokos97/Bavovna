import React, {useEffect} from 'react';
import styles from './checkOutPageDelivery.module.scss';

import {useSelector} from 'react-redux';
import {getCart} from '../../../store/cartSlice';
import {useNavigate} from 'react-router-dom';
import DeliveryMethodsSection from './checkOutUserDeliveryBlock/deliveryMethodsSection/deliveryMethodsSection';
import deliveryMethodsList from '../../../utils/deliveryMethodsList';
import CheckOutShoppingCartBlock from '../ShoppingCartBlock/checkOutShoppingCartBlock';
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
      <DeliveryMethodsSection deliveryMethods={deliveryMethodsList[1]}/>
      <CheckOutShoppingCartBlock/>
    </div>
  );
};

export default CheckOutPageDelivery;
