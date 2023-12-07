import React from 'react';
import styles from './checkOutBlock.module.scss';
import TextField from '../../../../components/formFields/textField/textField';
import PropTypes from 'prop-types';

const CheckOutBlock = ({totalPrice}) => {
  const onChange = () => {};
  return (
    <div className={styles.checkOutBlock} data-testid="CheckOutBlock">
      <form className={styles.form}>
        <TextField
          onChange={onChange}
          name='promoCode'
          label='Promo code'
          placeholder='Enter your promo code'
          type='text'
        />
        <button className={styles.arrowButton}>
          <span>
            -&gt;
          </span>
        </button>
      </form>
      <div className={styles.totalPriceBlock}>
        <p>total</p>
        {totalPrice}$
      </div>
      <div className={styles.buttonsBlock}>
        <button>
          <span>
            Continue to chek out
          </span>
        </button>
        <button>
          <span>
            Continue to chek out
          </span>
        </button>
      </div>
    </div>
  );
};

CheckOutBlock.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
export default CheckOutBlock;
