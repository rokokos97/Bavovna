import React from 'react';
import styles from './CheckOutBlock.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartTotalPrice } from '../../../../store/cartSlice';

const CheckOutBlock = () => {
  const totalPrice = useSelector(getCartTotalPrice);
  return (
    <div className={styles.checkOutBlock} data-testid="CheckOutBlock">
      <div className={styles.checkOutBlock__totalPriceBlock}>
        <p>total</p>
        {totalPrice}₴
      </div>
      <div className={styles.checkOutBlock__buttonsBlock}>
        <Link to="/cart/checkoutUserInfo" aria-label="continue to checkout">
          <span>Continue to check out</span>
        </Link>
        <Link aria-label="continue shopping" to="/shop">
          <span>Continue shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default CheckOutBlock;
