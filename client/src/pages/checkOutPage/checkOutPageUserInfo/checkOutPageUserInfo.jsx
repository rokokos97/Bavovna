import React, {useEffect} from 'react';
import styles from './checkOutPageUserInfo.module.scss';
import CheckOutUserInfoBlock from './checkOutUserInfoBlock/checkOutUserInfoBlock';
import CheckOutShoppingCartBlock from '../ShoppingCartBlock/checkOutShoppingCartBlock';
import {useSelector} from 'react-redux';
import {getCart} from '../../../store/cartSlice';
import {useNavigate} from 'react-router-dom';
const CheckOutPageUserInfo = () => {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart]);
  return (
    <div className={styles.checkOutPage} data-testid="CheckOutPageDelivery">
      <CheckOutUserInfoBlock/>
      <CheckOutShoppingCartBlock/>
    </div>
  );
};

export default CheckOutPageUserInfo;
