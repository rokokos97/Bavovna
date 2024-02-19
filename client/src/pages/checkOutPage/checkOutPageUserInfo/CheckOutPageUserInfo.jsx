import React, {useEffect} from 'react';
import styles from './CheckOutPageUserInfo.module.scss';
import CheckOutUserInfoBlock from './CheckOutUserInfoBlock/CheckOutUserInfoBlock';
import CheckOutShoppingCartBlock from '../shoppingCartBlock/CheckOutShoppingCartBlock';
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
