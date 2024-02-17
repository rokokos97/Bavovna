import React from 'react';
import styles from './checkOutBlock.module.scss';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getCartTotalPrice} from '../../../../store/cartSlice';

const CheckOutBlock = () => {
  const totalPrice = useSelector(getCartTotalPrice);
  const navigate = useNavigate();
  return (
    <div className={styles.checkOutBlock} data-testid="CheckOutBlock">
      <div className={styles.totalPriceBlock}>
        <p>total</p>
        {totalPrice}$
      </div>
      <div className={styles.buttonsBlock}>
        <button
          type='button'
          onClick={() => navigate('/cart/checkoutUserInfo')}
        >
          <span>
            Continue to check out
          </span>
        </button>
        <button
          type='button'
          onClick={()=> navigate('/shop')}
        >
          <span>
            Continue shopping
          </span>
        </button>
      </div>
    </div>
  );
};

export default CheckOutBlock;
