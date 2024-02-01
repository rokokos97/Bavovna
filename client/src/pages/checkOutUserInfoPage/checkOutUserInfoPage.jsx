import React, {useEffect} from 'react';
import styles from './checkOutUserInfoPage.module.scss';
import {useSelector} from 'react-redux';
import {getCart} from '../../store/cartSlice';
import {useNavigate} from 'react-router-dom';
import CheckOutUserInfoBlock from '../checkOutPage/blocks/checkOutUserInfoBlock/checkOutUserInfoBlock';
import CheckOutShoppingCartBlock from '../checkOutPage/blocks/checkOutShoppingCartBlock/checkOutShoppingCartBlock';

const CheckOutUserInfoPage = () => {
  const cart = useSelector(getCart);
  const navigate = useNavigate();
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart]);
  return (
    <div className={styles.CheckOutUserInfoPage} data-testid="CheckOutUserInfoPage">
      <CheckOutUserInfoBlock/>
      <CheckOutShoppingCartBlock/>
    </div>
  );
};

export default CheckOutUserInfoPage;
