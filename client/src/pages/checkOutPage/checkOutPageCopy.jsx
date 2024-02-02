import React, {useEffect} from 'react';
import styles from './checkOutPage.module.scss';
import CheckOutUserInfoBlock from './blocks/checkOutUserInfoBlock/checkOutUserInfoBlock';
import CheckOutShoppingCartBlock from './blocks/checkOutShoppingCartBlock/checkOutShoppingCartBlock';
import {useSelector} from 'react-redux';
import {getCart} from '../../store/cartSlice';
import {useNavigate} from 'react-router-dom';
const CheckOutPage = () => {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart]);
  return (
    <div className={styles.checkOutPage} data-testid="CheckOutPage">
      <CheckOutUserInfoBlock/>
      <CheckOutShoppingCartBlock/>
    </div>
  );
};

export default CheckOutPage;
